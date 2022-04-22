let noplay = 0, ladder = 1, sanke = 2;
let first_player_position = 0;
let dice_roll = 0;
console.log("Player at start position " + first_player_position);

// repeat till get winner
while(first_player_position<100){
    
    //rolls the die
    let first_player_roll = Math.floor(Math.random()*6)+1;
    ++dice_roll;
    //check for noplay, ladder and snake
    let check_play = Math.floor(Math.random()*10)%3;
    switch(check_play){
    case noplay:
        console.log("Player at " + first_player_position);
        break;
    case ladder:
        first_player_position = first_player_position + first_player_roll;
        //ensure the player get exact 100 for winning
        if(first_player_position>100)
            first_player_position = first_player_position - first_player_roll;
        console.log("Player at " + first_player_position);
        break;
    case sanke:
        first_player_position = first_player_position - first_player_roll;
        if(first_player_position<0)
            first_player_position = 0;
        console.log("Player at " + first_player_position);
        break;
    }
}
console.log("The dice was played " + dice_roll+ " times to win");