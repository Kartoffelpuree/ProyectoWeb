import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
const ForgotPassword = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        email: "",
        password: "",
        address: "",
    });
    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("address", formValue.address);


        axios
            .post(
                "http://localhost/ZeriPC/public/api/register",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response:");
                console.log(response);
                console.log("Sí quema cuh");
                history.push("/ZeriPC/public/LoginForm");
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    return (
        <>
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>
                    We can't find that register
                    </Alert.Heading>
                    <p>Verify the data</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Forgot password</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="name"
                            name="name"
                            value={formValue.code}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirm your E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                    <Button type="submit" size="lg">
                            Confirm
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default ForgotPassword;