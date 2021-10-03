"use strict";

require("core-js/modules/es.promise.js");

const app = require("./server");

async function main() {
  await app.listen(3000);
  console.log("Server on port 4000");
}

main();