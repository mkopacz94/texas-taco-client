import Typography from '@/components/atoms/Typography';
import { Check } from 'lucide-react';
import type { FC } from 'react';

interface CheckTextProps {
  text: string;
}

const CheckText: FC<CheckTextProps> = ({ text }) => {
  return (
    <div className='flex items-start space-x-3'>
      <Check
        strokeWidth={4}
        size={14}
        color='#f59e0b'
        className='mt-1 shrink-0'
      />
      <Typography size='sm' weight='medium'>
        {text}
      </Typography>
    </div>
  );
};

export default CheckText;
