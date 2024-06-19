// 创建一个表情列表
var emo = new Map();
/**
 * 将key拆分开
 * @param {list} k 
 * @param {list} v 
 */
function putEmo(k,v){
    for(let i = 0;i<k.length;i++){
        emo.set(k[i],v);
    }
}

let happy_e = ["😀","😄","😁","😆"];
let happy = ["(^・ω・^ )","٩(｡・ω・｡)﻿و","ヽ( ^ω^ ゞ )","´ ▽ ` )ﾉ","( • ̀ω•́ )","ヽ(✿ﾟ▽ﾟ)ノ"];
putEmo(happy_e,happy);
let sad_e = ["😭","😢","😥","😓"];
let sad = ["｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡","(╥﹏╥)","(☍﹏⁰。)","(〒︿〒)"];
putEmo(sad_e,sad);
let surprise_e = ["😮","😯","😲","😳"];
let surprise = ["(°ﾛ°٥)","∑(￣□￣;)","∑(✘Д✘๑ )"];
putEmo(surprise_e,surprise);
let angry_e = ["😡","😠","😤","😡"];
let angry = ["(ﾒ ﾟ皿ﾟ)ﾒ","(╯°O°)╯┻━┻","(┛`д´)┛","(／‵Д′)／~ ╧╧"]
putEmo(angry_e,angry);
let love_e = ["😍","😘","😗","😙"];
let love = ["(*´∀`)~♥","ヾ(●゜▽゜●)♡","(╭￣3￣)╭♡","(｡♥‿♥｡)","(✿ ♥‿♥)"];
putEmo(love_e,love);
let nochioce_e = ["🤷🏻‍♂️","🤷🏻"]
let nochioce = ["(´ー`)","(=m=)","(|||ﾟдﾟ)","┐(´д`)┌","╮(╯∀╰)╭","_:(´□`」 ∠):_"]
putEmo(nochioce_e,nochioce);

/**
 * 将emojie转换为颜文字
 * @param {string} text 原始文本 
 */
function runEmoticons(text) {
    for (let [key, value] of emo) {
        // 从value中任选一个替换
        if (value.length > 0) {
            value = value[Math.floor(Math.random() * value.length)];
        }
        text = text.replace(new RegExp(key, "g"), value);
    }
    return text;
}