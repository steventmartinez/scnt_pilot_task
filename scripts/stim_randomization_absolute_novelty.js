//------------------------------------//
// Function to Randomize stimuli
//------------------------------------//
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


//------------------------------------//
// Organize stim based on categories
//------------------------------------//
var art = tiktok_stim.filter(x => x.category === 'art')
var beauty_contouring = tiktok_stim.filter(x => x.category === 'beauty_contouring')
var ceramics = tiktok_stim.filter(x => x.category === 'ceramics')
var coffee_art = tiktok_stim.filter(x => x.category === 'coffee_art')
var cookie_recipes = tiktok_stim.filter(x => x.category === 'cookie_recipes')
var dance = tiktok_stim.filter(x => x.category === 'dance')
var diy_bracelets = tiktok_stim.filter(x => x.category === 'diy_bracelets')
var dogs = tiktok_stim.filter(x => x.category === 'dogs')
var kitchen_renovations = tiktok_stim.filter(x => x.category === 'kitchen_renovations')
var ootd = tiktok_stim.filter(x => x.category === 'ootd')
var piano = tiktok_stim.filter(x => x.category === 'piano')
var rock_climbing = tiktok_stim.filter(x => x.category === 'rock_climbing')
var skateboarding = tiktok_stim.filter(x => x.category === 'skateboarding')
var soccer_juggling = tiktok_stim.filter(x => x.category === 'soccer_juggling')
var travel = tiktok_stim.filter(x => x.category === 'travel')
var unboxing = tiktok_stim.filter(x => x.category === 'unboxing')
var workout = tiktok_stim.filter(x => x.category === 'workout')



//------------------------------------//
// Remove dance and ootd from tiktok_stim
//------------------------------------//
/* Remove stim that has already been selected for Intervention 1 text */
tiktok_stim = tiktok_stim.filter(val => !dance.includes(val))
tiktok_stim = tiktok_stim.filter(val => !ootd.includes(val))


//------------------------------------------//
// Shuffle dance and ootd
//------------------------------------------//
var dance_randomized = shuffle(dance)
var ootd_randomized = shuffle(ootd)


//--------------------------------------------------//
// Subset 2 videos from dance and 2 videos from ootd
//-------------------------------------------------//
var practice_dance = dance_randomized.slice(0, 3)
var practice_ootd = ootd_randomized.slice(0, 3)

var practice_one_dance = practice_dance[0]
var practice_one_ootd = practice_ootd[0]

var practice_two_dance = practice_dance[1]
var practice_two_ootd = practice_ootd[1]

var practice_three_dance = practice_dance[2]
var practice_three_ootd = practice_ootd[2]



/*Feed practice_one dance and ootd and practice_two dance and ootd into an array */
var practice_one = [practice_one_dance, practice_one_ootd]
var practice_one_randomized = shuffle(practice_one)
var practice_one_randomized = practice_one_randomized.flatMap(i => [i, i, i, i, i, i]);

var practice_two = [practice_two_dance, practice_two_ootd]
var practice_two_randomized = shuffle(practice_two)
var practice_two_randomized = practice_two_randomized.flatMap(i => [i, i, i, i, i, i]);


var practice_three = [practice_three_dance, practice_three_ootd]
var practice_three_randomized = shuffle(practice_three)
var practice_three_randomized = practice_three_randomized.flatMap(i => [i, i, i, i, i, i]);




//------------------------------------------//
// Organize stim based on length grouping
//------------------------------------------//
var short = tiktok_stim.filter(x => x.length_grouping === 'short')
var medium = tiktok_stim.filter(x => x.length_grouping === 'medium')
var long = tiktok_stim.filter(x => x.length_grouping === 'long')


//--------------------------------------//
// Randomize each length grouping array
//--------------------------------------//
var short_randomized = shuffle(short)
var medium_randomized = shuffle(medium)
var long_randomized = shuffle(long)



//-----------------------------------------------------------------------//
// Subset all videos from 1 category to use as "Low" absolute novelty
//-----------------------------------------------------------------------//


//-----------------------------------------------------------------------//
// Subset all videos from 4 categories to use as "High" absolute novelty
//-----------------------------------------------------------------------//





//------------------------------------//
// Randomize each category array
//------------------------------------//
var art_randomized = shuffle(art)
var beauty_contouring_randomized = shuffle(beauty_contouring)
var ceramics_randomized = shuffle(ceramics)
var coffee_art_randomized = shuffle(coffee_art)
var cookie_recipes_randomized = shuffle(cookie_recipes)
var dance_randomized = shuffle(dance)
var diy_bracelets_randomized = shuffle(diy_bracelets)
var dogs_randomized = shuffle(dogs)
var kitchen_renovations_randomized = shuffle(kitchen_renovations)
var ootd_randomized = shuffle(ootd)
var piano_randomized = shuffle(piano)
var rock_climbing_randomized = shuffle(rock_climbing)
var skateboarding_randomized = shuffle(skateboarding)
var soccer_juggling_randomized = shuffle(soccer_juggling)
var travel_randomized = shuffle(travel)
var unboxing_randomized = shuffle(unboxing)
var workout_randomized = shuffle(workout)







/*Feed categories into an array */
var categories = [travel, dance]

/* Shuffle array of categories */
var categories_randomized = shuffle(categories)


//------------------------------------//
// Organize Low Conceptual Volatility
//------------------------------------//

/*Pull first category from the array */
var LCV_block_one = categories_randomized.slice(0, 1)
var LCV_block_one = LCV_block_one.flat()
// console.log(LCV_block_one)
// console.log(tiktok_stim)


