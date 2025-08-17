from .base_agent import BaseAgent

class AgenteTDAH(BaseAgent):
    def __init__(self):
        super().__init__("Agente TDAH")
    
    def process_input(self, text: str) -> str:
        partes = text.split(". ")
        resposta = "Vamos por partes:\n"
        for i, parte in enumerate(partes, 1):
            resposta += f"{i}. {parte.strip()}\n"
        return resposta