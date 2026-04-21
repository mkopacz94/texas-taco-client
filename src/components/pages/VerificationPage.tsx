import loadingAnimation from '@/assets/animations/loading_indicator.json';
import api from '@/lib/axios';
import { getErrorCodeFromResponse } from '@/utils/getErrorCodeFromResponse';
import { getErrorMessage } from '@/utils/translateErrorCode';
import { useMutation } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import { CircleCheck, CircleX } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Typography from '../atoms/Typography';
import BackToHomeButton from '../molecules/BackToHomeButton';

const VerificationPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const verifyMutation = useMutation({
    mutationFn: async (token: string) =>
      await api.post('/v1/auth/verify', null, { params: { token } }),
  });

  useEffect(() => {
    const run = async () => {
      if (!token) return;

      try {
        await verifyMutation.mutateAsync(token);
      } catch (err) {
        // optional extra handling (React Query already tracks error state)
        console.error(err);
      }
    };

    run();
  }, [token, verifyMutation]);

  return (
    <div className='flex justify-center items-center h-dvh -mt-4'>
      {verifyMutation.isPending && (
        <div className='flex-col'>
          <Typography size='xl'>
            {t('verifyPage.verificationPending')}
          </Typography>
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ width: 200 }}
            className='-mt-5'
          />
        </div>
      )}

      {verifyMutation.isSuccess && (
        <div className='flex flex-col items-center space-y-8'>
          <CircleCheck size={96} className='text-green-500' />
          <div className='flex flex-col items-center space-y-4'>
            <Typography size='xl'>
              {' '}
              {t('verifyPage.accountVerification')}
            </Typography>
            <Typography> {t('verifyPage.success')}</Typography>
          </div>

          <BackToHomeButton />
        </div>
      )}

      {verifyMutation.isError && (
        <div className='flex flex-col items-center space-y-8'>
          <CircleX size={96} className='text-red-500' />
          <div className='flex flex-col items-center space-y-4'>
            <Typography size='xl'>{t('verifyPage.failed')}</Typography>
            <Typography>
              {getErrorMessage(getErrorCodeFromResponse(verifyMutation.error))}
            </Typography>
          </div>

          <BackToHomeButton />
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
