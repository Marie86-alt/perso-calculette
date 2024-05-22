
// Sélection des éléments HTML
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Fonction pour mettre à jour l'affichage de la calculatrice
function updateDisplay(value) {
    // Mettre à jour la valeur du champ de texte
    display.value = value;
}

// Fonction pour gérer les clics sur les boutons
function ButtonClick(event) {
    // Récupérer la valeur du bouton cliqué
    const buttonValue = event.target.value;

    // Mettre à jour l'affichage en fonction de la valeur du bouton
    if (buttonValue === "=") {
        // Évaluer l'expression mathématique et afficher le résultat
        try {
            updateDisplay(eval(display.value));
        } catch (error) {
            updateDisplay("Error");
        }
    } else if (buttonValue === "C") {
        // Effacer l'affichage
        updateDisplay("");
    } else {
        // Ajouter la valeur du bouton à l'affichage
        display.value += buttonValue;
    }
}

// Ajouter un gestionnaire d'événement à chaque bouton
buttons.forEach(button => {
    button.addEventListener("click", ButtonClick);
});

