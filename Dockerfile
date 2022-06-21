FROM node:16

# Creation du dossier racine de l'application
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# On expose le port de l'application sur le port 4000 de container
EXPOSE 4000

# LA commende CMD ["npm", "start"] pourrait marcher ainsis
CMD ["node", "index.js"] 