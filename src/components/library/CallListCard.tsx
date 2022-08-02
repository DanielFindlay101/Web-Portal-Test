import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { Box, Stack, Typography } from '@mui/material';

type Call = {
  name: string;
  phoneNumber: string;
  missed: boolean;
  createdAt: string;
};

interface CardListCardProps {
  data: Call;
}

export default function CallListCard({ data }: CardListCardProps) {
  return (
    <Box
      bgcolor={data.missed ? 'error.light' : 'white'}
      mb={2}
      display='flex'
      justifyContent='space-evenly'
      height='68px'
      borderRadius='8px'>
      <Stack direction='row' justifyContent='space-around' alignItems='center' width='100%'>
        {data.missed ? (
          <ErrorOutlineOutlinedIcon sx={{ color: 'error.main', height: 26 }} />
        ) : (
          <ChatOutlinedIcon sx={{ color: 'primary.dark' }} />
        )}
        <Box textAlign='left' width='150px' mr={4}>
          <Typography variant='h6' color={data.missed ? 'error.main' : 'primary.dark'}>
            {data.name}
          </Typography>
          <Typography variant='subtitle2' color={data.missed ? 'red' : 'text.secondary'}>
            {data.phoneNumber}
          </Typography>
        </Box>
        <Box width='50px' textAlign='center'>
          {data.missed ? (
            <PhoneMissedIcon sx={{ color: 'error.main', width: 35 }} />
          ) : (
            <Typography sx={{ color: 'primary.dark', marginBottom: 3 }}>
              {data.createdAt}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
