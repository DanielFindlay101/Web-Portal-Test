import ChatIcon from '@mui/icons-material/Chat';
import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

export interface CardProps {
  leftIcon: () => React.ReactNode;
  headerText: string;
  bodyText: string;
  rightField: () => React.ReactNode;
}

const CardBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: 318,
  height: 68,
  borderRadius: '8px'
});

export default function CallListCard({ leftIcon, headerText, bodyText, rightField }: CardProps) {
  return (
    <CardBox bgcolor='#FFFFFF' mb={2}>
      <Stack direction='row' justifyContent='space-around' alignItems='center' width='100%'>
        {leftIcon()}
        <Box mr={6}>
          <Typography variant='h6' color='primary.dark'>
            {headerText}
          </Typography>
          <Typography variant='subtitle1' color='#B9B6C1' sx={{ fontSize: 12 }}>
            {bodyText}
          </Typography>
        </Box>
        {rightField()}
      </Stack>
    </CardBox>
  );
}
