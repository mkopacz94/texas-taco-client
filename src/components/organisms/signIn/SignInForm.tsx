import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import InputWithLabel from '@/components/molecules/InputWithLabel';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  return (
    <form className='flex flex-col space-y-8'>
      <Typography weight='medium' size='2xl'>
        {t('signInPage.signIn').toUpperCase()}
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
      </div>

      <Button disabled={Object.keys(errors).length > 0}>
        <Typography weight='medium'>{t('signInPage.logIn')}</Typography>
      </Button>
    </form>
  );
};

export default SignInForm;
