/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

    var tailleString = function (texte) {
        return texte.length;
    }

    // Remplacer le premier e de la chaine par un espace
    var remplaceECar = function (texte) {
        return texte.replace("e"," ");
    }

    // Concatener les deux chaines de caractères
    var concatString = function (texte, texte2) {
      return texte + texte2;

    }

    // Afficher le cinquième caractère de la chaine
    var afficherCar5 = function (texte) {
      //return texte[6];
      return texte.substring(4, 5);

    }
    // Afficher les 9 premiers caractères
    var afficher9Car = function (texte) {
        return texte.substring(0, 9);
    }

    // Mettre en majuscule la chaine
    var majusculeString = function (texte) {
        return texte.toUpperCase();
    }

    // Mettre en minuscule la chaine
    var minusculeString = function (texte) {
        return texte.toLowerCase();
    }

    // Supprimer les espaces avant et après la chaine
    var SupprEspaceString = function (texte) {
        return texte.trim();
    }

    // Afficher true si le parametre d\'entrée de la fonction est de type string
    var IsString = function (texte) {
      var type = typeof texte;
      if(type === "string")
        return true;
    }

    // Afficher l\'extension du fichier
    var AfficherExtensionString = function (texte) {
      var ext = texte.split("\.");
        return ext[1];
      }

      // Compter le nombre d\'espace dans la chaine
      var NombreEspaceString = function (texte) {
        return texte.split(" ").length -1;
        }

    // Inverser une chaine de caractères
    var InverseString = function (texte) {
      return texte.split('').reverse().join('');
      }

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

 // Inverser une chaine de caractères
 var calculPuissance = function (nbOne, nbTwo) {
   return Math.pow(nbOne, nbTwo);
   }

   // Afficher la valeur absolue d\'un nombre
   var valeurAbsolue = function (nbOne) {
     return Math.abs(nbOne);
     }

     // Afficher les valeurs absolues de plusieurs nombres
        var valeurAbsolueArray = function (arrayOne) {

          var lengthArray = arrayOne.length
          //alert(lengthArray);
          var arrayTwo = [];
            for (var i = 0; i < arrayOne.length; i++) {
              arrayTwo.push(Math.abs(arrayOne[i]));

            }
            return arrayTwo;

          }

    // Afficher les valeurs absolues de plusieurs nombres

    var sufaceCercle = function (surface) {

        var surfaceRond = Math.pow(surface, 2) * 3.14;
        return Math.round(surfaceRond);

      }

      // Calculer l\'hypothènuse d\'un triangle rectangle

      var hypothenuse = function (hyptheOne, hypthetwo) {

        var calcul = Math.pow(hyptheOne, 2) + Math.pow(hypthetwo, 2);
        var cucu = Math.sqrt(calcul);
        return Math.sqrt(calcul);

        }

    // Calculer l\'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.

    var calculIMC = function (nbOne, nbtwo) {

      var calcul = nbOne / Math.pow(nbtwo, 2);
      // arrondir a 2 chiffre apres la virgule
      var imc = calcul.toFixed(2);
      // convertir texte en nombre
      return parseFloat(imc);

          }
