import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  return (
    <div
      className={`
      bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6
      ${
        hover
          ? "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          : ""
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Card;
