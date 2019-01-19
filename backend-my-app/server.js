const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

var connection_string = "**********";
// Connection string of MongoDb database hosted on Mlab or locally
// Collection name should be "FoodItems", only one collection as of now.
// Document format should be as mentioned below, at least one such document:
// {
//     "_id": {
//         "$oid": "5c0a1bdfe7179a6ca0844567"
//     },
//     "name": "Veg Roll",
//     "predQty": 100,
//     "prodQty": 295,
//     "ordQty": 1
// }

const db = require("monk")(connection_string);

const collection_foodItems = db.get("FoodItems");

// our localhost port
const port = process.env.PORT || 3001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

io.on("connection", socket => {
  console.log("New client connected" + socket.id);
  //console.log(socket);

  // Returning the initial data of food menu from FoodItems collection
  socket.on("initial_data", () => {
    collection_foodItems.find({}).then(docs => {
      io.sockets.emit("get_data", docs);
    });
  });

  // Placing the order, gets called from /src/main/PlaceOrder.js of Frontend
  socket.on("putOrder", order => {
    collection_foodItems
      .update({ _id: order._id }, { $inc: { ordQty: order.order } })
      .then(updatedDoc => {
        // Emitting event to update the Kitchen opened across the devices with the realtime order values
        io.sockets.emit("change_data");
      });
  });

  // Order completion, gets called from /src/main/Kitchen.js
  socket.on("mark_done", id => {
    collection_foodItems
      .update({ _id: id }, { $inc: { ordQty: -1, prodQty: 1 } })
      .then(updatedDoc => {
        //Updating the different Kitchen area with the current Status.
        io.sockets.emit("change_data");
      });
  });

  // Functionality to change the predicted quantity value, called from /src/main/UpdatePredicted.js
  socket.on("ChangePred", predicted_data => {
    collection_foodItems
      .update(
        { _id: predicted_data._id },
        { $set: { predQty: predicted_data.predQty } }
      )
      .then(updatedDoc => {
        // Socket event to update the Predicted quantity across the Kitchen
        io.sockets.emit("change_data");
      });
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend */

app.use(express.static("build"));
app.use("/kitchen", express.static("build"));
app.use("/updatepredicted", express.static("build"));

server.listen(port, () => console.log(`Listening on port ${port}`));
