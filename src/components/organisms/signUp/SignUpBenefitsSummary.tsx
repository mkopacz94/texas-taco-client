import CheckText from '@/components/molecules/signUp/CheckText';

const SignUpBenefitsSummary = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <CheckText text='Zapisz preferencje i adres zamówień' />
      <CheckText text='Wyświetlaj historię zamówień' />
      <CheckText text='Oszczędzaj więcej z nagrodami tylko dla zarejestrowanych użytkowników' />
    </div>
  );
};

export default SignUpBenefitsSummary;
