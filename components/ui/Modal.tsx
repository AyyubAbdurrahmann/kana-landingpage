//components/ui/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Konfirmasi",
  message,
  confirmText = "OK",
  cancelText = "Batal",
  confirmVariant = "primary",
  size = "md",
  showIcon = true,
  children,
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-xs sm:max-w-sm",
    md: "max-w-sm sm:max-w-md lg:max-w-lg",
    lg: "max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl",
  };

  const confirmButtonClasses = {
    primary: "bg-[#4EC0E6] hover:bg-[#3aa8cc] text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  const getIcon = () => {
    switch (confirmVariant) {
      case "success":
        return (
          <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 mb-3 sm:mb-4">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-yellow-100 mb-3 sm:mb-4">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        );
      case "danger":
        return (
          <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-100 mb-3 sm:mb-4">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 mb-3 sm:mb-4">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-[#4EC0E6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-end sm:items-center justify-center p-3 sm:p-4 md:p-6">
        <div
          className={`relative bg-white rounded-t-xl sm:rounded-lg shadow-xl transform transition-all duration-300 w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-4 sm:p-6 pt-12 sm:pt-6">
            {showIcon && getIcon()}

            {title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-center mb-3 sm:mb-4 pr-6 sm:pr-0">
                {title}
              </h3>
            )}

            <div className="text-center mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line px-2 sm:px-0">
                {message}
              </p>
              {children && <div className="mt-3 sm:mt-4">{children}</div>}
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 justify-center px-2 sm:px-0">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4EC0E6] transition-colors duration-200 font-medium order-2 sm:order-1"
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4EC0E6] transition-colors duration-200 font-medium order-1 sm:order-2 ${confirmButtonClasses[confirmVariant]}`}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
