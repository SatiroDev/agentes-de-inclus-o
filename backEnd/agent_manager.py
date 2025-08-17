class AgentManager:
    def __init__(self):
        self.agents = {
            "agente tdah": self._tdah_response,
            "agente surdo": self._surdo_response,
            "agente dislexia": self._dislexia_response,
            "agente tea": self._tea_response,
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
        # Divide o texto em frases curtas, até 3 frases
        sentences = user_input.split('.')
        short_sentences = [s.strip() for s in sentences if s.strip()]
        return "(TDAH) " + ". ".join(short_sentences[:3]) + ('.' if short_sentences else '')

    def _surdo_response(self, user_input: str) -> str:
        # Foco em elementos visuais e clareza
        return "(Surdo) 🔹 " + user_input.replace("exemplo", "mostre")  # pode adicionar emojis ou marcadores

    def _dislexia_response(self, user_input: str) -> str:
        # Adiciona espaçamento extra entre palavras para facilitar leitura
        words = user_input.split()
        spaced_text = "  ".join(words)  # dois espaços entre palavras
        return "(Dislexia) " + spaced_text

    def _tea_response(self, user_input: str) -> str:
        # Detalhes passo a passo
        sentences = user_input.split('.')
        sentences = [s.strip() for s in sentences if s.strip()]
        detailed_sentences = [f"Passo {i+1}: {s}." for i, s in enumerate(sentences)]
        return "(TEA) " + " ".join(detailed_sentences)

    def _narrador_response(self, user_input: str) -> str:
        # Resumo narrativo: pega até 3 frases e coloca como narrativa
        sentences = user_input.split('.')
        sentences = [s.strip() for s in sentences if s.strip()]
        summary = " ".join(sentences[:3])
        return "(Narrador) " + summary + ("..." if len(sentences) > 3 else "")
