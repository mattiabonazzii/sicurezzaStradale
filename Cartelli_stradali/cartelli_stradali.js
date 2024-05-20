class Foto {
    constructor(titolo, immagine, descrizione) {
        this.titolo = titolo;
        this.immagine = immagine;
        this.descrizione = descrizione;
    }
}

function creaLista() {
    listaImmagini.push(new Foto("striscia bianca laterale discontinua che", "immages/delimita bordo strada principale.png", "delimita il bordo della strada principale"));
    listaImmagini.push(new Foto("striscia bianca laterale discontinua che", "immages/separa carreggiata da passo carrabile.png", "separa la carreggiata dal passo carrabile"));
    listaImmagini.push(new Foto("doppia striscia continua", "immages/doppia striscia continua.png", "delimita la corsia e vieta il sorpasso"));
    listaImmagini.push(new Foto("striscia bianca laterale discontinua che", "immages/separa carreggiata da sosta.png", "separa la carreggiata da una zona di sosta"));
    listaImmagini.push(new Foto("strisce di guida sulle intersezioni", "immages/strisce guida intersezioni.png", "danno indicazioni su come muoversi negli incroci"));
    listaImmagini.push(new Foto("striscia continua", "immages/striscia continua.png", "separa due corsie e permette il sorpasso se non si supera la linea"));
    listaImmagini.push(new Foto("striscia discontinua", "immages/striscia discontinua.png", "separa le corsie e permette il sorpasso"));
}

function sceltaImmagini() {
    var immagineScelta = listaImmagini[Math.floor(Math.random() * listaImmagini.length)];
    var title = document.getElementById("card-title")
    var text = document.getElementById("card-text")
    var immagine = document.getElementById("card-immage")

    title.textContent = immagineScelta.titolo
    text.textContent = immagineScelta.descrizione
    immagine.src = immagineScelta.immagine
}

var listaImmagini = [];
creaLista();