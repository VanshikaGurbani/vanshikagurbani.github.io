"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <ChevronDown className="w-6 h-6 text-muted" />
    </div>
  );
}
