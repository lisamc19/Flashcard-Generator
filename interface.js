var inquirer = require('inquirer');
var functionToCreateCard = require('./basicCards.js');
var fs = require('fs');
// look up fs appendFile in Google 
inquirer.prompt([
    {
        type: 'list',
		message: ` What you want to do?`,
        name: 'commands',
        choices: [
            {name: "Add Card"},
            {name: "Read Cards"}
        ]
    }
]).then(function(answer){
    var userAnswer = answer.commands;
        if(userAnswer == "Add Card"){

            inquirer.prompt([
                {
                    type: 'input',
                    message: `What is the front of the card?`,
                    name: 'front'
                },
                {
                    type: 'input',
                    message: `What is the back of the card?`,
                    name: 'back'
                }
            ]).then(function(answer){

                var front = answer.front
                var back = answer.back
                var string = '\"' + front + '\"' + ',' + '\"' + back + '\"' + '\n'
                console.log(front,back)
                var card = new functionToCreateCard(front,back)
                console.log(card)

                // fs.appendFile to export this card to the file in correct format
                //fs.appendFile('cards.txt', data, 'utf8', (err, data) => {
                //     if (err) throw err;
                //     console.log('The "data to append" was appended to file!');
                //   });
                fs.appendFile('cards.txt', string, 'utf8', (err, data) => {
                  if (err) throw err;
                console.log(string + 'was appended to file!');
                }); 

            })
       
        } else if (userAnswer == "Read Cards"){
            
             fs.readFile('cards.txt', (err, data) => {
                if (err) throw err;
                var array = data.toString().split("\n");
                for(i in array) {
                console.log(array[i]);
}});
        }
})