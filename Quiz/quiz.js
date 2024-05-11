let dict_risposte = {};

function generateCards() {
    const container = document.getElementById("cards-container");
    const cartePerRiga = 5;
    const larghezzaMassima = 90 / cartePerRiga;

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement("div");
        card.id = "domanda" + i;
        card.classList.add("card", "m-2");
        card.style.maxWidth = larghezzaMassima + "%";
        // card.style.maxHeight = 1 + "%";
        card.style.backgroundColor = "cyan";
        
        num = Math.floor(Math.random()*40) + 1

        fetch('http://localhost:5000/api/question/' + num)
            .then(response => response.json())
            .then(questions =>{
                let domanda = questions.question
                let risposta = questions.type
                let id = questions.id

        dict_risposte[i] = risposta
        const cardImg = document.createElement("img");
        // cardImg.src="../img/Quiz/attesarisposta.jpg" //se non vuoi le immagini random qui c'è sfondo blu
        fetch("https://picsum.photos/1000/500")
        .then(response => response.blob()) //prende i dati binari dell'immagine
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob); //crea un URL oggetto dall'immagine
            cardImg.src = imgUrl; //imposta l'URL come src dell'immagine
        })
        cardImg.classList.add("card-img-top");
        cardImg.alt = "...";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = domanda;

        const trueButton = document.createElement("a");
        trueButton.classList.add("btn", "btn-primary", "me-2");
        trueButton.textContent = "Vero";
        trueButton.addEventListener("click", () => check_answer(i, "vero"));

        const falseButton = document.createElement("a");
        falseButton.classList.add("btn", "btn-primary");
        falseButton.textContent = "Falso";
        falseButton.addEventListener("click", () => check_answer(i, "falso"));

        cardTitle.textContent = "Domanda numero " + i;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(trueButton);
        cardBody.appendChild(falseButton);

        card.appendChild(cardImg);
        card.appendChild(cardBody);

        container.appendChild(card);
        })
    }
    console.log(dict_risposte)
}

    const risposte = [
        "vero", "falso"
    ]

function check_answer(numero_domanda, risposta){
    let carta = document.getElementById("domanda" + numero_domanda);
    // const rispostaCorretta = "vero"; // Imposta la risposta vero per ogni domanda ##### DA CAMBIARE
    let rispostaCorretta;

    if(dict_risposte[numero_domanda] == "vero"){
        rispostaCorretta = "vero"
    }else{
        rispostaCorretta = "falso"
    }


    let imgElement = carta.querySelector(".card-img-top");

  // Verifica se la risposta data dall'utente è corretta
    if (risposta === rispostaCorretta) {
        carta.style.backgroundColor = "lightgreen"; // Imposta lo sfondo verde per una risposta corretta
        imgElement.src = "../img/Quiz/memegiusto.jpg";
    } else {
        carta.style.backgroundColor = "lightcoral"; // Imposta lo sfondo rosso per una risposta errata
        imgElement.src = "../img/Quiz/memesbagliato.jpeg";
    }
}
    generateCards()