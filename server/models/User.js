const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: String,
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  verifiedAt: {
    type: Date
  },
  isDeleted: {
    type: Boolean, default: false
  },
  roles: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }]
  }
}, { timestamps: true }), "users");

module.exports = User;