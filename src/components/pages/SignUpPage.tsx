import SignUpBenefitsSummary from '@/components/organisms/signUp/SignUpBenefitsSummary';
import SignUpForm from '@/components/organisms/signUp/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-16 grid-cols-1 py-8'>
      <div className='flex md:justify-end justify-center'>
        <div className='w-3/4 sm:w-110'>
          <SignUpBenefitsSummary />
        </div>
      </div>
      <div className='flex self-start justify-center md:justify-start'>
        <div className='w-110 p-12 shadow-lg rounded-2xl bg-white'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
