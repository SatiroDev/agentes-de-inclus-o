from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from werkzeug.utils import secure_filename
from agent_manager import AgentManager
import os
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract"

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

manager = AgentManager()

@app.route("/process-image", methods=["POST"])
def process_image():
    if "file" not in request.files:
        return jsonify({"error": "Nenhum arquivo enviado"}), 400
    if "agent_name" not in request.form:
        return jsonify({"error": "Nenhum agente selecionado"}), 400

    file = request.files["file"]
    agent_name = request.form["agent_name"]

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    img = Image.open(filepath)
    texto = pytesseract.image_to_string(img)  # sem 'por' para evitar erro

    texto_adaptado = manager.get_response(agent_name, texto)

    return jsonify({
        "texto_original": texto,
        "texto_adaptado": texto_adaptado
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
