type AlertProps = {
  message: string;
  type: "success" | "error" | "info" | "warning";
  onClose: () => void;
};

export const Alert = ({ message, type, onClose }: AlertProps) => {
  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };
  return (
    <div className={`relative w-96 p-4 mb-4 rounded ${alertStyles[type]}`}>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white hover:text-gray-300"
      >
        &times;
      </button>
    </div>
  );
};
