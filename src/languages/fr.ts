import { Role, Tag } from "../types"

const fr = {
  translation: {
    header: {
      author: {
        prefix: 'Je suis ',
        suffix: ', un Ingénieur en Développement Web.'
      },
      introduction: 'Voici quelques uns de mes projets personnels.',
      welcome: 'Bienvenue sur mon Portfolio !',
    },
    projects: {
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
      myDraw: {
        desc1: "Intrigué par le traitement d'images, je décide de créer ma propre version de Paint.",
        desc2: "La version finale offre de nombreux outils : stylo, gomme, sélecteur de couleur, pinceau, rectangle, mode miroir et couleurs inversées.",
        desc3: "L'outil le plus complexe que j'implémente est le pot de peinture (remplissage de couleur) qui me force à m'entraîner sur la récursion.",
        subtitle: 'Version simplifiée de Paint'
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