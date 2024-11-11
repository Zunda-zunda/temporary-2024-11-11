import {
    v4
} from "uuid";


export const createUuid=()=>{
    return v4();
};

console.log(v4());// UUID version 4 の文字列を出力

export const sample = () =>{
    return `この関数は sample() です`
};