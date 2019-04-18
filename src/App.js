import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    const { fetching, products, fetchProducts, error } = this.props;
    return (
      <div className="App">
     
      {products ? (
          <div>
            <p className="App-intro">Products</p>
            {products.map((product, index) => (
              <p key={index}>{product.id} - {product.name} </p>
            ))}
          </div>
        ) : (
          <p className="App-intro">No Products</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={fetchProducts}>Fetch Product</button>
        )}

        {error && <p style={{ color: "red" }}>something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    products: state.products,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
