import { v7 } from "uuid";
// UUID version 4 の文字列を出力

/**
 * UUID v7 を作成する
 * @returns  UUID v7
 */

export const createUuid=()=>{
    return v7();
};

console.log(v7());
export const sample = () =>{
    return `この関数は sample() です`
};