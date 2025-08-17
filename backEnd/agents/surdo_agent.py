from .base_agent import BaseAgent

class AgenteSurdo(BaseAgent):
    def __init__(self):
        super().__init__("Agente Surdo")

    def process_input(self, text: str) -> str:
        return f"[LIBRAS simulada] {text.upper()}"