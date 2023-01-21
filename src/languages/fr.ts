import { Role, Tag } from '../types';

const fr = {
  translation: {
    footer: {
      author: {
        prefix: 'Développé par ',
        suffix: ' avec 🖤'
      },
      website: 'Site web version '
    },
    selector: {
      [Tag.All]: 'Tous',
      [Tag.CLI]: 'CLI',
      [Tag.GUI]: 'GUI',
      [Tag.Website]: 'Site Web'
    },
    header: {
      author: {
        prefix: 'Je suis ',
        suffix: ', un Ingénieur en Développement Web.'
      },
      introduction: 'Voici quelques uns de mes projets personnels.',
      welcome: 'Bienvenue sur mon Portfolio !'
    },
    projects: {
      aoc: {
        desc: {
          1: "Ayant aimé l'édition 2017 d'Advent of Code, je continue l'aventure en résolvant de manière rétroactive les défis de 2016.",
          2: "Cette fois, je le fais en JavaScript plutôt qu'en C, étant donné que ce dernier est trop verbeux ce qui s'oppose au classement basé sur la rapidité de résolution. Je crée plusieurs fichiers d'aide au fur et à mesure que je résous les défis.",
          3: "Je tire profit de ces fichiers et leurs fonctions lorsque je me penche sur l'édition 2018 en Décembre de la même année avec chaque puzzle journalier."
        },
        subtitle: 'Ensemble de puzzles par année',
        title: 'Advent of Code 2016 et 2018'
      },
      aoc2017: {
        desc: {
          1: 'Des anciens camarades de classes mentionnent Advent of Code, un ensemble de puzzles journaliers en Décembre.',
          2: "Nous décidons de nous lancer dans cette compétition et je choisis le langage avec lequel j'ai appris à programmer, le C.",
          3: "Avec persévérance et après avoir créé plusieurs fichiers pour m'aider (piles, files, etc.), je viens à bout du 25ème et dernier puzzle pendant cette bonne aventure."
        },
        subtitle: "Ensemble de puzzles pour finir l'année"
      },
      bobolsSokoban3d: {
        alt: {
          1: "Menu du jeu Sokoban avec plusieurs icônes : mode aventure, éditeur de niveau (mode jouer), écran d'aide et éditeur de niveau (mode édition)",
          2: 'Partie de jeu Sokoban en mode aventure dans laquelle les blocs de glace violets sont positionnés sur un joyau, tandis que ceux cyans doivent être déplacés sur un joyau',
          3: 'Éditeur de niveau du jeu Sokoban dans lequel le joueur peut placer plusieurs éléments tels que des murs, des blocs de glace et des joyaux, dans le but de créer un niveau',
          4: "Crédits du jeu Sokoban avec quatre pages d'aide (la deuxième page est montrée et inclut un tutoriel sous forme de texte)"
        },
        desc: {
          1: 'Par curiosité, je réinvente la roue intentionnellement dans le but de créer une vue en 2D-isométrique, à partir de zéro, pour un jeu.',
          2: "Armé d'un crayon et de papier, je trouve la formule mathématique pour cette vue, que j'implémente au sein d'un jeu de Sokoban.",
          3: 'Cela devient un jeu complet comportant une aventure de 20 niveaux à difficulté croissante, un éditeur de niveaux avec des règles de validation et un fichier de sauvegarde pour chacun de ces deux modes.'
        },
        subtitle: 'Introduction à la 2D-isométrique'
      },
      connectFour: {
        alt: {
          1: 'Jeu de Puissance 4 joué entre deux joueurs humains avec des jetons rouges et jaunes'
        },
        desc: {
          1: 'Pour un projet scolaire, nous créons un Puissance 4 en binôme.',
          2: 'Le language de programmation imposé est Python donc nous y apprenons quelques unes de ses bibliothèques graphiques.',
          3: "Le résultat final comprend un mode 2 joueurs ainsi qu'une intelligence artificielle basique pour jouer seul contre l'ordinateur."
        },
        subtitle: "Jouez contre votre ami ou contre l'ordinateur",
        title: 'Puissance 4'
      },
      coolr: {
        desc: {
          1: "En tant que cadeau d'anniversaire, je crée un jeu de puzzles basé sur le fait de mélanger des couleurs.",
          2: "Le jeu comprend plusieurs petits puzzles basés sur des jeux vidéo. Il se concentre beaucoup sur les capacités d'observation du joueur. Vous n'aurez pas davantage d'indices.",
          3: "Je le développe en React et l'héberge sur GitHub Pages pour que n'importe qui puisse y jouer."
        },
        subtitle: 'Jeu de puzzles basé sur les mélanges de couleurs'
      },
      ctr2d: {
        alt: {
          1: 'Menu du jeu qui permet à jusque 4 joueurs de sélectionner leur personnage',
          2: "Capture d'écran du jeu qui montre le personnage Polar en train de jouer son tour sur le circuit Crash Cove",
          3: "Capture d'écran du podium de fin de partie qui montre les 3 meilleurs joueurs"
        },
        desc: {
          1: 'Étant fan du jeu vidéo sur PlayStation 1, je décide de mettre en oeuvre mes connaissances en programmation en créant une version simplifiée de Crash Team Racing.',
          2: "Malgré le fait qu'un seul circuit ne soit présent, je prends soin d'inclure toutes les armes du jeu ainsi que la même sélection de personnages (y compris Penta Penguin grâce à un code secret).",
          3: "Le fait que le jeu créé soit tour par tour me permet d'accepter jusqu'à 4 joueurs simultanés."
        },
        subtitle: 'Jeu multijoueurs au tour par tour'
      },
      ctrOcr: {
        desc: {
          1: 'Plusieurs années plus tard et toujours fan du jeu vidéo Crash Team Racing qui a reçu un remake sur PlayStation 4, je suis actif sur Discord dans des communautés de joueurs français.',
          2: "Également intéressé par la reconnaissance optique de caractères, je combine les deux intérêts en créant un site web sur lequel les utilisateurs téléchargent en amont leurs captures d'écran de fin de course, et obtiennent en retour un classement complet des positions.",
          3: "Par curiosité j'achète également un nom de domaine pour l'hébergement de mon site web."
        },
        subtitle: 'Reconnaissance optique de caractères'
      },
      dmz: {
        desc: {
          1: "Suite à la sortie récente du jeu vidéo Warzone 2.0, je joue au mode DMZ et remarque qu'un élément de gameplay est un peu confus pour ses fans.",
          2: "Je crée un site pour y pallier, il permet la mise en place de minuteurs et affiche la conversion en temps réel de l'équivalent en argent virtuel.",
          3: 'La communauté sur reddit accueille ce projet de manière très positive.'
        },
        subtitle: "Le temps c'est de l'argent !",
        title: 'Convertisseur pour DMZ'
      },
      eightQueensPuzzle: {
        desc: {
          1: "À l'école, nous travaillons sur un puzzle d'échecs connu. Le but est de placer huit dames de telle sorte à ce qu'aucune d'entre elles ne soit en prise.",
          2: 'Nous commençons à générer toutes les permutations possibles pour un ensemble de lettres grâce à un système de piles.',
          3: 'Après avoir appris que le problème des huit dames est en fait très proche de celui des permutations, nous résolvons le problème principal.'
        },
        subtitle: "Un problème d'échecs connu",
        title: 'Problème des huit dames'
      },
      englishPronunciation: {
        desc: {
          1: "Pour la thèse de son Master, Faith demande mon aide afin que je rassemble les ressources, qu'elle a créées, dans un site web que je lui développe.",
          2: "J'implémente les tableaux de prononciation rassemblant ses fichiers audio, ainsi que les quiz qu'elle invente.",
          3: "Le site web est disponible sur GitHub Pages pour permettre à tout un chacun d'en apprendre davantage sur la prononciation en Anglais. Avec l'absence de date butoir après 2020, une version optimisée pour mobile voit le jour en 2022."
        },
        subtitle: 'Site web pour une thèse',
        title: 'Prononciation en anglais'
      },
      general: {
        altText: {
          download: 'Lien de téléchargement pour',
          code: 'Code source pour',
          video: 'Vidéo pour',
          website: 'Site web pour'
        },
        colon: ' :',
        contributor: {
          male: 'Collaborateur',
          female: 'Collaboratrice'
        },
        code: 'Code source',
        demo: 'démo',
        download: 'Téléchargement',
        executable: 'exécutable',
        github: 'GitHub',
        link: 'lien',
        video: 'Vidéo',
        website: 'Site web',
        roles: {
          [Role.Algorithm]: 'Algorithme',
          [Role.Developer]: 'Développeur',
          [Role.Designer]: 'Graphiste',
          [Role.ProductOwner]: 'Responsable de projet',
          [Role.Tester]: 'Testeur'
        },
        tags: {
          [Tag.Archived]: 'archivé',
          [Tag.Live]: 'en ligne',
          [Tag.SchoolProject]: 'projet scolaire',
          [Tag.VideoGame]: 'jeu vidéo',
          [Tag.Website]: 'site web'
        }
      },
      GTAV: {
        alt: {
          1: 'Version 2 (thème vert) du site web montrant les photos de véhicules postées par les utilisateurs',
          2: 'Version 1 (thème sombre) du site web montrant les photos de véhicules postées par les utilisateurs'
        },
        desc: {
          1: "Mon frère accepte mon aide avec joie sur un projet qu'il a entrepris. Ensemble nous développons notre premier vrai site web.",
          2: "Les utilisateurs peuvent parcourir la liste complète de véhicules (voitures, avions, bateaux, etc.) du jeu vidéo Grand Theft Auto V. Ils peuvent créer un compte, publier une photo du véhicule qu'ils ont customisé dans le jeu sur notre site web, et recevoir des notes d'autres membres.",
          3: "Notre base d'utilisateurs grandit pour accueillir quelques centaines d'utilisateurs qui envoient des centaines d'images et des milliers de notes, ce qui nous pousse à peaufiner notre section administrateur afin de pouvoir modérer un tel volume."
        },
        subtitle: 'Notre premier site web',
        title: 'GTAV : Montrez vos véhicules'
      },
      kaleidoscope: {
        desc: {
          1: "Le film interactif Bandersnatch sur Netflix m'a vraiment plu. Lorsque j'ai entendu parler de Kaleidoscope sur Netflix, une histoire racontée de façon non-linéaire, je voulais créer un petit site web autour.",
          2: "Le site web permet aux utilisateurs de modifier l'ordre de visionnage des huit épisodes complets de la série télé.",
          3: "Inspiré par Wordle, j'inclus également une fonctionnalité de partage pour que les utilisateurs puissent discuter de leur ordre de visionnage en le partageant sur les réseaux sociaux."
        },
        subtitle: 'Partagez votre ordre de visionnage'
      },
      magicSquares: {
        desc: {
          1: "Après avoir joué au premier épisode de Professeur Layton, un jeu vidéo d'aventure et puzzles, j'apprends l'existence des carrés magiques.",
          2: 'Ce sont des carrés de nombres dans lesquels la somme de chaque ligne, colonne et diagonale, est identique.',
          3: 'Aimant le concept, je suis un algorithme afin de créer des carrés magiques.'
        },
        subtitle: 'Des carrés aux propriétés étonnantes',
        title: 'Carrés magiques'
      },
      myDraw: {
        alt: {
          1: 'Homer Simpson dessiné dans myDraw par Sebas'
        },
        desc: {
          1: "Intrigué par le traitement d'images, je décide de créer ma propre version de Paint.",
          2: 'La version finale offre de nombreux outils : stylo, gomme, sélecteur de couleur, pinceau, rectangle, mode miroir et couleurs inversées.',
          3: "L'outil le plus complexe que j'implémente est le pot de peinture (remplissage de couleur) qui me force à m'entraîner sur la récursion."
        },
        subtitle: 'Version simplifiée de Paint'
      },
      maze: {
        alt: {
          1: "Vue de haut d'un labyrinthe parfait généré en 3D à l'aide d'OpenGL sur Nintendo DS",
          2: "Vue en première personne d'un labyrinthe parfait généré en 3D à l'aide d'OpenGL sur Nintendo DS"
        },
        desc: {
          1: `J'ai toujours aimé les labyrinthes étant plus petit, notamment grâce à celui présent dans la maison de Lara dans le jeu vidéo Tomb Raider 2.`,
          2: 'Je suis un algorithme dans le but de générer des labyrinthes parfaits (étant donné que ceux imparfaits sont simplement des labyrinthes parfaits auxquels nous avons retiré quelques murs).',
          3: "L'implémentation en C que je mets en place inclut aussi une résolution de chemin pour naviguer du coin supérieur gauche au coin inférieur droit.",
          4: 'Dans un projet parallèle sur la Nintendo DS, je crée une vue 3D du labyrinthe.'
        },
        subtitle: 'Création et navigation à travers des labyrinthes parfaits',
        title: 'Générateur de labyrinthes'
      },
      myEnglishGame: {
        alt: {
          1: "Partie de myEnglishGame montrant que la lettre B peut remplacer le C dans COOK dans le but de le transformer en BOOK, qui est la traduction en anglais du mot français 'Livre'"
        },
        desc: {
          1: "Ayant l'envie d'inviter les étudiants à apprendre l'anglais, j'implémente une idée originale à partir de zéro.",
          2: 'Un jeu vidéo basé sur, mais très différent de, Tetris est né. Il invite les francophones à apprendre du vocabulaire anglais en intéragissant avec les lettres. Des lettres sont ajoutées, remplacées ou retirées afin de passer au prochain mot dans ce gameplay sans fin.',
          3: 'Plus de 1300 mots sont disponibles et le jeu comprend des éléments surprenants tels que les anagrammes.'
        },
        subtitle: 'Apprendre du vocabulaire anglais en jouant'
      },
      myLife: {
        alt: {
          1: '5ème génération montrée sur le double écran de myLife sur Nintendo DS, utilisant le thème visuel vert',
          2: '1ère génération montrée sur le double écran de myLife sur Nintendo DS, utilisant le thème visuel noir et blanc',
          3: "La 1ère génération de l'image précédente devient un clown après avoir évolué, à la 111ème génération"
        },
        desc: {
          1: 'Au sein de la communauté OpenClassrooms, je découvre et participe à un atelier/compétition dans lesquels les membres du forum discutent entre eux et implémentent des versions variées du jeu de la vie de Conway.',
          2: "Je décide de le programmer sur Nintendo DS pour son originalité. Cela me mène vers quelques problèmes d'interface que je résous en créant deux thèmes visuels et en permettant les utilisateurs d'utiliser différents niveaux de zooms lorsqu'ils dessinent la génération initiale.",
          3: 'Les possibilités deviennent bien plus grandes que la version de Conway grâce au fait que les utilisateurs puissent éditer les règles de naissance et mort des cellules.'
        },
        subtitle: 'Jeu de la vie de Conway'
      },
      myPixelArt: {
        desc: {
          1: "Inspiré par des éléments de gameplay d'Animal Crossing et de Mario Kart qui nous permettent de dessiner des emblèmes/design de vêtements pour nos personnages, je crée un éditeur de pixel art pour la même console, la Nintendo DS.",
          2: 'Des pixel art classiques en 16x16 ou 32x32 peuvent être recréés et sauvegardés sur la console.',
          3: "Un autre outil que je développe en parallèle permet d'exporter ces sauvegardes (les créations de pixel art) vers une image plus grande (par exemple 1024x1024 pixels) pour une utilisation sur ordinateur."
        },
        subtitle: 'Du pixel art de votre DS vers votre PC'
      },
      mySudokuTool: {
        alt: {
          1: "Interface graphique de mySudokuTool montrant l'utilisateur ajoutant le chiffre 4 dans le bloc central de la grille de Sudoku"
        },
        desc: {
          1: 'Avec un camarade de classe, nous travaillons ensemble sur un résolveur de Sudoku en tant que projet personnel.',
          2: "Pendant que Julien se concentre sur l'algorithme en lui-même, je réalise la partie graphique du projet. L'utilisateur peut utiliser la souris/le clavier pour remplir la grille de Sudoku initiale. Des règles basiques de Sudoku sont appliquées afin de l'empêcher de remplir des chiffres non uniques (par ligne, colonne, et bloc).",
          3: "L'utilisateur peut ensuite appuyer sur un bouton afin de révéler la solution du Sudoku (si elle existe), grâce à une implémentation basée sur la récursivité."
        },
        subtitle: 'Résolveur de Sudoku'
      },
      myTetris: {
        desc: {
          1: 'Ce projet réutilise deux de mes anciens projets : TETRISpace pour le gameplay de base, et myPixelArt pour dessiner ses sprites.',
          2: "Je pousse le gameplay plus loin en incorporant des défis (par exemple, détruire 4 lignes d'un coup, atteindre 10000 points) qui débloquent plusieurs thèmes visuels (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).",
          3: 'Les joueurs débloquent également des avatars (également faits dans myPixelArt) pour pouvoir éditer leur carte de joueur avec une légende et une couleur de fond.',
          4: "Désormais familier avec la Nintendo DS, je décide d'apprendre de nouvelles choses tels que pouvoir lire des fichiers audio et jouer avec un rendu 3D."
        },
        subtitle: 'TETRISpace++'
      },
      people: {
        anonymousPerson: 'Personne anonyme'
      },
      portfolio: {
        desc: {
          1: "Avant d'entamer un nouveau projet que j'ai en tête, je préfère prendre du recul et travailler sur la mise en place d'un portfolio.",
          2: "C'est ce même site que vous êtes en train de consulter. Ayant appris la récursivité et aimant le film Inception, je me sentais obligé d'inclure ce projet dans le Portfolio.",
          3: "J'utilise TailwindCSS pour produire un code CSS plus propre, et je m'assure que les francophones puissent consulter le site en français."
        },
        subtitle: 'Présentation de mes projets personnels'
      },
      projectEuler: {
        desc: {
          1: 'En parallèle de la compétition appelée Advent of Code, je prends part à quelques défis du Projet Euler.',
          2: 'Je complète les 20+ premiers défis en utilisant Python cette fois-ci.'
        },
        subtitle: 'Quelques défis supplémentaires',
        title: 'Projet Euler'
      },
      resume: {
        desc: {
          1: "Essayant de trouver une idée marrante de CV pour une recherche de travail à l'étranger, je passe une journée à créer un CV en ligne dont le code est très discutable.",
          2: "Je m'inspire directement d'ebay dans le but de créer une parodie de ce site pour lequel le produit est moi-même. Cela constitue également ma première introduction à GitHub Pages.",
          3: "Ce projet est désormais vraiment obsolète mais j'ai décidé de le garder pour son aspect graphique marrant."
        },
        subtitle: "Une parodie d'ebay me concernant",
        title: 'CV interactif'
      },
      simpleBot: {
        desc: {
          1: "Pour un projet scolaire, nous travaillons sur la création d'un chatbot en binôme.",
          2: 'Nous utilisons un langage très particulier appelé AIML',
          3: "Après avoir lu la documentation, nous implémentons quelques uns de ses concepts (basés sur la reconnaissance de patterns), de telle sorte que le chatbot puisse reconnaître les couleurs, se rappeler du prénom de l'utilisateur, ainsi que deviner la capitale de certains pays, etc."
        },
        subtitle: "Exemple réduit d'un chatbot"
      },
      templateTs: {
        desc: {
          1: "Ayant plusieurs idées de sites web en tête, je me rends compte qu'il faudrait créer un modèle d'abord afin d'accélérer le procédé.",
          2: 'Une après-midi, je crée un dossier modèle qui me permet de commencer des sites web hébergés sur GitHub Pages gratuitement avec les technologies les plus récentes, de manière rapide.',
          3: 'Grâce à ce modèle, plusieurs sites web voient le jour y compris Kaleidoscope, DMZ et ce Portfolio que vous êtes en train de consulter.'
        },
        subtitle: 'Modèle React + TypeScript pour sites web',
        title: 'Modèle TS'
      },
      tetrisSpace: {
        alt: {
          1: "Capture d'écran de l'écran du bas de la Nintendo DS montrant une partie en cours du jeu TETRISpace",
          2: "Capture d'écran de l'écran du bas de la Nintendo DS montrant la même partie de TETRISpace dans laquelle une ligne de 4 blocs est sur le point de marquer beaucoup de points",
          3: "Capture d'écran de TETRISpace faisant référence au Site du Zero, ancien nom de Classrooms",
          4: "Capture d'écran pour rejouer",
          5: "Capture d'écran d'une partie en cours du jeu TETRISpace (1/3)",
          6: "Capture d'écran d'une partie en cours du jeu TETRISpace (2/3)",
          7: "Capture d'écran d'une partie en cours du jeu TETRISpace (3/3)"
        },
        desc: {
          1: "Suivant les conseils de la communauté d'OpenClassrooms, je développe une version du célèbre jeu Tetris lors d'un weekend.",
          2: "Je décide de m'imposer une difficulté en le réalisant sur la Nintendo DS qui est connue pour ses limitations sur les sprites.",
          3: 'Cela devient TETRISpace, un Tetris en 4-bit jouable sur une arène carrée de 11x11 blocs. La première version inclut un système de score et une sauvegarde pour le meilleur score.'
        },
        subtitle: 'Version jouable de Tetris sur Nintendo DS'
      }
    }
  }
};

export { fr };
