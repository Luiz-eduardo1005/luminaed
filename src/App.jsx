import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  BookMarked,
  CalendarCheck2,
  CheckCircle2,
  CircleCheckBig,
  Copy,
  Flame,
  ImagePlus,
  Lock,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  WandSparkles,
  Inbox,
  BellOff,
  MessageSquareOff,
  ChevronLeft,
} from "lucide-react";
import SideNav from "./components/layout/SideNav";
import TopBar from "./components/layout/TopBar";
import RightPanel from "./components/layout/RightPanel";
import PostCard from "./components/social/PostCard";
import SubjectCard from "./components/study/SubjectCard";
import { brand, currentUser, disciplineContent, messages, notifications, posts, subjects } from "./data/mockData";
import { FeedSkeleton, Skeleton } from "./components/ui/Skeleton";
import EmptyState from "./components/ui/EmptyState";
import MobileNav from "./components/ui/MobileNav";
import { ToastProvider, useToast } from "./components/ui/Toast";

const pageMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 4 },
  transition: { duration: 0.22, ease: "easeOut" },
};

function AppShell({ children, resolvedTheme, toggleTheme, showRightPanel = true }) {
  return (
    <div className="mx-auto min-h-screen max-w-[1480px] p-0 md:p-4 lg:p-5">
      <TopBar
        resolvedTheme={resolvedTheme}
        toggleTheme={toggleTheme}
      />
      <div
        className={`grid grid-cols-1 gap-4 px-2 pb-24 md:gap-5 md:px-0 ${
          showRightPanel
            ? "xl:grid-cols-[272px_minmax(0,1fr)_360px]"
            : "xl:grid-cols-[272px_minmax(0,1fr)]"
        }`}
      >
        <SideNav />
        <main className="min-w-0 space-y-4">{children}</main>
        {showRightPanel ? <RightPanel /> : null}
      </div>
      <MobileNav />
    </div>
  );
}

