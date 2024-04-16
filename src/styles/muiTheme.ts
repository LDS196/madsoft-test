import { autocompleteClasses, buttonBaseClasses, createTheme } from '@mui/material';

import { palette } from './palette';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette,
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 375,
        },
        main: {
          flex: '1 0 auto',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        img: {
          height: 'auto',
          maxWidth: '100%',
        },
        '.router-link': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        text: {
          transition: 'all .3s ease',
          '&:hover': {
            color: '',
          },
        },
        colorInherit: {
          color: 'rgba(0, 0, 0, 0.6)',
          borderColor: 'rgba(0, 0, 0, 0.6)',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'block',
          marginBottom: 8,
          // если используется вне инпута
          ':not(.MuiInputLabel-root)': {
            color: palette.text?.primary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        adornedStart: {
          paddingLeft: 10,
          [`& .${buttonBaseClasses.root}`]: {
            marginLeft: -8,
          },
        },
        adornedEnd: {
          paddingRight: 10,
          [`& .${buttonBaseClasses.root}:not(.${autocompleteClasses.clearIndicator}, .${autocompleteClasses.popupIndicator})`]:
            {
              marginRight: -8,
            },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          lineHeight: 1.3,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          textAlign: 'center',
          padding: '5px 8px 3px',
        },
      },
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          zIndex: 100,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          minWidth: 10,
          height: 10,
          borderRadius: 5,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
