import { Separator } from '@/components/atoms/Separator';
import TextButton from '@/components/atoms/TextButton';
import { SIGN_UP_PATH } from '@/constants/paths';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SignInButton from '../signIn/SignInButton';
import LanguageSwitch from '@/components/molecules/localization/LanguageSwitch';
import { useAuthContext } from '@/hooks/useAuthContext';
import Typography from '@/components/atoms/Typography';

interface UserMenuProps {
  className?: string;
  onClose?: () => void;
}

const UserMenu: FC<UserMenuProps> = ({ className, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loggedUser } = useAuthContext();

  const handleSignInClick = () => {
    navigate(SIGN_UP_PATH);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`${className} flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 items-center justify-center`}
    >
      {loggedUser ? (
        <Typography>Zalogowany</Typography>
      ) : (
        <>
          <SignInButton onSignUpClicked={onClose} onSignedIn={onClose} />
          <Separator orientation='vertical' className='hidden lg:block' />
          <TextButton
            text={t('navigation.signUp')}
            className='hover:text-amber-500 transition duration-150'
            onClick={handleSignInClick}
          />
        </>
      )}

      <LanguageSwitch className='lg:-mt-0.5 lg:ml-2' />
    </div>
  );
};

export default UserMenu;
