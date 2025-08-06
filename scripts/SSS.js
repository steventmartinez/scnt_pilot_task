var SSS = {
  type: jsPsychSurvey,
  survey_json: {
    title: 'If you agree with the statement or decide that it describes you, answer TRUE. If you disagree with a statement or feel that it is not descriptive of you, answer False. Answer every statement either True or False even if you are not entirely sure of your answer.',
    showQuestionNumbers: false,
    pages: [
      {
        elements: [
          {
            type: 'radiogroup',
            name: 'SSS_Q1',
            title: "I like to have new and exciting experiences and sensations even if they are a little frightening", 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
          {
            type: 'radiogroup',
            name: 'SSS_Q2',
            title: "I like doing things just for the thrill of it", 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
          {
            type: 'radiogroup',
            name: 'SSS_Q3',
            title: "I sometimes like to do things that are a little frightening", 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
          {
            type: 'radiogroup',
            name: 'SSS_Q4',
            title: "I'll try anything once", 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
          {
            type: 'radiogroup',
            name: 'SSS_Q5',
            title: 'I sometimes do "crazy" things just for fun', 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
          {
            type: 'radiogroup',
            name: 'SSS_Q6',
            title: "I like wild and uninhibited parties", 
            isRequired: true,
            colCount: 0,
            choices: ['True', 'False']
          },
        ]
      }
    ]
  },
  on_finish: function (data) {
      for (const key in data.response) {
    // console.log(`${key}: ${data.response.[key]}`);
    
    /**** For "SSS_Q1" question ****/
    /*If the question is "SSS_Q1" and participant answers "False"*/
    if (`${key}` == "SSS_Q1" && `${data.response[key]}` == "False") {
      SSS_Q1_categorical_answer = "False"
      SSS_Q1_numerical_answer = 0
    }

    /**** For "SSS_Q1" question ****/
    /*If the question is "SSS_Q1" and participant answers "True"*/
    if (`${key}` == "SSS_Q1" && `${data.response[key]}` == "True") {
      SSS_Q1_categorical_answer = "True"
      SSS_Q1_numerical_answer = 1
    }



    /**** For "SSS_Q2" question ****/
    /*If the question is "SSS_Q2" and participant answers "False"*/
    if (`${key}` == "SSS_Q2" && `${data.response[key]}` == "False") {
      SSS_Q2_categorical_answer = "False"
      SSS_Q2_numerical_answer = 0
    }

    /**** For "SSS_Q2" question ****/
    /*If the question is "SSS_Q2" and participant answers "True"*/
    if (`${key}` == "SSS_Q2" && `${data.response[key]}` == "True") {
      SSS_Q2_categorical_answer = "True"
      SSS_Q2_numerical_answer = 1
    }



    /**** For "SSS_Q3" question ****/
    /*If the question is "SSS_Q3" and participant answers "False"*/
    if (`${key}` == "SSS_Q3" && `${data.response[key]}` == "False") {
      SSS_Q3_categorical_answer = "False"
      SSS_Q3_numerical_answer = 0
    }

    /**** For "SSS_Q3" question ****/
    /*If the question is "SSS_Q3" and participant answers "True"*/
    if (`${key}` == "SSS_Q3" && `${data.response[key]}` == "True") {
      SSS_Q3_categorical_answer = "True"
      SSS_Q3_numerical_answer = 1
    }



    /**** For "SSS_Q4" question ****/
    /*If the question is "SSS_Q4" and participant answers "False"*/
    if (`${key}` == "SSS_Q4" && `${data.response[key]}` == "False") {
      SSS_Q4_categorical_answer = "False"
      SSS_Q4_numerical_answer = 0
    }

    /**** For "SSS_Q4" question ****/
    /*If the question is "SSS_Q4" and participant answers "True"*/
    if (`${key}` == "SSS_Q4" && `${data.response[key]}` == "True") {
      SSS_Q4_categorical_answer = "True"
      SSS_Q4_numerical_answer = 1
    }



    /**** For "SSS_Q5" question ****/
    /*If the question is "SSS_Q5" and participant answers "False"*/
    if (`${key}` == "SSS_Q5" && `${data.response[key]}` == "False") {
      SSS_Q5_categorical_answer = "False"
      SSS_Q5_numerical_answer = 0
    }

    /**** For "SSS_Q5" question ****/
    /*If the question is "SSS_Q5" and participant answers "True"*/
    if (`${key}` == "SSS_Q5" && `${data.response[key]}` == "True") {
      SSS_Q5_categorical_answer = "True"
      SSS_Q5_numerical_answer = 1
    }



    /**** For "SSS_Q6" question ****/
    /*If the question is "SSS_Q6" and participant answers "False"*/
    if (`${key}` == "SSS_Q6" && `${data.response[key]}` == "False") {
      SSS_Q6_categorical_answer = "False"
      SSS_Q6_numerical_answer = 0
    }

    /**** For "SSS_Q6" question ****/
    /*If the question is "SSS_Q6" and participant answers "True"*/
    if (`${key}` == "SSS_Q6" && `${data.response[key]}` == "True") {
      SSS_Q6_categorical_answer = "True"
      SSS_Q6_numerical_answer = 1
    }
  }

    //Add categorical and numerical columns for "SSS_Q1" question
    data.SSS_Q1_categorical_answer = SSS_Q1_categorical_answer
    data.SSS_Q1_numerical_answer = SSS_Q1_numerical_answer

    //Add categorical and numerical columns for "SSS_Q2" question
    data.SSS_Q2_categorical_answer = SSS_Q2_categorical_answer
    data.SSS_Q2_numerical_answer = SSS_Q2_numerical_answer

    //Add categorical and numerical columns for "SSS_Q3" question
    data.SSS_Q3_categorical_answer = SSS_Q3_categorical_answer
    data.SSS_Q3_numerical_answer = SSS_Q3_numerical_answer

    //Add categorical and numerical columns for "SSS_Q4" question
    data.SSS_Q4_categorical_answer = SSS_Q4_categorical_answer
    data.SSS_Q4_numerical_answer = SSS_Q4_numerical_answer

    //Add categorical and numerical columns for "SSS_Q5" question
    data.SSS_Q5_categorical_answer = SSS_Q5_categorical_answer
    data.SSS_Q5_numerical_answer = SSS_Q5_numerical_answer

    //Add categorical and numerical columns for "SSS_Q6" question
    data.SSS_Q6_categorical_answer = SSS_Q6_categorical_answer
    data.SSS_Q6_numerical_answer = SSS_Q6_numerical_answer
}
}


//------------------------------------//
// Organize SSS procedure
//------------------------------------//
var SSS_procedure = {
    timeline: [SSS]
};
  