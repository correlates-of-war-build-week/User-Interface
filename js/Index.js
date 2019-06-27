class Question{
    constructor(QandA){
        this.QandA = QandA;
        this.open = QandA.querySelector(".open");
        //We filled in the text here. This was moreso to see how this works and better understand what we did in the previous lessons in class.
        this.open.textContent = "Answer"

        //again use of dom here to expan the content when user press on "Answer"
        this.open.addEventListener('click', ()=> this.openQuestion())
    }

    //the method that is being called on in addEventListener that allows us to toggle "Answer" by clicking on it.
    openQuestion(){
        this.QandA.classList.toggle("question-open");
    }
}

//Created a constant for all the questions being asked
const questions = document.querySelectorAll('.question');

//Created a new class for questions.
questions.forEach(function(QandA){
    return new Question(QandA)
});