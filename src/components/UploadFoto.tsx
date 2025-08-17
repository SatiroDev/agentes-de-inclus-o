import { useState } from "react";

export default function UploadFoto() {
    const [file, setFile] = useState<File | null>(null)
    const [resposta, setResposta] = useState<string>("")
    const [imageURL, setImageURL] = useState<string>("")

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData()
        formData.append("file", file)
        try {
            const res = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            })

            const data = await res.json()
            setResposta(JSON.stringify(data, null, 2))

            if (data.file_path) {
                const filename = data.file_path.split(/[/\\]/).pop()
                setImageURL(`http://localhost:5000/uploads/${filename}`)
            }

            if (data.texto) {
                setResposta(data.texto)
            }
        } catch (err) {
            console.error(err)
            setResposta("Erro ao enviar a foto")
        }
        
        
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange} />
            <button onClick={handleUpload}>Enviar Foto</button>
            {resposta && (
                <pre style={{ marginTop: "1rem", background: "#00ffaaff", padding: "1rem"}}>
                    
                    {resposta}
                </pre>
            )}
            {imageURL && (
                <div style={{ marginTop: "1rem"}}>
                    <img src={imageURL} alt="Upload" style={{maxWidth: "100%"}}/>
                </div>
            )}
        </div>
    )
}