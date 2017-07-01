import React, { Component } from 'react';
import { Row, Col, Grid, Button, Thumbnail } from 'react-bootstrap';
import '../style.css'

const ProductList = ({products, handleAddToCartClick}) => (
  <Grid>
    <Row>
      {
        products.map((product, index) => {
          return (
            <Col key={index} md={2}>
              <Thumbnail src={product.url}>
                <h3>{product.title}</h3>
                <p>
                  <Button className="btn btn-primary" onClick={() => {
                    handleAddToCartClick(product);
                  }}>Add to Cart</Button>
                </p>
              </Thumbnail>
            </Col>
          )
        })
      }
    </Row>
  </Grid>
)

export default ProductList;
