import { Dialog, DialogContent } from '@/components/atoms/Dialog';
import LoadingButton from '@/components/atoms/LoadingButton';
import Typography from '@/components/atoms/Typography';
import InputWithLabel from '@/components/molecules/InputWithLabel';
import ErrorModal, {
  type ErrorModalData,
} from '@/components/organisms/ErrorModal';
import api from '@/lib/axios';
import type { ApiError } from '@/types/common/ApiError';
import { getErrorMessage } from '@/utils/translateErrorCode';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import SignUpSucceededDialogContent from './SignUpSucceededDialogContent';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { t } = useTranslation();
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isErrorModelOpen, setIsErrorModelOpen] = useState(false);
  const [errorData, setErrorData] = useState<ErrorModalData>({
    title: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const passwordValue = watch('password');

  const signUpMutation = useMutation({
    mutationFn: async ({ email, password }: SignUpFormData) =>
      await api.post('/v1/auth/sign-up', { email, password }),
    onSuccess: () => {
      setIsSuccessDialogOpen(true);
    },
    onError: (error: AxiosError<ApiError>) => {
      setIsErrorModelOpen(true);
      const data = error.response?.data;
      setErrorData({
        title: t('signUpPage.signUpError'),
        message: getErrorMessage(data?.errorCode),
      });
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signUpMutation.mutateAsync(data);
    } catch {
      //Handled in onError
    }
  };

  return (
    <>
      <form
        className='flex flex-col space-y-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography weight='medium' size='2xl'>
          {t('signUpPage.signUp').toUpperCase()}
        </Typography>
        <div className='flex flex-col space-y-4'>
          <InputWithLabel
            label={t('common.emailAddress')}
            {...register('email', {
              required: t('common.formErrors.fieldRequired'),
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: t('auth.formErrors.invalidEmail'),
              },
            })}
            error={errors.email?.message}
          />
          <InputWithLabel
            label={t('auth.password')}
            type='password'
            {...register('password', {
              required: t('common.formErrors.fieldRequired'),
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                message: t('auth.formErrors.invalidPasswordStructure'),
              },
            })}
            error={errors.password?.message}
          />
          <InputWithLabel
            label={t('auth.repeatPassword')}
            type='password'
            {...register('confirmPassword', {
              required: t('common.formErrors.fieldRequired'),
              validate: (value) =>
                value === passwordValue || t('auth.formErrors.passwordsDiffer'),
            })}
            error={errors.confirmPassword?.message}
          />
        </div>

        <LoadingButton
          disabled={Object.keys(errors).length > 0}
          isLoading={signUpMutation.isPending}
        >
          <Typography weight='medium'>
            {t('signUpPage.createAccount')}
          </Typography>
        </LoadingButton>
      </form>
      <ErrorModal
        isOpen={isErrorModelOpen}
        onClose={() => setIsErrorModelOpen(false)}
        title={errorData.title}
        message={errorData.message}
      />
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className='w-[40%] p-10'>
          <SignUpSucceededDialogContent />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignUpForm;
