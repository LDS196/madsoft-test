import { LoadingButton } from '@mui/lab';
import { Button, Stack, Typography, TypographyProps } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { IQModalProps, QModal } from './QModal';

interface IConfirmModalProps extends IQModalProps {
  onDisagree: () => void;
  onAgree: () => void;
  loading?: boolean;
  desc?: string;
  titleProps?: TypographyProps;
}

export const ConfirmModal: React.FC<IConfirmModalProps> = (props) => {
  const { open, title, desc, titleProps, loading, onDisagree, onAgree, children, ...rest } = props;

  const [localMessage, setLocalMessage] = useState<string>('');

  const { classes } = useStyles();

  // Effects

  useEffect(() => {
    if (open && desc) {
      setLocalMessage(desc);
      return;
    }

    setTimeout(() => {
      setLocalMessage('');
    }, 225); // дожидаемся закрытия модалки
  }, [open, desc]);

  // Renders

  return (
    <QModal open={open} hideHeader classes={{ paper: classes.paper }} {...rest} onClose={onDisagree}>
      {!!title && (
        <Typography mb={2} variant="h6" {...titleProps}>
          {title}
        </Typography>
      )}
      {!!localMessage && <Typography mt={1}>{localMessage}</Typography>}

      {children}

      <Stack direction="row" spacing={1} justifyContent="flex-end" mt={3}>
        <Button variant="outlined" color="inherit" disabled={loading} onClick={onDisagree}>
          нет
        </Button>

        <LoadingButton variant="contained" color="primary" loading={loading} onClick={onAgree}>
          да
        </LoadingButton>
      </Stack>
    </QModal>
  );
};

const useStyles = makeStyles()((theme) => ({
  paper: {
    width: 450,
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  },
}));
