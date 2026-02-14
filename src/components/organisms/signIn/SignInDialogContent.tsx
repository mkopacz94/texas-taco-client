import SignUpBenefitsSummary from '../signUp/SignUpBenefitsSummary';
import SignUpForm from '../signUp/SignUpForm';

const SignInDialogContent = () => {
  return (
    <div className='m-4 flex'>
      <div className='lg:w-80'>
        <SignUpForm />
      </div>
      <div className='lg:w-80'>
        <SignUpBenefitsSummary />
      </div>
    </div>
  );
};

export default SignInDialogContent;
