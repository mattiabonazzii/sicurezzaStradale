import requests

# Definire l'URL dell'endpoint API
url = 'http://localhost:5000/api/answer'

request = requests.post(url)
print(request)

# Definire i dati da inviare nella richiesta POST
data = {
    'question_id': 1,  # ID della domanda da rispondere
    'answer': '30 mph'  # Risposta fornita dall'utente
}

# Inviare la richiesta POST all'API
response = requests.post(url, json=data)

# Stampare la risposta ricevuta dall'API
print(response.json())