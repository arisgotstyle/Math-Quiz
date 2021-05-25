player1_name= localStorage.getItem('Player 1 Name');
console.log(player1_name);
 player2_name= localStorage.getItem('Player 2 Name');
 player1_score=0;
 player2_score=0;
 question_turn='player1';
 answer_turn='player2';

document.getElementById('player_1Name').innerHTML= player1_name+':';
document.getElementById('player_2Name').innerHTML= player2_name+':';
document.getElementById('player_1_score').innerHTML= player1_score;
document.getElementById('player_2_score').innerHTML= player2_score;

document.getElementById('player_question').innerHTML= 'Question Turn: '+ player1_name;
document.getElementById('player_answer').innerHTML= 'Answer Turn: '+player2_name;

function send() {

    Number1= document.getElementById('#1').value;
    Number2= document.getElementById('#2').value;
    Answer= Number1 * Number2;
    console.log('Numbers: '+Number1+' '+Number2);

    input_box= '<br>answer:<input type=text id=input_checkbox>';
    check_button='<br><br> <button class: btn btn-info onclick="check()">Check</button>';
    question_word= '<h4 id=numbers>'+ Number1 + '*' + Number2 + '</h4>';
    row= question_word+input_box+check_button;
    document.getElementById('output').innerHTML=row;
    
    

}

function check() {
    
    answer= document.getElementById('input_checkbox').value;
    if (answer == Answer) {
        if (answer_turn == 'player1') {

            player1_score= player1_score +1;
            document.getElementById('player_1_score').innerHTML= player1_score;
        }
        else {

            player2_score= player2_score+1;
            document.getElementById('player_2_score').innerHTML= player2_score;
        }
    }

    

    if (answer_turn == 'player2') {

        answer_turn = 'player1';
        document.getElementById('player_answer').innerHTML= ' Answer Turn: ' + player1_name;
    }
    else {

        answer_turn = 'player2';
        document.getElementById('player_answer').innerHTML= 'Answer Turn: ' + player2_name;
    }

    if (question_turn == 'player2') {

        question_turn == 'player1';
        document.getElementById('player_question').innerHTML= 'Question Turn: ' + player1_name;
    }
    else {
        question_turn= 'player2';
        document.getElementById('player_question').innerHTML= 'Question Turn: ' + player2_name;
    }

   
    document.getElementById('output').innerHTML='';
}
