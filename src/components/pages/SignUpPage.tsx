import signUpImage from '@/assets/images/signUpImage.png';
import Typography from '@/components/atoms/Typography';
import SignUpBenefitsSummary from '../organisms/signUp/SignUpBenefitsSummary';
import SignUpForm from '../organisms/signUp/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-16 grid-cols-1 py-8'>
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
      <div className='flex self-start justify-center md:justify-start'>
        <div className='w-110 p-12 shadow-lg rounded-2xl'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
