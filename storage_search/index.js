import { routesGET } from "./storage_search_mock.js";
import { routesPOST } from "./storage_search_mock.js";
import express from "express";
import bparser from "body-parser";
import cors from "cors";

// const routesObj = require("./storage_search_mock.js");


// const express = require("express");

const app = express();
app.use(cors());
app.use(bparser.json());

routesGET.forEach(x => {
    app.get(x.url, (request, response) => {
        response.send(x.responce());
    });
});

routesPOST.forEach(x => {
    app.post(x.url, (request, response) => {
        x.responce(request, response);
    });
})


app.listen(3001);