import RegisterForm from '../RegisterForm';
import { useAppDispatch, useAppSelector } from 'app/hooks';

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Form submit', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
