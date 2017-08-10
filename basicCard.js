var question = process.argv[2];
var answer = process.argv[3];

class BasicCard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}
var firstPresident = new BasicCard(
    question, answer);

// "Who was the first president of the United States?"
console.log(firstPresident.question);
// "George Washington"
console.log(firstPresident.answer);

module.exports = BasicCard;