const PlanteInt = [
    {
        id: 1,
        nom: "Monstera Deliciosa",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante tropicale, facile d'entretien avec des feuilles grandes et perforées.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 2,
        nom: "Pothos",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante grimpante populaire, très tolérante et résistante.",
        arrosage: "1 fois tous les 10 jours",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 3,
        nom: "Cactus",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7159917/pexels-photo-7159917.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Idéal pour les débutants, peu exigeant avec de longues périodes sans eau.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière directe forte",
    },
    {
        id: 4,
        nom: "Succulent",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Petites plantes avec des feuilles épaisses et charnues.",
        arrosage: "1 fois toutes les 3 semaines",
        ensoleillement: "Lumière forte",
    },
    {
        id: 5,
        nom: "Sansevieria",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/2718447/pexels-photo-2718447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Plante à croissance lente qui purifie l'air.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière indirecte ou faible",
    },
    {
        id: 6,
        nom: "Zamioculcas Zamiifolia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Aussi connue sous le nom de plante ZZ, elle est très résistante et demande peu d'entretien.",
        arrosage: "1 fois toutes les 2 semaines",
        ensoleillement: "Faible lumière ou lumière indirecte",
    },
    {
        id: 7,
        nom: "Calathea",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/15823272/pexels-photo-15823272/free-photo-of-green-leaves-in-garden.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante au feuillage décoratif, parfaite pour les endroits ombragés.",
        arrosage: "2 fois par semaine",
        ensoleillement: "Lumière indirecte faible",
    },
    {
        id: 8,
        nom: "Dracaena Marginata",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4503822/pexels-photo-4503822.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Arbuste d'intérieur élégant et facile à entretenir.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 9,
        nom: "Anthurium",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7291906/pexels-photo-7291906.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante fleurie avec des couleurs vives, idéale pour apporter une touche de nature.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 10,
        nom: "Maranta Leuconeura",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4590439/pexels-photo-4590439.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Appelée aussi 'plante prieuse', elle a des feuilles magnifiques qui bougent en fonction de la lumière.",
        arrosage: "2 fois par semaine",
        ensoleillement: "Lumière indirecte faible",
    },
    {
        id: 11,
        nom: "Peperomia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/11705901/pexels-photo-11705901.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante compacte avec des feuilles épaisses et une grande variété de formes et de couleurs.",
        arrosage: "1 fois tous les 10 jours",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 12,
        nom: "Fittonia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4750335/pexels-photo-4750335.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Surnommée la plante 'nerveuse', elle est connue pour ses motifs colorés sur les feuilles.",
        arrosage: "2 à 3 fois par semaine",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 13,
        nom: "Chlorophytum Comosum",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4457654/pexels-photo-4457654.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Connue comme 'plante araignée', elle est facile à entretenir et produit de longues tiges avec de petits rejets.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 14,
        nom: "Alocasia Amazonica",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/9707478/pexels-photo-9707478.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante spectaculaire avec des feuilles en forme de flèche et des veines marquées.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 15,
        nom: "Aspidistra Elatior",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/18444673/pexels-photo-18444673/free-photo-of-potted-plant-standing-on-a-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Surnommée la 'plante de fer', elle est presque indestructible et tolère des conditions difficiles.",
        arrosage: "1 fois toutes les 2 semaines",
        ensoleillement: "Faible lumière ou lumière indirecte",
    },
    {
        id: 16,
        nom: "Ficus Elastica",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/8989423/pexels-photo-8989423.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante à grandes feuilles brillantes, parfaite pour apporter une touche de verdure dans le salon.",
        arrosage: "1 fois tous les 10 à 15 jours",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 17,
        nom: "Schefflera",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7717994/pexels-photo-7717994.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante arbustive au feuillage brillant, facile à entretenir.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte",
    },
    {
        id: 18,
        nom: "Philodendron",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/29945794/pexels-photo-29945794/free-photo-of-lush-green-tropical-foliage-in-bengaluru.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante au feuillage décoratif, appréciant les températures chaudes et humides.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 19,
        nom: "Plante Serpent",
        description:
            "Idéale pour les débutants, cette plante tolère de nombreuses conditions, y compris des périodes de négligence.",
        arrosage: "Une fois par mois",
        ensoleillement: "Lumière faible à moyenne",
        photo: "https://decodemaison.com/wp-content/uploads/2020/01/plante_serpent-1440x965.jpg",
    },
    {
        id: 20,
        nom: "Aloe Vera",
        description:
            "Une plante succulente très connue pour ses propriétés médicinales. Facile à entretenir et idéale pour les débutants.",
        arrosage: "Une fois tous les 10-15 jours",
        ensoleillement: "Lumière directe",
        photo: "https://images.pexels.com/photos/1840270/pexels-photo-1840270.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 21,
        nom: "Palmier Areca",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/29414867/pexels-photo-29414867/free-photo-of-indoor-areca-palm-tree-by-sunny-window.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante élégante avec des feuilles en forme de palme, parfaite pour les espaces lumineux.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 22,
        nom: "Papyrus",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/6510868/pexels-photo-6510868.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante avec de longues tiges vertes et des têtes en forme de bouquet, idéale pour l'humidité.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 23,
        nom: "Cissus",
        type: "intérieur",
        photo: "https://media.istockphoto.com/id/155304672/photo/cissus-rhombifolia.jpg?b=1&s=612x612&w=0&k=20&c=pqe9sus4QW29hm0JXaRAIdhozgcxuGRA5VYnCyxLYpU=",
        description:
            "Plante grimpante robuste, parfaite pour les jardinières et les treillis.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 24,
        nom: "Adenium",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/8790102/pexels-photo-8790102.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente, idéale pour les climats chauds, avec de grandes fleurs en forme de trompette.",
        arrosage: "1 à 2 fois par mois",
        ensoleillement: "Lumière directe forte",
    },
    {
        id: 25,
        nom: "Beaucarnea (Pied d'éléphant)",
        type: "intérieur",
        photo: "https://media.istockphoto.com/id/1357877235/photo/beaucarnea-recurvata-or-elephants-foot-or-ponytail-palm-bonsai.jpg?b=1&s=612x612&w=0&k=20&c=agsafV0pAvDbDI0U-djlOaLMgPAFzqRp-GwVleYgzzo=",
        description:
            "Plante décorative avec un tronc gonflé en bas, idéale pour les intérieurs modernes.",
        arrosage: "1 fois toutes les 2 à 3 semaines",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 26,
        nom: "Figuier lyre",
        type: "intérieur",
        photo: "https://th.bing.com/th/id/R.50de7facc039d41950e0b55d98208d8e?rik=SVyXl12jn8Hy%2fQ&pid=ImgRaw&r=0",
        description:
            "Plante à grandes feuilles en forme de lyre, idéale pour les espaces lumineux et modernes.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 27,
        nom: "Bromélia",
        type: "intérieur",
        photo: "https://d2j6dbq0eux0bg.cloudfront.net/images/17666755/1139762572.jpg",
        description:
            "Plante aux fleurs colorées, idéale pour apporter une touche de couleur dans la maison.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 28,
        nom: "Arum",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante avec des fleurs en forme de spathe, idéale pour un environnement ombragé.",
        arrosage: "2 fois par semaine",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 29,
        nom: "Orchidée",
        type: "intérieur",
        photo: "https://th.bing.com/th/id/OIP.ElnCyQoP5nNhkm_w41cTqQAAAA?rs=1&pid=ImgDetMain",
        description:
            "Plante fleurie avec des fleurs délicates et magnifiques, parfaite pour ajouter de la beauté à l'intérieur.",
        arrosage: "Une fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 30,
        nom: "Fougère",
        type: "intérieur",
        photo: "https://www.jardiner-malin.fr/wp-content/uploads/2021/09/fougere-de-boston.jpg",
        description:
            "Plante aux feuillages luxuriants, idéale pour les environnements humides et ombragés.",
        arrosage: "2 à 3 fois par semaine",
        ensoleillement: "Lumière indirecte faible",
    },
    {
        id: 31,
        nom: "Crassula",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7354594/pexels-photo-7354594.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente facile à entretenir, connue pour ses feuilles épaisses et ses tiges charnues.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière directe",
    },
    {
        id: 32,
        nom: "Echeveria",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Succulente populaire en raison de ses rosettes de feuilles épaisses et colorées.",
        arrosage: "1 fois toutes les 2 à 3 semaines",
        ensoleillement: "Lumière directe",
    },
    {
        id: 33,
        nom: "Kalanchoe",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1982095/pexels-photo-1982095.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente avec de petites fleurs éclatantes, parfaite pour les espaces ensoleillés.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière directe",
    },
    {
        id: 34,
        nom: "Sempervivum",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7127801/pexels-photo-7127801.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente connue pour ses rosettes compactes et résistantes à la sécheresse.",
        arrosage: "1 fois toutes les 3 semaines",
        ensoleillement: "Lumière directe",
    },
    {
        id: 35,
        nom: "Sedum",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/866042/pexels-photo-866042.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente, idéale pour les sols secs et les environnements ensoleillés.",
        arrosage: "1 fois toutes les 2 à 3 semaines",
        ensoleillement: "Lumière directe",
    },
    {
        id: 36,
        nom: "Euphorbia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/699962/pexels-photo-699962.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante succulente avec des tiges charnues et parfois épineuses, nécessitant peu d'entretien.",
        arrosage: "Une fois par mois",
        ensoleillement: "Lumière directe",
    },
    {
        id: 37,
        nom: "Tillandsia (Plante épiphyte)",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/2516645/pexels-photo-2516645.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante épiphyte, elle se nourrit de l'air et ne nécessite pas de terre pour pousser.",
        arrosage: "Une fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 38,
        nom: "Basilic",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/13995284/pexels-photo-13995284.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante aromatique utilisée en cuisine. Le basilic est une plante versatile et agréable à cultiver, que ce soit pour ses utilisations culinaires ou pour ajouter une touche de verdure à votre intérieur.",
        arrosage: "Tous les 3 jours",
        ensoleillement: "Plein soleil",
    },
];
export default PlanteInt;
