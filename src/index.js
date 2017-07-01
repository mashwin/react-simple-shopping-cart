import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Products, Cart } from './containers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const store = createStore(reducers);
ReactDom.render(
  <Provider store={store}>
    <div className="container">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Simple Shopping Cart</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Col md={6}>
            <h1>Products</h1>
            <Products/>
          </Col>
          <Col md={4}>
            <h1>Cart</h1>
            <Cart/>
          </Col>
        </Row>
      </Grid>
    </div>

  </Provider>,
  document.getElementById('app')
);
