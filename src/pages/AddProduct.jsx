import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';  // Make sure to use CartContext to add product to cart
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { addToCart } = useCart();  // Access the addToCart function from the context
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // New product object
    const newProduct = {
      id: Date.now(),  // Generate a unique ID based on time (for now)
      name,
      description,
      image,
    };

    // Add to cart
    addToCart(newProduct);

    // Clear the form fields
    setName('');
    setDescription('');
    setImage('');

    // Redirect to Home or Cart page
    navigate('/');
  };

  return (
    <div className="m-5">
      <h2>Add a New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formImage">
              <Form.Label>Product Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;