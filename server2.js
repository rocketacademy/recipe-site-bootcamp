import { createServer } from "http";
import { readFile } from "fs";
import * as path from "path" ;

const handleIncomingRequest = (request, response) => {
  // request.url contains the portion of the URL after the domain.
  // E.g. for https://ra.co/index.html, request.url would return "/index.html".
  console.log("request url", request.url);

  // "." refers to the Unix filesystem ".", which represents the current directory.
  const filePath = "." + request.url;

  // let extname = String(
  //   filePath.slice(filePath.lastIndexOf("."), filePath.length - 1)
  // ).toLowerCase();

  var extname = String(path.extname(filePath)).toLowerCase();


  let mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };

  let contentType = mimeTypes[extname] || "text/plain";

  readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        if (filePath === "./banana") {
          readFile("./bananas.html", (error, content) => {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          readFile("./404.html", (error, content) => {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        }
        // response.writeHead(404);
        // response.end("Sorry we couldn't find your page!", "utf-8");
        // console.error("error reading file", err);
        return;
      }
    }

    // Set the response code to 200 (i.e. OK)
    response.writeHead(200, { "Content-Type": contentType,
  'rocket-academy-secret-word': 'blastoff' });
    // Send the response with the file content in utf-8 format
    response.end(content, "utf-8");
  });
};

// Initialise server with request listener function handleIncomingRequest
// https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
// Use port 3004 by convention.
createServer(handleIncomingRequest).listen(process.argv[2]);
