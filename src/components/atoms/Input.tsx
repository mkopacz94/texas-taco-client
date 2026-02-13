import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        // 🎨 Colors
        'file:text-foreground placeholder:text-muted-foreground',
        'selection:bg-amber-400 selection:text-neutral-800',
        'border-neutral-300 dark:bg-input/30',

        // 🔥 Focus / ring
        'focus-visible:ring-[3px] focus-visible:ring-neutral-200 focus-visible:border-neutral-300',
        'aria-invalid:border-red-300',
        'aria-invalid:ring-red-200',

        // 📐 Layout / sizing
        'h-9 w-full min-w-0 rounded-md border px-3 py-1',

        // 🧾 Typography
        'text-base md:text-sm',

        // 🧩 Background / appearance
        'bg-transparent shadow-xs outline-none',

        // 🔄 Transitions
        'transition-[color,box-shadow]',

        // 📎 File input styling
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',

        // 🚫 Disabled state
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

        className,
      )}
      {...props}
    />
  );
}

export { Input };
