import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
const ShowProductos = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
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
    return (
        <>
            <Container>
                <br />
                <h1>Products</h1>
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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowProductos;