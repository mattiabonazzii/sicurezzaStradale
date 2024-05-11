from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

questions = [
    {
        "id": 1,
        "question": "Il limite di velocità in una zona residenziale è di 70km/h",
        "type": "vero"
    },
    {
        "id": 2,
        "question": "È possibile utilizzare il telefono cellulare mentre si guida",
        "type": "falso"
    },
    {
        "id": 3,
        "question": "Non dovresti mai dare la precedenza al traffico in arrivo",
        "type": "falso"
    },
    {
        "id": 4,
        "question": "Il semaforo giallo significa 'Fermarsi immediatamente'",
        "type": "falso"
    },
    {
        "id": 5,
        "question": "Quando vedi un pedone attraversare la carreggiata devi accelerare e investirlo",
        "type": "falso"
    },
    {
        "id": 6,
        "question": "E' vietato guidare sotto l'influenza di alcol o droghe",
        "type": "vero"
    },
    {
        "id": 7,
        "question": "La linea bianca continua sulla carreggiata indica la gelateria più vicina",
        "type": "falso"
    },
    {
        "id": 8,
        "question": "La distanza di sicurezza varia in base alla velocità a cui stai andando",
        "type": "vero"
    },
    {
        "id": 9,
        "question": "Una segnaletica stradale a forma di diamante indica che è li sotto si trova uno zaffiro",
        "type": "falso"
    },
    {
        "id": 10,
        "question": "Se il tuo veicolo si guasta sull'autostrada devi chiamare il carro attrezzi",
        "type": "vero"
    },
    {
        "id": 11,
        "question": "Le luci di emergenza devono essere accese quando hai un guasto al veicolo",
        "type": "vero"
    },
    {
        "id": 12,
        "question": "Se assisti ad un incidente stradale devi aiutare i feriti",
        "type": "vero"
    },
    {
        "id": 13,
        "question": "Se il vigile ti indica di fermarti puoi tranquillamente metterlo sotto",
        "type": "falso"
    },
    {
        "id": 14,
        "question": "Se vedi veicoli di emergenza con luci lampeggianti e sirene devi farli passare",
        "type": "vero",
    },
    {
        "id": 15,
        "question": "Quando vedi le croci di Sant'Andrea sei in presenza di un passaggio a livello senza barriera",
        "type": "vero"
    },
    {
        "id": 16,
        "question": "E' vietato utilizzare gli abbaglianti nelle zone urbane",
        "type": "vero",
    },
    {
        "id": 17,
        "question": "Se urti una macchina parcheggiata devi scappare il prima possibile",
        "type": "falso",
    },
    {
        "id": 18,
        "question": "Una segnaletica 'Vietato fare inversione a U' indica che è consentito fare inversione a U",
        "type": "falso"
    },
    {
        "id": 19,
        "question": "Se gli pneumatici del tuo veicolo perdono aderenza su una strada bagnata devi accelerare al massimo",
        "type": "falso",
    },
    {
        "id": 20,
        "question": "Chi causa un incidente dovrà subire un processo penale se ci sono dei feriti gravi",
        "type": "vero"
    },
    {
        "id": 21,
        "question": "È consentito effettuare un sorpasso in prossimità di un attraversamento pedonale",
        "type": "falso"
    },
    {
        "id": 22,
        "question": "Durante la guida, è obbligatorio indossare la cintura di sicurezza solo se si è conducenti del veicolo",
        "type": "falso"
    },
    {
        "id": 23,
        "question": "L'uso di alcol può influenzare negativamente i tempi di reazione del conducente",
        "type": "vero"
    },
    {
        "id": 24,
        "question": "Durante il rimorchio di un veicolo, è importante controllare la pressione degli pneumatici solo del rimorchio",
        "type": "falso"
    },
    {
        "id": 25,
        "question": "La mancata manutenzione del veicolo può aumentare il rischio di incidenti stradali",
        "type": "vero"
    },
    {
        "id": 26,
        "question": "E' possibile parcheggiare in doppia fila per breve tempo per scaricare merci pesanti",
        "type": "falso"
    },
    {
        "id": 27,
        "question": "Durante una retromarcia, è obbligatorio avere un passeggero che guidi l'auto dall'esterno",
        "type": "vero"
    },
    {
        "id": 28,
        "question": "Durante una nebbia fitta, è consigliabile accendere solo i fari di posizione",
        "type": "falso"
    },
    {
        "id": 29,
        "question": "E' consentito lasciare il motore del veicolo acceso durante la sosta prolungata",
        "type": "falso"
    },
    {
        "id": 30,
        "question": "L'uso del telefono cellulare mentre si guida può aumentare il rischio di incidenti stradali",
        "type": "vero"
    },
    {
        "id": 31,
        "question": "I dispositivi per la sicurezza dei bambini nei veicoli devono essere adatti all'età e al peso del bambino",
        "type": "vero"
    },
    {
        "id": 32,
        "question": "La segnaletica stradale può essere ignorata se il conducente ritiene che non sia necessaria",
        "type": "falso"
    },
    {
        "id": 33,
        "question": "Il consumo di alcol è spesso associato a comportamenti più rischiosi alla guida",
        "type": "vero"
    },
    {
        "id": 34,
        "question": "È obbligatorio avere l'assicurazione RCA per circolare su strada pubblica",
        "type": "vero"
    },
    {
        "id": 35,
        "question": "Il conducente è sempre responsabile della sicurezza dei passeggeri a bordo del veicolo",
        "type": "vero"
    },
    {
        "id": 36,
        "question": "E' vietato cambiare corsia senza aver prima segnalato con l'apposita freccia",
        "type": "vero"
    },
    {
        "id": 37,
        "question": "È legale superare il limite di velocità se si è in ritardo per un appuntamento",
        "type": "falso"
    },
    {
        "id": 38,
        "question": "Il trasporto di animali domestici non legati o non adeguatamente contenuti può essere pericoloso durante la guida",
        "type": "vero"
    },
    {
        "id": 39,
        "question": "E' possibile fermarsi su un ponte per scattare fotografie panoramiche",
        "type": "falso"
    },
    {
        "id": 40,
        "question": "Il rispetto del codice della strada è importante solo quando ci sono altre persone in vista",
        "type": "falso"
    }
]

    


@app.route('/api/question/<int:question_id>', methods=['GET'])
def get_question(question_id):
    question = next((q for q in questions if q["id"] == question_id), None)
    if question:
        return jsonify(question)
    else:
        return jsonify({"error": "Question not found"}), 404


@app.route('/api/answer', methods=['POST'])
def answer():
    data = request.get_json()
    question_id = data.get('question_id')
    user_answer = data.get('answer')

    question = next((q for q in questions if q["id"] == question_id), None)

    if not question:
        return jsonify({"error": "Question not found"}), 404

    correct_answer = question["type"]

    if user_answer.lower() == correct_answer.lower():
        return jsonify({"result": "Correct"}), 200
    else:
        return jsonify({"result": "Incorrect", "correct_answer": correct_answer}), 200


if __name__ == '__main__':
    app.run(debug=True)
