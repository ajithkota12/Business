import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

const config: Record<AlertType, { icon: React.FC<{ className?: string }>; classes: string }> = {
  success: { icon: CheckCircle, classes: 'bg-green-50 border-green-200 text-green-800' },
  error: { icon: XCircle, classes: 'bg-red-50 border-red-200 text-red-800' },
  info: { icon: Info, classes: 'bg-blue-50 border-blue-200 text-blue-800' },
  warning: { icon: AlertCircle, classes: 'bg-amber-50 border-amber-200 text-amber-800' },
};

export default function Alert({ type, title, message, onClose, className = '' }: AlertProps) {
  const { icon: Icon, classes } = config[type];
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${classes} ${className}`}>
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-current opacity-60 hover:opacity-100 transition-opacity">
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
