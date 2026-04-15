import i18next from 'i18next';

export const getErrorMessage = (errorCode?: string) => {
  if (!errorCode) {
    return i18next.t('errors.unknown_error');
  }

  return i18next.t(`errors.${errorCode}`, {
    defaultValue: i18next.t('errors.unknown_error'),
  });
};
