const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500",
    secondary:
      "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500",
    ghost:
      "text-slate-300 hover:text-white hover:bg-slate-800 focus:ring-slate-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
