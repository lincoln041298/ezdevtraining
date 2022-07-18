import RegisterForm from '../RegisterForm'

function Register(props) {
    const handleSubmit = (values) => {
        console.log('Form submit', values)
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default Register