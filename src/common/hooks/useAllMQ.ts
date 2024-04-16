import { useMediaQuery, useTheme } from '@mui/material';

export const useAllMQ = () => {
  const theme = useTheme();

  return {
    isSM: useMediaQuery(theme.breakpoints.down('sm')),
    isMD: useMediaQuery(theme.breakpoints.down('md')),
    isLG: useMediaQuery(theme.breakpoints.down('lg')),
    isXL: useMediaQuery(theme.breakpoints.down('xl')),
  };
};
