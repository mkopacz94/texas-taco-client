import { Button } from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import SignUpBenefitsSummary from '../organisms/signUp/SignUpBenefitsSummary';
import signUpImage from '@/assets/images/signUpImage.png';

const SignUpPage = () => {
  return (
    <div className='grid md:grid-cols-2 gap-16 grid-cols-1 pt-8'>
      <div className='flex md:justify-end justify-center'>
        <div className='w-110 space-y-8'>
          <Typography
            size='2xl'
            weight='medium'
            className='text-center md:text-start'
          >
            ZAMAWIAJ JESZCZE SZYBCIEJ Z KONTEM TEXAS TACO
          </Typography>
          <img src={signUpImage} className='h-fit' />
          <SignUpBenefitsSummary />
        </div>
      </div>
      <div className='flex flex-col self-start justify-center w-110 md:justify-start p-12 shadow-lg rounded-2xl'>
        <div className='flex flex-col space-y-8'>
          <Typography weight='medium' size='2xl'>
            REJESTRACJA
          </Typography>
          <div className='flex flex-col space-y-8'>
            <Typography weight='medium'>TUTAJ BĘDZIE POLE DO MAILA</Typography>
            <Typography weight='medium'>TUTAJ BĘDZIE POLE DO HASŁA</Typography>
            <Typography weight='medium'>
              TUTAJ BĘDZIE POLE DO POWTÓRZENIA HASŁA
            </Typography>
          </div>

          <Button>
            <Typography weight='medium'>Utwórz konto</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
