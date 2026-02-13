import { Input } from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

interface InputWithLabelProperties extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
  suffix?: string;
}
const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProperties
>(({ className, label, error, suffix, ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <Typography color='text-neutral-800' size='sm'>
        {label}
      </Typography>
      <div className='relative w-full'>
        <Input
          {...props}
          ref={ref}
          aria-invalid={!!error}
          className={`mt-1 ${error ? 'border-2 border-red-500' : ''}`}
        />
        {suffix && (
          <Typography
            size='sm'
            className='absolute right-3 top-1/2 mt-0.5 transform -translate-y-1/2 text-gray-400 pointer-events-none'
          >
            {suffix}
          </Typography>
        )}
      </div>

      {error && (
        <Typography weight='medium' className='text-red-500 mt-2' size='xs'>
          {error}
        </Typography>
      )}
    </div>
  );
});

export default InputWithLabel;
