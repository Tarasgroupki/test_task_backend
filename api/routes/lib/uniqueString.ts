import cloneDeep from 'lodash/cloneDeep';
import { NewData } from "../../../types/data.types";

export function uniqueString(data: any, uniqueKey: string, unificatorKey: string): NewData[] {
    const dataNewArray: NewData[] = cloneDeep(data[uniqueKey]);
    const uniqueValues: string[] = [];

    dataNewArray.forEach((item: any) => {
       Object.keys(item).forEach((key) => {
           uniqueValues.indexOf(item[key]) !== -1 ? item[key] = item[key] + unificatorKey : null;
           uniqueValues.push(item[key]);
       });
    });

    return dataNewArray;
}
