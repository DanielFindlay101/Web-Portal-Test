import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { Box, Stack, styled, Typography } from '@mui/material';

type DataType = {
  headerText: string;
  bodyText: string;
  missedCall: boolean;
};

interface CardProps {
  data: DataType;
}

const CardBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: 318,
  height: 68,
  borderRadius: '8px'
});

const iconStyles = {
  color: 'primary.dark'
};

// const missedCallStyles = {
//   color: '#E85D5B'
// };

export default function CallListCard({ data }: CardProps) {
  return (
    <CardBox bgcolor={data.missedCall ? '#FFE6E6' : '#FFFFFF'} mb={2}>
      <Stack direction='row' justifyContent='space-around' alignItems='center' width='100%'>
        {data.missedCall ? (
          <ErrorOutlineOutlinedIcon sx={{ color: '#E85D5B', height: 26, width: 26 }} />
        ) : (
          <ChatOutlinedIcon sx={iconStyles} />
        )}
        <Box mr={6}>
          <Typography variant='h6' color={data.missedCall ? '#E85D5B' : 'primary.dark'}>
            {data.headerText}
          </Typography>
          <Typography variant='subtitle2' color={data.missedCall ? '#FC8483' : '#B9B6C1'}>
            {data.bodyText}
          </Typography>
        </Box>
        <Box>
          {data.missedCall ? (
            <PhoneMissedIcon sx={{ color: '#E85D5B', marginRight: 1 }} />
          ) : (
            <Typography sx={{ color: 'primary.dark' }}>14:23</Typography>
          )}
        </Box>
      </Stack>
    </CardBox>
  );
}
