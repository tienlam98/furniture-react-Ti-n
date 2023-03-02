import React from "react";
import Table from "react-bootstrap/Table";

export default function ShoppingTable({ shoppingCartStore }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Shopping Cart</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {shoppingCartStore.map((product, index) => {
          return (
            <tr>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
