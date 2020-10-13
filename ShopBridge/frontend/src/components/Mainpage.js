import React, { Component } from 'react';
import Modal1 from "./Modal";
import axios from 'axios';
import { Link } from 'react-router-dom'



class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        name: null,
        description: null,
        price: null,
        product_image: []
      },
      invItems: []
    }
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/inventory/")
      .then(res => this.setState({ invItems: res.data }))
      .catch(err => console.log(err));
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/inventory/${item.id}/`)
      .then(res => this.refreshList());
  };
  handleSubmit = (item, img) => {
    const ih = new FormData();
    ih.append('name', item.name);
    ih.append('description', item.description);
    ih.append('price', item.price);
    ih.append('product_image', img)
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/inventory/${item.id}/`, ih)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/inventory/", ih)
      .then(res => this.refreshList());

  }
  renderItems = () => {
    const newItems = this.state.invItems
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-5 `}
          title={item.description}
        >
          <Link to={`/${item.id}`}>
            {item.name}</Link>
        </span>
        <span>
          <button onClick={() => this.handleDelete(item)} className="btn btn-danger">Delete{" "} </button>
        </span>
      </li>

    )
    )
  }
  render() {
    return (
      <main className="content text-center">
        <div className="d-flex justify-content-center">
          <Modal1
            activeItem={this.state.activeItem}
            onSave={this.handleSubmit}
          />
        </div>
        <div data-testid="mainpagelist" className="d-flex justify-content-center">
          <ul className="list-group list-group-flush">
            {this.renderItems()}
          </ul>
        </div>
      </main>
    );
  }


}
export default Mainpage;
