// import { json } from "express";

import express from "express";
const json = express.json;

const objectsAtDatabase = [

    {
        cell_name: "bottom2cells",
        d: 0,
        w: 0,
        name: "Object1",
        h: 0,
        x: 549,
        y: 22,
        isItem: true,
        z: 0,
        id: 199,
    },

    {
        cell_name: "bottom2cells",
        d: 0,
        w: 0,
        name: "Object2",
        h: 0,
        x: 0,
        y: 22,
        isItem: true,
        z: 0,
        id: 19,
    },

    {
        cell_name: "bottom2cells",
        d: 13,
        w: 19.5,
        name: "Box_of_objects",
        h: 10.5,
        x: 0,
        y: 40,
        z: 1,
        id: 16,
    },
    {
        cell_name: "bottom2cells",
        d: 30,
        w: 20.5,
        name: "Box_of_objects_2",
        h: 15.3,
        x: 78,
        y: 144,
        z: 0,
        id: 2,
    },
    {
        cell_name: "bottom1cell",
        d: 31,
        w: 24,
        name: "Box_of_objects_3",
        h: 12,
        x: 0,
        y: 10,
        z: 0,
        id: 34,
    }

];
let idIncrement=100;

export const routesGET = [
    { url: "/storage_block/boxes/getall", responce: () => { return JSON.stringify(objectsAtDatabase) } }
]
export const routesPOST = [
    {
        url: "/storage_block/boxes/add_item", responce: (req, resp) => {
            const jsonItem = req.body;
            jsonItem["id"]=idIncrement;
            jsonItem['z']=0;
            idIncrement++;
            //TODO need validator
            objectsAtDatabase.push(jsonItem);
            resp.sendStatus(200);
        }
    },
    {
        url: "/storage_block/boxes/modifyItem", responce: (req, resp) => {
            const jsonItem = req.body;
            //TODO need validator
            const itemAtBase = objectsAtDatabase.filter(x => x.id == jsonItem.id);
            if (itemAtBase.length == 0) { resp.sendStatus(404); return; }

            objectsAtDatabase[objectsAtDatabase.indexOf(itemAtBase[0])] = jsonItem;
            resp.sendStatus(200);
        }
    },


]
