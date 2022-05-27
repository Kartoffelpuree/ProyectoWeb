import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
const DeleteProduct = () => {
  const [formValue, setformValue] = React.useState({
    name: "",
});

let history = useHistory();

const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    
};
return (
    <>
       
        <Container>
            <br />
            <br />
            <h1>Descartar producto</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Escriba el nombre del producto a eliminar:</Form.Label>
                    <Form.Control
                        type="texto"
                        placeholder="Name"
                        name="name"
                        value={formValue.name}
                        onChange={onChange}
                    />
                </Form.Group>
                <div align="center">
                    <Button variant="danger" type="submit">
                        Borrar
                    </Button>
                </div>
            </Form>
        </Container>
    </>
);
};

export default DeleteProduct;