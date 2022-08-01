import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export type FormInputBoxProps = TextFieldProps & {
  label?: string;
  required?: true;
};

export const FormInputBox = ({ label, required, ...textFieldProps }: TextFieldProps) => (
  <Stack spacing={1}>
    <FormLabel required={required}>{label}</FormLabel>
    <TextField required={required} {...textFieldProps} />
  </Stack>
);
