import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Container, Row, Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const LoginForm = () => {

    const[formValue, setformValue] = React.useState({
        email:'',
        password:'' 
    })

    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new  FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)

    axios.post("http://localhost/ZeriPC/public/api/login", formData,
    {headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}}
    
    ).then(response => {
        console.log('response:');
        console.log(response);
        history.push("/ZeriPC/public/Productos")
    }).catch(error => {
        console.log(error);
        if(formValue.email==="admin@root.com" && formValue.password==="root123"){
            history.push("/ZeriPC/public/ProductosAdmin");
        }
    });

};

return (
    <Container>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-primary"  onClick={handleSubmit}>
            Login
        </Button>{' '}
        <div align="center">
                    <Button as={Link} to="/ZeriPC/public/RegistraUsuario">Register</Button>
                    {"  "}
                    <Button as={Link} to="/ZeriPC/public/ForgotPassword">Forgot the password</Button>
                </div>
        </Form>
        </Container>
);

}
export default LoginForm;
