import { type FC } from 'react';
import Typography from './Typography';

export interface TextButtonProps {
  text: string;
  size?: TextButtonSize;
  className?: string;
  onClick?: () => void;
}

export type TextButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

const TextButton: FC<TextButtonProps> = ({
  text,
  size = 'base',
  className,
  onClick,
}) => {
  const sizeClass = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  return (
    <Typography
      className={`${sizeClass[size]} ${className} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </Typography>
  );
};

export default TextButton;
