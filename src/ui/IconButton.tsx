import React from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
}