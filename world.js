module.exports = {
    "name": "I-Dentech",
    "logo": "icons/logo.png",
    "money": 0,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": "",
    "products": [
        {
            "id": 1,
            "name": "Bilan Dentaire",
            "logo": "icons/store_icons/tooth_check.svg",
            "cout": 1000,
            "croissance": 1.07,
            "revenu": 1500,
            "vitesse": 1000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Super dent",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Fais moi plaisir",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 2,
            "name": "Blanchiment Dentaire",
            "logo": "icons/store_icons/tooth_white.svg",
            "cout": 2000,
            "croissance": 1.07,
            "revenu": 3000,
            "vitesse": 1500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Super White",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Blanchisement",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 3,
            "name": "Orthodontie",
            "logo": "icons/store_icons/tooth_ortho.svg",
            "cout": 3000,
            "croissance": 1.07,
            "revenu": 6000,
            "vitesse": 2000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Serrez Plus",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 3,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Serrez Encore",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 3,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 4,
            "name": "Implant Dentaire",
            "logo": "icons/store_icons/tooth_implent.svg",
            "cout": 2500,
            "croissance": 1.07,
            "revenu": 20000,
            "vitesse": 2500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Foncez",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 4,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Foncez à fond",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 4,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 5,
            "name": "Obturation Dentaire",
            "logo": "icons/store_icons/tooth_carie.svg",
            "cout": 50000,
            "croissance": 1.07,
            "revenu": 600000,
            "vitesse": 3000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Doucement",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 5,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Easy Peasy",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 5,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 6,
            "name": "Extraction Dentaire",
            "logo": "icons/store_icons/tooth_pull.svg",
            "cout": 4,
            "croissance": 1.07,
            "revenu": 1,
            "vitesse": 3500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Tire!",
                    "logo": "icons/logo.png",
                    "seuil": 10,
                    "idcible": 6,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Encore!!!!!",
                    "logo": "icons/logo.png",
                    "seuil": 20,
                    "idcible": 6,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
            ]
        },

    ],
    "managers": [
        {
            "name": "Anissa Laurent",
            "logo": "icons/managers/anissa_laurent.png",
            "seuil": 3000,
            "idcible": 1,
            "ratio": 4,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Boubakar Dembely",
            "logo": "icons/managers/boubakar_dembely.png",
            "seuil": 10000,
            "idcible": 2,
            "ratio": 4,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Fanny Dupont",
            "logo": "icons/managers/fanny_dupont.png",
            "seuil": 20000,
            "idcible": 3,
            "ratio": 4,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Mamadou Angola",
            "logo": "icons/managers/mamadou_angola.png",
            "seuil": 1000000,
            "idcible": 4,
            "ratio": 100,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Marc Levey",
            "logo": "icons/managers/marc_levey.png",
            "seuil": 500000000,
            "idcible": 5,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Samar Salim",
            "logo": "icons/managers/samar_salim.png",
            "seuil": 987654321,
            "idcible": 6,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },

    ],
    "allunlocks": [
        {
            "name": "La Vitesseur",
            "logo": "icons/allunlocks/2.svg",
            "seuil": 100,
            "idcible": 0,
            "ratio": 10,
            "typeratio": "vitesse",
            "unlocked": false
        },
        {
            "name": "La Gain",
            "logo": "icons/allunlocks/3.svg",
            "seuil": 200,
            "idcible": 0,
            "ratio": 10,
            "typeratio": "gain",
            "unlocked": false
        },
    ],
    "upgrades": [
        {
            "name": "Nom du premier upgrade",
            "logo": "icons/logo.png",
            "seuil": 100,
            "idcible": 1,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": false
        },
    ],
    "angelupgrades": [
        {
            "name": "Angel Sacrifice",
            "logo": "icons/angel.png",
            "seuil": 10,
            "idcible": 0,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": false
        }
    ]
}