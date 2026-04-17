import { CircleCheck, CircleX } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../atoms/Button';
import Typography from '../atoms/Typography';
import { useMutation } from '@tanstack/react-query';
import api from '@/lib/axios';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/loading_indicator.json';
import { getErrorCodeFromResponse } from '@/utils/getErrorCodeFromResponse';
import { getErrorMessage } from '@/utils/translateErrorCode';
import { useTranslation } from 'react-i18next';

const VerificationPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

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
  }, [token]);

  const verifyMutation = useMutation({
    mutationFn: async (token: string) =>
      await api.post('/v1/auth/verify', null, { params: { token } }),
  });

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

          <Button>
            <Typography weight='medium'>
              {' '}
              {t('verifyPage.backToHome')}
            </Typography>
          </Button>
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

          <Button onClick={() => navigate('/')}>
            <Typography weight='medium'>
              {t('verifyPage.backToHome')}
            </Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
