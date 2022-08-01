import ChatOutlinedIcon from '@mui/icons-material/Chat';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { Box } from '@mui/material';

import CallListCard from '../components/library/CallListCard';

const iconStyles = {
  color: 'primary.dark'
};

const Calls = () => {
  return (
    <>
      <Box>
        <CallListCard
          leftIcon={() => <ChatOutlinedIcon sx={iconStyles} />}
          headerText='Jane Smith'
          bodyText='(+44) 7653 123 786'
          rightField={() => '15:00'}
        />
      </Box>
      <Box>
        <CallListCard
          leftIcon={() => <ErrorOutlineOutlinedIcon sx={iconStyles} />}
          headerText='John Doe'
          bodyText='(+44) 985 234 990'
          rightField={() => <PhoneMissedIcon />}
        />
      </Box>
    </>
  );
};

export default Calls;
