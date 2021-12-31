//  como fazer uma recursao mutua
const fs = require("fs").promises;
const path = require("path");

//  tem 2 tipos de funcao

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  Walker(files, rootDir);
}

async function Walker(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    if (stats.isDirectory()) {
      rootDir(fileFullPath);
      continue;
    }
    console.log(fileFullPath)
  }
}
readdir("/home/antonio/Documents/GitHub/ECMASCRIPT/Typescript/");
