var text = process.argv[2];
var cloze = process.argv[3];

class ClozeCard {
    constructor(text, cloze) {
        this.cloze = cloze;
        //this.partial = partial;
        this.fullText = text;
    }
}
var firstPresidentCloze = new ClozeCard(text, cloze);

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;
