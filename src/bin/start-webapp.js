import app from "app";
import debugLib from "debug";
import http from "http";
import https from "https";
import cluster from "cluster";
import fs from "fs";
import {server} from "core/config";

let debug;
let port;
let sslPort;
let httpServer;
let httpsServer;

if (cluster.isMaster) {
    cluster.fork();
    cluster.on("exit", function (worker, code, signal) {
        cluster.fork();
    });
}

if (cluster.isWorker) {
    debug = new debugLib("express:server");
    port = normalizePort(server.port);
    sslPort = normalizePort(server.sslPort);

    app.set("port", port);
    httpServer = http.createServer(app);

    httpServer.listen(port);
    httpServer.on("error", onError);
    httpServer.on("listening", onListening);

    const credentials = {
        key:  fs.readFileSync(server.sslKey),
        cert: fs.readFileSync(server.sslCert),
        ca: [
            fs.readFileSync(server.sslCA),
        ],
        passphrase:"abc123",
    };
    httpsServer = https.createServer(credentials, app);

    httpsServer.listen(sslPort);
    httpsServer.on("error", onError);
    httpsServer.on("listening", onSslListening);
}

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = httpServer.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    debug("Listening on " + bind);
    console.log("Listening on " + bind);
}

function onSslListening() {
    const addr = httpsServer.address();
    const bind = typeof addr === "string"
      ? "pipe " + addr
      : "port " + addr.port;
    debug("Listening on " + bind);
    console.log("Listening on " + bind);
}
