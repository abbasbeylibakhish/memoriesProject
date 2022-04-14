const fs = require("fs");
var path = require('path');
var pathToJson = path.resolve(__dirname, '../config/config.json');

const configContent = fs.readFileSync(pathToJson);
const configData = JSON.parse(configContent);

module.exports = configData;