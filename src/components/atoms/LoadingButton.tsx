import { Button } from './Button';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/loading_indicator.json';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading,
  disabled,
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <Button
      className={className}
      disabled={isLoading || disabled}
      variant={variant}
      size={size}
      {...props}
    >
      {isLoading ? (
        // <Loader2 style={{ width: 20, height: 20 }} className='animate-spin' />
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          style={{ width: 200 }}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
