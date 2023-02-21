const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

fs.writeFile("text.txt", "Hello", (err) => {
  if(err) {
    console.group(err)
  }
});

const result = async() => {
  const { stdout, stderr } = await exec("dir");
  if(stderr) {
    console.log(stderr)
  }
  console.log("FILE", stdout)
};

result();