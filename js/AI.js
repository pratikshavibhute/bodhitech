//Question bank
var questionBank= [
    {
        question : 'Artificial Intelligence is about_____.',
        option : ['Playing a game on Computer','Making a machine Intelligent',' Programming on Machine with your Own Intelligence',' Putting your intelligence in Machine'],
        answer : ' Making a machine Intelligent'
    },
    {
        question : 'Who is known as the -Father of AI"?',
        option : ['Fisher Ada','Alan Turing','John McCarthy','Allen Newell'],
        answer : 'John McCarthy'
    },
    {
        question : 'If a robot is able to change its own trajectory as per the external conditions, then the robot is considered as the__?',
        option : ['Mobile','Non-Servo','Open Loop','Intelligent'],
        answer : 'Intelligent'
    },
    {
        question : ' Which of the given language is not commonly used for AI?',
        option : ['LISP',' PROLOG','Python','Perl'],
        answer : 'Perl'
    },
    {
        question : 'The component of an Expert system is_________.?',
        option : [' Knowledge Base','Inference Engine','User Interface','All of the above'],
        answer : 'All of the above'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();