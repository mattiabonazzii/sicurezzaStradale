
function generateCards() {
    const container = document.getElementById("cards-container");
    const cartePerRiga = 5;
    const larghezzaMassima = 90 / cartePerRiga;
    var dict_risposte = {};

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement("div");
        card.id = "domanda" + i;
        card.classList.add("card", "m-2");
        card.style.maxWidth = larghezzaMassima + "%";
        // card.style.maxHeight = 1 + "%";
        card.style.backgroundColor = "cyan";

        const cardImg = document.createElement("img");
        cardImg.src="../img/Quiz/attesarisposta.jpg"
        cardImg.classList.add("card-img-top");
        cardImg.alt = "...";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = "Domanda numero " + i;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = "La segnaletica stradale blu indica un'area di parcheggio";

        const trueButton = document.createElement("a");
        trueButton.classList.add("btn", "btn-primary", "me-2");
        trueButton.textContent = "Vero";
        trueButton.addEventListener("click", () => check_answer(i, "vero"));

        const falseButton = document.createElement("a");
        falseButton.classList.add("btn", "btn-primary");
        falseButton.textContent = "Falso";
        falseButton.addEventListener("click", () => check_answer(i, "falso"));

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(trueButton);
        cardBody.appendChild(falseButton);

        card.appendChild(cardImg);
        card.appendChild(cardBody);

        container.appendChild(card);
        dict_risposte[card] = "v";
    }
}

    const risposte = [
        "vero", "falso"
    ]

    function check_answer(numero_domanda, risposta){
      let carta = document.getElementById("domanda" + numero_domanda);
      const rispostaCorretta = "vero"; // Imposta la risposta corretta per ogni domanda

      let imgElement = carta.querySelector(".card-img-top");

      // Verifica se la risposta data dall'utente è corretta
      if (risposta === rispostaCorretta) {
          carta.style.backgroundColor = "lightgreen"; // Imposta lo sfondo verde per una risposta corretta
          imgElement.src = "../img/Quiz/rispostaquizgiusta.jpg";
      } else {
          carta.style.backgroundColor = "lightcoral"; // Imposta lo sfondo rosso per una risposta errata
          imgElement.src = "../img/Quiz/rispostasbagliata.png";
      }
    } 

    generateCards()