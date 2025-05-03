import React from "react";
import { IconButton } from "./IconButton";

type BadgeIconProps = {
  icon: React.ReactNode;
  label: string;
  count: number;
};

export function BadgeIcon({ icon, label, count }: BadgeIconProps) {
  return (
    <div className="relative">
      <IconButton icon={icon} label={label} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex w-[13px] h-[13px] md:h-[16px] md:w-[16px] items-center justify-center rounded-full bg-primary text-[8px] md:text-[10px] text-white">
          {count}
        </span>
      )}
    </div>
  );
}