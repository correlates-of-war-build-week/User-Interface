class Question{
    constructor(QandA){
        console.log(QandA)
        this.QandA = QandA;
        this.open = QandA.querySelector(".open");
        this.open.textContent = "Answer"

        this.open.addEventListener('click', ()=> this.openQuestion())
    }
    openQuestion(){
        this.QandA.classList.toggle("question-open");
    }
}










const questions = document.querySelectorAll('.question');

questions.forEach(function(QandA){
    return new Question(QandA)
});