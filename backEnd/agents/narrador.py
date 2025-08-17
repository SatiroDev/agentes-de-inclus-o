from .base_agent import BaseAgent

class Narrador(BaseAgent):
    def __init__(self):
        super().__init__("Narrador")
    
    def process_input(self, text: str) -> str:
        return f"O usuário falou: '{text}'" 