var censoredWords = ["sad", "bad", "mad"];
function censor() {
    console.log("censortext success!");
    for (var i = 0; i < censoredWords.length; i++) {
        console.log(censoredWords[i]);
    }
    console.log("censortext end!");
}
exports.censor = censor;