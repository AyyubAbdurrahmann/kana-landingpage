"use client";

import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
  style,
  onClick,
  children,
  type = "button",
  startIcon,
  endIcon,
}) => {
  // Handle click event
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    border
    ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${fullWidth ? "w-full" : ""}
    ${loading ? "relative" : ""}
  `;

  // Size variations
  const sizeClasses = {
    xs: "px-2 py-1 text-xs gap-1",
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
    xl: "px-8 py-4 text-lg gap-3",
  };

  // Variant styles
  const variantClasses = {
    primary: `
      bg-[#4EC0E6] text-white border-[#4EC0E6]
      hover:bg-[#3aa8cc] hover:border-[#3aa8cc] hover:shadow-lg hover:-translate-y-0.5
      focus:ring-[#4EC0E6]
      active:transform active:translate-y-0
    `,
    secondary: `
      bg-gray-100 text-gray-800 border-gray-200
      hover:bg-gray-200 hover:border-gray-300 hover:shadow-md
      focus:ring-gray-500
    `,
    outline: `
      bg-transparent text-[#4EC0E6] border-[#4EC0E6]
      hover:bg-[#4EC0E6] hover:text-white hover:shadow-lg
      focus:ring-[#4EC0E6]
    `,
    ghost: `
      bg-transparent text-gray-700 border-transparent
      hover:bg-gray-100 hover:text-gray-900
      focus:ring-gray-500
    `,
    danger: `
      bg-red-500 text-white border-red-500
      hover:bg-red-600 hover:border-red-600 hover:shadow-lg
      focus:ring-red-500
    `,
  };

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  // Loading spinner
  const LoadingSpinner = () => (
    <svg
      className={`animate-spin ${
        size === "xs"
          ? "w-3 h-3"
          : size === "sm"
          ? "w-4 h-4"
          : size === "lg"
          ? "w-5 h-5"
          : size === "xl"
          ? "w-6 h-6"
          : "w-4 h-4"
      }`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedClasses}
      style={style}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          <span className="ml-1">Loading...</span>
        </>
      ) : (
        <>
          {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;

// Contoh penggunaan untuk dokumentasi
export const ButtonExamples: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const UserIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Button Component Examples</h2>

      {/* Variants */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary
          </Button>
          <Button variant="outline" onClick={handleClick}>
            Outline
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Ghost
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="xs" onClick={handleClick}>
            Extra Small
          </Button>
          <Button size="sm" onClick={handleClick}>
            Small
          </Button>
          <Button size="md" onClick={handleClick}>
            Medium
          </Button>
          <Button size="lg" onClick={handleClick}>
            Large
          </Button>
          <Button size="xl" onClick={handleClick}>
            Extra Large
          </Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button startIcon={<UserIcon />} onClick={handleClick}>
            Daftar
          </Button>
          <Button endIcon={<ArrowIcon />} onClick={handleClick}>
            Next
          </Button>
          <Button
            variant="outline"
            startIcon={<UserIcon />}
            onClick={handleClick}
          >
            Login
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleClick}>Normal</Button>
          <Button loading onClick={handleClick}>
            Loading
          </Button>
          <Button disabled onClick={handleClick}>
            Disabled
          </Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Full Width</h3>
        <Button fullWidth startIcon={<UserIcon />} onClick={handleClick}>
          Daftar Sekarang
        </Button>
      </div>

      {/* Navbar Examples */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Navbar Usage Examples</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-3">Desktop navbar:</p>
          <Button size="md" onClick={handleClick}>
            Daftar
          </Button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-3">Mobile sidebar:</p>
          <Button
            fullWidth
            size="lg"
            startIcon={<UserIcon />}
            onClick={handleClick}
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};
