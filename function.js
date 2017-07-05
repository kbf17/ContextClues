var friends = ['Rick', 'Morty', 'Summer', 'Fry', 'Jerry'];
var places = ['Dimension C-137', 'Omicron-Persei-8', 'Robot Hell', 'The Center of the Earth', 'Gallifrey', 'The Lair of the Sea Witch', 'some beach in New Jersey', 'Twin Peaks', 'a Disney theme park', 'Finland'];
var things = ['Harry Potter fanfiction', 'a used spork', 'notebook', 'some string', 'a half-drunk cup of coffee', 'Trump\'s twitter account', 'a sandy beach towel', 'a pile of Snapple caps', 'losing scratch-off lottery tickets', 'a wine bottle tree', 'the Pepsi sign', 'Vulcan\'s booty', 'mini psychedelic Vulcan', 'a pen almost out of ink', 'a vintage 80s boombox', 'a four-leaf clover', 'a heart filled with the void', 'a mouse with sticky buttons', 'litter scooper', 'Thor\'s Hammer'];
$(document).ready(function(){
    createClues();
});
function createClues() {
    for (var h = 1; h <= 101; h++){
        var clue = $("<h3></h3>").text("Clue " + [h]);
        $('body').append(clue);
        var stuff = {
            randFriends: friends[Math.floor(Math.random() * friends.length)],
            randPlaces: places[Math.floor(Math.random() * places.length)],
            randThings: things[Math.floor(Math.random() * things.length)],
            }
        $(clue).on('click', whoWithWhat.bind(stuff));
        }
};
function whoWithWhat() {
    alert(this.randFriends + " did it in " + this.randPlaces + " with " +  this.randThings)
};