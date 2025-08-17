from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from PIL import Image
from werkzeug.utils import secure_filename

import os
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract"



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

    img = Image.open(filepath)
    texto = pytesseract.image_to_string(img, lang='por')

    return jsonify({
        "message": "Upload realizado com sucesso!",
        "file_path": filepath,
        "texto": texto})

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)
if __name__ == "__main__":
    app.run(debug=True, port=5000)
