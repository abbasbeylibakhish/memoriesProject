// import config from "../config"

// import {User} from "../models/User"


// let jwt = require("jsonwebtoken");
// let bcrypt = require("bcryptjs");
// const { logger } = require("../utils/logger");

// export const signin = async (req, res) => {
//     try {
//         const user = await User.findOne({username: req.body.username})

//         .populate({
//             path: "roles",
//             populate: {
//               path: "rights",
//               model: "Right",
//               select: "name"
//             },
//             select: "-__v"
//           });

//           if(!user){
//               return res.status(404).send({message: "User not Found"});
//           }
//     } catch (error) {
        
//     }
// }
