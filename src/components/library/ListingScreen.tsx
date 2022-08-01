import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

import { ListingToggle, Toggle } from './ListingToggle';
import { SearchBar } from './SearchBar';

export interface ListingScreenProps<TData> {
  data: TData[];
  toggles?: Toggle[];
  searchLabel?: string;
  search?: (searchTerm: string) => void;
  setToggle?: (toggle: Toggle) => void;
  renderItem: (data: TData) => React.ReactNode;
  fetchMore?: () => void;
  loading?: boolean;
}

export const ListingScreen = <TData extends { id: number }>({
  data,
  searchLabel,
  search,
  toggles,
  setToggle,
  renderItem,
  fetchMore,
  loading
}: ListingScreenProps<TData>) => {
  const handleScroll = (event: React.UIEvent) => {
    if (
      event.currentTarget.scrollTop + event.currentTarget.clientHeight ===
      event.currentTarget.scrollHeight
    ) {
      data && fetchMore && fetchMore();
    }
  };

  return (
    <Stack spacing={2} sx={{ height: '100%' }}>
      <Stack sx={{ pr: 5, pl: 5 }}>
        {toggles && (
          <ListingToggle toggles={toggles} onChange={toggle => setToggle && setToggle(toggle)} />
        )}
        {search && <SearchBar label={searchLabel || ''} onChange={search} />}
      </Stack>
      <List sx={{ pr: 2, pl: 2, overflow: 'auto' }} {...(fetchMore && { onScroll: handleScroll })}>
        {loading
          ? Array.apply({}, Array(10)).map((_d, index) => (
              <ListItem key={index} alignItems='flex-start'>
                <Skeleton animation='wave' variant='rectangular' height={70} sx={{ flex: 1 }} />
              </ListItem>
            ))
          : data.map(d => (
              <ListItem key={d.id} alignItems='flex-start'>
                {renderItem(d)}
              </ListItem>
            ))}
      </List>
    </Stack>
  );
};
