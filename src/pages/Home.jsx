import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

const plants = [
  {
    id: 1,
    name: 'Banana Plant',
    description: 'A tropical plant with large green leaves, Prefers bright indirect sunlight and high humidity.',
    image: 'https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=',
    price: '₹150'
  },
  {
    id: 2,
    name: 'Aloe Vera',
    description: 'A succulent plant known for its healing properties. Ideal for sunny windowsills.',
    image: 'https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/02/Products-49.jpg',
    price: '₹180/-'
  },
  {
    id: 3,
    name: 'Snake Plant',
    description: 'A low-maintenance indoor plant that purifies the air and thrives in low light.',
    image: 'https://theflowerbasket.in/cdn/shop/files/Snake-Plant-Online.jpg?v=1710955822&width=1946',
    price: '₹250/-'
  },
  {
    id: 4,
    name: 'Spider Plant',
    description: 'A hardy and attractive houseplant that’s perfect for beginners.',
    image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-chlorophytum-spider-plant-plant_6c3477e8-39ca-4d4b-b51a-1f9fb435ac17.jpg?v=1634216138',
    price: '₹200/-'
  },
  {
    id: 5,
    name: 'Cactus',
    description: 'A unique plant known for its low-maintenance nature, perfect for bright, dry spaces.',
    image: 'https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg',
    price: '₹350/-'
  },
  {
    id: 6,
    name: 'Fern',
    description: 'A lush green plant known for its air-purifying qualities, thriving in high humidity.',
    image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-nephrolepis-exaltata-bosteniensis-boston-fern-plant-129726.jpg?v=1679750689',
    price: '₹180/-'
  },
  {
    id: 7,
    name: 'Rosemary',
    description: 'An herb with fragrant, needle-like leaves, perfect for cooking and ornamental use.',
    image: 'https://rukminim2.flixcart.com/image/850/1000/l2arp8w0/plant-sapling/w/b/s/no-perennial-yes-rosemary-herb-plants-combo-1-amazing-gurden-original-imagdzbgqpjfh4tk.jpeg?q=90&crop=false',
    price: '₹150/-'
  },
  {
    id: 8,
    name: 'Lavender',
    description: 'A fragrant herb known for its calming properties and beautiful purple flowers.',
    image: 'https://vermiorganics.co/cdn/shop/files/5_3a2b5891-ce87-4ae4-85da-50a3160a7b97.png?v=1717071116&width=1946',
    price: '₹450/-'
  },
  {
    id: 9,
    name: 'Peace Lily',
    description: 'A flowering plant known for its air-purifying properties and beautiful white blooms.',
    image: 'https://exoticflora.in/cdn/shop/products/peacelily.jpg?v=1596852500',
    price: '₹500/-'
  }

];

function Home() {
  const { addToCart, addToWishlist } = useCart();
  const handleAddToCart = (plant) => {
    addToCart(plant);
    alert(`${plant.name} has been added to the cart!`);
  };

  const handleAddToWishlist = (plant) => {
    addToWishlist(plant);
    alert(`${plant.name} has been added to the wishlist!`);
  };

  return (
    <>
      <Row className='m-5'>
        {plants.map((plant) => (
          <Col key={plant.id} md={4}>
            <Card style={{ width: '18rem', minHeight: '350px', fontFamily: 'cursive' }}>
              <Card.Img variant="top" src={plant.image} />
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.description}</Card.Text>
                <Card.Text>{plant.price}</Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleAddToWishlist(plant)} // Add plant to wishlist
                  >
                    <i className="fa-solid fa-heart"></i>
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => handleAddToCart(plant)} // Add plant to cart
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
