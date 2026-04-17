import { Button } from '@/components/atoms/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Typography from '../atoms/Typography';

const BackToHomeButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button onClick={() => navigate('/')}>
      <Typography weight='medium'>{t('verifyPage.backToHome')}</Typography>
    </Button>
  );
};

export default BackToHomeButton;
