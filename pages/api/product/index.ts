import { collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../utils/db/firestore-admin";
import { Item } from "../../../utils/types";
import VERB from "../../../utils/verb";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case VERB.GET: {

            const itemsRef = db.collection('items')

            const itemsReq = await itemsRef.get();
            let items: Item[] = [];

            if (!itemsReq.empty) {
                items = itemsReq.docs.map(i => i.data() as Item);
            }

            res.status(200).json({
                items: items
            })
            break;
        }
        default: return defaultApiHandler(res, req.method)
    }
}

function defaultApiHandler(res: NextApiResponse, method?: string) {
    res.status(400).json({
        message: "Invalid request"
    })
}