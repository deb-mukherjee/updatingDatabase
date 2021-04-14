//create a game class
class Game {
    constructor() {

    }
    //read gameState from database
    getState() {
        database.ref('gameState').on("value", function (read) {
            gameState = read.val();
        })
    }

    //update state in database
    update(state){
        database.ref('/').update({
            gameState : state
        });
    }


    //create a start function to start the game
start(){
    if(gameState === 0){
       
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();

    }
}
}
