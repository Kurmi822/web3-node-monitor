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
const axios = require("axios");
const fs = require("fs");
const config = require("../config/config.json");

async function checkNodes() {
    for (const node of config.nodes) {
        try {
            const start = Date.now();
            await axios.get(node.rpc);
            const latency = Date.now() - start;

            const log = `${node.name} is ONLINE | Latency: ${latency}ms\n`;
            console.log(log);
            fs.appendFileSync("../logs/node.log", log);

        } catch (error) {
            const log = `${node.name} is OFFLINE\n`;
            console.log(log);
            fs.appendFileSync("../logs/node.log", log);
        }
    }
}

setInterval(checkNodes, 60000);
checkNodes();
