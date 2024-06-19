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
function runPetPhrases(text, petPhrase){
    let punctuation = ['.',',','?','!','。','，','？','！'];
    /*
    在末尾添加上口癖
    如果没有且末尾不是标点符号结尾
    如果末尾以标点结尾则直接替换掉标点
     */
    if(!text.endsWith(petPhrase)){
        let add = true
        for(let i=0;i<punctuation.length;i++){
            if(text.endsWith(punctuation[i])) {
                add = false
                // 删除最后一个字符
                text = text.substring(0,text.length-1);
                break
            }
        }
        text = text+petPhrase;
        
    }
    // 在标点符号前添加口癖
    for(let i=0;i<punctuation.length;i++){
        // 如果口癖不是以标点符号结尾,则加上标点
        if(!petPhrase.endsWith(punctuation[i])){
            text = replaceCharWithRandom(text,punctuation[i],petPhrase+punctuation[i],0.4);
        }
    }
    return text;
}