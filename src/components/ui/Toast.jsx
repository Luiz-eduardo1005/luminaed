import { createContext, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ToastContext = createContext({ showToast: () => {} });

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function showToast(message) {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2100);
  }

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-20 right-4 z-[80] space-y-2 md:bottom-5">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="toast-card panel pointer-events-auto flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2.5 shadow-lg"
            >
              <CheckCircle2 size={15} className="text-emerald-600" />
              <p className="text-xs font-semibold text-slate-700">{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
