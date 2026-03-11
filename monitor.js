const axios = require("axios");
const fs = require("fs");

async function checkNode() {
    try {
        console.log("Node Online");
        fs.appendFileSync("logs.txt","Node OK\n");
    } catch {
        console.log("Node Offline");
        fs.appendFileSync("logs.txt","Node Down\n");
    }
}

setInterval(checkNode,10000);
