import Avatar from '@mui/material/Avatar';
import useTheme from '@mui/material/styles/useTheme';

export enum Status {
  Success,
  Warning,
  Error,
  None
}

export interface StatusCircleProps {
  status: Status;
}

export const StatusCircle = ({ status }: StatusCircleProps) => {
  const theme = useTheme();

  let bgcolor = theme.palette.grey[400];
  let darkerBgColor = theme.palette.grey[800];

  switch (status) {
    case Status.Success:
      bgcolor = theme.palette.success.main;
      darkerBgColor = theme.palette.success.dark;
      break;
    case Status.Warning:
      bgcolor = theme.palette.warning.main;
      darkerBgColor = theme.palette.warning.dark;
      break;
    case Status.Error:
      bgcolor = theme.palette.error.main;
      darkerBgColor = theme.palette.error.dark;
      break;
  }

  return (
    <Avatar
      sx={{ background: `linear-gradient(${bgcolor}, ${darkerBgColor})`, width: 25, height: 25 }}>
      {' '}
    </Avatar>
  );
};
