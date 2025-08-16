from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app = Flask(__name__)
CORS(app)  # permite requisições do React


UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
@app.route("/")
def home():
    return "Servidor Flask está rodando 🎉"

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "Nenhum arquivo enviado"}), 400
    
    file = request.files["file"]
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    return jsonify({"message": "Upload realizado com sucesso!", "file_path": filepath})

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)
if __name__ == "__main__":
    app.run(debug=True, port=5000)
