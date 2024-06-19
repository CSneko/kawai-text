function Options() {
    var _phrase
    var _emoticons
    /**
     * 设置口癖
     * @param {string} phrase  口癖,null代表不使用口癖
     */
    this.setPetPhrase = function (phrase) {
        _phrase = phrase
    }
    /**
     * 获取口癖
     * @returns {string} 口癖,null代表不使用口癖
     */
    this.getPetPhrase = function () {
        return _phrase
    }
    
    /**
     * 设置是否启用emojie替换为颜文字
     * @param {booleab} enable 是否启用
     */
    this.setEmoticons = function (enable){
        _emoticons = enable
    }
    /**
     * 获取是否启用emojie替换为颜文字
     * @returns {boolean} 是否启用emojie替换为颜文字
     */
    this.getEmoticons = function (){
        return _emoticons
    }

}