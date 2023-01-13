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
        desc1: "Ayant aimé l'édition 2017 d'Advent of Code, je continue l'aventure en résolvant de manière rétroactive les défis de 2016.",
        desc2: "Cette fois, je le fais en JavaScript plutôt qu'en C, étant donné que ce dernier est trop verbeux ce qui s'oppose au classement basé sur la rapidité de résolution. Je crée plusieurs fichiers d'aide au fur et à mesure que je résous les défis.",
        desc3: "Je tire profit de ces fichiers et leurs fonctions lorsque je me penche sur l'édition 2018 en Décembre de la même année avec chaque puzzle journalier.",
        subtitle: "Ensemble de puzzles par année"
      },
      aoc2017: {
        desc1: 'Des anciens camarades de classes mentionnent Advent of Code, un ensemble de puzzles journaliers en Décembre.',
        desc2: "Nous décidons de nous lancer dans cette compétition et je choisis le langage avec lequel j'ai appris à programmer, le C.",
        desc3: "Avec persévérance et après avoir créé plusieurs fichiers pour m'aider (piles, files, etc.), je viens à bout du 25ème et dernier puzzle pendant cette bonne aventure.",
        subtitle: "Ensemble de puzzles pour finir l'année"
      },
      bobolsSokoban3d: {
        desc1:
          'Par curiosité, je réinvente la roue intentionnellement dans le but de créer une vue en 2D-isométrique, à partir de zéro, pour un jeu.',
        desc2:
          "Armé d'un crayon et de papier, je trouve la formule mathématique pour cette vue, que j'implémente au sein d'un jeu de Sokoban.",
        desc3:
          'Cela devient un jeu complet comportant une aventure de 20 niveaux à difficulté croissante, un éditeur de niveaux avec des règles de validation et un fichier de sauvegarde pour chacun de ces deux modes.',
        subtitle: 'Introduction à la 2D-isométrique'
      },
      connectFour: {
        desc1: 'Pour un projet scolaire, nous créons un Puissance 4 en binôme.',
        desc2: 'Le language de programmation imposé est Python donc nous y apprenons quelques unes de ses bibliothèques graphiques.',
        desc3: "Le résultat final comprend un mode 2 joueurs ainsi qu'une intelligence artificielle basique pour jouer seul contre l'ordinateur.",
        subtitle: "Jouez contre votre ami ou contre l'ordinateur"
      },
      coolr: {
        desc1: "En tant que cadeau d'anniversaire, je crée un jeu de puzzles basé sur le fait de mélanger des couleurs.",
        desc2: "Le jeu comprend plusieurs petits puzzles basés sur des jeux vidéo. Il se concentre beaucoup sur les capacités d'observation du joueur. Vous n'aurez pas davantage d'indices.",
        desc3: "Je le développe en React et l'héberge sur GitHub Pages pour que n'importe qui puisse y jouer.",
        subtitle: "Jeu de puzzles basé sur les mélanges de couleurs"
      },
      ctr2d: {
        desc1:
          'Étant fan du jeu vidéo sur PlayStation 1, je décide de mettre en oeuvre mes connaissances en programmation en créant une version simplifiée de Crash Team Racing.',
        desc2:
          "Malgré le fait qu'un seul circuit ne soit présent, je prends soin d'inclure toutes les armes du jeu ainsi que la même sélection de personnages (y compris Penta Penguin grâce à un code secret).",
        desc3: "Le fait que le jeu créé soit tour par tour me permet d'accepter jusqu'à 4 joueurs simultanés.",
        subtitle: 'Jeu multijoueurs au tour par tour'
      },
      ctrOcr: {
        desc1: "Plusieurs années plus tard et toujours fan du jeu vidéo Crash Team Racing qui a reçu un remake sur PlayStation 4, je suis actif sur Discord dans des communautés de joueurs français.",
        desc2: "Également intéressé par la reconnaissance optique de caractères, je combine les deux intérêts en créant un site web sur lequel les utilisateurs téléchargent en amont leurs captures d'écran de fin de course, et obtiennent en retour un classement complet des positions.",
        desc3: "Par curiosité j'achète également un nom de domaine pour l'hébergement de mon site web.",
        subtitle: "Reconnaissance optique de caractères"
      },
      eightQueensPuzzle: {
        desc1: "À l'école, nous travaillons sur un puzzle d'échecs connu. Le but est de placer huit dames de telle sorte à ce qu'aucune d'entre elles ne soit en prise.",
        desc2: "Nous commençons à générer toutes les permutations possibles pour un ensemble de lettres grâce à un système de piles.",
        desc3: "Après avoir appris que le problème des huit dames est en fait très proche de celui des permutations, nous résolvons le problème principal.",
        subtitle: "Un problème d'échecs connu"
      },
      general: {
        colon: ' :',
        contributor: 'Collaborateur',
        code: 'Code source',
        link: 'lien',
        website: 'Site web',
        roles: {
          [Role.Algorithm]: 'Algorithme',
          [Role.Developer]: 'Développeur',
          [Role.Designer]: 'Graphiste',
          [Role.Tester]: 'Testeur'
        },
        tags: {
          [Tag.Archived]: 'archivé',
          [Tag.SchoolProject]: 'projet scolaire',
          [Tag.VideoGame]: 'jeu vidéo',
          [Tag.Website]: 'site web'
        }
      },
      GTAV: {
        desc1:
          "Mon frère accepte mon aide avec joie sur un projet qu'il a entrepris. Ensemble nous développons notre premier vrai site web.",
        desc2:
          "Les utilisateurs peuvent parcourir la liste complète de véhicules (voitures, avions, bateaux, etc.) du jeu vidéo Grand Theft Auto V. Ils peuvent créer un compte, publier une photo du véhicule qu'ils ont customisé dans le jeu sur notre site web, et recevoir des notes d'autres membres.",
        desc3:
          "Notre base d'utilisateurs grandit pour accueillir quelques centaines d'utilisateurs qui envoient des centaines d'images et des milliers de notes, ce qui nous pousse à peaufiner notre section administrateur afin de pouvoir modérer un tel volume.",
        subtitle: 'Notre premier site web'
      },
      kaleidoscope: {
        desc1: "Le film interactif Bandersnatch sur Netflix m'a vraiment plu. Lorsque j'ai entendu parler de Kaleidoscope sur Netflix, une histoire racontée de façon non-linéaire, je voulais créer un petit site web autour.",
        desc2: "Le site web permet aux utilisateurs de modifier l'ordre de visionnage des huit épisodes complets de la série télé.",
        desc3: "Inspiré par Wordle, j'inclus également une fonctionnalité de partage pour que les utilisateurs puissent discuter de leur ordre de visionnage en le partageant sur les réseaux sociaux.",
        subtitle: "Partagez votre ordre de visionnage"
      },
      magicSquares: {
        desc1: "Après avoir joué au premier épisode de Professeur Layton, un jeu vidéo d'aventure et puzzles, j'apprends l'existence des carrés magiques.",
        desc2: "Ce sont des carrés de nombres dans lesquels la somme de chaque ligne, colonne et diagonale, est identique.",
        desc3: "Aimant le concept, je suis un algorithme afin de créer des carrés magiques.",
        subtitle: "Des carrés aux propriétés étonnantes"
      },
      myDraw: {
        desc1: "Intrigué par le traitement d'images, je décide de créer ma propre version de Paint.",
        desc2:
          'La version finale offre de nombreux outils : stylo, gomme, sélecteur de couleur, pinceau, rectangle, mode miroir et couleurs inversées.',
        desc3:
          "L'outil le plus complexe que j'implémente est le pot de peinture (remplissage de couleur) qui me force à m'entraîner sur la récursion.",
        subtitle: 'Version simplifiée de Paint'
      },
      maze: {
        desc1: `J'ai toujours aimé les labyrinthes étant plus petit, notamment grâce à celui présent dans la maison de Lara dans le jeu vidéo Tomb Raider 2.`,
        desc2: "Je suis un algorithme dans le but de générer des labyrinthes parfaits (étant donné que ceux imparfaits sont simplement des labyrinthes parfaits auxquels nous avons retiré quelques murs).",
        desc3: "L'implémentation en C que je mets en place inclut aussi une résolution de chemin pour naviguer du coin supérieur gauche au coin inférieur droit.",
        desc4: "Dans un projet parallèle sur la Nintendo DS, je crée une vue 3D du labyrinthe.",
        subtitle: "Création et navigation à travers des labyrinthes parfaits"
      },
      myEnglishGame: {
        desc1:
          "Ayant l'envie d'inviter les étudiants à apprendre l'anglais, j'implémente une idée originale à partir de zéro.",
        desc2:
          'Un jeu vidéo basé sur, mais très différent de, Tetris est né. Il invite les francophones à apprendre du vocabulaire anglais en intéragissant avec les lettres. Des lettres sont ajoutées, remplacées ou retirées afin de passer au prochain mot dans ce gameplay sans fin.',
        desc3:
          'Plus de 1300 mots sont disponibles et le jeu comprend des éléments surprenants tels que les anagrammes.',
        subtitle: 'Apprendre du vocabulaire anglais en jouant'
      },
      myLife: {
        desc1:
          'Au sein de la communauté OpenClassrooms, je découvre et participe à un atelier/compétition dans lesquels les membres du forum discutent entre eux et implémentent des versions variées du jeu de la vie de Conway.',
        desc2:
          "Je décide de le programmer sur Nintendo DS pour son originalité. Cela me mène vers quelques problèmes d'interface que je résous en créant deux thèmes visuels et en permettant les utilisateurs d'utiliser différents niveaux de zooms lorsqu'ils dessinent la génération initiale.",
        desc3:
          'Les possibilités deviennent bien plus grandes que la version de Conway grâce au fait que les utilisateurs puissent éditer les règles de naissance et mort des cellules.',
        subtitle: 'Jeu de la vie de Conway'
      },
      myPixelArt: {
        desc1:
          "Inspiré par des éléments de gameplay d'Animal Crossing et de Mario Kart qui nous permettent de dessiner des emblèmes/design de vêtements pour nos personnages, je crée un éditeur de pixel art pour la même console, la Nintendo DS.",
        desc2: 'Des pixel art classiques en 16x16 ou 32x32 peuvent être recréés et sauvegardés sur la console.',
        desc3:
          "Un autre outil que je développe en parallèle permet d'exporter ces sauvegardes (les créations de pixel art) vers une image plus grande (par exemple 1024x1024 pixels) pour une utilisation sur ordinateur.",
        subtitle: 'Du pixel art de votre DS vers votre PC'
      },
      mySudokuTool: {
        desc1: 'Avec un camarade de classe, nous travaillons ensemble sur un résolveur de Sudoku en tant que projet personnel.',
        desc2:
          "Pendant que Julien se concentre sur l'algorithme en lui-même, je réalise la partie graphique du projet. L'utilisateur peut utiliser la souris/le clavier pour remplir la grille de Sudoku initiale. Des règles basiques de Sudoku sont appliquées afin de l'empêcher de remplir des chiffres non uniques (par ligne, colonne, et bloc).",
        desc3:
          "L'utilisateur peut ensuite appuyer sur un bouton afin de révéler la solution du Sudoku (si elle existe), grâce à une implémentation basée sur la récursivité.",
        subtitle: 'Résolveur de Sudoku'
      },
      myTetris: {
        desc1:
          'Ce projet réutilise deux de mes anciens projets : TETRISpace pour le gameplay de base, et myPixelArt pour dessiner ses sprites.',
        desc2:
          "Je pousse le gameplay plus loin en incorporant des défis (par exemple, détruire 4 lignes d'un coup, atteindre 10000 points) qui débloquent plusieurs thèmes visuels (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).",
        desc3:
          'Les joueurs débloquent également des avatars (également faits dans myPixelArt) pour pouvoir éditer leur carte de joueur avec une légende et une couleur de fond.',
        desc4:
          "Désormais familier avec la Nintendo DS, je décide d'apprendre de nouvelles choses tels que pouvoir lire des fichiers audio et jouer avec un rendu 3D.",
        subtitle: 'TETRISpace++'
      },
      projectEuler: {
        desc1: "En parallèle de la compétition appelée Advent of Code, je prends part à quelques défis du Project Euler.",
        desc2: 'Je complète les 20+ premiers défis en utilisant Python cette fois-ci.',
        subtitle: "Quelques défis supplémentaires"
      },
      resume: {
        desc1: "Essayant de trouver une idée marrante de CV pour une recherche de travail à l'étranger, je passe une journée à créer un CV en ligne dont le code est très discutable.",
        desc2: "Je m'inspire directement d'ebay dans le but de créer une parodie de ce site pour lequel le produit est moi-même. Cela constitue également ma première introduction à GitHub Pages.",
        desc3: "Ce projet est désormais vraiment obsolète mais j'ai décidé de le garder pour son aspect graphique marrant.",
        subtitle: "Une parodie d'ebay me concernant"
      },
      simpleBot: {
        desc1: "Pour un projet scolaire, nous travaillons sur la création d'un chatbot en binôme.",
        desc2: "Nous utilisons un langage très particulier appelé AIML",
        desc3: "Après avoir lu la documentation, nous implémentons quelques uns de ses concepts (basés sur la reconnaissance de patterns), de telle sorte que le chatbot puisse reconnaître les couleurs, se rappeler du prénom de l'utilisateur, ainsi que deviner la capitale de certains pays, etc.",
        subtitle: "Exemple réduit d'un chatbot"
      },
      templateTs: {
        desc1: "Ayant plusieurs idées de sites web en tête, je me rends compte qu'il faudrait créer un modèle d'abord afin d'accélérer le procédé.",
        desc2: "Une après-midi, je crée un dossier modèle qui me permet de commencer des sites web hébergés sur GitHub Pages gratuitement avec les technologies les plus récentes, de manière rapide.",
        desc3: "Grâce à ce modèle, plusieurs sites web voient le jour y compris Kaleidoscope, DMZ et ce Portfolio que vous êtes en train de consulter.",
        subtitle: "Modèle React + TypeScript pour sites web"
      },
      tetrisSpace: {
        desc1:
          "Suivant les conseils de la communauté d'OpenClassrooms, je développe une version du célèbre jeu Tetris lors d'un weekend.",
        desc2:
          "Je décide de m'imposer une difficulté en le réalisant sur la Nintendo DS qui est connue pour ses limitations sur les sprites.",
        desc3:
          'Cela devient TETRISpace, un Tetris en 4-bit jouable sur une arène carrée de 11x11 blocs. La première version inclut un système de score et une sauvegarde pour le meilleur score.',
        subtitle: 'Version jouable de Tetris sur Nintendo DS'
      }
    }
  }
};

export { fr };
