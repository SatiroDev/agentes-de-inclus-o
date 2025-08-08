# Agentes de Inclusão

Sistema web para gerenciamento de agentes de inclusão.

## Tecnologias Utilizadas

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router DOM

## Como executar localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd agentes-de-inclusao
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:8080](http://localhost:8080) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

## Deploy no Vercel

Este projeto está configurado para deploy automático no Vercel. Para fazer o deploy:

1. Conecte seu repositório ao Vercel
2. O Vercel detectará automaticamente as configurações do projeto
3. O deploy será feito automaticamente a cada push para a branch principal

### Configurações do Vercel

O projeto inclui um arquivo `vercel.json` que configura:
- Roteamento SPA (Single Page Application)
- Diretório de saída correto
- Comando de build

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── lib/           # Utilitários e configurações
└── ui/            # Componentes de UI (shadcn/ui)
```

## Roteamento

O projeto usa React Router DOM para navegação entre páginas:
- `/` - Página inicial
- `/agentes` - Lista de agentes
- `/sobre` - Página sobre
- `/*` - Página 404 (não encontrada)
