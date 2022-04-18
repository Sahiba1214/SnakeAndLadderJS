//UC3 option no play,ladder,snake
console.log("Welcome to snake and Ladder");
let first_player_position=0;
console.log("First player at start position:"+first_player_position)

//roll die
let first_player_roll=Math.floor(Math.random()*6)+1;
first_player_position=first_player_roll+first_player_position;
console.log("After rolls the die,first player at position:"+first_player_roll)

// check for noplay,ladder and snake
let noplay=0,ladder=1,snake=2;
let check_play = Math.floor(Math.random()*3);
switch(check_play){
    case noplay:
        break;
        case ladder:
            first_player_position=first_player_position+first_player_roll
            break;
            case snake:
                first_player_position=first_player_position-first_player_roll;
                if(first_player_position<0)
                first_player_position=0;
                break;
                console.log("player at position:"+first_player_position);
}