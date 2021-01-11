var readlineSync =require ('readline-sync');
var chalk = require('chalk');
var score='0';
var previousScore='0';
var name=readlineSync.question("Hey May I Know Your Name : ");
console.log("Welcome "+name);
console.log("Let's Play Phir Hera Pheri Quiz\n")

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer)
  {
    console.log(chalk.green("You are Right!"));
    score++;
    console.log(chalk.blueBright.bold("Your Score : " + score + "\n"));
  }
  else
  {
    console.log(chalk.red.bold("You are Wrong!"));
    console.log(chalk.blueBright.bold("Your Score : " + score + "\n"));
  }
}

var quizQuestions =[{
question :  "Q1. Choose the correct order of how did Raju try to spend Rs. 1000? \na. Bhutta, Gola, Jhoola \nb. Jhoola, Bhutta, Gola \nc. Gola, Bhutta, Jhoola \nd. Bhutta, Jhoola, Gola\nanswer : ",
answer : "A",
},{
  question : "Q2. What’s the full form of ‘I.T.U.S.’? \na. Iski Topi Uske Sar \nb. Intelligent and Talent of Ultimate School \nc. International Talent of Ultimate Student \nd. Indian Technical University for Smarts \nanswer : ",
  answer : "C",
},{ 
  question : "Q3. How much did Raju tip the Chaiwala? \na. 100 \nb. 150 \nc. 1000 \nd. 2000\nanswer : ",
  answer: "C",
},{
  question : "Q4. What song Babu Rao’s Dadaji used to sing? \na. Gaata rahe mera dil \nb. Yeh shaam mastani \nc. Pal pal dil ke paas \nd. Mere saamne wali khidki me \nanswer : ",
  answer : "A",
},{
  question : "Q5. What was the name of the circus? \na. The Great Golden Circus \nb. The Great Rayman Circus \nc. The Great Carnival Circus \nd. The Great Royal Circus\nanswer : ",
  answer : "D",
}
]
for(var i=0; i<quizQuestions.length;i++)
{
  var current=quizQuestions[i];
  play(current.question,current.answer);
}
console.log(chalk.underline.bold("Your Score is: "+score+"\n"));

console.log(chalk.red("\t-----SCORE BOARD-----\n"));
var highScore =[
  {
    userName : "Raju",
    previousScore : 5,
  },
  {
    userName : "Anuj",
    previousScore : 4,
  },
  {
    userName : "Sham",
    previousScore : 4,
  }
]

for(var i=0; i<highScore.length;i++)
{
  var userScore = highScore[i];
  console.log("\t"+userScore.userName+"\t"+userScore.previousScore);
}


  
  for(var i=0;i<highScore.length;i++)
  {
    var userScore = highScore[i];
  if(score>=userScore.previousScore)
  { 
    console.log(chalk.hex('#FBBF24').underline.bold("\nHey Congratulations!!! you have just beat the high score please Send a screenshot  of your score to the admin, So the admin can update the score board \n"));
    break;
  }
  }