import React, { Component } from 'react';
import axios from "axios";




class Itempage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Item: [],
      li: props.match.params.id,

    }
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get(`http://localhost:8000/api/inventory/${this.state.li}`)
      .then(res => this.setState({ Item: res.data }))
      .catch(err => console.log(err));
  };

  renderItem = () => {
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '45%',
        transform: 'translate(-50%, -50%)'
      }}>
        
        <li
          key={this.state.Item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >Name: {this.state.Item.name}
        </li>
        {
          this.state.Item.description ? (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
            >Description: {this.state.Item.description}
            </li>) : null
        }
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
        >Price: {this.state.Item.price}
        </li>
        {
          this.state.Item.product_image ? (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
            ><div>
                <img src={this.state.Item.product_image} alt={this.state.Item.name} width="275" height="300" />
              </div>
            </li>) : null
        }

      </div>
    )
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          {this.renderItem()}
        </ul>
      </div>
    )
  }

}
export default Itempage;
