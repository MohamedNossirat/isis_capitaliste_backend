const world = require("../world");

function saveWorld(context) {
  const fs = require("fs");
  fs.writeFile(
    `userworlds/${context.user}-world.json`,
    JSON.stringify(context.world),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

function updateMonde(context) {
  let world = context.world;
  let products = context.world.products;
  let money = 0;
  let elapsedTime = Date.now() - parseInt(context.world.lastupdate); //Calculate elapsed time since last update

  products.forEach((product) => {
    //If manager is unlocked
    if (product.managerUnlocked) {
      //Calculate number of products produced
      let nbOfProducts = Math.trunc(elapsedTime / product.vitesse);
      //Update product production time according to elapsed time
      product.timeleft = product.vitesse - (elapsedTime % product.vitesse);
      //Elapsed time / speed products have been created
      money =
        nbOfProducts *
        product.quantite *
        product.revenu *
        (1 + (world.angelbonus * world.activeangels) / 100);
    }
    //If production time is not null, product is being produced
    else if (product.timeleft !== 0) {
      //If manager is not yet unlocked, only 1 product has been created
      if (product.timeleft < 0) {
        product.timeleft = 0;
        money =
          product.revenu *
          product.quantite *
          (1 + (world.angelbonus * world.activeangels) / 100);
      } else {
        product.timeleft -= elapsedTime;
      }
    }
  });

  //Update world's money, score & lastupdate
  world.money += money;
  world.score += money;
  world.lastupdate = parseInt(Date.now());

  return context;
}

module.exports = {
  Query: {
    getWorld(parent, args, context, info) {
      context = updateMonde(context);
      saveWorld(context);
      return context.world;
    },
  },
  Mutation: {
    lancerProductionProduit(parent, args, context, info) {
      context = updateMonde(context);
      let product = context.world.products.find((p) => p.id === args.id);
      product.timeleft = product.vitesse;
      saveWorld(context);
    },

    acheterQtProduit(parent, args, context, info) {
      context = updateMonde(context);
      let product = context.world.products.find((p) => p.id === args.id);
      product.quantite = product.quantite + args.quantite;
      context.world.money -= Math.round(
        (product.cout * (1 - Math.pow(product.croissance, args.quantite))) /
          (1 - product.croissance)
      );
      product.cout = product.cout * Math.pow(product.croissance, args.quantite);
      product.paliers.forEach((palier) => {
        if (!palier.unlocked) {
          if (
            product.quantite >= palier.seuil &&
            palier.typeratio === "vitesse"
          ) {
            product.vitesse /= palier.ratio;
          }
          if (product.quantite >= palier.seuil && palier.typeratio === "gain") {
            product.revenu *= palier.ratio;
          }
        }
      });
      context.world.allunlocks.forEach((unlock) => {
        if (!unlock.unlocked) {
          if (
            context.world.products.every(
              (product) => product.quantite >= unlock.seuil
            )
          ) {
            context.world.products.forEach((product) => {
              if (
                product.quantite >= unlock.seuil &&
                unlock.typeratio === "vitesse"
              ) {
                product.vitesse /= unlock.ratio;
              }
              if (
                product.quantite >= unlock.seuil &&
                unlock.typeratio === "gain"
              ) {
                product.revenu *= unlock.ratio;
              }
            });
          }
        }
      });
      saveWorld(context);
    },
    engagerManager(parent, args, context, info) {
      context = updateMonde(context);
      let manager = context.world.managers.find(
        (manager) => manager.name === args.name
      );
      manager.unlocked = true;
      let product = context.world.products.find(
        (p) => p.id === manager.idcible
      );
      product.managerUnlocked = true;
      saveWorld(context);
    },
  },
};
