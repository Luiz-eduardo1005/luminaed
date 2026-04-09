# LuminaEd

Plataforma web moderna para apoio aos estudos do ensino médio, unindo:

- Rede social educacional estilo feed
- Área de estudos por disciplinas e módulos
- Resumo inteligente mockado dentro do módulo

## Stack

- React
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons

## Como rodar

1. Instale o Node.js (versão 18+ recomendada).
2. No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

3. Abra o link exibido pelo Vite.

## Rotas principais

- `/` landing page
- `/auth` login/cadastro mockado
- `/app/feed` feed social educacional
- `/app/estudos` área de estudos
- `/app/disciplinas/:subjectId` página da disciplina
- `/app/disciplinas/:subjectId/modulo-1` módulo com resumo inteligente
- `/app/perfil`, `/app/notificacoes`, `/app/mensagens`
