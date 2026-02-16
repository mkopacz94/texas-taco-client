import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import InputWithLabel from '@/components/molecules/InputWithLabel';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { t } = useTranslation();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const passwordValue = watch('password');

  return (
    <form className='flex flex-col space-y-8'>
      <Typography weight='medium' size='2xl'>
        REJESTRACJA
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

      <Button disabled={Object.keys(errors).length > 0}>
        <Typography weight='medium'>{t('signUpPage.createAccount')}</Typography>
      </Button>
    </form>
  );
};

export default SignUpForm;
