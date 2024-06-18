/**
 * 随机替换
 * @param {*} text  原始文本
 * @param {*} char 要替换的文本
 * @param {*} target 目标文本
 * @param {*} probability 概率
 * @returns 
 */
function replaceCharWithRandom(text,char,target,probability){
    let result = text;
    let random = Math.random();
    if(random<probability){
        let index = text.indexOf(char);
        if(index!=-1){
            result = text.substring(0,index)+target+text.substring(index+1);
        }
    }
    return result;
}

/**
 * 处理文本
 * @param {*} text 文本
 * @param {*} petPhrase 口癖
 */
function run(text, petPhrase){
    // 在末尾添加上口癖(如果没有的话)
    if(!text.endsWith(petPhrase)){
        text+petPhrase;
    }
    // 在标点符号前添加口癖
    let punctuation = ['.',',','?','!','。','，','？','！'];
    for(let i=0;i<punctuation.length;i++){
        text = replaceCharWithRandom(text,punctuation[i],punctuation[i]+petPhrase,0.5);
    }

}