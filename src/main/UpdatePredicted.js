import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";
import { socket } from "../global/header";
class UpdatePredicted extends Component {
  constructor() {
    super();
    this.state = {
      food_data: []
      // this is where we are connecting to with sockets,
    };
  }

  getData = foodItems => {
    this.setState({ food_data: foodItems });
  };

  componentDidMount() {
    var state_current = this;
    socket.emit("initial_data");
    socket.on("get_data", this.getData);
  }

  sendPredQty = id => {
    var predicted_details;
    this.state.food_data.map(food => {
      if (food._id == id) {
        predicted_details = food;
      }
      return food;
    });
    console.log(predicted_details);
    socket.emit("ChangePred", predicted_details);
  };

  changePredQuantity = (event, foodid) => {
    if (parseInt(event.target.value) < 0) {
      event.target.value = 0;
    }
    var new_array = this.state.food_data.map(food => {
      if (food._id == foodid) {
        food.predQty = parseInt(event.target.value);
      }
      return food;
    });
    this.setState({ food_data: new_array });
  };

  componentWillUnmount() {
    socket.off("get_data", this.getData);
  }

  getFoodData() {
    return this.state.food_data.map(food => {
      return (
        <tr key={food._id}>
          <td> {food.name} </td>
          <td>
            <input
              onChange={e => this.changePredQuantity(e, food._id)}
              value={food.predQty}
              type="number"
              placeholder="Quantity"
              min="0"
            />
          </td>
          <td>
            <button onClick={() => this.sendPredQty(food._id)}>
              Update Qty
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <h2 className="h2Class">Update Predicted</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Product</th>
              <th>Predicted Qty</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>{this.getFoodData()}</tbody>
        </Table>
      </Container>
    );
  }
}

export default UpdatePredicted;
