import { values } from "lodash";
import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const ShowProductosAdmin = (props) => {
    const [formValue, setformValue] = React.useState({
        code: "",
        name: "",
        stock: "",
        categories_id: "",
    });
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const [show, setShow] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/ZeriPC/public/api/productShow")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);
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
                console.log("Sí quema cuh");
                setData(response.data)
                setShow(false);
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    const Editar = (e) => {
        history.push("/ZeriPC/public/UpdateProducto");
    }
    const Crear = (e) => {
        history.push("/ZeriPC/public/RegistraProducto");
    }
    const Borrar = (e) => {
        history.push("/ZeriPC/public/DeleteProduct");
    }

    const Buttons = (props) => {
        const eliminaProducto = () => {
            formValue.code = props.code;
            const formData = new FormData();
            formData.append("code", formValue.code);

            axios
                .post(
                    "http://localhost/ZeriPC/public/api/productDelete",
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
                    console.log("Action completed");
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        const actualizarProducto = () => {
            formValue.code = props.code
            formValue.name = props.name
            formValue.price = props.price
            formValue.stock = props.stock
            formValue.categories_id = props.categories_id
            setShow(true);
        }
        return (
            <>
                <Button variant="danger" onClick={eliminaProducto}>Delete </Button>{' '}
                <Button variant="primary" onClick={actualizarProducto}> Edit </Button>
            </>
        )
    }
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Edit Products
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <Form.Label>Category ID </Form.Label>
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
                                Edit product
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Container>
                <br />
                <h1>Products Table</h1>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>ID_Cat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.code}>
                                <td>{dataItem.code}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.stock}</td>
                                <td>{dataItem.price}</td>
                                <td>{dataItem.categories_id}</td>
                                <td><Buttons code={dataItem.code} name={dataItem.name} price={dataItem.price} stock={dataItem.stock} categories_id={dataItem.categories_id} /></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>



                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={Crear}>
                        Register a product
                    </Button>
                  
                </div>
            </Container>

        </>
    );
};
export default ShowProductosAdmin;