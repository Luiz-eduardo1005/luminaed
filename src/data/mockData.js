import {
  Atom,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  History,
  Languages,
  Leaf,
} from "lucide-react";

export const brand = {
  name: "LuminaEd",
  slogan: "Aprender junto, evoluir todo dia.",
};

export const currentUser = {
  id: "u0",
  name: "Larissa Nunes",
  username: "lari.estuda",
  avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Larissa",
  bio: "1º ano | focada em evoluir em exatas sem surtar.",
  streak: 9,
  followers: 238,
  following: 182,
  completedModules: 12,
  badges: ["Sequencia de 7 dias", "Mestre do Resumo", "Ajuda a Comunidade"],
  interests: ["Matematica", "Quimica", "Ingles"],
};

export const menuItems = [
  { label: "Início", path: "/app/feed" },
  { label: "Explorar", path: "/app/explorar" },
  { label: "Estudos", path: "/app/estudos" },
  { label: "Notificações", path: "/app/notificacoes" },
  { label: "Mensagens", path: "/app/mensagens" },
  { label: "Perfil", path: "/app/perfil" },
  { label: "Salvos", path: "/app/salvos" },
  { label: "Progresso", path: "/app/progresso" },
];

export const subjects = [
  {
    id: "portugues",
    name: "Português",
    icon: Languages,
    progress: 64,
    description: "Interpretação, gramática e produção textual para o 1º ano.",
    highlight: "Resumo de gêneros textuais atualizado.",
    module1: {
      title: "Fundamentos de Português",
      topics: [
        {
          title: "Interpretação de texto",
          content:
            "Interpretar um texto é compreender o que está explícito e implícito. Observe o contexto, a intenção do autor e palavras-chave para inferir significados.",
          example:
            "Exemplo: em uma crônica, ironia pode indicar crítica social mesmo sem dizer isso de forma direta.",
        },
        {
          title: "Gêneros textuais",
          content:
            "Cada gênero tem finalidade e estrutura. Notícia informa, artigo de opinião argumenta, crônica narra fatos do cotidiano com reflexão.",
          example:
            "Compare uma notícia e uma postagem opinativa para identificar tom e objetivo.",
        },
        {
          title: "Classes gramaticais básicas",
          content:
            "Substantivo nomeia, adjetivo caracteriza, verbo indica ação/estado. Entender função de cada classe melhora escrita e leitura.",
          example:
            "Em 'A aluna dedicada revisou cedo', 'aluna' é substantivo e 'dedicada' é adjetivo.",
        },
      ],
    },
  },
  {
    id: "matematica",
    name: "Matemática",
    icon: Calculator,
    progress: 52,
    description: "Base de operações, equações e primeiros passos em funções.",
    highlight: "Nova trilha de equação do 1º grau.",
    module1: {
      title: "Base Matemática do 1º Ano",
      topics: [
        {
          title: "Operações básicas",
          content:
            "Dominar adição, subtração, multiplicação e divisão com números inteiros e racionais é essencial para resolver problemas maiores.",
          example:
            "Ao resolver 3 + 2 x 5, use prioridade: primeiro multiplicação, depois adição.",
        },
        {
          title: "Equação do 1º grau",
          content:
            "Uma equação do tipo ax + b = 0 possui incógnita x. Isole o x, mantendo equilíbrio dos dois lados da igualdade.",
          example:
            "2x + 6 = 14 -> 2x = 8 -> x = 4.",
        },
        {
          title: "Introdução a funções",
          content:
            "Função relaciona cada valor de entrada a um único valor de saída. Observe domínio, imagem e comportamento no gráfico.",
          example:
            "f(x)=2x+1: se x=3, então f(3)=7.",
        },
      ],
    },
  },
  {
    id: "fisica",
    name: "Física",
    icon: Atom,
    progress: 38,
    description: "Conceitos iniciais de movimento, grandezas e cálculo simples.",
    highlight: "Simulados rápidos de velocidade média.",
    module1: {
      title: "Introdução à Física",
      topics: [
        {
          title: "Grandezas físicas",
          content:
            "Grandezas descrevem fenômenos e podem ser medidas. Ex: tempo, massa, comprimento. Use unidades do SI para padronizar.",
          example: "Tempo em segundos (s), distância em metros (m).",
        },
        {
          title: "Movimento",
          content:
            "Há movimento quando o corpo muda de posição em relação a um referencial ao longo do tempo.",
          example:
            "Um carro parado no semáforo está em repouso para o pedestre na calçada.",
        },
        {
          title: "Velocidade média",
          content:
            "Velocidade média = distância total / tempo total. O valor pode mudar conforme percurso e tempo gasto.",
          example:
            "120 km em 2 horas resulta em velocidade média de 60 km/h.",
        },
      ],
    },
  },
  {
    id: "quimica",
    name: "Química",
    icon: FlaskConical,
    progress: 44,
    description: "Matéria, misturas e tabela periódica de forma intuitiva.",
    highlight: "Mapa visual de estados físicos.",
    module1: {
      title: "Conceitos Iniciais de Química",
      topics: [
        {
          title: "Matéria",
          content:
            "Matéria é tudo que tem massa e ocupa lugar no espaço. Pode estar em diferentes estados físicos.",
          example: "Água, ar e madeira são exemplos de matéria.",
        },
        {
          title: "Estados físicos e misturas",
          content:
            "Os estados mais comuns são sólido, líquido e gasoso. Misturas podem ser homogêneas ou heterogêneas.",
          example:
            "Água com sal é homogênea; água com óleo é heterogênea.",
        },
        {
          title: "Introdução à tabela periódica",
          content:
            "Organiza os elementos químicos por número atômico, agrupando propriedades semelhantes em famílias.",
          example:
            "Sódio e potássio estão na família dos metais alcalinos.",
        },
      ],
    },
  },
  {
    id: "biologia",
    name: "Biologia",
    icon: Leaf,
    progress: 47,
    description: "Vida, células e organização dos seres vivos.",
    highlight: "Quiz de célula com feedback imediato.",
    module1: {
      title: "Biologia para Iniciantes",
      topics: [
        {
          title: "Célula",
          content:
            "A célula é a unidade básica da vida. Organismos podem ser unicelulares ou pluricelulares.",
          example: "Bactérias são unicelulares; humanos são pluricelulares.",
        },
        {
          title: "Níveis de organização",
          content:
            "Células formam tecidos, tecidos formam órgãos, órgãos formam sistemas e sistemas formam organismos.",
          example: "Células musculares -> tecido muscular -> coração.",
        },
        {
          title: "Características dos seres vivos",
          content:
            "Metabolismo, crescimento, reprodução e adaptação ao ambiente são características essenciais dos seres vivos.",
          example: "Plantas realizam fotossíntese para produzir energia.",
        },
      ],
    },
  },
  {
    id: "historia",
    name: "História",
    icon: History,
    progress: 30,
    description: "Tempo histórico, sociedades e processos de transformação.",
    highlight: "Linha do tempo interativa em breve.",
    module1: {
      title: "Introdução aos Estudos Históricos",
      topics: [
        {
          title: "Formação das sociedades",
          content:
            "As sociedades surgem de processos de organização social, econômica e cultural ao longo do tempo.",
          example:
            "Comunidades agrícolas permitiram fixação em territórios.",
        },
        {
          title: "Tempo histórico",
          content:
            "Tempo histórico não é só data: envolve mudanças, permanências e interpretações sobre eventos.",
          example:
            "A Revolução Industrial alterou trabalho, cidade e produção.",
        },
        {
          title: "Períodos históricos",
          content:
            "Dividir em períodos ajuda a estudar grandes processos, mas cada sociedade vive ritmos diferentes.",
          example: "Idade Moderna e Idade Contemporânea na Europa.",
        },
      ],
    },
  },
  {
    id: "geografia",
    name: "Geografia",
    icon: Globe,
    progress: 41,
    description: "Espaço geográfico, território e relações sociedade-natureza.",
    highlight: "Painel de mapas simplificados.",
    module1: {
      title: "Conceitos Básicos de Geografia",
      topics: [
        {
          title: "Espaço geográfico",
          content:
            "É o espaço transformado pela ação humana em interação com elementos naturais.",
          example:
            "Uma cidade com avenidas, praças e bairros é espaço geográfico.",
        },
        {
          title: "Paisagem, território e lugar",
          content:
            "Paisagem é o que vemos. Território envolve poder e controle. Lugar é espaço vivido com significado afetivo.",
          example:
            "A escola pode ser um lugar por sua importância na rotina do aluno.",
        },
      ],
    },
  },
  {
    id: "ingles",
    name: "Inglês",
    icon: BookOpen,
    progress: 58,
    description: "Base comunicativa com vocabulário essencial e leitura simples.",
    highlight: "Prática de apresentação pessoal.",
    module1: {
      title: "English Basics - Module 1",
      topics: [
        {
          title: "Verbo to be",
          content:
            "O verbo to be indica estado/identidade no presente: am, is, are.",
          example: "I am a student. She is my friend. They are ready.",
        },
        {
          title: "Vocabulário básico",
          content:
            "Aprender palavras de rotina escolar ajuda na leitura e conversa inicial.",
          example: "Book, notebook, class, teacher, homework.",
        },
        {
          title: "Cumprimentos e apresentações",
          content:
            "Use frases curtas para iniciar conversa e se apresentar com confiança.",
          example: "Hi! My name is Ana. Nice to meet you.",
        },
      ],
    },
  },
];

