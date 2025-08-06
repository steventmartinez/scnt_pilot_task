//------------------------------------//
// Create Global Clock
//------------------------------------//
// Create a variable to store the global clock
let experimentClock = {
    start_time: null,
    trial_start_time: null
};

// Function to initialize the global clock
function initializeGlobalClock() {
    experimentClock.start_time = performance.now();
}

// Function to start timing a trial
function startTrialTiming() {
    experimentClock.trial_start_time = performance.now();
}

// Function to calculate the trial duration
function getTrialDuration() {
    return performance.now() - experimentClock.trial_start_time;
}



//-------------------------------------------//
// Initialize global variable for past trials
//------------------------------------------//
var past_trials_categories = []



//------------------------------------//
// Welcome trial
//------------------------------------//
// var welcome = {
//   on_start: function() {
//     // Initialize the global clock when the experiment starts
//     initializeGlobalClock();
//     // Start timing this trial
//     startTrialTiming();
//     },
//   data: {
//       trial_id: "welcome"
//   },
//   type: jsPsychInstructions,
//     pages: function(){
//     pageOne = "<p><div style='line-height: 2; font-size: 3.5vw;'><b>Welcome to the study!</b></div></p>"
//      return [pageOne]
//   },
//   show_clickable_nav: true,
//   css_classes: ['custom_padding'],
//   on_finish: function(data) {
//       // Calculate and add trial duration to the data
//       data.trial_duration = getTrialDuration();
//   }
// }


//------------------------------------//
// Welcome trial
//------------------------------------//
var welcome = {
  type: jsPsychSurveyText,
  questions: [{prompt: "<p><div style ='line-height: 1.5; font-size:3.5vw;'>Welcome to the study!</div></p>" +
  "<p><div style ='line-height: 1.5; margin-bottom:5vh; font-size:3.5vw;'>Please enter your initials.</div></p>",
  name: 'initials', 
  required: true}],
  trial_duration: 0,
  css_classes: ['custom_padding'],
  on_finish: function(data) {
  
  // Calculate and add trial duration to the data
  data.trial_duration = getTrialDuration();
  var response = data.response;
  jsPsych.data.addProperties({
      initials: response.initials, 
  })
}
}

