const mongoose = require("mongoose");

const pgRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  // image: { type: String, required: true },
  amenities: { type: [String], required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
});

const PgRoom = mongoose.model("PgRoom", pgRoomSchema);

module.exports = PgRoom;