export const disciplineContent = {
  portugues: {
    intro:
      "Neste módulo, você vai desenvolver estratégias para ler com atenção, identificar informações importantes e interpretar enunciados com mais segurança.",
    explanation:
      "Interpretar um texto é construir sentido a partir do que está explícito (o que está escrito) e implícito (o que se deduz). Em provas, é comum confundir fato e opinião. Fato pode ser comprovado; opinião expressa julgamento. Também é importante reconhecer gêneros textuais: notícia informa, artigo de opinião argumenta, crônica reflete sobre o cotidiano.",
    examples: [
      "Frase: 'A escola recebeu 300 livros novos.' -> fato (dado verificável).",
      "Frase: 'A biblioteca ficou maravilhosa com os livros novos.' -> opinião (avaliação pessoal).",
      "Enunciado de notícia costuma responder: o quê, quem, quando, onde e como.",
    ],
    tips: [
      "Sublinhe palavras-chave do enunciado antes de responder.",
      "Leia a pergunta primeiro e depois releia o texto com foco no que foi pedido.",
      "Desconfie de alternativas com palavras extremas como 'sempre' e 'nunca'.",
    ],
    review:
      "Interpretação exige atenção ao contexto. Diferencie fato de opinião e reconheça o gênero textual para entender a intenção do texto.",
    summaryBase:
      "Português (Módulo 1): interpretação de texto envolve identificar informações explícitas e implícitas. Fato é verificável; opinião expressa ponto de vista. Reconhecer gêneros textuais ajuda a compreender objetivo, linguagem e estrutura.",
    quiz: [
      {
        id: "p1",
        question: "Qual alternativa apresenta uma opinião?",
        options: [
          "A prova ocorreu na segunda-feira.",
          "A aula de hoje foi a melhor do mês.",
          "A turma tem 32 alunos.",
          "O livro possui 180 páginas.",
        ],
        answer: 1,
        explanation: "Opinião expressa julgamento subjetivo, como 'melhor'.",
      },
      {
        id: "p2",
        question: "Em geral, qual é a função principal da notícia?",
        options: ["Argumentar", "Informar", "Narrar ficção", "Descrever paisagem"],
        answer: 1,
        explanation: "A notícia tem função informativa sobre fatos.",
      },
      {
        id: "p3",
        question: "Na interpretação, informação implícita é:",
        options: [
          "Aquilo que aparece em destaque no título.",
          "Aquilo que está escondido no rodapé.",
          "Aquilo que é inferido pelo leitor com base no contexto.",
          "Aquilo que é sempre uma opinião.",
        ],
        answer: 2,
        explanation: "Implícito é o sentido deduzido, não declarado diretamente.",
      },
    ],
  },
  matematica: {
    intro:
      "Aqui você revisa operações básicas e aprende a resolver equações do 1º grau com método claro e passo a passo.",
    explanation:
      "Equação do 1º grau é uma igualdade com incógnita (geralmente x), como ax + b = c. Resolver é encontrar o valor de x que torna a igualdade verdadeira. A regra principal é manter o equilíbrio: tudo que fizer de um lado, faça do outro. Organize a conta em etapas: isolar termo com x, simplificar e dividir pelo coeficiente.",
    examples: [
      "2x + 6 = 14 -> 2x = 8 -> x = 4.",
      "5x - 10 = 0 -> 5x = 10 -> x = 2.",
      "Erro comum: trocar sinal ao passar termo para o outro lado sem atenção.",
    ],
    tips: [
      "Faça uma etapa por linha para evitar confusão.",
      "Confira o resultado substituindo x na equação original.",
      "Revise prioridade das operações antes de resolver problemas maiores.",
    ],
    review:
      "Equações do 1º grau exigem organização e equilíbrio da igualdade. Isole o x, simplifique e verifique o resultado final.",
    summaryBase:
      "Matemática (Módulo 1): equação do 1º grau usa incógnita e equilíbrio da igualdade. Resolver envolve isolar x com operações inversas e validar o resultado substituindo na expressão inicial.",
    quiz: [
      {
        id: "m1",
        question: "Qual é a incógnita em 3x + 2 = 11?",
        options: ["3", "2", "11", "x"],
        answer: 3,
        explanation: "Incógnita é o valor desconhecido, representado por x.",
      },
      {
        id: "m2",
        question: "Resultado de x em 2x + 6 = 14:",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "2x = 8, então x = 4.",
      },
      {
        id: "m3",
        question: "Qual prática reduz erros em equações?",
        options: [
          "Pular etapas para ganhar tempo",
          "Organizar uma etapa por linha",
          "Evitar conferir o resultado",
          "Ignorar sinais",
        ],
        answer: 1,
        explanation: "Organização por etapas aumenta clareza e precisão.",
      },
    ],
  },
  fisica: {
    intro:
      "Neste módulo, você vai entender como descrever movimentos e calcular velocidade média em situações do dia a dia.",
    explanation:
      "Um corpo está em movimento quando muda de posição em relação a um referencial. Para analisar problemas, usamos distância (d), tempo (t) e velocidade média (vm). A fórmula principal é vm = d/t. O segredo é manter unidades coerentes (km com h, m com s) e interpretar o enunciado com atenção.",
    examples: [
      "Um aluno percorre 2 km em 0,5 h -> vm = 4 km/h.",
      "120 m em 20 s -> vm = 6 m/s.",
      "Se o tempo aumenta mantendo distância fixa, a velocidade média diminui.",
    ],
    tips: [
      "Liste dados do enunciado antes de calcular.",
      "Converta unidades quando necessário.",
      "Use o referencial corretamente ao interpretar movimento e repouso.",
    ],
    review:
      "Movimento depende de referencial. Velocidade média relaciona distância e tempo: vm = d/t, com unidades consistentes.",
    summaryBase:
      "Física (Módulo 1): movimento é mudança de posição em relação a um referencial. Velocidade média é calculada por vm = d/t e requer atenção às unidades e interpretação do problema.",
    quiz: [
      {
        id: "f1",
        question: "A fórmula da velocidade média é:",
        options: ["vm = t/d", "vm = d/t", "vm = d+t", "vm = d-t"],
        answer: 1,
        explanation: "Velocidade média é distância dividida pelo tempo.",
      },
      {
        id: "f2",
        question: "Se um carro faz 100 km em 2 h, a velocidade média é:",
        options: ["20 km/h", "40 km/h", "50 km/h", "200 km/h"],
        answer: 2,
        explanation: "100/2 = 50 km/h.",
      },
      {
        id: "f3",
        question: "Qual cuidado é essencial em problemas de velocidade?",
        options: [
          "Ignorar unidades",
          "Usar qualquer fórmula",
          "Manter unidades coerentes",
          "Somar distância e tempo",
        ],
        answer: 2,
        explanation: "Unidades coerentes evitam erro de cálculo e interpretação.",
      },
    ],
  },
  quimica: {
    intro:
      "Você vai aprender conceitos básicos de matéria, estados físicos e misturas com exemplos presentes no cotidiano.",
    explanation:
      "Matéria é tudo que tem massa e ocupa espaço. Ela pode estar nos estados sólido, líquido e gasoso, mudando de estado com variações de temperatura e pressão. Misturas homogêneas têm aspecto único; heterogêneas apresentam fases visíveis. Entender isso ajuda em temas futuros como separação de misturas e soluções.",
    examples: [
      "Gelo (sólido), água (líquido) e vapor (gasoso).",
      "Água com sal -> homogênea; água com óleo -> heterogênea.",
      "Derretimento é passagem do sólido para o líquido.",
    ],
    tips: [
      "Observe exemplos da cozinha e da escola para fixar conceitos.",
      "Sempre diferencie substância pura de mistura.",
      "Use a ideia de 'uma fase' ou 'várias fases' para classificar misturas.",
    ],
    review:
      "Matéria ocupa espaço e tem massa. Estados físicos mudam conforme condições externas. Misturas podem ser homogêneas ou heterogêneas.",
    summaryBase:
      "Química (Módulo 1): matéria existe em estados físico-químicos e pode sofrer mudanças de estado. Misturas homogêneas têm uma fase; heterogêneas, mais de uma fase visível.",
    quiz: [
      {
        id: "q1",
        question: "Qual mistura é heterogênea?",
        options: ["Água e sal", "Água e açúcar", "Água e óleo", "Vinagre e água"],
        answer: 2,
        explanation: "Água e óleo formam fases visíveis.",
      },
      {
        id: "q2",
        question: "Mudança do estado sólido para líquido chama-se:",
        options: ["Vaporização", "Condensação", "Fusão", "Sublimação"],
        answer: 2,
        explanation: "Fusão é o derretimento do sólido.",
      },
      {
        id: "q3",
        question: "Matéria é:",
        options: [
          "Tudo que emite luz",
          "Tudo que ocupa espaço e tem massa",
          "Apenas substância líquida",
          "Tudo que é invisível",
        ],
        answer: 1,
        explanation: "Essa é a definição básica de matéria.",
      },
    ],
  },
  biologia: {
    intro:
      "Este módulo apresenta a célula como unidade da vida e as características que definem os seres vivos.",
    explanation:
      "A célula é a menor unidade estrutural e funcional dos seres vivos. Existem células procariontes (sem núcleo definido) e eucariontes (com núcleo). Nos organismos multicelulares, há níveis de organização: célula, tecido, órgão, sistema e organismo. Seres vivos compartilham características como metabolismo, crescimento e reprodução.",
    examples: [
      "Bactérias são procariontes.",
      "Células animais e vegetais são eucariontes.",
      "Células musculares -> tecido muscular -> órgão.",
    ],
    tips: [
      "Associe cada nível de organização a um exemplo real do corpo humano.",
      "Use esquemas para diferenciar tipos de célula.",
      "Relacione características dos seres vivos com situações cotidianas.",
    ],
    review:
      "Célula é a base da vida. Há tipos celulares diferentes e níveis de organização que formam organismos completos.",
    summaryBase:
      "Biologia (Módulo 1): célula é unidade básica da vida. Seres vivos possuem organização biológica e características como metabolismo, crescimento e reprodução.",
    quiz: [
      {
        id: "b1",
        question: "A menor unidade da vida é:",
        options: ["Átomo", "Tecido", "Célula", "Órgão"],
        answer: 2,
        explanation: "A célula é a unidade fundamental dos seres vivos.",
      },
      {
        id: "b2",
        question: "Qual sequência está correta?",
        options: [
          "Órgão -> célula -> tecido",
          "Célula -> tecido -> órgão",
          "Tecido -> órgão -> célula",
          "Sistema -> tecido -> célula",
        ],
        answer: 1,
        explanation: "Níveis de organização seguem célula, tecido, órgão.",
      },
      {
        id: "b3",
        question: "Característica típica dos seres vivos:",
        options: ["Fotossíntese obrigatória", "Metabolismo", "Não crescer", "Não se reproduzir"],
        answer: 1,
        explanation: "Metabolismo é característica geral dos seres vivos.",
      },
    ],
  },
  historia: {
    intro:
      "Você vai entender como a História analisa processos ao longo do tempo e como surgiram as primeiras sociedades.",
    explanation:
      "Tempo histórico não é apenas data; envolve permanências e mudanças. A História estuda processos, relações sociais e culturais. As primeiras sociedades se organizaram em torno de agricultura, divisão de trabalho e formas de poder. Cultura, crenças e organização social influenciam a maneira como cada povo vive e registra seu passado.",
    examples: [
      "Revolução Industrial: processo histórico com várias transformações.",
      "Agricultura permitiu sedentarização e crescimento populacional.",
      "Documentos, objetos e relatos são fontes históricas.",
    ],
    tips: [
      "Ao estudar um tema, pergunte: o que mudou e o que permaneceu?",
      "Use linha do tempo para organizar processos.",
      "Diferencie evento pontual de processo histórico longo.",
    ],
    review:
      "História analisa mudanças e permanências. Tempo histórico envolve processos sociais, econômicos e culturais.",
    summaryBase:
      "História (Módulo 1): tempo histórico vai além de datas e foca em processos. Formação das sociedades envolve organização social, cultura, trabalho e poder.",
    quiz: [
      {
        id: "h1",
        question: "Tempo histórico é:",
        options: [
          "Somente a data exata dos fatos",
          "Apenas o passado distante",
          "Análise de mudanças e permanências ao longo do tempo",
          "Um calendário fixo",
        ],
        answer: 2,
        explanation: "Tempo histórico envolve processos e interpretações.",
      },
      {
        id: "h2",
        question: "Qual alternativa representa fonte histórica?",
        options: ["Somente livros didáticos", "Objetos e documentos", "Apenas internet", "Somente fotos atuais"],
        answer: 1,
        explanation: "Fontes incluem documentos, objetos, registros e relatos.",
      },
      {
        id: "h3",
        question: "A agricultura contribuiu para:",
        options: ["Nomadismo permanente", "Sedentarização", "Fim das sociedades", "Ausência de trabalho"],
        answer: 1,
        explanation: "A agricultura favoreceu fixação em territórios.",
      },
    ],
  },
  geografia: {
    intro:
      "Neste módulo, você vai compreender espaço geográfico, paisagem e território com exemplos próximos da sua realidade.",
    explanation:
      "Espaço geográfico é resultado da interação entre sociedade e natureza. Paisagem é tudo que podemos perceber (natural ou construído). Território envolve relações de poder e controle sobre uma área. Observar o bairro, a escola e a cidade ajuda a entender como ações humanas transformam o espaço.",
    examples: [
      "Uma praça reformada muda a paisagem local.",
      "Fronteiras entre países representam territórios com controle político.",
      "Transporte público altera dinâmica do espaço urbano.",
    ],
    tips: [
      "Observe mudanças no seu bairro ao longo do tempo.",
      "Diferencie o que é elemento natural e elemento cultural na paisagem.",
      "Pense quem decide o uso de cada espaço para entender território.",
    ],
    review:
      "Espaço geográfico é construído pela ação humana. Paisagem é o que se observa; território envolve poder e controle.",
    summaryBase:
      "Geografia (Módulo 1): espaço geográfico surge da relação sociedade-natureza. Paisagem é aparência visível do espaço; território inclui domínio e poder sobre áreas.",
    quiz: [
      {
        id: "g1",
        question: "Paisagem é:",
        options: [
          "Apenas natureza intocada",
          "Tudo que pode ser percebido no espaço",
          "Somente território político",
          "Apenas mapas",
        ],
        answer: 1,
        explanation: "Paisagem inclui elementos naturais e humanos visíveis.",
      },
      {
        id: "g2",
        question: "Território está relacionado principalmente a:",
        options: ["Poder e controle", "Clima", "Vegetação", "Horário"],
        answer: 0,
        explanation: "Território envolve relações de poder sobre o espaço.",
      },
      {
        id: "g3",
        question: "Espaço geográfico resulta de:",
        options: [
          "Somente processos naturais",
          "Apenas construções humanas",
          "Interação entre sociedade e natureza",
          "Mudanças aleatórias",
        ],
        answer: 2,
        explanation: "É a combinação de ações humanas e elementos naturais.",
      },
    ],
  },
  ingles: {
    intro:
      "Neste módulo, você aprende estruturas básicas para se apresentar em inglês usando pronomes e o verbo to be.",
    explanation:
      "O verbo to be (am, is, are) expressa identidade e estado. Com pronomes pessoais (I, you, he, she, it, we, they), formamos frases simples: I am, you are, she is. Para perguntas, invertemos: Are you...? Is he...? Esse conteúdo é essencial para apresentações e comunicação inicial.",
    examples: [
      "I am Lucas. / She is my friend. / They are students.",
      "Are you from Brazil? / Yes, I am.",
      "What is your name? My name is Ana.",
    ],
    tips: [
      "Memorize combinações principais: I am, he/she is, you/we/they are.",
      "Pratique frases curtas de apresentação todos os dias.",
      "Leia em voz alta para melhorar pronúncia e confiança.",
    ],
    review:
      "To be organiza frases básicas em inglês. Pronomes + am/is/are permitem apresentações, perguntas e respostas iniciais.",
    summaryBase:
      "Inglês (Módulo 1): o verbo to be, junto aos pronomes pessoais, forma base da comunicação inicial. Estruturas afirmativas e interrogativas ajudam em apresentações e cumprimentos.",
    quiz: [
      {
        id: "i1",
        question: "Complete: She ___ a student.",
        options: ["am", "is", "are", "be"],
        answer: 1,
        explanation: "Com she, usamos 'is'.",
      },
      {
        id: "i2",
        question: "Qual pergunta está correta?",
        options: ["You are from Brazil?", "Are you from Brazil?", "Is you from Brazil?", "You is from Brazil?"],
        answer: 1,
        explanation: "A forma interrogativa correta é 'Are you...?'",
      },
      {
        id: "i3",
        question: "Tradução adequada de 'Meu nome é Ana':",
        options: ["I am Ana name", "My name is Ana", "Name my Ana", "I name Ana"],
        answer: 1,
        explanation: "Estrutura padrão de apresentação: My name is...",
      },
    ],
  },
};

