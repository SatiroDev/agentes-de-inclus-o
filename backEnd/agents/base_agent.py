class BaseAgent:
    def __init__(self, name:str):
        self.name = name

    def process_input(self, text: str) -> str:
        """
        Processa a entrada do usuário e retorna uma resposta.
        Deve ser sobrescrito em cada agente específico.
        """

        raise NotImplementedError("Este método deve ser implementado pelo agente específico.")