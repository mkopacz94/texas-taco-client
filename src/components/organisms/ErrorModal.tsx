import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose?: () => void;
}

export interface ErrorModalData {
  title: string;
  message: string;
}

const ErrorModal: FC<ErrorModalProps> = ({
  isOpen,
  title,
  message,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
        <div className='bg-white p-6 m-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center'>
          <div className='w-14 h-14 bg-red-200 rounded-full flex items-center justify-center'>
            <X className='w-8 h-8 text-red-500' />
          </div>
          <Typography className='mt-6' size='xl' weight='bold'>
            {title}
          </Typography>
          <Typography className='mt-6'>{message}</Typography>
          <Button
            className='w-full mt-8'
            variant='destructive'
            onClick={onClose}
          >
            {t('common.close')}
          </Button>
        </div>
      </div>
    )
  );
};

export default ErrorModal;
