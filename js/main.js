var t = "我是CrystalNeko,你也可以叫我CSNeko😀,我很可爱"

var options = new Options()
options.setPetPhrase("喵~")
options.setEmoticons(true);

let phrase = options.getPetPhrase()
if (phrase != null) t = runPetPhrases(t,options.getPetPhrase())

if (options.getEmoticons()) t = runEmoticons(t)
console.log(t)