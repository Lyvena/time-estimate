import React from 'react';
import { Clock, Timer } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Clock className="h-8 w-8 text-white" />
        <Timer className="h-4 w-4 text-blue-200 absolute -bottom-1 -right-1" />
      </div>
      <span className="font-bold text-xl">TimeWise</span>
    </div>
  );
};