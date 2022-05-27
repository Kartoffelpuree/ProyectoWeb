import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
const RegistraProducto = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        code: "",
        name: "",
        stock: "",
        categories_id: "",
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
        formData.append("price", formValue.price);
        formData.append("stock", formValue.stock);
        formData.append("categories_id", formValue.categories_id);


        axios
            .post(
                "http://localhost/ZeriPC/public/api/productStore",
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
                history.push("/ZeriPC/public/ProductosAdmin");
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
                        sorry, we can't make that register
                    </Alert.Heading>
                    <p>Verify the data...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Add product</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Code"
                            name="code"
                            value={formValue.code}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            name="price"
                            value={formValue.price}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Stock"
                            name="stock"
                            value={formValue.stock}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Category ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Id category"
                            name="categories_id"
                            value={formValue.categories_id}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                    <Button type="submit">
                            Create product
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default RegistraProducto;