function FeedPage() {
  const [tab, setTab] = useState("Para você");
  const [draft, setDraft] = useState("");
  const [published, setPublished] = useState(false);
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [localPosts, setLocalPosts] = useState(posts);
  const { showToast } = useToast();

  useEffect(() => {
    const t = setTimeout(() => setLoadingPosts(false), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.section {...pageMotion} className="space-y-3 md:space-y-4">
      <div className="panel p-0">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="section-title">Início</h2>
        </div>
        <div className="grid grid-cols-2 p-1.5">
          {["Para você", "Seguindo"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                tab === item
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-500 hover:bg-slate-50 hover:text-ink-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className={`panel panel-hover transition-all duration-200 ${isComposerFocused ? "shadow-lg" : ""}`}>
        <div className="flex items-start gap-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-11 w-11 rounded-full border border-slate-200" />
          <div className="min-w-0 flex-1">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onFocus={() => setIsComposerFocused(true)}
              onBlur={() => setIsComposerFocused(false)}
              className="input-base min-h-24 resize-none border-0 bg-transparent px-0 text-[15px] leading-7 shadow-none focus:shadow-none"
              placeholder="Compartilhe uma dúvida, conquista ou meta de estudo..."
            />
            <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-200 pt-3">
              <button className="btn-soft gap-2 px-3 py-2 text-xs">
                <ImagePlus size={14} /> Mídia
              </button>
              <button
                onClick={() => {
                  if (draft.trim()) {
                    setPublished(true);
                    setLocalPosts((prev) => [
                      {
                        id: `draft-${Date.now()}`,
                        user: currentUser.name,
                        username: currentUser.username,
                        avatar: currentUser.avatar,
                        time: "agora",
                        text: draft,
                        likes: 0,
                        comments: 0,
                        shares: 0,
                        saves: 0,
                      },
                      ...prev,
                    ]);
                    setDraft("");
                    showToast("Publicação enviada com sucesso");
                    setTimeout(() => setPublished(false), 1800);
                  }
                }}
                className={`btn-primary gap-2 px-3 py-2 text-xs sm:px-4 ${draft.trim() ? "" : "opacity-80"}`}
              >
                <Send size={14} />
                Publicar
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {published && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="panel animate-pop-in border-emerald-200 bg-emerald-50">
          <p className="text-sm font-semibold text-emerald-700">Post publicado com sucesso. Sua comunidade vai ver sua atualização agora.</p>
        </motion.div>
      )}

      <div className="feed-fixed-post panel border-brand-100 bg-gradient-to-r from-brand-50 to-blue-50/60">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Postagem fixa</p>
        <h2 className="mt-1 text-lg font-bold text-ink-900">Bem-vindo(a) ao LuminaEd</h2>
        <p className="mt-1 text-sm leading-6 text-ink-500">
          Compartilhe dúvidas, conquistas e rotina de estudos. Aprender junto fica mais leve e muito mais eficiente.
        </p>
      </div>
      {loadingPosts ? (
        <FeedSkeleton />
      ) : localPosts.length ? (
        localPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <EmptyState
          icon={Inbox}
          title="Nenhum post por enquanto"
          description="Comece publicando sua primeira atualização de estudo e movimente sua comunidade."
          actionLabel="Criar primeira publicação"
          actionTo="/app/feed"
        />
      )}
    </motion.section>
  );
}

function StudiesPage() {
  const [query, setQuery] = useState("");
  const [loadingHub, setLoadingHub] = useState(true);
  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(query.toLowerCase())
  );
  const totalProgress = Math.round(
    subjects.reduce((acc, item) => acc + item.progress, 0) / subjects.length
  );
  const inProgress = subjects.filter((item) => item.progress > 0).length;
  const continueSubject = subjects.reduce((best, current) =>
    current.progress > best.progress ? current : best
  );

  useEffect(() => {
    const t = setTimeout(() => setLoadingHub(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.section {...pageMotion} className="space-y-4 md:space-y-6">
      <div className="panel overflow-hidden p-0">
        <div className="studies-hero border-b border-slate-200 bg-gradient-to-r from-brand-700 via-brand-600 to-violet-600 px-4 py-5 text-white md:px-6 md:py-6">
          <h2 className="text-xl font-extrabold md:text-3xl">Área de Estudos</h2>
          <p className="mt-1 text-sm leading-6 md:leading-7 text-blue-100/95">
            Escolha uma disciplina e continue evoluindo.
          </p>
          <div className="relative mt-4 max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-100/80" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-blue-200/50 bg-white/10 px-3 py-2.5 pl-9 text-sm text-white outline-none placeholder:text-blue-100/80 focus:border-white/40 focus:bg-white/15"
              placeholder="Buscar disciplina ou conteúdo..."
            />
          </div>
        </div>
      </div>

      {loadingHub ? (
        <div className="grid gap-3 md:gap-4 md:grid-cols-[1.3fr_1fr]">
          <div className="panel space-y-3">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-8 w-52" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-full" />
            <Skeleton className="h-9 w-32" />
          </div>
          <div className="panel space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      ) : (
      <div className="grid gap-3 md:gap-4 md:grid-cols-[1.3fr_1fr]">
        <div className="panel panel-hover overflow-hidden border-brand-100 p-0">
          <div className="continue-card-head bg-gradient-to-r from-white to-brand-50/70 px-4 py-4 md:px-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Continuar estudando</p>
            <h3 className="mt-1 text-lg font-bold md:text-xl text-ink-900">{continueSubject.name}</h3>
            <p className="mt-1 break-words text-sm text-ink-500">{continueSubject.module1.title}</p>
          </div>
          <div className="space-y-4 px-4 py-4 md:px-5">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-ink-500">Progresso atual</p>
                <p className="text-sm font-bold text-ink-800">{continueSubject.progress}%</p>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                  style={{ width: `${continueSubject.progress}%` }}
                />
              </div>
            </div>
            <Link to={`/app/disciplinas/${continueSubject.id}/modulo-1`} className="btn-primary w-full sm:w-auto">
              Continuar
            </Link>
          </div>
        </div>

        <div className="panel space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-brand-600" />
            <p className="text-sm font-bold text-ink-900">Progresso geral</p>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm text-ink-500">Desempenho total</p>
              <p className="text-lg font-extrabold text-ink-900">{totalProgress}%</p>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500" style={{ width: `${totalProgress}%` }} />
            </div>
          </div>
            <div className="grid grid-cols-3 gap-2">
            <div className="panel-muted text-center">
                <p className="text-base font-bold md:text-lg text-ink-900">{currentUser.completedModules}</p>
              <p className="text-xs text-ink-500">Concluídos</p>
            </div>
            <div className="panel-muted text-center">
                <p className="text-base font-bold md:text-lg text-ink-900">{currentUser.streak}</p>
              <p className="text-xs text-ink-500">Sequência</p>
            </div>
            <div className="panel-muted text-center">
                <p className="text-base font-bold md:text-lg text-ink-900">{inProgress}</p>
              <p className="text-xs text-ink-500">Em andamento</p>
            </div>
          </div>
        </div>
      </div>
      )}

      <div className="flex items-center justify-between">
        <h3 className="section-title">Disciplinas</h3>
        <p className="text-xs font-semibold text-ink-500">{filteredSubjects.length} resultados</p>
      </div>
      {filteredSubjects.length ? (
        <div className="grid gap-3 md:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title="Nenhuma disciplina encontrada"
          description="Tente buscar por outro termo ou limpe a busca para ver todas as matérias."
          actionLabel="Ver todas as disciplinas"
          actionTo="/app/estudos"
        />
      )}
    </motion.section>
  );
}

function SubjectPage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  const [loadingSubject, setLoadingSubject] = useState(true);

  if (!subject) return <Navigate to="/app/estudos" replace />;
  const Icon = subject.icon;

  useEffect(() => {
    const t = setTimeout(() => setLoadingSubject(false), 550);
    return () => clearTimeout(t);
  }, [subjectId]);

  return (
    <motion.section {...pageMotion} className="space-y-4 md:space-y-6">
      {loadingSubject ? (
        <div className="space-y-4">
          <div className="panel space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-2.5 w-full" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="panel space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-9 w-full" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
      <div className="panel overflow-hidden p-0">
        <div className="subject-banner bg-gradient-to-r from-white via-brand-50/60 to-violet-50/60 px-4 py-5 md:px-6 md:py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-brand-100 bg-brand-100/80 p-3 text-brand-700">
              <Icon />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Disciplina</p>
              <h2 className="text-2xl font-extrabold">{subject.name}</h2>
              <p className="text-sm leading-6 text-ink-500">{subject.description}</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 border-t border-slate-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-700">Progresso na disciplina</p>
            <p className="text-sm font-bold text-brand-700">{subject.progress}% concluído</p>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${subject.progress}%` }} />
          </div>
          <p className="text-xs text-ink-500">
            Status: {subject.progress >= 60 ? "Bom ritmo de evolução" : "Em desenvolvimento"}
          </p>
        </div>
      </div>

      <h3 className="section-title">Módulos da disciplina</h3>

      <div className="grid gap-3 md:grid-cols-3 md:gap-4">
        <Link to={`/app/disciplinas/${subject.id}/modulo-1`} className="panel panel-hover overflow-hidden border-brand-200 p-0">
          <div className="module-available-head bg-brand-50/70 px-5 py-3">
            <p className="text-xs font-semibold text-brand-700">Disponível agora</p>
            <h3 className="mt-1 font-bold text-ink-900">Módulo 1</h3>
          </div>
          <div className="space-y-4 px-5 py-4">
            <p className="text-sm text-ink-500">Introdução essencial para criar base sólida na disciplina.</p>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-violet-500" />
            </div>
            <button className="btn-soft w-full">Acessar</button>
          </div>
        </Link>
        {["Módulo 2", "Módulo 3"].map((m) => (
          <div key={m} className="panel overflow-hidden p-0 opacity-90">
            <div className="bg-slate-50 px-5 py-3">
              <p className="text-xs font-semibold text-amber-700">Bloqueado</p>
              <h3 className="mt-1 font-bold text-ink-900">{m}</h3>
            </div>
            <div className="space-y-3 px-5 py-4">
              <p className="text-sm text-ink-500">Conteúdo será liberado nas próximas etapas de estudo.</p>
              <p className="flex items-center gap-1 text-xs text-ink-500">
                <Lock size={13} /> Disponível futuramente
              </p>
              <button className="btn-soft w-full" disabled>
                Bloqueado
              </button>
            </div>
          </div>
        ))}
      </div>
      </>
      )}
    </motion.section>
  );
}

function ModulePage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  const moduleData = subjectId ? disciplineContent[subjectId] : null;
  const [loadingModule, setLoadingModule] = useState(true);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("intro");
  const [progressValue, setProgressValue] = useState(66);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [summaryMode, setSummaryMode] = useState("modulo");
  const { showToast } = useToast();
  const siteFeedbackFormUrl = "";
  const allQuestionsAnswered =
    moduleData?.quiz?.length > 0 &&
    moduleData.quiz.every((question) => selectedAnswers[question.id] !== undefined);

  if (!subject || !moduleData) return <Navigate to="/app/estudos" replace />;
  useEffect(() => {
    const t = setTimeout(() => setLoadingModule(false), 700);
    return () => clearTimeout(t);
  }, [subjectId]);

  const sections = [
    { id: "intro", label: "Introdução" },
    { id: "explicacao", label: "Explicação principal" },
    { id: "exemplos", label: "Exemplos" },
    { id: "dicas", label: "Dicas" },
    { id: "revisao", label: "Revisão rápida" },
    { id: "atividade", label: "Atividade" },
  ];

  useEffect(() => {
    if (loadingModule) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loadingModule, subjectId]);

  function goToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  }

  function generateSummary(type) {
    setLoading(true);
    setMessage("");
    setSummaryMode(type);
    const sectionMap = {
      intro: moduleData.intro,
      explicacao: moduleData.explanation,
      exemplos: moduleData.examples.join(" "),
      dicas: moduleData.tips.join(" "),
      revisao: moduleData.review,
      atividade: `Atividade de fixação com ${moduleData.quiz.length} questões sobre ${subject.name}.`,
    };

    setTimeout(() => {
      const targetText =
        type === "seção" ? sectionMap[activeSection] ?? moduleData.summaryBase : moduleData.summaryBase;
      const cleanedText = targetText
        .replace(/\s+/g, " ")
        .replace(/\s([,.!?;:])/g, "$1")
        .trim();
      const chunks = cleanedText
        .split(/(?<=[.!?])\s+/)
        .filter(Boolean);
      const focusLabel =
        type === "seção"
          ? sections.find((s) => s.id === activeSection)?.label || "Seção atual"
          : "Módulo completo";
      const corePoints = chunks.slice(0, 3);
      const quickReview = chunks.slice(0, 2).map((sentence, index) => ({
        question: `Pergunta ${index + 1}`,
        answer: sentence,
      }));

      const reviewPlan = [
        `Releia ${type === "seção" ? `a seção "${focusLabel}"` : "os pontos principais do módulo"} em 5 minutos.`,
        "Explique em voz alta os conceitos sem olhar o texto.",
        "Resolva a miniatividade para validar a fixação.",
      ];

      setSummary({
        title: `${subject.module1.title} - ${focusLabel}`,
        context: type === "seção" ? "Resumo focado na seção atual." : "Resumo geral para revisão rápida.",
        corePoints: corePoints.length ? corePoints : [cleanedText],
        quickReview,
        reviewPlan,
      });
      setLoading(false);
      setMessage("Resumo gerado com sucesso! +5 XP de revisão");
    }, 1400);
  }

  function submitQuiz() {
    if (!allQuestionsAnswered) {
      showToast("Responda todas as questões antes de verificar");
      return;
    }
    setQuizSubmitted(true);
    const total = moduleData.quiz.length;
    const hits = moduleData.quiz.filter((q) => selectedAnswers[q.id] === q.answer).length;
    showToast(`Atividade corrigida: ${hits}/${total} acertos`);
  }

  return (
    <motion.section {...pageMotion} className="space-y-4 md:space-y-6">
      {loadingModule ? (
        <div className="space-y-4">
          <div className="panel space-y-3">
            <Skeleton className="h-5 w-56" />
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-9 w-44" />
          </div>
          <div className="grid gap-4 lg:grid-cols-[220px_1fr_360px]">
            <div className="panel hidden space-y-2 lg:block">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="panel space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
              ))}
            </div>
            <div className="panel space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      ) : (
        <>
      <div className="panel overflow-hidden p-0">
        <div className="module-banner bg-gradient-to-r from-white via-brand-50/60 to-violet-50/60 px-4 py-5 md:px-6 md:py-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Módulo ativo</p>
          <h2 className="mt-1 text-2xl font-extrabold">{subject.module1.title}</h2>
          <p className="mt-1 text-sm text-ink-500">Disciplina: {subject.name}</p>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3 text-sm text-ink-500">
            <BookMarked size={16} />
            <span>Progresso do módulo: {progressValue}%</span>
          </div>
          <div className="h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={false}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.35 }}
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500"
            />
          </div>
          <button
            onClick={() => {
              setCompleted(true);
              setProgressValue(100);
              setMessage("Módulo concluído! Badge 'Foco Total' desbloqueada.");
              showToast("Módulo concluído com sucesso");
            }}
            className="btn-primary w-full gap-2 sm:w-auto"
          >
            <CircleCheckBig size={16} />
            Marcar como concluído
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:gap-4 lg:grid-cols-[220px_minmax(0,1fr)] 2xl:grid-cols-[220px_minmax(0,1fr)_340px]">
        <aside className="panel hidden h-fit lg:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Índice do módulo</p>
          <div className="mt-3 space-y-1.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => goToSection(section.id)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                  activeSection === section.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-600 hover:bg-slate-50 hover:text-ink-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        <div className="min-w-0 space-y-4">
          <div className="module-index-mobile sticky top-[70px] z-10 -mx-1 mb-1 overflow-x-auto bg-slate-50/95 px-1 pb-1 pt-1 backdrop-blur lg:hidden">
            <div className="flex gap-2 pb-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => goToSection(section.id)}
                  className={`whitespace-nowrap rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                    activeSection === section.id ? "border-brand-200 bg-brand-50 text-brand-700" : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <article id="intro" className="panel scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Introdução</p>
            <h3 className="mt-1 text-lg font-bold text-ink-900">Visão geral do módulo</h3>
            <p className="mt-2 text-sm leading-7 text-ink-700">{moduleData.intro}</p>
          </article>

          <article id="explicacao" className="panel scroll-mt-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Explicação principal</p>
              <h3 className="mt-1 text-lg font-bold text-ink-900">Conceitos essenciais</h3>
            </div>
            <p className="mt-2 break-words text-sm leading-7 text-ink-700">{moduleData.explanation}</p>
          </article>

          <article id="exemplos" className="panel scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Exemplos</p>
            <div className="mt-3 space-y-2">
              {moduleData.examples.map((example) => (
                <div key={example} className="study-example-box rounded-xl border border-brand-100 bg-brand-50/50 p-3 text-sm leading-6 text-ink-700">
                  {example}
                </div>
              ))}
            </div>
          </article>

          <article id="dicas" className="panel scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Dicas</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-ink-700">
              {moduleData.tips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </article>

          <article id="revisao" className="panel scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Revisão rápida</p>
            <p className="mt-2 text-sm leading-7 text-ink-700">{moduleData.review}</p>
          </article>

          <article id="atividade" className="panel scroll-mt-24">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
              <CalendarCheck2 size={14} />
              Miniatividade
            </p>
            <div className="mt-3 space-y-4">
              {moduleData.quiz.map((question, index) => (
                <div key={question.id} className="quiz-card rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
                  <p className="text-sm font-semibold text-ink-800">{index + 1}. {question.question}</p>
                  <div className="mt-3 space-y-2">
                    {question.options.map((option, optIndex) => {
                      const selected = selectedAnswers[question.id] === optIndex;
                      const isCorrect = question.answer === optIndex;
                      const showResult = quizSubmitted;
                      return (
                        <button
                          key={option}
                          onClick={() =>
                            setSelectedAnswers((prev) => ({ ...prev, [question.id]: optIndex }))
                          }
                          className={`w-full break-words rounded-lg border px-3 py-2.5 text-left text-sm leading-6 transition ${
                            showResult && isCorrect
                              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                              : showResult && selected && !isCorrect
                              ? "border-rose-300 bg-rose-50 text-rose-700"
                              : selected
                              ? "border-brand-300 bg-brand-50 text-brand-700"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {quizSubmitted && (
                    <p className="mt-2 break-words text-xs leading-5 text-slate-600">
                      Resposta correta: <span className="font-semibold">{question.options[question.answer]}</span>. {question.explanation}
                    </p>
                  )}
                </div>
              ))}

              <button
                onClick={submitQuiz}
                disabled={!allQuestionsAnswered}
                className={`btn-primary w-full sm:w-auto ${allQuestionsAnswered ? "" : "cursor-not-allowed opacity-60"}`}
              >
                Verificar respostas
              </button>
              {quizSubmitted ? (
                <a
                  href={siteFeedbackFormUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (!siteFeedbackFormUrl) {
                      event.preventDefault();
                      showToast("Link de avaliação será adicionado em breve");
                    }
                  }}
                  className="btn-soft w-full sm:w-auto"
                >
                  Avaliar o site
                </a>
              ) : null}
            </div>
          </article>
        </div>

        <aside className="space-y-4 lg:col-span-2 2xl:col-span-1">
          <div className="summary-smart-panel panel border-brand-100 bg-gradient-to-b from-white to-brand-50/50">
            <p className="flex items-center gap-2 text-sm font-bold text-brand-700">
              <WandSparkles size={16} /> Resumo Inteligente
            </p>
            <p className="mt-1 text-xs text-ink-500">Gere revisões rápidas com linguagem clara e objetiva para o ensino médio.</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <button onClick={() => generateSummary("modulo")} className="btn-primary text-xs">
                Resumir módulo
              </button>
              <button onClick={() => generateSummary("seção")} className="btn-soft text-xs">
                Resumir seção
              </button>
            </div>

            {loading && (
              <div className="summary-loading-card mt-4 space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200" />
              </div>
            )}

            {summary && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="summary-result-card mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  <Sparkles size={14} />
                  Resumo gerado ({summaryMode === "seção" ? "seção atual" : "módulo"})
                </p>
                <h4 className="text-sm font-bold text-ink-900">{summary.title}</h4>
                <p className="mt-1 text-xs text-ink-500">{summary.context}</p>

                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Pontos-chave</p>
                  <ul className="mt-2 space-y-1.5 text-xs leading-6 text-ink-700">
                    {summary.corePoints.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Cartoes de revisão</p>
                  <div className="mt-2 space-y-2">
                    {summary.quickReview.map((card) => (
                      <div key={card.question} className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs">
                        <p className="font-semibold text-ink-900">{card.question}</p>
                        <p className="mt-1 text-ink-700">{card.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Plano de 10 minutos</p>
                  <ol className="mt-2 space-y-1.5 text-xs leading-6 text-ink-700">
                    {summary.reviewPlan.map((step) => (
                      <li key={step}>- {step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={async () => {
                      const textToCopy = [
                        summary.title,
                        "",
                        "Pontos-chave:",
                        ...summary.corePoints.map((point) => `- ${point}`),
                        "",
                        "Plano de 10 minutos:",
                        ...summary.reviewPlan.map((step) => `- ${step}`),
                      ].join("\n");
                      await navigator.clipboard.writeText(textToCopy);
                      showToast("Resumo copiado");
                    }}
                    className="btn-soft px-2.5 py-1.5 text-xs"
                  >
                    <Copy size={12} className="mr-1 inline" /> Copiar
                  </button>
                  <button onClick={() => showToast("Resumo salvo")} className="btn-soft px-2.5 py-1.5 text-xs">
                    Salvar
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="panel">
            <p className="text-sm font-bold text-ink-900">Seu ritmo de estudo</p>
            <div className="mt-3 space-y-3">
              <div className="panel-muted">
                <p className="text-xs font-semibold text-ink-500">Sequência</p>
                <p className="mt-1 text-lg font-bold text-ink-900">{currentUser.streak} dias</p>
              </div>
              <div className="panel-muted">
                <p className="text-xs font-semibold text-ink-500">Módulos concluídos</p>
                <p className="mt-1 text-lg font-bold text-ink-900">{currentUser.completedModules}</p>
              </div>
              <div className="panel-muted">
                <p className="text-xs font-semibold text-ink-500">Seção atual</p>
                <p className="mt-1 text-sm font-bold text-ink-800">
                  {sections.find((section) => section.id === activeSection)?.label}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {(completed || message) && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="panel animate-pop-in border-emerald-200 bg-emerald-50 text-emerald-700">
          <p className="flex items-center gap-2 text-sm font-bold">
            <CheckCircle2 size={16} /> {message}
          </p>
          <p className="mt-1 text-xs text-emerald-700/80">Bom trabalho. Você avançou mais um passo na sua jornada.</p>
        </motion.div>
      )}
        </>
      )}
    </motion.section>
  );
}

function ProfilePage() {
  return (
    <motion.section {...pageMotion} className="space-y-5">
      <div className="panel">
        <div className="flex flex-wrap items-center gap-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-16 w-16 rounded-full border border-slate-200" />
          <div>
            <h2 className="text-xl font-extrabold">{currentUser.name}</h2>
            <p className="text-sm text-slate-500">@{currentUser.username}</p>
          </div>
          <button className="btn-soft ml-auto">Editar perfil</button>
        </div>
        <p className="mt-3 text-sm text-ink-700">{currentUser.bio}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="panel-muted text-sm"><strong>{currentUser.followers}</strong> seguidores</div>
          <div className="panel-muted text-sm"><strong>{currentUser.following}</strong> seguindo</div>
          <div className="panel-muted text-sm"><strong>{currentUser.completedModules}</strong> módulos concluídos</div>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="panel">
          <p className="text-sm font-bold">Conquistas</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {currentUser.badges.map((b) => (
              <span key={b} className="pill">{b}</span>
            ))}
          </div>
        </div>
        <div className="panel">
          <p className="text-sm font-bold">Interesses e sequência</p>
          <p className="mt-2 flex items-center gap-1 text-sm text-ink-500"><Flame size={14} /> {currentUser.streak} dias seguidos</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {currentUser.interests.map((i) => (
              <span key={i} className="pill">{i}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function NotificationsPage() {
  return (
    <motion.section {...pageMotion} className="space-y-3">
      <div className="panel">
        <h2 className="flex items-center gap-2 text-lg font-bold"><Bell size={18} /> Notificações</h2>
      </div>
      {notifications.length ? notifications.map((n) => (
        <div key={n} className="panel panel-hover text-sm text-ink-700">{n}</div>
      )) : (
        <EmptyState
          icon={BellOff}
          title="Nenhuma notificação por aqui ainda"
          description="Quando alguém interagir com seus estudos, você verá tudo aqui."
          actionLabel="Voltar ao feed"
          actionTo="/app/feed"
        />
      )}
    </motion.section>
  );
}

function MessagesPage() {
  const [draftMessage, setDraftMessage] = useState("");
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [localConversations, setLocalConversations] = useState(() =>
    messages.map((message) => ({
      ...message,
      unread: message.id === "m1" ? 2 : 0,
      thread: [
        {
          id: `${message.id}-initial`,
          sender: message.with,
          text: message.preview,
          time: message.last,
        },
      ],
    }))
  );

  const activeConversation = useMemo(
    () => localConversations.find((conversation) => conversation.id === activeConversationId) ?? null,
    [activeConversationId, localConversations]
  );

  function openConversation(conversationId) {
    setActiveConversationId(conversationId);
    setLocalConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId ? { ...conversation, unread: 0 } : conversation
      )
    );
  }

  function sendMessage() {
    const text = draftMessage.trim();
    if (!text || !activeConversation) return;

    setLocalConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === activeConversation.id
          ? {
              ...conversation,
              preview: text,
              last: "agora",
              thread: [
                ...conversation.thread,
                {
                  id: `${conversation.id}-${Date.now()}`,
                  sender: currentUser.name,
                  text,
                  time: "agora",
                },
              ],
            }
          : conversation
      )
    );
    setDraftMessage("");
  }

  return (
    <motion.section {...pageMotion} className="space-y-3">
      <div className="panel">
        <h2 className="flex items-center gap-2 text-lg font-bold"><MessageCircle size={18} /> Mensagens</h2>
      </div>
      {localConversations.length ? (
        activeConversation ? (
          <div className="panel">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <button
                onClick={() => setActiveConversationId(null)}
                className="rounded-lg border border-slate-200 bg-white p-1.5 text-ink-600 transition hover:bg-slate-100"
                aria-label="Voltar para lista de conversas"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink-900">{activeConversation.with}</p>
                <p className="text-xs text-ink-500">Chat mockado</p>
              </div>
            </div>

            <div className="mt-3 max-h-[420px] space-y-2 overflow-y-auto pr-1">
              {activeConversation.thread.map((item) => {
                const isMine = item.sender === currentUser.name;
                return (
                  <div
                    key={item.id}
                    className={`max-w-[88%] rounded-xl px-3 py-2 text-sm ${
                      isMine
                        ? "ml-auto bg-brand-600 text-white"
                        : "bg-slate-100 text-ink-800"
                    }`}
                  >
                    <p className="break-words">{item.text}</p>
                    <p className={`mt-1 text-[11px] ${isMine ? "text-white/80" : "text-ink-500"}`}>
                      {item.time}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex gap-2 border-t border-slate-200 pt-3">
              <input
                value={draftMessage}
                onChange={(event) => setDraftMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendMessage();
                }}
                className="input-base"
                placeholder="Digite uma mensagem..."
              />
              <button onClick={sendMessage} className="btn-primary px-4">
                Enviar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {localConversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => openConversation(conversation.id)}
                className="panel panel-hover w-full text-left"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="pr-2 font-semibold text-ink-900">{conversation.with}</p>
                  <div className="flex shrink-0 items-center gap-2">
                    {conversation.unread > 0 ? (
                      <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold text-white">
                        {conversation.unread}
                      </span>
                    ) : null}
                    <p className="text-xs text-ink-500">{conversation.last}</p>
                  </div>
                </div>
                <p className="mt-1 break-words text-sm text-ink-500">{conversation.preview}</p>
              </button>
            ))}
          </div>
        )
      ) : (
        <EmptyState
          icon={MessageSquareOff}
          title="Nenhuma conversa iniciada"
          description="Convide colegas para trocar dúvidas e montar revisões juntos."
          actionLabel="Explorar comunidade"
          actionTo="/app/feed"
        />
      )}
    </motion.section>
  );
}

function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50/70 to-slate-100 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-4 shadow-card md:p-6">
        <p className="text-sm font-semibold text-brand-700">{brand.name}</p>
        <h1 className="mt-1 text-xl font-extrabold md:text-2xl">Entrar na sua conta</h1>
        <p className="text-sm text-ink-500">Acesse seus estudos, feed e progresso.</p>
        <div className="mt-4 space-y-3">
          <input className="input-base" placeholder="E-mail" />
          <input type="password" className="input-base" placeholder="Senha" />
          <button className="btn-primary w-full">Entrar</button>
          <button className="btn-soft w-full">Criar conta</button>
          <button className="btn-soft w-full">Continuar com Google</button>
          <button className="w-full text-xs text-ink-500 transition hover:text-brand-700">Recuperar senha</button>
          <Link to="/app/feed" className="block text-center text-xs font-semibold text-brand-700">
            Acessar versão demonstrativa
          </Link>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }) {
  return (
    <section className="panel">
      <h2 className="text-lg font-extrabold">{title}</h2>
      <p className="mt-2 text-sm text-ink-500">Essa área mockada foi preparada para expansão na apresentação do projeto.</p>
      <div className="mt-3 rounded-xl bg-slate-50 p-3 text-xs text-ink-500">
        Recomendação: conectar com API real para persistência de dados.
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  const hideGlobalRightPanel =
    /\/app\/disciplinas\/[^/]+$/.test(location.pathname) ||
    /\/app\/disciplinas\/[^/]+\/modulo-1$/.test(location.pathname);
  const [themeOverride, setThemeOverride] = useState(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("themeOverride");
  });
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const resolvedTheme = themeOverride || systemTheme;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (themeOverride) {
      localStorage.setItem("themeOverride", themeOverride);
    } else {
      localStorage.removeItem("themeOverride");
    }
  }, [themeOverride]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  function toggleTheme() {
    setThemeOverride((prev) => {
      const active = prev || systemTheme;
      return active === "dark" ? "light" : "dark";
    });
  }

  return (
    <ToastProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/app/feed" replace />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/app/*"
            element={
              <AppShell
                resolvedTheme={resolvedTheme}
                toggleTheme={toggleTheme}
                showRightPanel={!hideGlobalRightPanel}
              >
                <Routes>
                  <Route path="feed" element={<FeedPage />} />
                  <Route path="explorar" element={<PlaceholderPage title="Explorar" />} />
                  <Route path="estudos" element={<StudiesPage />} />
                  <Route path="disciplinas/:subjectId" element={<SubjectPage />} />
                  <Route path="disciplinas/:subjectId/modulo-1" element={<ModulePage />} />
                  <Route path="perfil" element={<ProfilePage />} />
                  <Route path="notificacoes" element={<NotificationsPage />} />
                  <Route path="mensagens" element={<MessagesPage />} />
                  <Route path="salvos" element={<PlaceholderPage title="Salvos" />} />
                  <Route path="progresso" element={<PlaceholderPage title="Progresso" />} />
                  <Route path="*" element={<Navigate to="feed" replace />} />
                </Routes>
              </AppShell>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </ToastProvider>
  );
}
