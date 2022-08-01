import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import useTheme from '@mui/material/styles/useTheme';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

export interface SearchBarProps {
  label: string;
  onChange: (searchTerm: string) => void;
}

export const SearchBar = ({ label, onChange }: SearchBarProps) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>('');

  // wait for user to stop typing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChange(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <>
      <InputLabel style={{ color: theme.palette.primary.dark, marginTop: 18 }}>{label}</InputLabel>
      <TextField
        variant='outlined'
        style={{ marginTop: 8 }}
        onChange={e => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon style={{ color: theme.palette.primary.main }} />
            </InputAdornment>
          )
        }}
      />
    </>
  );
};
