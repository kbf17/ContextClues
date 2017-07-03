var friends = ['Rick', 'Morty', 'Summer', 'Fry', 'Jerry'];
var places = ['Dimension C-137', 'Omicron-Persei-8', 'Robot Hell', 'The Center of the Earth', 'Gallifrey', 'The Lair of the Sea Witch', 'some beach in New Jersey', 'Twin Peaks', 'a Disney theme park', 'Finland'];
var things = ['Harry Potter fanfiction', 'a used spork', 'notebook', 'some string', 'a half-drunk cup of coffee', 'Trump\'s twitter account', 'a sandy beach towel', 'a pile of Snapple caps', 'losing scratch-off lottery tickets', 'a wine bottle tree', 'the Pepsi sign', 'Vulcan\'s booty', 'mini psychedelic Vulcan', 'a pen almost out of ink', 'a vintage 80s boombox', 'a four-leaf clover', 'a heart filled with the void', 'a mouse with sticky buttons', 'litter scooper', 'Thor\'s Hammer'];
var str;
$(document).ready(function(){
    createClues();
    // $(this).on('click', whoWithWhat);
});

function createClues() {
    for (var h = 1; h < 101; h++)
        if(h<101){
            var clue = $("<h3></h3>").text("Clue " + h);
            $('body').append(clue);
            $(clue).bind("click", whoWithWhat);
        
        }
};

function whoWithWhat() {
    var randFriends = friends[Math.floor(Math.random() * friends.length)];
    var randPlaces = places[Math.floor(Math.random() * places.length)];
    var randThings = things[Math.floor(Math.random() * things.length)];
    alert(randFriends + " did it in " + randPlaces + " with " +  randThings)
    // return randFriends + " did it in " + randPlaces + " with " +  randThings;
    console.log(randFriends + " did it in " + randPlaces + " with " +  randThings);
};


// function whoWithWhat(event) {
//         var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
//         // This line is adding a random person from the data array to the text field​
//         alert(this.friends[randomNum] + " did it in " + this.places[randomNum] + " with " + this.things[randomNum]);
//     }

//     function handlerName(e){
//     alert(e.data.msg);
// }

//     $(this).bind("click", {msg: "You just clicked me!"}, handlerName);