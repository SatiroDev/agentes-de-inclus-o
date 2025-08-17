class AgentManager:
    def __init__(self):
        self.agents = {
            "tdah": self._tdah_response,
            "surdo": self._surdo_response,
            "dislexia": self._dislexia_response,
            "tea": self._tea_response,
            "narrador": self._narrador_response
        }

    def get_response(self, agent_name: str, user_input: str) -> str:
        """
        Pega a resposta do agente com base no nome fornecido.
        """

        agent_name = agent_name.lower()
        if agent_name in self.agents:
            return self.agents[agent_name](user_input)
        return f"Agente '{agent_name}' não encontrado."
    
    # ======== DEFINIÇÕES DE RESPOSTAS ========

    def _tdah_response(self, user_input: str) -> str:
        return f"(TDAH) Entendi sua ideia! Ah, mas... e se a gente também pensasse em {user_input}"
    
    def _surdo_response(self, user_input: str) -> str:
        return f"(Surdo) [LIBRAS] Você disse: {user_input}"
    
    def _dislexia_response(self, user_input: str) -> str:
        baguncado = "".join(
            c.upper() if i % 3 == 0 else c for i, c in enumerate(user_input)
        )
        return f"(Dislexia) Você quiz dizer: {baguncado}"
        
    def _tea_response(self, user_input: str) -> str:
        return f"(TEA) Você escreveu: {user_input}. Isso significa que devemos analisar cuidadosamente cada detalhe."

    def _narrador_response(self, user_input: str) -> str:
        return f"(Narrador) O usuário disse: '{user_input}', e os agentes vão reagir a isso."
