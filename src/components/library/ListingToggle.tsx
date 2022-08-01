import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export interface Toggle {
  key: string;
  label: string;
}

export interface ListingToggleProps {
  toggles: Toggle[];
  onChange: (toggle: Toggle) => void;
}

export const ListingToggle = ({ toggles, onChange }: ListingToggleProps) => {
  const [currentToggleKey, setCurrentToggleKey] = useState<string>(toggles[0].key);

  const handleToggleChange = (_event: React.MouseEvent<HTMLElement>, newToggleKey: string) => {
    setCurrentToggleKey(newToggleKey);
    onChange(toggles.find(t => t.key === newToggleKey) as Toggle);
  };

  return (
    <ToggleButtonGroup
      value={currentToggleKey}
      exclusive
      onChange={handleToggleChange}
      sx={{ mt: 2 }}>
      {toggles.map(toggle => {
        return (
          <ToggleButton
            key={toggle.key}
            value={toggle.key}
            selected={currentToggleKey === toggle.key}>
            {toggle.label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
