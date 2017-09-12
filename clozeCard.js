

var clozeCard = function(fulltext,cloze){
    this.fulltext = fulltext,
    this.cloze = cloze,
    this.replace = function(){
        // here you want to return underscores where is the closure 
        var temp = this.fulltext.split(' ');
        
        temp.forEach(function(element,index) {
            // here we check if the word is existing 
            if(element == this.cloze){
                // we need to replace this word in array with '.....'
                temp[index] = '....'
            }
        }, this);
        return temp.join(' ')
    }
    this.checkAnswer = function(userAnswer){
            if(userAnswer == this.closure){
                console.log('Correct')
            } else {
                console.log('you are wrong')
            }
    }
}

var clozeCard = new cloze('George Washington was first president','George Washington');
clozeCard.checkAnswer('George Washington')