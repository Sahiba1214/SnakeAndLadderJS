let first_player_position = 0;
console.log("First player at start position " + first_player_position);
let noplay = 0, ladder = 1, sanke = 2;

// repeat till get winner
while(first_player_position<100){
    
    //rolls the die
    let first_player_roll = Math.floor(Math.random()*6)+1;

    //check for noplay, ladder and snake
    let check_play = Math.floor(Math.random()*10)%3;
    switch(check_play){
    case noplay:
        break;
    case ladder:
        first_player_position = first_player_position + first_player_roll;
        //ensure the player get exact 100 for winning
        if(first_player_position>100)
            first_player_position = first_player_position - first_player_roll;
        break;
    case sanke:
        first_player_position = first_player_position - first_player_roll;
        if(first_player_position<0)
            first_player_position = 0;
        break;
    }
}
console.log("Player at position " + first_player_position + " and also winner");
