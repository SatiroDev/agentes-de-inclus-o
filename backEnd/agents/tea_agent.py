from .base_agent import BaseAgent

class AgenteTEA(BaseAgent):
    def __init__(self):
        super().__init__("Agente TEA")

    def process_input(self, text: str) -> str:
        return f"Você disse: {text}. Resposta clara e objetiva."