import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
const UpdateProducto = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        code: "",
        name: "",
    });
    let history = useHistory();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("code", formValue.code);
        formData.append("name", formValue.name);

        axios
            .post(
                "http://localhost/ZeriPC/public/api/productUpdate",
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
                console.log("Si quema cuh");
                history.push("/ZeriPC/public/ProductosAdmin");
            })
            .catch((error) => {
                console.log(error);
                setShow(false);
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
                    <Alert.Heading>We can't find that register</Alert.Heading>
                    <p>Verify the data</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Modify a product</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Proddct name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Code"
                            name="code"
                            value={formValue.code}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStock">
                        <Form.Label>New name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                        </Form.Group>
                    <div align="center">
                        <Button type="submit">
                            Modificar datos
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default UpdateProducto;
