import { PaletteOptions } from '@mui/material';

interface CustomPalette {
  background: {
    empty: string;
  };
}

export interface IPaletteOptions extends PaletteOptions {
  custom: CustomPalette;
}

// Использовать только в теме MUI
export const palette: IPaletteOptions = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
  primary: {
    light: '#7099F4',
    main: '#527BCC',
    dark: '#3E67B8',
  },
  secondary: {
    light: '#BA68C8',
    main: '#9C27B0',
    dark: '#7B1FA2',
  },
  info: {
    main: '#012E67',
  },
  background: {
    default: '#f7f7f7',
    paper: '#ffffff',
  },
  error: {
    main: '#D32F2F',
  },
  custom: {
    background: {
      empty: '#BDBDBD',
    },
  },
};
