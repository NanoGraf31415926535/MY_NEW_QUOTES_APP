from flask import Flask, jsonify
import requests
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/quote', methods=['GET'])
def get_quote():
    try:
        response = requests.get('https://go-quote.azurewebsites.net/api/v1/random')
        response.raise_for_status()
        data = response.json()
        return jsonify(data['text'])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching quote: {e}")
        return jsonify({"error": "Failed to fetch quote."}), 500

if __name__ == '__main__':
    app.run(port=3001, debug=True)