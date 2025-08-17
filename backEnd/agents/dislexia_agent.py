from .base_agent import BaseAgent
import random

class AgenteDislexia(BaseAgent):
    def __init__(self):
        super().__init__("Agente Dislexia")
    
    def process_input(self, text: str) -> str:

        resposta = ""
        for palavra in text.split():
            if len(palavra) > 3 and random.random() > 0.7:
                lista = list(palavra)
                i, j = random.sample(range(len(lista)), 2)
                lista[i], lista[j] = lista[j], lista[i]
                palavra = "".join(lista)
            resposta += palavra + " "
        return resposta.strip()