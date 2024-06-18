function Options() {
    var petPhrase
    // 口癖设置,null代表不使用口癖
    this.setPetPhrase = function (phrase) {
        petPhrase = phrase
    }
    this.getPetPhrase = function () {
        return petPhrase
    }

}