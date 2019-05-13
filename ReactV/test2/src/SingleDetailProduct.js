import React, { Component } from 'react';
import SingleDetails from "./SingleDetails"

class SingleDetailProduct extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      product: {
        id: '',
        PName: '',
        BName: '',
        img: '',
        Pabout: '',
        PCabout: '',
        price: ''
      }
    }
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/vehicles")
    .then(data => data.json())
    .then(products => {
      let vid = Number(this.props.match.params.id)
      let product = products.find(item => {
        return item.id === vid ? item : null
      })
      this.setState({
        product: product,
        loading: false
      })
    })
  }

  render() {
    const product = this.state.loading ? "Loading" : <SingleDetails {...this.state.product} />
      return (
        <div>
        {product}
        </div>
      )
  }
}

export default SingleDetailProduct