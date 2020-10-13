import React, { Component } from "react";
import "../App.css";

export default class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      product_image: []
    };

  }
  validate = () => {
    if (this.state.activeItem.name == null) {
      alert("Please enter a valid name")
      return false
    }
    if (this.state.activeItem.description == null) {
      alert("Please enter a valid description")
      return false
    }
    if ((this.state.activeItem.price == null) || (this.state.activeItem.price < 1)) {
      alert("Please enter a valid price")
      return false;
    }
    return true;
  };


  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });

  };
  submitchange = e => {
    e.preventDefault();
    if (this.validate()) {
      const { onSave } = this.props;
      onSave(this.state.activeItem, this.state.product_image);
    }
  }

  render() {

    return (
      <form width="350" >
        <table>
          <tbody>
            <tr>
              <td style={{ width: 100 }}>
                <label htmlFor="name">Name: </label>
              </td>
              <td>
                <input style={{ width: 295 }}
                  type="text"
                  name="name"
                  value={this.state.activeItem.name}
                  onChange={this.handleChange}
                  placeholder="Enter Item Name"

                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Description: </label>
              </td>
              <td>
                <input style={{ width: 295 }}
                  type="text"
                  name="description"
                  value={this.state.activeItem.description}
                  onChange={this.handleChange}
                  placeholder="Enter Item Description"

                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price: </label>
              </td><td>
                <input style={{ width: 295 }}
                  type="number"
                  name="price"
                  value={this.state.activeItem.price}
                  onChange={this.handleChange}
                  placeholder="Enter Item Price"

                />

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Image">Image: </label>
              </td>
              <td>
                <input
                  type="file"
                  name="product_image"
                  onChange={e => this.setState({ product_image: e.target.files[0] })}
                />

              </td>
            </tr>
          </tbody>
        </table>
        <div className='text-center'>
          <button color="success" onClick={this.submitchange}>
            Save
          </button>
        </div>

      </form>

    )
  }
}
