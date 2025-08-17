import os
from dotenv import load_dotenv
import openai


openai.api_key = os.getenv("OPENAI_API_KEY")


class AgentManager:
    def __init__(self):
        self.agents = [
            "agente tdah",
            "agente surdo",
            "agente dislexia",
            "agente tea",
            "narrador"
        ]

    def get_response(self, agent_name: str, question: str) -> str:
        """
        Pega a resposta do agente com base no nome fornecido.
        """

        agent_name = agent_name.lower()
        if agent_name not in self.agents:
            return f"Agente '{agent_name}' não encontrado."
        prompt = f"""
            Você é um assistente que adapta questões de provas para diferentes necessidades:
            Agente: {agent_name}
            Reescreva a questão mantendo o sentido, mas adaptando para o público alvo.
            Questão original: {question}
            Questão adaptada:
            """
        
        try:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Você adapta questões de prova para diferentes perfis."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=500
            )
            adapted_text = response.choices[0].message["content"].strip()
            return f"({agent_name.upper()} {adapted_text})"
        except Exception as e:
            return f"Erro ao gerar questão adaptada: {e}"
