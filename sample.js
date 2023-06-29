const status = {
    win : 0,
    tie : 0,
    losses : 0
}

function func(playerChoice){
        var c_score = 0;
        var p_score = 0;
        var c = Math.random();
        var compChoice;
        const res = document.querySelector('.res');
        const st = document.querySelector('.status');
            if(c <= 0.3 && c > 0){
                compChoice = 'Rock';
            }else if(c <= 0.6 && c > 0.3 ){
                compChoice = 'Paper';
            }else{
                compChoice = 'Scissors';
            }
           
            if(compChoice == 'Rock' && playerChoice == 'Paper' ||
            compChoice == 'Paper' && playerChoice == 'Scissors' ||
            compChoice == 'Scissors' && playerChoice == 'Rock'){
                res.innerHTML = 'you win<p>player <img class = "choice"  src=images/'+playerChoice+'.png >computer <img class = "choice"  src=images/'+compChoice+'.png>' ;
                status.win++;
            }else if(playerChoice == compChoice){
                res.innerHTML = 'Tie<p>player <img class = "choice" src=images/'+playerChoice + '.png> computer <img class = "choice"  src=images/'+compChoice+'.png>';
                status.tie++;
            }else{
                res.innerHTML = 'you lose<p>player <img class = "choice"  src = images/'+playerChoice+'.png> computer <img class = "choice"  src=images/'+compChoice+'.png>';
                status.losses++;
            }
            st.innerHTML = "win : "+status.win+'\nlosses : '+status.losses+'\ntie : '+status.tie;
           
        }