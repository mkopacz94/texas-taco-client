import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import InputWithLabel from '@/components/molecules/InputWithLabel';
import { useForm } from 'react-hook-form';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
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
          label='Adres e-mail'
          {...register('email', {
            required: 'Wartość w polu jest wymagana',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Nieprawidłowy adres e-mail',
            },
          })}
          error={errors.email?.message}
        />
        <InputWithLabel
          label='Hasło'
          type='password'
          {...register('password', {
            required: 'Hasło jest wymagane',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              message:
                'Hasło musi mieć minimum 8 znaków, zawierać dużą literę, cyfrę i znak specjalny',
            },
          })}
          error={errors.password?.message}
        />
        <InputWithLabel
          label='Powtórz hasło'
          type='password'
          {...register('confirmPassword', {
            required: 'Powtórz hasło jest wymagane',
            validate: (value) =>
              value === passwordValue || 'Hasła nie są takie same',
          })}
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button disabled={Object.keys(errors).length > 0}>
        <Typography weight='medium'>Utwórz konto</Typography>
      </Button>
    </form>
  );
};

export default SignUpForm;
