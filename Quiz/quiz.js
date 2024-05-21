let dict_risposte = {};

let domande = [];
let counter_risposte_giuste = 0;
let counter_risposte_sbagliate = 0;

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
        card.style.backgroundColor = "white";
        
        flag = true;
        do{
            num = Math.floor(Math.random()*40) + 1
            if(!domande.includes(num)){
                domande.push(num);
                flag = false;
            }
        }while(flag == true);
        

        address = 'https://mattiapazzo.pythonanywhere.com/api/question/'
        fetch(address + num)
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

        const trueButton = document.createElement("button");
        trueButton.classList.add("btn", "btn-primary", "me-2");
        trueButton.textContent = "Vero";
        trueButton.addEventListener("click", () => check_answer(i, "vero", trueButton, falseButton)); //funzione freccia per definire funzioni anonime (tipo lambda expression)

        const falseButton = document.createElement("button");
        falseButton.classList.add("btn", "btn-primary");
        falseButton.textContent = "Falso";
        falseButton.addEventListener("click", () => check_answer(i, "falso", trueButton, falseButton)); //funzione freccia per definire funzioni anonime (tipo lambda expression)

        cardTitle.textContent = "Domanda numero " + i;
        // cardBody.appendChild(cardTitle);
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


function check_answer(numero_domanda, risposta, trueButton, falseButton) {
    let carta = document.getElementById("domanda" + numero_domanda);
    let rispostaCorretta = dict_risposte[numero_domanda] === "vero" ? "vero" : "falso";
   
    let imgElement = carta.querySelector(".card-img-top");
   
    if (risposta === rispostaCorretta) {
        carta.style.backgroundColor = "lightgreen";
        imgElement.src = "../img/Quiz/memegiustoresize.jpg";
        counter_risposte_giuste+=1;
    } else {
        carta.style.backgroundColor = "lightcoral";
        imgElement.src = "../img/Quiz/memesbagliatoresize.jpeg";
        counter_risposte_sbagliate+=1;
    }

    // Disabilita i bottoni una volta cliccato
    trueButton.disabled = true;
    falseButton.disabled = true;

    if(counter_risposte_giuste == 10){
        alert("Hai passato l'esame!!!");
    }else if(counter_risposte_giuste+counter_risposte_sbagliate == 10){
        alert("Non hai passato l'esame :(");
    }
}
    generateCards();