var video_platform_instructions = {
  data: {
    trial_id: "video_platform_instructions",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>This experiment will involve watching videos like you normally would on social media applications.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>For this experiment, we created a video platform that shows you videos, just like TikTok and YouTube Shorts.</div></p>" +
    '<img src="study_design_aesthetics/social_media_logo.png" <div style= "width: 17vw; height: 26vh; margin-bottom: 2vh;"></img>' +
    "<p><div style ='line-height: 1.25; font-size:2.7vw;'>Press <b>Next</b> to learn about how the video platform works.</div></p>"

    let pageTwo = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 4vh;'>Here is an example of what the video platform looks like.</div></p>" +
    `<img src="study_design_aesthetics/video_platform_example.png" <div style= "width: 30vw; height: 58vh; margin-bottom: 2vh;"></img>`

    let pageThree = 
    "<p><div style='line-height: 1.35; font-size: 2.5vw;'>The platform will show you one video at a time.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.5vw;'>To skip to the next video, you can press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.5vw; margin-bottom: 3vh;'>To exit and start watching a new feed of videos, you can press the <b>Exit</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    `<img src="study_design_aesthetics/video_platform_example_skip_exit.png" <div style= "width: 39vw; height: 58vh; margin-bottom: 2vh;"></img>`

    let pageFour = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw;'>Please watch the videos as you normally would in real life.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw;'>You can either watch the full video,</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw;'>skip to the next video using the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button,</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw;'>or exit the current feed of videos and start watching a new feed of videos using the <b>Exit</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>"

    let pageFive = 
    "<p><div style='line-height: 1.55; font-size: 2.7vw;'>Some video feeds will show you varied content from a mix of different categories, while other video feeds will be more limited.</div></p>"

    let pageSix = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>To learn how to use the video platform, we will do <b>two rounds of practice</b>.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom:4vh;'>In this first practice round, let's practice using the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom:4vh;'>Please watch each video as you normally would and if you want to skip to the next video, press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>The <b>Exit</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button will be disabled in this practice round.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>Press <b>Next</b> when you are ready to start the first round of practice.</div></p>"

    return [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
  on_finish: function(data) {
      // Calculate and add trial duration to the data
      data.trial_duration = getTrialDuration();
  }
}




//------------------------------------//
// First Practice Round
//------------------------------------//
var first_practice_round = {
  data: {
          trial_id: "first_practice_round",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" disabled style = "position:fixed; left: 69vw; bottom: 0vh; opacity: 0.5; cursor: not-allowed;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//------------------------------------//
// First Practice Round Procedure
//------------------------------------//
var first_practice_round_procedure = {
    timeline: [first_practice_round],
    timeline_variables: first_practice_round_stim,
    };




//----------------------------------------//
// Instructions for Second Practice Round
//----------------------------------------//
var instructions_practice_second_round = {
    on_start: function() {
    document.body.style.backgroundColor = '#FFFFFF'
},
  data: {
    trial_id: "instructions_practice_second_round",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>Great job!</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>In this next round of practice, you will practice using the <b>Exit</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.45; font-size:2.7vw; margin-bottom:4vh;'>Please watch each video as you normally would and if you want to exit the current feed of videos and start a new feed of videos, press the <b>Exit</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom:4vh;'>The <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button will be disabled in this practice round.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom:4vh;'>Press <b>Next</b> when you are ready to start the second round of practice.</div></p>"


    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
  on_finish: function(data) {
      // Calculate and add trial duration to the data
      data.trial_duration = getTrialDuration();
  }
}


//------------------------------------//
// Second Practice Round
//------------------------------------//
var second_practice_round = {
  data: {
          trial_id: "first_practice_round",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },
          
      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" disabled style = "position:fixed; left: 69vw; bottom: 12vh; opacity: 0.5; cursor: not-allowed;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }



//------------------------------------//
// Second Practice Round Procedure
//------------------------------------//
var second_practice_round_procedure = {
    timeline: [second_practice_round],
    timeline_variables: second_practice_round_stim,
    };





//------------------------------------//
// 10-second Progress Bar
//------------------------------------//
var progress_bar = {
  on_start: function() {
    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "progress_bar"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
                <p style="color: #FFFFFF; font-size: 3.7vw; text-align: center; margin: 0 0 30px 0;"><b>Loading new video feed...</b></p>
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 70px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 10s linear;">
            </div>`;
        return html;
      },
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 10000,  // 10 seconds to match the progress bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  }
}


//--------------------------------------//
// Conditional for 10-second Progress Bar
//--------------------------------------//
var progress_bar_conditional = {
    timeline: [progress_bar],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//------------------------------------//
// Practice Conclusion
//------------------------------------//
var practice_conclusion = {
  on_start: function() {
    document.body.style.backgroundColor = '#FFFFFF'
  },
  data: {
      trial_id: "practice_conclusion"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 2.5; font-size: 2.5vw;'>The practice rounds are now complete.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding']
}


//---------------------------------------------//
// **** FULL PRACTICE PROCEDURE ****
//--------------------------------------------//
var practice_procedure = {
  timeline: [first_practice_round_procedure, instructions_practice_second_round, second_practice_round_procedure, progress_bar_conditional, practice_conclusion],
  };






                                            //---------------------------------------------//
                                            // **** START EXPERIMENTAL TRIALS ****
                                            //--------------------------------------------//

//------------------------------------//
// Start Video Platform
//------------------------------------//
var start_video_platform = {
  data: {
      trial_id: "start_video_platform"
  },
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p><div style='line-height: 1.55; font-size: 2.5vw;'>The experiment will now begin.</div></p>" +
  "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 40vh;'>When you are ready to begin, press the button to launch the platform.</div></p>",
  choices: ['study_design_aesthetics/social_media_logo.png'],
  button_html: (choice) => {
return `<div style = "cursor: pointer; position:fixed; left: 41vw; bottom: 30vh"><img id="${choice}" src="${choice}" style="width: 17vw; height: 26vh; display: block; margin: 0 auto;"></button>`  },
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
};

  

//------------------------------------//
// Video Platform -- Loading
//------------------------------------//
var video_platform_loading = {
  on_start: function() {
    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "video_platform_loading"
  },
  type: jsPsychAudioKeyboardResponse,
  stimulus: 'study_design_aesthetics/intro_sound.mp3',
prompt: function() {
    var html = `
      <p id="progress-percentage" style="color: #00FFFF; text-shadow: 0 0 8px #00BFFF; font-size: 4vw; text-align: center; margin-bottom: 5vh"><b>0%</b></p>
      <div class="progress-container" style="height: 60px; width: 500px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 191, 255, 0.5); display: flex; padding: 0 2px; align-items: center; margin-bottom: 30vh;">
      <div id="progress-segments" style="display: flex; width: 100%; height: 80%; gap: 4px;"></div>
      <img src="study_design_aesthetics/social_media_logo.png" <div class = blur-fade-glow style= "width: 16vw; height: 26vh; position: fixed; left: 42vw; bottom: 20vh; margin-bottom: 2vh;"></img>`;
    return html;
  },
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 10200,  // 9 seconds to match the progress bar duration
  on_load: function() {
    const segmentContainer = document.getElementById('progress-segments');
    const numSegments = 10; // Number of discrete segments
    
    // Create all segments initially (empty)
    for (let i = 0; i < numSegments; i++) {
      const segment = document.createElement('div');
      segment.className = 'progress-segment';
      segment.style.flex = '1';
      segment.style.height = '100%';
      segment.style.background = '#222'; // Start with empty segments
      segment.style.borderRadius = '6px';
      segment.style.transition = 'background 0.3s ease';
      segmentContainer.appendChild(segment);
    }
    
    // Fill segments one by one with a delay
    const segments = document.querySelectorAll('.progress-segment');
    const segmentDuration = 7000 / numSegments; // Time per segment
    const percentageElement = document.getElementById('progress-percentage');
    
    // Update percentage every 1% (every 90ms for 9 seconds)
    let currentPercentage = 0;
    const percentageInterval = setInterval(() => {
      currentPercentage++;
      percentageElement.innerHTML = `<b>${currentPercentage}%</b>`;
      
      if (currentPercentage >= 100) {
        clearInterval(percentageInterval);
      }
    }, 70); // 9000ms / 100 = 90ms per 1%
    
    segments.forEach((segment, index) => {
      setTimeout(() => {
        segment.style.background = 'linear-gradient(90deg, #00BFFF, #00FFFF)';
        segment.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.8)';
      }, segmentDuration * index);
    });
  }
}


//---------------------------------------------//
// EXP RUN -- SHORT -- LOW CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_short_low_conceptual_novelty = {
  data: {
          trial_id: "exp_run_short_low_conceptual_novelty",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- SHORT -- LOW CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_short_low_conceptual_novelty_procedure = {
    timeline: [exp_run_short_low_conceptual_novelty],
    timeline_variables: low_novelty_short,
    };






//---------------------------------------------//
// EXP RUN -- SHORT -- HIGH CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_short_high_conceptual_novelty = {
  data: {
          trial_id: "exp_run_short_high_conceptual_novelty",

          conceptual_novelty_level: "high",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- SHORT -- HIGH CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_short_high_conceptual_novelty_procedure = {
    timeline: [exp_run_short_high_conceptual_novelty],
    timeline_variables: high_novelty_short,
    };










//---------------------------------------------//
// EXP RUN -- MEDIUM -- LOW CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_medium_low_conceptual_novelty = {
  data: {
          trial_id: "exp_run_medium_low_conceptual_novelty",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- MEDIUM -- LOW CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_medium_low_conceptual_novelty_procedure = {
    timeline: [exp_run_medium_low_conceptual_novelty],
    timeline_variables: low_novelty_medium,
    };






//---------------------------------------------//
// EXP RUN -- MEDIUM -- HIGH CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_medium_high_conceptual_novelty = {
  data: {
          trial_id: "exp_run_medium_high_conceptual_novelty",

          conceptual_novelty_level: "high",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- MEDIUM -- HIGH CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_medium_high_conceptual_novelty_procedure = {
    timeline: [exp_run_medium_high_conceptual_novelty],
    timeline_variables: high_novelty_medium,
    };














//---------------------------------------------//
// EXP RUN -- LONG -- LOW CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_long_low_conceptual_novelty = {
  data: {
          trial_id: "exp_run_long_low_conceptual_novelty",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- LONG -- LOW CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_long_low_conceptual_novelty_procedure = {
    timeline: [exp_run_long_low_conceptual_novelty],
    timeline_variables: low_novelty_long,
    };






//---------------------------------------------//
// EXP RUN -- LONG -- HIGH CONCEPTUAL NOVELTY
//----------------------------------------------//
var exp_run_long_high_conceptual_novelty = {
  data: {
          trial_id: "exp_run_long_high_conceptual_novelty",

          conceptual_novelty_level: "high",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

      },
  on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
  /*Initialize trial clock*/
    startTrialTiming();


  /*Gather information from past trial and compare it to current trial*/
    var last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    past_trials_categories.push(last_trial_category)
    data.past_trials_categories = past_trials_categories
    
    // current_trial_category = data.data.category
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (past_trials_categories.includes(current_trial_category)) {
        data.relatedness = "related"
        // console.log(data.relatedness)

      } else {
        data.relatedness = "unrelated"
        // console.log(data.relatedness)

      }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 500); // 500 milliseconds = .5 seconds
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                // '<img src="images/TikTok_logo.png" style= "height: 10vh; position:fixed; left: 13vw; top: 4vh;"</img>' +
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    // button_html: ['<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>', '<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="%choice%" src="%choice%" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; right: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      // return `<button class = "jspsych-btn" style = "position:fixed; left: 92vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.5vw; height: 7vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Add trial duration to data output*/
      data.trial_duration = getTrialDuration();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_adjusted = data.rt - 500

      /*If they press the 'Skip' button*/
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

      /*If they press the 'Home' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        // console.log(opportunity_cost)
        // console.log(choice)
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
        opportunity_cost = false
        choice = "watched_fully"
        // console.log(opportunity_cost)
        // console.log(choice)
      }

    },
  }




//---------------------------------------------------------//
// EXP RUN -- LONG -- HIGH CONCEPTUAL NOVELTY -- PROCEDURE
//---------------------------------------------------------//
var exp_run_long_high_conceptual_novelty_procedure = {
    timeline: [exp_run_long_high_conceptual_novelty],
    timeline_variables: high_novelty_long,
    };


//------------------------------------//
// Function to Randomize stimuli
//------------------------------------//
// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  // Create a copy to avoid mutating the original array
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}


//------------------------------------//
// Randomize each grouping so that it's not always low -> high novelty
//------------------------------------//
var short_runs = [exp_run_short_low_conceptual_novelty_procedure, exp_run_short_high_conceptual_novelty_procedure]
var medium_runs = [exp_run_medium_low_conceptual_novelty_procedure, exp_run_medium_high_conceptual_novelty_procedure]
var long_runs = [exp_run_long_low_conceptual_novelty_procedure, exp_run_long_high_conceptual_novelty_procedure]

var short_runs_randomized = shuffleArray(short_runs);
var medium_runs_randomized = shuffleArray(medium_runs);
var long_runs_randomized = shuffleArray(long_runs);


/*Add progress_bar_conditional back into the array before randomizing all of the arrays*/
var [short_run_one, short_run_two] = short_runs_randomized;
var short_runs_complete = [short_run_one, progress_bar_conditional, short_run_two, progress_bar_conditional]

var [medium_run_one, medium_run_two] = medium_runs_randomized;
var medium_runs_complete = [medium_run_one, progress_bar_conditional, medium_run_two, progress_bar_conditional]

var [long_run_one, long_run_two] = long_runs_randomized;
var long_runs_complete = [long_run_one, progress_bar_conditional, long_run_two, progress_bar_conditional]


/*Combine all arrays into one and then randomize the order*/
var all_runs = [short_runs_complete, medium_runs_complete, long_runs_complete]
var all_runs_randomized = shuffleArray(all_runs);


// Method 1: Array destructuring
var [exp_first_run, exp_second_run, exp_third_run] = all_runs_randomized;



//---------------------------------------------//
// **** FULL EXPERIMENTAL PROCEDURE ****
//--------------------------------------------//
var exp_procedure = {
  // timeline: [start_video_platform, video_platform_loading, feed[0], feed[1], feed[2]],
    timeline: [exp_first_run, exp_second_run, exp_third_run],
  };




//------------------------------------//
// Conclusion
//------------------------------------//
var conclusion = {
  on_start: function() {
    document.body.style.backgroundColor = '#FFFFFF'
  },
  data: {
      trial_id: "conclusion"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 2; font-size: 2.5vw;'>The experiment is now complete.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 3vh; '>Thank you for your participation!</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding']
}





//------------------------------------//
// Organize Conceptual Novelty Task
//------------------------------------//
var conceptual_novelty_task = {
    // timeline: [practice_procedure]
    timeline: [welcome, video_platform_instructions, practice_procedure, start_video_platform, video_platform_loading, exp_procedure, conclusion]
};
