import { TextField, useFormControl } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

// InputField.prototype = {
//   form: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,

//   label: PropTypes.string,
//   disabled: PropTypes.bool,
// };

function InputField() {
  const { form, name, label, disabled } = useFormControl;
  return (
    <Controller name={name} form={form} as={TextField} fullWidth label={label} disabled={disabled}>
      <TextField />
    </Controller>
  );
}

export default InputField;
