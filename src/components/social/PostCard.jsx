import { useState } from "react";
import { Bookmark, Heart, MessageSquare, Repeat2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "../ui/Toast";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const { showToast } = useToast();

  return (
    <article className="panel panel-hover animate-fade-in px-5 py-4">
      <div className="flex items-start gap-3">
        <img src={post.avatar} alt={post.user} className="h-11 w-11 rounded-full border border-slate-200 bg-slate-100 object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <p className="font-semibold text-ink-900">{post.user}</p>
            <p className="text-ink-500">@{post.username}</p>
            <span className="text-slate-300">•</span>
            <p className="text-xs text-slate-400">{post.time}</p>
          </div>
          <p className="mt-2 text-sm leading-7 text-ink-700">{post.text}</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-ink-500">
            <button
              onClick={() => {
                setLiked((v) => !v);
                showToast(liked ? "Curtida removida" : "Post curtido");
              }}
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition active:scale-95 ${
                liked ? "bg-rose-50 text-rose-500" : "hover:bg-rose-50 hover:text-rose-500"
              }`}
            >
              <motion.span animate={liked ? { scale: [1, 1.2, 1] } : { scale: 1 }} transition={{ duration: 0.2 }}>
                <Heart size={15} fill={liked ? "currentColor" : "none"} />
              </motion.span>
              {post.likes + (liked ? 1 : 0)}
            </button>
            <button
              onClick={() => showToast("Comentários abertos em breve")}
              className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition hover:bg-brand-50 hover:text-brand-600"
            >
              <MessageSquare size={15} />
              {post.comments}
            </button>
            <button
              onClick={() => showToast("Post compartilhado")}
              className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Repeat2 size={15} />
              {post.shares}
            </button>
            <button
              onClick={() => {
                setSaved((v) => !v);
                showToast(saved ? "Post removido dos salvos" : "Post salvo");
              }}
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition ${
                saved ? "bg-amber-50 text-amber-600" : "hover:bg-amber-50 hover:text-amber-600"
              }`}
            >
              <Bookmark size={15} fill={saved ? "currentColor" : "none"} />
              {post.saves + (saved ? 1 : 0)}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
