var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}

//<script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>
//    <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-database.js"></script>//
/* <script>
      //Your web app's Firebase configuration
      var firebaseConfig = {
    apiKey: "AIzaSyAlYTDtmHd5ebKMonZUo7lnweOzDdBo40E",
    authDomain: "myquiz-game.firebaseapp.com",
    databaseURL: "https://myquiz-game-default-rtdb.firebaseio.com",
    projectId: "myquiz-game",
    storageBucket: "myquiz-game.appspot.com",
    messagingSenderId: "135491178213",
    appId: "1:135491178213:web:7fd97cb4bc6b0b0b4c0e0c"
  };


      // // Initialize Firebase
      // firebase.initializeApp(firebaseConfig);

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    </script>*/