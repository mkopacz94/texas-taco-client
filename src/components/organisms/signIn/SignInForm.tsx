import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import InputWithLabel from '@/components/molecules/InputWithLabel';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { useState, type FC, type FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface SignInFormData {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSignedIn?: () => void;
}

const SignInForm: FC<SignInFormProps> = ({ onSignedIn }) => {
  const { t } = useTranslation();
  const { login } = useAuthContext();

  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const {
    register,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInMutation.mutateAsync(formData);
  };

  const signInMutation = useMutation({
    mutationFn: async ({ email, password }: SignInFormData) => {
      return login(email, password);
    },
    onSuccess: () => {
      if (onSignedIn) {
        onSignedIn();
      }
    },
    onError: (error) => console.error(error),
  });

  return (
    <form className='flex flex-col space-y-8' onSubmit={handleFormSubmit}>
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
        />
      </div>

      <Button type='submit' disabled={Object.keys(errors).length > 0}>
        <Typography weight='medium'>{t('signInPage.logIn')}</Typography>
      </Button>
    </form>
  );
};

export default SignInForm;
