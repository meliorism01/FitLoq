import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  success: <CheckCircle size={20} />,
  error: <AlertCircle size={20} />,
  info: <Info size={20} />,
};

function Toast({
  open,
  type = "info",
  message,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed right-6 top-6 z-50 flex min-w-[320px] items-center justify-between rounded-2xl bg-white p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span>{icons[type]}</span>

            <p className="text-sm font-medium">
              {message}
            </p>
          </div>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;