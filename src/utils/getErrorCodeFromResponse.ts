export const getErrorCodeFromResponse = (error: unknown) => {
  return (error as any)?.response?.data?.errorCode ?? 'unknown_error_code';
};