export const posts = [
  {
    id: "p1",
    user: "Caio Mendes",
    username: "caio.m1",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Caio",
    time: "2 min",
    text: "Hoje finalmente entendi equação do 1º grau. Fiz 6 exercícios seguidos sem errar!",
    likes: 42,
    comments: 11,
    shares: 4,
    saves: 8,
  },
  {
    id: "p2",
    user: "Bianca Lopes",
    username: "bi.estudos",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Bianca",
    time: "18 min",
    text: "A aula de química foi puxada, mas consegui revisar aqui depois e fez muito mais sentido.",
    likes: 37,
    comments: 9,
    shares: 2,
    saves: 7,
  },
  {
    id: "p3",
    user: "Rafael Souza",
    username: "rafa.physics",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Rafael",
    time: "35 min",
    text: "Alguém pode me ajudar em velocidade média? Sempre travo quando tem unidade diferente.",
    likes: 24,
    comments: 19,
    shares: 3,
    saves: 6,
  },
  {
    id: "p4",
    user: "Manu Pereira",
    username: "manu.aprende",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Manu",
    time: "1 h",
    text: "Gostei muito do resumo automático, facilitou demais minha revisão de história.",
    likes: 65,
    comments: 14,
    shares: 8,
    saves: 15,
  },
  {
    id: "p5",
    user: "João Vitor",
    username: "joaovitor.geo",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Joao",
    time: "1 h",
    text: "Hoje estudei português e matemática sem me perder. Organizar por módulos ajudou demais.",
    likes: 53,
    comments: 8,
    shares: 4,
    saves: 13,
  },
  {
    id: "p6",
    user: "Eduarda Lima",
    username: "duda.learn",
    avatar: "https://api.dicebear.com/8.x/thumbs/svg?seed=Eduarda",
    time: "3 h",
    text: "Consegui terminar meu módulo 1 de inglês. Próxima meta: começar física sem medo.",
    likes: 89,
    comments: 17,
    shares: 6,
    saves: 12,
  },
];

export const trending = [
  "#Matemática",
  "#Química",
  "#Revisão",
  "#EstudoDoDia",
  "#EnsinoMédio",
  "#Português",
  "#DicasDeEstudo",
  "#Prova",
];

export const suggestions = [
  { name: "Prof. Letícia", username: "leticia.math", area: "Matemática" },
  { name: "Grupo 1º ano A", username: "turma1A", area: "Comunidade" },
  { name: "Lucas F.", username: "lucas.quim", area: "Química" },
];

export const notifications = [
  "Ana curtiu sua publicação sobre português.",
  "Você recebeu 3 novos seguidores hoje.",
  "Lembrete: continue o módulo de Física.",
  "Parabéns! Você concluiu um módulo de Inglês.",
  "Novo conteúdo recomendado: funções básicas.",
];

export const messages = [
  {
    id: "m1",
    with: "Grupo Prova de Matemática",
    preview: "Vamos revisar equação do 1º grau às 19h?",
    last: "agora",
  },
  {
    id: "m2",
    with: "Marina",
    preview: "Te mando meu resumo de química em 5 min.",
    last: "12 min",
  },
  {
    id: "m3",
    with: "Tiago",
    preview: "Bora fazer revisão rápida de história?",
    last: "1 h",
  },
];
