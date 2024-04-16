import { Dialog, DialogProps, IconButton, Typography } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useAllMQ } from '../hooks/useAllMQ';

export type EnhancedReason = 'closeButton' | 'backdropClick' | 'escapeKeyDown';

export interface IQModalProps extends Omit<DialogProps, 'onClose'> {
  title?: string;
  hideHeader?: boolean;
  onClose?: (reason?: EnhancedReason) => void;
}

/**
 * Кастомная модалка с заголовком и кнопкой закрыть. Использует компонент Dialog из MUI.
 *
 * @param title заголовок
 * @param hideHeader скрыть шапку
 */
export const QModal: React.FC<IQModalProps> = (props) => {
  const { title, hideHeader, children, classes: dialogClasses, onClose, ...rest } = props;

  const { classes, cx } = useStyles();
  const { isSM } = useAllMQ();

  // Handlers

  const handleClose = () => {
    onClose && onClose('closeButton');
  };

  // Renders

  return (
    <Dialog
      classes={{ ...dialogClasses, paper: cx(classes.paper, dialogClasses?.paper) }}
      onClose={() => handleClose()}
      scroll="body"
      {...rest}
    >
      {!hideHeader && (
        <div className={classes.modalHeader}>
          <Typography component="h2" variant={isSM ? 'subtitle1' : 'h6'} fontWeight={500}>
            {title}
          </Typography>

          <IconButton size={isSM ? 'small' : 'medium'} onClick={handleClose}>
            <X />
          </IconButton>
        </div>
      )}

      {children}
    </Dialog>
  );
};

const useStyles = makeStyles()((theme) => ({
  paper: {
    maxWidth: 'unset',
    maxHeight: `calc(100% - ${theme.spacing(8)})`,
    margin: theme.spacing(4),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      '&, &.MuiDialog-paperScrollBody': {
        maxWidth: `calc(100% - ${theme.spacing(6)})`,
        maxHeight: `calc(100% - ${theme.spacing(6)})`,
        margin: theme.spacing(3),
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&, &.MuiDialog-paperScrollBody': {
        maxWidth: `calc(100% - ${theme.spacing(4)})`,
        maxHeight: `calc(100% - ${theme.spacing(4)})`,
        margin: theme.spacing(2),
      },
    },
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 3, 3, 4),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2, 2, 2, 3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5, 1.5, 1.5, 2),
    },
  },
}));
