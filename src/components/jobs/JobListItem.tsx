import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { Status, StatusCircle } from '../library/StatusAvatar';

export interface JobListItemProps {
  job: any;
}

export const JobListItem = ({ job }: JobListItemProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/jobs/${job.id}`)}>
      <Stack direction='row' alignItems='center' flex={1}>
        <Box sx={{ mr: 3 }}>
          <StatusCircle status={Status.Success} />
        </Box>
        <Stack direction='row' alignItems='flex-start' justifyContent='space-between' flex={1}>
          <Stack flex={1}>
            <Typography variant='subtitle1'>{job.address}</Typography>
            <Typography variant='subtitle2'>{job.status}</Typography>
          </Stack>
          <ChevronRightIcon sx={{ color: 'grey.600' }} />
        </Stack>
      </Stack>
    </Card>
  );
};
