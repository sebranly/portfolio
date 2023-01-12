import { Role, Tag } from "../types"

const fr = {
  translation: {
    footer: {
      author: {
        prefix: 'Développé par ',
        suffix: ' avec 🖤'
      },
      website: 'Site web version '
    },
    header: {
      author: {
        prefix: 'Je suis ',
        suffix: ', un Ingénieur en Développement Web.'
      },
      introduction: 'Voici quelques uns de mes projets personnels.',
      welcome: 'Bienvenue sur mon Portfolio !',
    },
    projects: {
      bobolsSokoban3d: {
        desc1: "Par curiosité, je réinvente la roue intentionnellement dans le but de créer une vue en 2D-isométrique, à partir de zéro, pour un jeu.",
        desc2: "Armé d'un crayon et de papier, je trouve la formule mathématique pour cette vue, que j'implémente au sein d'un jeu de Sokoban.",
        desc3: "Cela devient un jeu complet comportant une aventure de 20 niveaux à difficulté croissante, un éditeur de niveaux avec des règles de validation et un fichier de sauvegarde pour chacun de ces deux modes.",
        subtitle: 'Introduction à la 2D-isométrique'
      },
      ctr2d: {
        desc1: 'Étant fan du jeu vidéo sur PlayStation 1, je décide de mettre en oeuvre mes connaissances en programmation en créant une version simplifiée de Crash Team Racing.',
        desc2: "Malgré le fait qu'un seul circuit ne soit présent, je prends soin d'inclure toutes les armes du jeu ainsi que la même sélection de personnages (y compris Penta Penguin grâce à un code secret).",
        desc3: "Le fait que le jeu créé soit tour par tour me permet d'accepter jusqu'à 4 joueurs simultanés.",
        subtitle: "Jeu multijoueurs au tour par tour"
      },
      general: {
        contributor: 'Collaborateur',
        roles: {
          [Role.Algorithm]: 'Algorithme',
        [Role.Developer]: 'Développeur',
        [Role.Designer]: 'Graphiste',
        [Role.Tester]: 'Testeur',
        },
          tags: {
            [Tag.Archived]: 'archivé',
            [Tag.VideoGame]: 'jeu vidéo',
            [Tag.Website]: 'site web'
        }
      },
      GTAV: {
        desc1: "Mon frère accepte mon aide avec joie sur un projet qu'il a entrepris. Ensemble nous développons notre premier vrai site web.",
        desc2: "Les utilisateurs peuvent parcourir la liste complète de véhicules (voitures, avions, bateaux, etc.) du jeu vidéo Gran Theft Auto V. Ils peuvent créer un compte, publier une photo du véhicule qu'ils ont customisé dans le jeu sur notre site web, et recevoir des notes d'autres membres.",
        desc3: "Notre base d'utilisateurs grandit pour accueillir quelques centaines d'utilisateurs qui envoient des centaines d'images et des milliers de notes, ce qui nous pousse à peaufiner notre section administrateur afin de pouvoir modérer un tel volume.",
        subtitle: 'Notre premier site web'
      },
      myDraw: {
        desc1: "Intrigué par le traitement d'images, je décide de créer ma propre version de Paint.",
        desc2: "La version finale offre de nombreux outils : stylo, gomme, sélecteur de couleur, pinceau, rectangle, mode miroir et couleurs inversées.",
        desc3: "L'outil le plus complexe que j'implémente est le pot de peinture (remplissage de couleur) qui me force à m'entraîner sur la récursion.",
        subtitle: 'Version simplifiée de Paint'
      },
      myEnglishGame: {
        desc1: "Ayant l'envie d'inviter les étudiants à apprendre l'anglais, j'implémente une idée originale à partir de zéro.",
        desc2: "Un jeu vidéo basé sur, mais très différent de, Tetris est né. Il invite les francophones à apprendre du vocabulaire anglais en intéragissant avec les lettres. Des lettres sont ajoutées, remplacées ou retirées afin de passer au prochain mot dans ce gameplay sans fin.",
        desc3: "Plus de 1300 mots sont disponibles et le jeu comprend des éléments surprenants tels que les anagrammes.",
        subtitle: "Apprendre du vocabulaire anglais en jouant"
      },
      myLife: {
        desc1: "Au sein de la communauté OpenClassrooms, je découvre et participe à un atelier/compétition dans lesquels les membres du forum discutent entre eux et implémentent des versions variées du jeu de la vie de Conway.",
        desc2: "Je décide de le programmer sur Nintendo DS pour son originalité. Cela me mène vers quelques problèmes d'interface que je résous en créant deux thèmes visuels et en permettant les utilisateurs d'utiliser différents niveaux de zooms lorsqu'ils dessinent la génération initiale.",
        desc3: "Les possibilités deviennent bien plus grandes que la version de Conway grâce au fait que les utilisateurs puissent éditer les règles de naissance et mort des cellules.",
        subtitle: 'Jeu de la vie de Conway'
      },
      
      myPixelArt: {
        desc1: "Inspiré par des éléments de gameplay d'Animal Crossing et de Mario Kart qui nous permettent de dessiner des emblèmes/design de vêtements pour nos personnages, je crée un éditeur de pixel art pour la même console, la Nintendo DS.",
        desc2: "Des pixel art classiques en 16x16 ou 32x32 peuvent être recréés et sauvegardés sur la console.",
        desc3: "Un autre outil que je développe en parallèle permet d'exporter ces sauvegardes (les créations de pixel art) vers une image plus grande (par exemple 1024x1024 pixels) pour une utilisation sur ordinateur.",
        subtitle: 'Du pixel art de votre DS vers votre PC'
      },
      mySudokuTool: {
        desc1: "Avec un camarade de classe, nous travaillons ensemble sur un résolveur de Sudoku.",
        desc2: "Pendant que Julien se concentre sur l'algorithme en lui-même, je réalise la partie graphique du projet. L'utilisateur peut utiliser la souris/le clavier pour remplir la grille de Sudoku initiale. Des règles basiques de Sudoku sont appliquées afin de l'empêcher de remplir des chiffres non uniques (par ligne, colonne, et bloc).",
        desc3: "L'utilisateur peut ensuite appuyer sur un bouton afin de révéler la solution du Sudoku (si elle existe), grâce à une implémentation basée sur la récursivité.",
        subtitle: 'Résolveur de Sudoku'
      },
      myTetris: {
        desc1: 'Ce projet réutilise deux de mes anciens projets : TETRISpace pour le gameplay de base, et myPixelArt pour dessiner ses sprites.',
        desc2: "Je pousse le gameplay plus loin en incorporant des défis (par exemple, détruire 4 lignes d'un coup, atteindre 10000 points) qui débloquent plusieurs thèmes visuels (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).",
        desc3: "Les joueurs débloquent également des avatars (également faits dans myPixelArt) pour pouvoir éditer leur carte de joueur avec une légende et une couleur de fond.",
        desc4: "Désormais familier avec la Nintendo DS, je décide d'apprendre de nouvelles choses tels que pouvoir lire des fichiers audio et jouer avec un rendu 3D.",
        subtitle: 'TETRISpace++'
      },
      tetrisSpace: {
        desc1: "Suivant les conseils de la communauté d'OpenClassrooms, je développe une version du célèbre jeu Tetris lors d'un weekend.",
        desc2: "Je décide de m'imposer une difficulté en le réalisant sur la Nintendo DS qui est connue pour ses limitations sur les sprites.",
        desc3: "Cela devient TETRISpace, un Tetris en 4-bit jouable sur une arène carrée de 11x11 blocs. La première version inclut un système de score et une sauvegarde pour le meilleur score.",
        subtitle: 'Version jouable de Tetris sur Nintendo DS'
      }
    }
  }
}

export { fr}