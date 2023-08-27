import { Router } from "express";
import { requestData1, requestData2, requestData3 } from '../index';
import { uniqueString } from "./lib/uniqueString";
import { NewData } from "../../types/data.types";

const app = Router();

app.get('/data', async (req, res, next) => {
    try {
        const dataArr = await Promise.allSettled([requestData1(), requestData2(), requestData3()]);
        const dataArrFixed: any = {};
        let newData: NewData[];

        dataArr.forEach((item, index) => {
           item.status === 'fulfilled' ? dataArrFixed[`data${index + 1}`] = item.value : dataArrFixed[`data${index + 1}`] = item.status;
        });

        newData = uniqueString(dataArrFixed, 'data3', 'qwerty');

        res.send({
            status: 'ok',
            data: dataArrFixed,
            newData
        });
    } catch (err) {
        next(err);
    }
});

export default app;
