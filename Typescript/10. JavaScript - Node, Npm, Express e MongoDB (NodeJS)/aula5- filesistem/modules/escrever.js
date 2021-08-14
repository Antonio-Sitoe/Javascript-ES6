const fs = require("fs").promises;

module.exports = (caminho, json) => {
  fs.writeFile(caminho, json, { flag: "w", encoding: "utf-8" });
};
