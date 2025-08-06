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


//------------------------------------------//
// Shuffle dance and ootd
//------------------------------------------//
var dance_randomized = shuffle(dance)
var ootd_randomized = shuffle(ootd)


//--------------------------------------------------//
// Subset 6 videos from dance and 6 videos from ootd
//-------------------------------------------------//
var practice_dance = dance_randomized.slice(0, 6)
var practice_ootd = ootd_randomized.slice(0, 6)


/*Feed practice_dance and practice_ootd into an array */
var practice_stim = [practice_dance, practice_ootd]
var practice_stim = shuffle(practice_stim)


/*Subset first item in array for practice one stim*/
var first_practice_round_stim = practice_stim[0]
var second_practice_round_stim = practice_stim[1]


///////////////////////////////////////////////////////////////////////////////////////////////////////////


//----------------------------------------//
// Remove dance and ootd from tiktok_stim
//----------------------------------------//
tiktok_stim = tiktok_stim.filter(val => !dance.includes(val))
tiktok_stim = tiktok_stim.filter(val => !ootd.includes(val))


//------------------------------------------//
// Organize stim based on length grouping
//------------------------------------------//
// var low_novelty_short = short_randomized.shift(); // Removes and returns first element
// var high_novelty_short = short_randomized.flat(); // Now contains remaining elements

/********** LOW NOVELTY ORGANIZATION **********/
var short = [kitchen_renovations, soccer_juggling, unboxing, beauty_contouring, skateboarding]
var short_randomized = shuffle(short)
var low_novelty_short = short_randomized.slice(0,1).flat(); // Removes and returns first element

var medium = [dogs, coffee_art, rock_climbing, ceramics, cookie_recipes]
var medium_randomized = shuffle(medium)
var low_novelty_medium = medium_randomized.slice(0,1).flat(); // Removes and returns first element

var long = [art, travel, diy_bracelets, piano, workout]
var long_randomized = shuffle(long)
var low_novelty_long = long_randomized.slice(0,1).flat(); // Removes and returns first element



/********** HIGH NOVELTY ORGANIZATION **********/
// Function to randomly sample n items from an array
function randomSample(arr, n) {
  const copy = [...arr];
  
  // Fisher-Yates shuffle (just the first n elements)
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    const randomIndex = Math.floor(Math.random() * (copy.length - i)) + i;
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }
  
  return copy.slice(0, n);
}

var high_novelty_short_fullstim = short_randomized.slice(1); // Removes and returns all elements after the first element
var high_novelty_short = high_novelty_short_fullstim.flatMap(arr => randomSample(arr, 3)); // Sample 3 items from each array and combine into new variable

var high_novelty_medium_fullstim = medium_randomized.slice(1); // Removes and returns all elements after the first element
var high_novelty_medium = high_novelty_medium_fullstim.flatMap(arr => randomSample(arr, 3)); // Sample 3 items from each array and combine into new variable

var high_novelty_long_fullstim = long_randomized.slice(1); // Removes and returns all elements after the first element
var high_novelty_long = high_novelty_long_fullstim.flatMap(arr => randomSample(arr, 3)); // Sample 3 items from each array and combine into new variable

