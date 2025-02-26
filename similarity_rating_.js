/********************************* 
 * Similarity_Rating_Recode *
 *********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'similarity_rating_recode';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(secondRoutineBegin());
flowScheduler.add(secondRoutineEachFrame());
flowScheduler.add(secondRoutineEnd());
const picturesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(picturesLoopBegin(picturesLoopScheduler));
flowScheduler.add(picturesLoopScheduler);
flowScheduler.add(picturesLoopEnd);


flowScheduler.add(rating2_intro1RoutineBegin());
flowScheduler.add(rating2_intro1RoutineEachFrame());
flowScheduler.add(rating2_intro1RoutineEnd());
flowScheduler.add(rating2_intro2RoutineBegin());
flowScheduler.add(rating2_intro2RoutineEachFrame());
flowScheduler.add(rating2_intro2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(survey_introRoutineBegin());
flowScheduler.add(survey_introRoutineEachFrame());
flowScheduler.add(survey_introRoutineEnd());
const trials_7LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_7LoopBegin(trials_7LoopScheduler));
flowScheduler.add(trials_7LoopScheduler);
flowScheduler.add(trials_7LoopEnd);


const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin(trials_6LoopScheduler));
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);


const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);


const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


const trials_8LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_8LoopBegin(trials_8LoopScheduler));
flowScheduler.add(trials_8LoopScheduler);
flowScheduler.add(trials_8LoopEnd);


const trials_10LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_10LoopBegin(trials_10LoopScheduler));
flowScheduler.add(trials_10LoopScheduler);
flowScheduler.add(trials_10LoopEnd);


const trials_11LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_11LoopBegin(trials_11LoopScheduler));
flowScheduler.add(trials_11LoopScheduler);
flowScheduler.add(trials_11LoopEnd);


flowScheduler.add(Thank_you_finalRoutineBegin());
flowScheduler.add(Thank_you_finalRoutineEachFrame());
flowScheduler.add(Thank_you_finalRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = ',';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Welcome to our study!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: 'This task consists of two phases.\n\nFirst, you will see two pictures and rate how similar they are.\n\nSecond, you will see four pictures and select the picture that is the most different from the others',
    placeholder: 'Type here...',
    font: 'OpenSans',
    pos: [(- 0.1), 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.0, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -2.0 
  });
  
  polygon_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_3', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Click arrow to proceed.\nIf you click, the task begins in three seconds!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  polygon_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_4', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "second"
  secondClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "rating1"
  rating1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code
  number = Number.parseInt(expInfo["participant"]);
  if (((number % 2) === 0)) {
      options = ["Very\nsimilar", "", "", "", "", "", "Very\ndissimilar"];
  } else {
      options = ["Very\ndissimilar", "", "", "", "", "", "Very\nsimilar"];
  }
  
  rating1_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating1_instruction',
    text: 'How similar are these pictures?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: 4,
    size: [1.0, 0.05], pos: [0, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: options, fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color([1.0, 1.0, 1.0]), markerColor: new util.Color([0.0039, 0.0039, 0.0039]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  pic1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pic1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0], 
    draggable: false,
    size : [0.75, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  pic2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pic2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.75, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "rating2_intro1"
  rating2_intro1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'For the next portion, you will see four pictures, all at the same time.\nYour task is to click on the one that seems the most different from the others.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -1.0 
  });
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "rating2_intro2"
  rating2_intro2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Remember,\nyour task is to click on the picture that seems the most different from the others.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "square"
  squareClock = new util.Clock();
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: None,
    fillColor: [0.0039, 0.0039, 0.0039],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.05, 0.05],
    ori: 0.0
    ,
    depth: 0
  });
  button.clock = new util.Clock();
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Click on the square in the middle of the screen',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  // Initialize components for Routine "rating2"
  rating2Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0.25], 
    draggable: false,
    size : [0.775, 0.475],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0.25], 
    draggable: false,
    size : [0.775, 0.475],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.25)], 
    draggable: false,
    size : [0.775, 0.475],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, (- 0.25)], 
    draggable: false,
    size : [0.775, 0.475],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'You have completed the task!\nWe have few surveys for you before wrapping up.\n\nThe task automatically finishes and proceeds to survey in three seconds.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey_intro"
  survey_introClock = new util.Clock();
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'The information provided on this form will:\n\n- Provide us with information to conduct the experiment and analyze the data from the experiment.\n\n-Provide us with information regarding participant demographics (age, race, sex, etc.) for persons who enroll in research studies. This information is requested by groups that fund research such as the National Science Foundation (NSF), the National Institute of Health (NIH), and by groups that monitor research studies at the University of Iowa such as the University’s institutional Review Board (IRB) to ensure that human research studies accurately sample the population. This also helps to make sure that certain population subsets (minorities, females, etc.) are no longer wittingly or unwittingly underrepresented in scientific research.\n\nYou may skip any questions that you do not wish to answer.',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  polygon_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_5', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Freetext"
  FreetextClock = new util.Clock();
  textbox_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_3',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_4',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, (- 0.25)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.1],  units: undefined, 
    ori: 0.0,
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  polygon_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_6', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -4.0 
  });
  
  polygon_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_8', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -5, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Gender"
  GenderClock = new util.Clock();
  textbox_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_5',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_6',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_7',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.05)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_8',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.1)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  textbox_9 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_9',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.15)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  textbox_10 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_10',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.2)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  textbox_11 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_11',
    text: '',
    placeholder: 'Describe here...',
    font: 'Open Sans',
    pos: [0.1, (- 0.2)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  polygon_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_7', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -8, 
    interpolate: true, 
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -10.0 
  });
  
  // Initialize components for Routine "Ethinicity"
  EthinicityClock = new util.Clock();
  slider_5 = new visual.Slider({
    win: psychoJS.window, name: 'slider_5',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: ["", ""], fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  textbox_18 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_18',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_19 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_19',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_20 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_20',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), (- 0.054)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.27],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  polygon_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_9', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -4, 
    interpolate: true, 
  });
  
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  // Initialize components for Routine "Race"
  RaceClock = new util.Clock();
  textbox_12 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_12',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox_13 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_13',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_14 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_14',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.05)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_15 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_15',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.1)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  textbox_16 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_16',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.15)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_3',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  textbox_17 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_17',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.2)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  polygon_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_10', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -7, 
    interpolate: true, 
  });
  
  mouse_14 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_14.mouseClock = new util.Clock();
  textbox_28 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_28',
    text: '',
    placeholder: 'Describe here...',
    font: 'Open Sans',
    pos: [0.1, (- 0.2)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  // Initialize components for Routine "Vision"
  VisionClock = new util.Clock();
  textbox_23 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_23',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  textbox_21 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_21',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_22 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_22',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.05)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_24 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_24',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.1)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  textbox_25 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_25',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.15)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  textbox_26 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_26',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.05, (- 0.2)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  slider_4 = new visual.Slider({
    win: psychoJS.window, name: 'slider_4',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  polygon_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_11', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -7, 
    interpolate: true, 
  });
  
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  // Initialize components for Routine "Hearing"
  HearingClock = new util.Clock();
  slider_8 = new visual.Slider({
    win: psychoJS.window, name: 'slider_8',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: ["", ""], fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  textbox_38 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_38',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), 0], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_27 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_27',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), (- 0.054)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.27],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_29 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_29',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  polygon_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_12', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -4, 
    interpolate: true, 
  });
  
  mouse_12 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_12.mouseClock = new util.Clock();
  // Initialize components for Routine "Handedness"
  HandednessClock = new util.Clock();
  textbox_31 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_31',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  slider_7 = new visual.Slider({
    win: psychoJS.window, name: 'slider_7',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: ["Left", "Either", "Right"], fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  polygon_13 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_13', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -3, 
    interpolate: true, 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Click arrow to proceed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -4.0 
  });
  
  // Initialize components for Routine "college"
  collegeClock = new util.Clock();
  var_15 = new visual.Slider({
    win: psychoJS.window, name: 'var_15',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 1.0, units: psychoJS.window.units,
    labels: ["", ""], fontSize: 0.027, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('white'), markerColor: new util.Color('white'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  textbox_34 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_34',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [1.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  polygon_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_14', 
    vertices: 'arrow', size:[0.1, 0.1],
    ori: 90.0, 
    pos: [0.6, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  mouse_13 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_13.mouseClock = new util.Clock();
  textbox_32 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_32',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), (- 0.0405)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.081],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  textbox_33 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_33',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.2), (- 0.2415)], 
    draggable: false,
    letterHeight: 0.027,
    lineSpacing: 1.0,
    size: [0.5, 0.081],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  textbox_30 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_30',
    text: '',
    placeholder: 'Ex. Linguistics, Biology, Statistics, ...',
    font: 'Arial',
    pos: [0.035, (- 0.0405)], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [0.53, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'darkgray', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  textbox_35 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_35',
    text: '',
    placeholder: 'Ex. 1999, 2016, 2028',
    font: 'Arial',
    pos: [0.05, (- 0.081)], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'darkgray', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  textbox_37 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_37',
    text: '',
    placeholder: 'Ex. high school diploma',
    font: 'Arial',
    pos: [0.14, (- 0.2415)], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [0.32, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'darkgray', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  textbox_36 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_36',
    text: '',
    placeholder: 'Ex. 1999, 2016, 2028',
    font: 'Arial',
    pos: [0.05, (- 0.282)], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [0.5, 0.027],  units: undefined, 
    ori: 0.0,
    color: 'darkgray', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  // Initialize components for Routine "Thank_you_final"
  Thank_you_finalClock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Thank you so much for participating in our study!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'You have completed the task!\nPlease wait while we save your results.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    IntroClock.reset();
    routineTimer.reset();
    IntroMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Intro.started', globalClock.getTime());
    IntroMaxDuration = null
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(text_4);
    IntroComponents.push(textbox);
    IntroComponents.push(text_7);
    IntroComponents.push(polygon_3);
    IntroComponents.push(mouse_3);
    
    for (const thisComponent of IntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval(polygon_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_3.clicked_name.push(null);
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    for (const thisComponent of IntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    blankClock.reset();
    routineTimer.reset();
    blankMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    // current position of the mouse:
    mouse_5.x = [];
    mouse_5.y = [];
    mouse_5.leftButton = [];
    mouse_5.midButton = [];
    mouse_5.rightButton = [];
    mouse_5.time = [];
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('blank.started', globalClock.getTime());
    blankMaxDuration = null
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(text_8);
    blankComponents.push(polygon_4);
    blankComponents.push(mouse_5);
    
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function blankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank' ---
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }
    
    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_5.clickableObjects = eval(polygon_4)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_5.clickableObjects)) {
              mouse_5.clickableObjects = [mouse_5.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_5.clickableObjects) {
              if (obj.contains(mouse_5)) {
                  gotValidClick = true;
                  mouse_5.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_5.clicked_name.push(null);
          }
          _mouseXYs = mouse_5.getPos();
          mouse_5.x.push(_mouseXYs[0]);
          mouse_5.y.push(_mouseXYs[1]);
          mouse_5.leftButton.push(_mouseButtons[0]);
          mouse_5.midButton.push(_mouseButtons[1]);
          mouse_5.rightButton.push(_mouseButtons[2]);
          mouse_5.time.push(mouse_5.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank' ---
    for (const thisComponent of blankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_5.x', mouse_5.x);
    psychoJS.experiment.addData('mouse_5.y', mouse_5.y);
    psychoJS.experiment.addData('mouse_5.leftButton', mouse_5.leftButton);
    psychoJS.experiment.addData('mouse_5.midButton', mouse_5.midButton);
    psychoJS.experiment.addData('mouse_5.rightButton', mouse_5.rightButton);
    psychoJS.experiment.addData('mouse_5.time', mouse_5.time);
    psychoJS.experiment.addData('mouse_5.clicked_name', mouse_5.clicked_name);
    
    // the Routine "blank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function secondRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'second' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    secondClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    secondMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('second.started', globalClock.getTime());
    secondMaxDuration = null
    // keep track of which components have finished
    secondComponents = [];
    secondComponents.push(text_9);
    secondComponents.push(text_10);
    secondComponents.push(text_11);
    
    for (const thisComponent of secondComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function secondRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'second' ---
    // get current time
    t = secondClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    
    // *text_10* updates
    if (t >= 1.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    
    
    // *text_11* updates
    if (t >= 2.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of secondComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function secondRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'second' ---
    for (const thisComponent of secondComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('second.stopped', globalClock.getTime());
    if (secondMaxDurationReached) {
        secondClock.add(secondMaxDuration);
    } else {
        secondClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function picturesLoopBegin(picturesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pictures = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("similarity_rating_randomization/rating1/rating1_" + expInfo["participant"]) + ".csv"), '0'),
      seed: undefined, name: 'pictures'
    });
    psychoJS.experiment.addLoop(pictures); // add the loop to the experiment
    currentLoop = pictures;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPicture of pictures) {
      snapshot = pictures.getSnapshot();
      picturesLoopScheduler.add(importConditions(snapshot));
      picturesLoopScheduler.add(rating1RoutineBegin(snapshot));
      picturesLoopScheduler.add(rating1RoutineEachFrame());
      picturesLoopScheduler.add(rating1RoutineEnd(snapshot));
      picturesLoopScheduler.add(picturesLoopEndIteration(picturesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function picturesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pictures);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function picturesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("similarity_rating_randomization/rating2/rating2_" + expInfo["participant"]) + ".csv"), '0'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(squareRoutineBegin(snapshot));
      trialsLoopScheduler.add(squareRoutineEachFrame());
      trialsLoopScheduler.add(squareRoutineEnd(snapshot));
      trialsLoopScheduler.add(rating2RoutineBegin(snapshot));
      trialsLoopScheduler.add(rating2RoutineEachFrame());
      trialsLoopScheduler.add(rating2RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '0:2'),
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_7 of trials_7) {
      snapshot = trials_7.getSnapshot();
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(FreetextRoutineBegin(snapshot));
      trials_7LoopScheduler.add(FreetextRoutineEachFrame());
      trials_7LoopScheduler.add(FreetextRoutineEnd(snapshot));
      trials_7LoopScheduler.add(trials_7LoopEndIteration(trials_7LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '2'),
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_6 of trials_6) {
      snapshot = trials_6.getSnapshot();
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(GenderRoutineBegin(snapshot));
      trials_6LoopScheduler.add(GenderRoutineEachFrame());
      trials_6LoopScheduler.add(GenderRoutineEnd(snapshot));
      trials_6LoopScheduler.add(trials_6LoopEndIteration(trials_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '3'),
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(EthinicityRoutineBegin(snapshot));
      trials_2LoopScheduler.add(EthinicityRoutineEachFrame());
      trials_2LoopScheduler.add(EthinicityRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '4'),
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(RaceRoutineBegin(snapshot));
      trials_5LoopScheduler.add(RaceRoutineEachFrame());
      trials_5LoopScheduler.add(RaceRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '5'),
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(VisionRoutineBegin(snapshot));
      trials_3LoopScheduler.add(VisionRoutineEachFrame());
      trials_3LoopScheduler.add(VisionRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '6'),
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(HearingRoutineBegin(snapshot));
      trials_4LoopScheduler.add(HearingRoutineEachFrame());
      trials_4LoopScheduler.add(HearingRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '7:17'),
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_8 of trials_8) {
      snapshot = trials_8.getSnapshot();
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(HandednessRoutineBegin(snapshot));
      trials_8LoopScheduler.add(HandednessRoutineEachFrame());
      trials_8LoopScheduler.add(HandednessRoutineEnd(snapshot));
      trials_8LoopScheduler.add(trials_8LoopEndIteration(trials_8LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_8LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_8);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_8LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_10LoopBegin(trials_10LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_10 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '17'),
      seed: undefined, name: 'trials_10'
    });
    psychoJS.experiment.addLoop(trials_10); // add the loop to the experiment
    currentLoop = trials_10;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_10 of trials_10) {
      snapshot = trials_10.getSnapshot();
      trials_10LoopScheduler.add(importConditions(snapshot));
      trials_10LoopScheduler.add(collegeRoutineBegin(snapshot));
      trials_10LoopScheduler.add(collegeRoutineEachFrame());
      trials_10LoopScheduler.add(collegeRoutineEnd(snapshot));
      trials_10LoopScheduler.add(trials_10LoopEndIteration(trials_10LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_10LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_10);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_10LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_11LoopBegin(trials_11LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_11 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'demographics.csv', '18:25'),
      seed: undefined, name: 'trials_11'
    });
    psychoJS.experiment.addLoop(trials_11); // add the loop to the experiment
    currentLoop = trials_11;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_11 of trials_11) {
      snapshot = trials_11.getSnapshot();
      trials_11LoopScheduler.add(importConditions(snapshot));
      trials_11LoopScheduler.add(FreetextRoutineBegin(snapshot));
      trials_11LoopScheduler.add(FreetextRoutineEachFrame());
      trials_11LoopScheduler.add(FreetextRoutineEnd(snapshot));
      trials_11LoopScheduler.add(trials_11LoopEndIteration(trials_11LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_11LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_11);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_11LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function rating1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rating1Clock.reset();
    routineTimer.reset();
    rating1MaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    pic1.setImage(Pair_1);
    pic2.setImage(Pair_2);
    psychoJS.experiment.addData('rating1.started', globalClock.getTime());
    rating1MaxDuration = null
    // keep track of which components have finished
    rating1Components = [];
    rating1Components.push(rating1_instruction);
    rating1Components.push(slider);
    rating1Components.push(pic1);
    rating1Components.push(pic2);
    
    for (const thisComponent of rating1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function rating1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating1' ---
    // get current time
    t = rating1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rating1_instruction* updates
    if (t >= 0.0 && rating1_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating1_instruction.tStart = t;  // (not accounting for frame time here)
      rating1_instruction.frameNStart = frameN;  // exact frame index
      
      rating1_instruction.setAutoDraw(true);
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // Check slider for response to end Routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *pic1* updates
    if (t >= 0.0 && pic1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pic1.tStart = t;  // (not accounting for frame time here)
      pic1.frameNStart = frameN;  // exact frame index
      
      pic1.setAutoDraw(true);
    }
    
    
    // *pic2* updates
    if (t >= 0.0 && pic2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pic2.tStart = t;  // (not accounting for frame time here)
      pic2.frameNStart = frameN;  // exact frame index
      
      pic2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rating1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rating1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating1' ---
    for (const thisComponent of rating1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "rating1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rating2_intro1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating2_intro1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rating2_intro1Clock.reset();
    routineTimer.reset();
    rating2_intro1MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rating2_intro1.started', globalClock.getTime());
    rating2_intro1MaxDuration = null
    // keep track of which components have finished
    rating2_intro1Components = [];
    rating2_intro1Components.push(text);
    rating2_intro1Components.push(text_3);
    rating2_intro1Components.push(polygon);
    rating2_intro1Components.push(mouse);
    
    for (const thisComponent of rating2_intro1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function rating2_intro1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating2_intro1' ---
    // get current time
    t = rating2_intro1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval(polygon)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rating2_intro1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rating2_intro1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating2_intro1' ---
    for (const thisComponent of rating2_intro1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating2_intro1.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "rating2_intro1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rating2_intro2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating2_intro2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rating2_intro2Clock.reset();
    routineTimer.reset();
    rating2_intro2MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rating2_intro2.started', globalClock.getTime());
    rating2_intro2MaxDuration = null
    // keep track of which components have finished
    rating2_intro2Components = [];
    rating2_intro2Components.push(text_2);
    rating2_intro2Components.push(polygon_2);
    rating2_intro2Components.push(text_6);
    rating2_intro2Components.push(mouse_2);
    
    for (const thisComponent of rating2_intro2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function rating2_intro2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating2_intro2' ---
    // get current time
    t = rating2_intro2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval(polygon_2)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rating2_intro2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rating2_intro2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating2_intro2' ---
    for (const thisComponent of rating2_intro2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating2_intro2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "rating2_intro2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function squareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    squareClock.reset();
    routineTimer.reset();
    squareMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    psychoJS.experiment.addData('square.started', globalClock.getTime());
    squareMaxDuration = null
    // keep track of which components have finished
    squareComponents = [];
    squareComponents.push(button);
    squareComponents.push(text_5);
    
    for (const thisComponent of squareComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function squareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square' ---
    // get current time
    t = squareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of squareComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function squareRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square' ---
    for (const thisComponent of squareComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('square.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "square" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rating2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rating2Clock.reset();
    routineTimer.reset();
    rating2MaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(image1);
    image_2.setImage(image2);
    image_3.setImage(image3);
    image_4.setImage(image4);
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rating2.started', globalClock.getTime());
    rating2MaxDuration = null
    // keep track of which components have finished
    rating2Components = [];
    rating2Components.push(image);
    rating2Components.push(image_2);
    rating2Components.push(image_3);
    rating2Components.push(image_4);
    rating2Components.push(mouse_4);
    
    for (const thisComponent of rating2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function rating2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating2' ---
    // get current time
    t = rating2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([image, image_2, image_3, image_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_4.clicked_name.push(null);
          }
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rating2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rating2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating2' ---
    for (const thisComponent of rating2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    // the Routine "rating2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ThanksClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    ThanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Thanks.started', globalClock.getTime());
    ThanksMaxDuration = null
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(text_16);
    ThanksComponents.push(text_13);
    ThanksComponents.push(text_14);
    ThanksComponents.push(text_15);
    
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ThanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thanks' ---
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
    }
    
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    
    
    // *text_14* updates
    if (t >= 1.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    
    
    // *text_15* updates
    if (t >= 2.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ThanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thanks' ---
    for (const thisComponent of ThanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thanks.stopped', globalClock.getTime());
    if (ThanksMaxDurationReached) {
        ThanksClock.add(ThanksMaxDuration);
    } else {
        ThanksClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function survey_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'survey_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    survey_introClock.reset();
    routineTimer.reset();
    survey_introMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('survey_intro.started', globalClock.getTime());
    survey_introMaxDuration = null
    // keep track of which components have finished
    survey_introComponents = [];
    survey_introComponents.push(textbox_2);
    survey_introComponents.push(polygon_5);
    survey_introComponents.push(mouse_6);
    survey_introComponents.push(text_22);
    
    for (const thisComponent of survey_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function survey_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'survey_intro' ---
    // get current time
    t = survey_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // *polygon_5* updates
    if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_5.tStart = t;  // (not accounting for frame time here)
      polygon_5.frameNStart = frameN;  // exact frame index
      
      polygon_5.setAutoDraw(true);
    }
    
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_6.clickableObjects = eval(polygon_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_6.clickableObjects)) {
              mouse_6.clickableObjects = [mouse_6.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_6.clickableObjects) {
              if (obj.contains(mouse_6)) {
                  gotValidClick = true;
                  mouse_6.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_6.clicked_name.push(null);
          }
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of survey_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function survey_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'survey_intro' ---
    for (const thisComponent of survey_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('survey_intro.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_6.x', mouse_6.x);
    psychoJS.experiment.addData('mouse_6.y', mouse_6.y);
    psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton);
    psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton);
    psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton);
    psychoJS.experiment.addData('mouse_6.time', mouse_6.time);
    psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name);
    
    // the Routine "survey_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FreetextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Freetext' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FreetextClock.reset();
    routineTimer.reset();
    FreetextMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_3.setText(f'''Question {index} 
     
     {item_text}''');
    textbox_4.setText('');
    textbox_4.refresh();
    textbox_4.setText('');
    // setup some python lists for storing info about the mouse_8
    // current position of the mouse:
    mouse_8.x = [];
    mouse_8.y = [];
    mouse_8.leftButton = [];
    mouse_8.midButton = [];
    mouse_8.rightButton = [];
    mouse_8.time = [];
    mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Freetext.started', globalClock.getTime());
    FreetextMaxDuration = null
    // keep track of which components have finished
    FreetextComponents = [];
    FreetextComponents.push(textbox_3);
    FreetextComponents.push(textbox_4);
    FreetextComponents.push(polygon_6);
    FreetextComponents.push(mouse_8);
    FreetextComponents.push(text_23);
    FreetextComponents.push(polygon_8);
    
    for (const thisComponent of FreetextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FreetextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Freetext' ---
    // get current time
    t = FreetextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_3* updates
    if (t >= 0.0 && textbox_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_3.tStart = t;  // (not accounting for frame time here)
      textbox_3.frameNStart = frameN;  // exact frame index
      
      textbox_3.setAutoDraw(true);
    }
    
    
    // *textbox_4* updates
    if (t >= 0.0 && textbox_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_4.tStart = t;  // (not accounting for frame time here)
      textbox_4.frameNStart = frameN;  // exact frame index
      
      textbox_4.setAutoDraw(true);
    }
    
    
    // *polygon_6* updates
    if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_6.tStart = t;  // (not accounting for frame time here)
      polygon_6.frameNStart = frameN;  // exact frame index
      
      polygon_6.setAutoDraw(true);
    }
    
    // *mouse_8* updates
    if (t >= 0.0 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_8.clickableObjects = eval(polygon_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_8.clickableObjects)) {
              mouse_8.clickableObjects = [mouse_8.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_8.clickableObjects) {
              if (obj.contains(mouse_8)) {
                  gotValidClick = true;
                  mouse_8.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_8.clicked_name.push(null);
          }
          _mouseXYs = mouse_8.getPos();
          mouse_8.x.push(_mouseXYs[0]);
          mouse_8.y.push(_mouseXYs[1]);
          mouse_8.leftButton.push(_mouseButtons[0]);
          mouse_8.midButton.push(_mouseButtons[1]);
          mouse_8.rightButton.push(_mouseButtons[2]);
          mouse_8.time.push(mouse_8.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    
    // *polygon_8* updates
    if (t >= 0.0 && polygon_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_8.tStart = t;  // (not accounting for frame time here)
      polygon_8.frameNStart = frameN;  // exact frame index
      
      polygon_8.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FreetextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function FreetextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Freetext' ---
    for (const thisComponent of FreetextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Freetext.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_4.text',textbox_4.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_8.x', mouse_8.x);
    psychoJS.experiment.addData('mouse_8.y', mouse_8.y);
    psychoJS.experiment.addData('mouse_8.leftButton', mouse_8.leftButton);
    psychoJS.experiment.addData('mouse_8.midButton', mouse_8.midButton);
    psychoJS.experiment.addData('mouse_8.rightButton', mouse_8.rightButton);
    psychoJS.experiment.addData('mouse_8.time', mouse_8.time);
    psychoJS.experiment.addData('mouse_8.clicked_name', mouse_8.clicked_name);
    
    // the Routine "Freetext" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function GenderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Gender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GenderClock.reset();
    routineTimer.reset();
    GenderMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_5.setText(f'''Question {index} 
     
     {item_text}''');
    textbox_6.setText('Male');
    textbox_7.setText('Female');
    textbox_8.setText('Non-binary/third gender');
    textbox_9.setText('Prefer not to say');
    textbox_10.setText('Prefer to self-describe');
    textbox_11.setText('');
    textbox_11.refresh();
    slider_2.reset()
    slider_2.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_2.setFillColor('Red')
    slider_2.setBorderColor('White')
    slider_2.setOpacity(None)
    slider_2.setContrast(1.0)
    slider_2.setPos([(- 0.5), (- 0.1)])
    slider_2.setSize([0.027, 0.2])
    slider_2.setOri(1.0)
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Gender.started', globalClock.getTime());
    GenderMaxDuration = null
    // keep track of which components have finished
    GenderComponents = [];
    GenderComponents.push(textbox_5);
    GenderComponents.push(textbox_6);
    GenderComponents.push(textbox_7);
    GenderComponents.push(textbox_8);
    GenderComponents.push(textbox_9);
    GenderComponents.push(textbox_10);
    GenderComponents.push(textbox_11);
    GenderComponents.push(slider_2);
    GenderComponents.push(polygon_7);
    GenderComponents.push(mouse_7);
    GenderComponents.push(text_24);
    
    for (const thisComponent of GenderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function GenderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Gender' ---
    // get current time
    t = GenderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_5* updates
    if (t >= 0.0 && textbox_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_5.tStart = t;  // (not accounting for frame time here)
      textbox_5.frameNStart = frameN;  // exact frame index
      
      textbox_5.setAutoDraw(true);
    }
    
    
    // *textbox_6* updates
    if (t >= 0.0 && textbox_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_6.tStart = t;  // (not accounting for frame time here)
      textbox_6.frameNStart = frameN;  // exact frame index
      
      textbox_6.setAutoDraw(true);
    }
    
    
    // *textbox_7* updates
    if (t >= 0.0 && textbox_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_7.tStart = t;  // (not accounting for frame time here)
      textbox_7.frameNStart = frameN;  // exact frame index
      
      textbox_7.setAutoDraw(true);
    }
    
    
    // *textbox_8* updates
    if (t >= 0.0 && textbox_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_8.tStart = t;  // (not accounting for frame time here)
      textbox_8.frameNStart = frameN;  // exact frame index
      
      textbox_8.setAutoDraw(true);
    }
    
    
    // *textbox_9* updates
    if (t >= 0.0 && textbox_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_9.tStart = t;  // (not accounting for frame time here)
      textbox_9.frameNStart = frameN;  // exact frame index
      
      textbox_9.setAutoDraw(true);
    }
    
    
    // *textbox_10* updates
    if (t >= 0.0 && textbox_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_10.tStart = t;  // (not accounting for frame time here)
      textbox_10.frameNStart = frameN;  // exact frame index
      
      textbox_10.setAutoDraw(true);
    }
    
    
    // *textbox_11* updates
    if (t >= 0.0 && textbox_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_11.tStart = t;  // (not accounting for frame time here)
      textbox_11.frameNStart = frameN;  // exact frame index
      
      textbox_11.setAutoDraw(true);
    }
    
    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }
    
    
    // *polygon_7* updates
    if (t >= 0.0 && polygon_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_7.tStart = t;  // (not accounting for frame time here)
      polygon_7.frameNStart = frameN;  // exact frame index
      
      polygon_7.setAutoDraw(true);
    }
    
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_7.clickableObjects = eval(polygon_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_7.clickableObjects)) {
              mouse_7.clickableObjects = [mouse_7.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_7.clickableObjects) {
              if (obj.contains(mouse_7)) {
                  gotValidClick = true;
                  mouse_7.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_7.clicked_name.push(null);
          }
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GenderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function GenderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Gender' ---
    for (const thisComponent of GenderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Gender.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_11.text',textbox_11.text)
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_7.x', mouse_7.x);
    psychoJS.experiment.addData('mouse_7.y', mouse_7.y);
    psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton);
    psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton);
    psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton);
    psychoJS.experiment.addData('mouse_7.time', mouse_7.time);
    psychoJS.experiment.addData('mouse_7.clicked_name', mouse_7.clicked_name);
    
    // the Routine "Gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function EthinicityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ethinicity' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EthinicityClock.reset();
    routineTimer.reset();
    EthinicityMaxDurationReached = false;
    // update component parameters for each repeat
    slider_5.reset()
    slider_5.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_5.setFillColor('Red')
    slider_5.setBorderColor('White')
    slider_5.setOpacity(None)
    slider_5.setContrast(1.0)
    slider_5.setPos([(- 0.5), (- 0.027)])
    slider_5.setSize([0.027, 0.054])
    slider_5.setOri(1.0)
    textbox_18.setText(f'''Question {index} 
     
     {item_text}''');
    textbox_19.setText('Hispanic or Latino');
    textbox_20.setText('Not Hispanic or Latino');
    // setup some python lists for storing info about the mouse_10
    // current position of the mouse:
    mouse_10.x = [];
    mouse_10.y = [];
    mouse_10.leftButton = [];
    mouse_10.midButton = [];
    mouse_10.rightButton = [];
    mouse_10.time = [];
    mouse_10.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Ethinicity.started', globalClock.getTime());
    EthinicityMaxDuration = null
    // keep track of which components have finished
    EthinicityComponents = [];
    EthinicityComponents.push(slider_5);
    EthinicityComponents.push(textbox_18);
    EthinicityComponents.push(textbox_19);
    EthinicityComponents.push(textbox_20);
    EthinicityComponents.push(polygon_9);
    EthinicityComponents.push(mouse_10);
    
    for (const thisComponent of EthinicityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function EthinicityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ethinicity' ---
    // get current time
    t = EthinicityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_5* updates
    if (t >= 0.0 && slider_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_5.tStart = t;  // (not accounting for frame time here)
      slider_5.frameNStart = frameN;  // exact frame index
      
      slider_5.setAutoDraw(true);
    }
    
    
    // *textbox_18* updates
    if (t >= 0.0 && textbox_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_18.tStart = t;  // (not accounting for frame time here)
      textbox_18.frameNStart = frameN;  // exact frame index
      
      textbox_18.setAutoDraw(true);
    }
    
    
    // *textbox_19* updates
    if (t >= 0.0 && textbox_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_19.tStart = t;  // (not accounting for frame time here)
      textbox_19.frameNStart = frameN;  // exact frame index
      
      textbox_19.setAutoDraw(true);
    }
    
    
    // *textbox_20* updates
    if (t >= 0.0 && textbox_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_20.tStart = t;  // (not accounting for frame time here)
      textbox_20.frameNStart = frameN;  // exact frame index
      
      textbox_20.setAutoDraw(true);
    }
    
    
    // *polygon_9* updates
    if (t >= 0.0 && polygon_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_9.tStart = t;  // (not accounting for frame time here)
      polygon_9.frameNStart = frameN;  // exact frame index
      
      polygon_9.setAutoDraw(true);
    }
    
    // *mouse_10* updates
    if (t >= 0.0 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_10.clickableObjects = eval(polygon_9)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_10.clickableObjects)) {
              mouse_10.clickableObjects = [mouse_10.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_10.clickableObjects) {
              if (obj.contains(mouse_10)) {
                  gotValidClick = true;
                  mouse_10.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_10.clicked_name.push(null);
          }
          _mouseXYs = mouse_10.getPos();
          mouse_10.x.push(_mouseXYs[0]);
          mouse_10.y.push(_mouseXYs[1]);
          mouse_10.leftButton.push(_mouseButtons[0]);
          mouse_10.midButton.push(_mouseButtons[1]);
          mouse_10.rightButton.push(_mouseButtons[2]);
          mouse_10.time.push(mouse_10.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EthinicityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function EthinicityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ethinicity' ---
    for (const thisComponent of EthinicityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Ethinicity.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_5.response', slider_5.getRating());
    psychoJS.experiment.addData('slider_5.rt', slider_5.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_10.x', mouse_10.x);
    psychoJS.experiment.addData('mouse_10.y', mouse_10.y);
    psychoJS.experiment.addData('mouse_10.leftButton', mouse_10.leftButton);
    psychoJS.experiment.addData('mouse_10.midButton', mouse_10.midButton);
    psychoJS.experiment.addData('mouse_10.rightButton', mouse_10.rightButton);
    psychoJS.experiment.addData('mouse_10.time', mouse_10.time);
    psychoJS.experiment.addData('mouse_10.clicked_name', mouse_10.clicked_name);
    
    // the Routine "Ethinicity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function RaceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Race' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    RaceClock.reset();
    routineTimer.reset();
    RaceMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_12.setText(f'''Question {index} 
     
     {item_text}''');
    textbox_13.setText('Asian');
    textbox_14.setText('Black or African American');
    textbox_15.setText('Native American or Alaska Native');
    textbox_16.setText('Native Hawaiian or Other Pacific Islander');
    slider_3.reset()
    slider_3.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_3.setFillColor('Red')
    slider_3.setBorderColor('White')
    slider_3.setOpacity(None)
    slider_3.setContrast(1.0)
    slider_3.setPos([(- 0.5), (- 0.1)])
    slider_3.setSize([0.027, 0.2])
    slider_3.setOri(1.0)
    textbox_17.setText('Prefer to self-describe');
    // setup some python lists for storing info about the mouse_14
    // current position of the mouse:
    mouse_14.x = [];
    mouse_14.y = [];
    mouse_14.leftButton = [];
    mouse_14.midButton = [];
    mouse_14.rightButton = [];
    mouse_14.time = [];
    mouse_14.clicked_name = [];
    gotValidClick = false; // until a click is received
    textbox_28.setText('');
    textbox_28.refresh();
    psychoJS.experiment.addData('Race.started', globalClock.getTime());
    RaceMaxDuration = null
    // keep track of which components have finished
    RaceComponents = [];
    RaceComponents.push(textbox_12);
    RaceComponents.push(textbox_13);
    RaceComponents.push(textbox_14);
    RaceComponents.push(textbox_15);
    RaceComponents.push(textbox_16);
    RaceComponents.push(slider_3);
    RaceComponents.push(textbox_17);
    RaceComponents.push(polygon_10);
    RaceComponents.push(mouse_14);
    RaceComponents.push(textbox_28);
    
    for (const thisComponent of RaceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function RaceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Race' ---
    // get current time
    t = RaceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_12* updates
    if (t >= 0.0 && textbox_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_12.tStart = t;  // (not accounting for frame time here)
      textbox_12.frameNStart = frameN;  // exact frame index
      
      textbox_12.setAutoDraw(true);
    }
    
    
    // *textbox_13* updates
    if (t >= 0.0 && textbox_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_13.tStart = t;  // (not accounting for frame time here)
      textbox_13.frameNStart = frameN;  // exact frame index
      
      textbox_13.setAutoDraw(true);
    }
    
    
    // *textbox_14* updates
    if (t >= 0.0 && textbox_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_14.tStart = t;  // (not accounting for frame time here)
      textbox_14.frameNStart = frameN;  // exact frame index
      
      textbox_14.setAutoDraw(true);
    }
    
    
    // *textbox_15* updates
    if (t >= 0.0 && textbox_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_15.tStart = t;  // (not accounting for frame time here)
      textbox_15.frameNStart = frameN;  // exact frame index
      
      textbox_15.setAutoDraw(true);
    }
    
    
    // *textbox_16* updates
    if (t >= 0.0 && textbox_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_16.tStart = t;  // (not accounting for frame time here)
      textbox_16.frameNStart = frameN;  // exact frame index
      
      textbox_16.setAutoDraw(true);
    }
    
    
    // *slider_3* updates
    if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_3.tStart = t;  // (not accounting for frame time here)
      slider_3.frameNStart = frameN;  // exact frame index
      
      slider_3.setAutoDraw(true);
    }
    
    
    // *textbox_17* updates
    if (t >= 0.0 && textbox_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_17.tStart = t;  // (not accounting for frame time here)
      textbox_17.frameNStart = frameN;  // exact frame index
      
      textbox_17.setAutoDraw(true);
    }
    
    
    // *polygon_10* updates
    if (t >= 0.0 && polygon_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_10.tStart = t;  // (not accounting for frame time here)
      polygon_10.frameNStart = frameN;  // exact frame index
      
      polygon_10.setAutoDraw(true);
    }
    
    // *mouse_14* updates
    if (t >= 0.0 && mouse_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_14.tStart = t;  // (not accounting for frame time here)
      mouse_14.frameNStart = frameN;  // exact frame index
      
      mouse_14.status = PsychoJS.Status.STARTED;
      mouse_14.mouseClock.reset();
      prevButtonState = mouse_14.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_14.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_14.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_14.clickableObjects = eval(polygon_10)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_14.clickableObjects)) {
              mouse_14.clickableObjects = [mouse_14.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_14.clickableObjects) {
              if (obj.contains(mouse_14)) {
                  gotValidClick = true;
                  mouse_14.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_14.clicked_name.push(null);
          }
          _mouseXYs = mouse_14.getPos();
          mouse_14.x.push(_mouseXYs[0]);
          mouse_14.y.push(_mouseXYs[1]);
          mouse_14.leftButton.push(_mouseButtons[0]);
          mouse_14.midButton.push(_mouseButtons[1]);
          mouse_14.rightButton.push(_mouseButtons[2]);
          mouse_14.time.push(mouse_14.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *textbox_28* updates
    if (t >= 0.0 && textbox_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_28.tStart = t;  // (not accounting for frame time here)
      textbox_28.frameNStart = frameN;  // exact frame index
      
      textbox_28.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RaceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RaceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Race' ---
    for (const thisComponent of RaceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Race.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_3.response', slider_3.getRating());
    psychoJS.experiment.addData('slider_3.rt', slider_3.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_14.x', mouse_14.x);
    psychoJS.experiment.addData('mouse_14.y', mouse_14.y);
    psychoJS.experiment.addData('mouse_14.leftButton', mouse_14.leftButton);
    psychoJS.experiment.addData('mouse_14.midButton', mouse_14.midButton);
    psychoJS.experiment.addData('mouse_14.rightButton', mouse_14.rightButton);
    psychoJS.experiment.addData('mouse_14.time', mouse_14.time);
    psychoJS.experiment.addData('mouse_14.clicked_name', mouse_14.clicked_name);
    
    psychoJS.experiment.addData('textbox_28.text',textbox_28.text)
    // the Routine "Race" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function VisionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Vision' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    VisionClock.reset();
    routineTimer.reset();
    VisionMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_23.setText(f'''Question {index} 
     
     {item_text}''');
    textbox_21.setText('Normal uncorrected');
    textbox_22.setText('Corrected-to-normal (glasses)');
    textbox_24.setText('Corrected-to-normal (soft contacts)');
    textbox_25.setText('Corrected-to-normal (hard contacts)');
    textbox_26.setText('None of the above');
    slider_4.reset()
    slider_4.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_4.setFillColor('Red')
    slider_4.setBorderColor('White')
    slider_4.setOpacity(None)
    slider_4.setContrast(1.0)
    slider_4.setPos([(- 0.5), (- 0.1)])
    slider_4.setSize([0.027, 0.2])
    slider_4.setOri(1.0)
    // setup some python lists for storing info about the mouse_11
    // current position of the mouse:
    mouse_11.x = [];
    mouse_11.y = [];
    mouse_11.leftButton = [];
    mouse_11.midButton = [];
    mouse_11.rightButton = [];
    mouse_11.time = [];
    mouse_11.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Vision.started', globalClock.getTime());
    VisionMaxDuration = null
    // keep track of which components have finished
    VisionComponents = [];
    VisionComponents.push(textbox_23);
    VisionComponents.push(textbox_21);
    VisionComponents.push(textbox_22);
    VisionComponents.push(textbox_24);
    VisionComponents.push(textbox_25);
    VisionComponents.push(textbox_26);
    VisionComponents.push(slider_4);
    VisionComponents.push(polygon_11);
    VisionComponents.push(mouse_11);
    
    for (const thisComponent of VisionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function VisionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Vision' ---
    // get current time
    t = VisionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_23* updates
    if (t >= 0.0 && textbox_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_23.tStart = t;  // (not accounting for frame time here)
      textbox_23.frameNStart = frameN;  // exact frame index
      
      textbox_23.setAutoDraw(true);
    }
    
    
    // *textbox_21* updates
    if (t >= 0.0 && textbox_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_21.tStart = t;  // (not accounting for frame time here)
      textbox_21.frameNStart = frameN;  // exact frame index
      
      textbox_21.setAutoDraw(true);
    }
    
    
    // *textbox_22* updates
    if (t >= 0.0 && textbox_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_22.tStart = t;  // (not accounting for frame time here)
      textbox_22.frameNStart = frameN;  // exact frame index
      
      textbox_22.setAutoDraw(true);
    }
    
    
    // *textbox_24* updates
    if (t >= 0.0 && textbox_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_24.tStart = t;  // (not accounting for frame time here)
      textbox_24.frameNStart = frameN;  // exact frame index
      
      textbox_24.setAutoDraw(true);
    }
    
    
    // *textbox_25* updates
    if (t >= 0.0 && textbox_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_25.tStart = t;  // (not accounting for frame time here)
      textbox_25.frameNStart = frameN;  // exact frame index
      
      textbox_25.setAutoDraw(true);
    }
    
    
    // *textbox_26* updates
    if (t >= 0.0 && textbox_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_26.tStart = t;  // (not accounting for frame time here)
      textbox_26.frameNStart = frameN;  // exact frame index
      
      textbox_26.setAutoDraw(true);
    }
    
    
    // *slider_4* updates
    if (t >= 0.0 && slider_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_4.tStart = t;  // (not accounting for frame time here)
      slider_4.frameNStart = frameN;  // exact frame index
      
      slider_4.setAutoDraw(true);
    }
    
    
    // *polygon_11* updates
    if (t >= 0.0 && polygon_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_11.tStart = t;  // (not accounting for frame time here)
      polygon_11.frameNStart = frameN;  // exact frame index
      
      polygon_11.setAutoDraw(true);
    }
    
    // *mouse_11* updates
    if (t >= 0.0 && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_11.clickableObjects = eval(polygon_11)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_11.clickableObjects)) {
              mouse_11.clickableObjects = [mouse_11.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_11.clickableObjects) {
              if (obj.contains(mouse_11)) {
                  gotValidClick = true;
                  mouse_11.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_11.clicked_name.push(null);
          }
          _mouseXYs = mouse_11.getPos();
          mouse_11.x.push(_mouseXYs[0]);
          mouse_11.y.push(_mouseXYs[1]);
          mouse_11.leftButton.push(_mouseButtons[0]);
          mouse_11.midButton.push(_mouseButtons[1]);
          mouse_11.rightButton.push(_mouseButtons[2]);
          mouse_11.time.push(mouse_11.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of VisionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function VisionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Vision' ---
    for (const thisComponent of VisionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Vision.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_4.response', slider_4.getRating());
    psychoJS.experiment.addData('slider_4.rt', slider_4.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_11.x', mouse_11.x);
    psychoJS.experiment.addData('mouse_11.y', mouse_11.y);
    psychoJS.experiment.addData('mouse_11.leftButton', mouse_11.leftButton);
    psychoJS.experiment.addData('mouse_11.midButton', mouse_11.midButton);
    psychoJS.experiment.addData('mouse_11.rightButton', mouse_11.rightButton);
    psychoJS.experiment.addData('mouse_11.time', mouse_11.time);
    psychoJS.experiment.addData('mouse_11.clicked_name', mouse_11.clicked_name);
    
    // the Routine "Vision" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function HearingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Hearing' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    HearingClock.reset();
    routineTimer.reset();
    HearingMaxDurationReached = false;
    // update component parameters for each repeat
    slider_8.reset()
    slider_8.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_8.setFillColor('Red')
    slider_8.setBorderColor('White')
    slider_8.setOpacity(None)
    slider_8.setContrast(1.0)
    slider_8.setPos([(- 0.5), (- 0.027)])
    slider_8.setSize([0.027, 0.054])
    slider_8.setOri(1.0)
    textbox_38.setText('Yes');
    textbox_27.setText('No');
    textbox_29.setText(f'''Question {index} 
     
     {item_text}''');
    // setup some python lists for storing info about the mouse_12
    // current position of the mouse:
    mouse_12.x = [];
    mouse_12.y = [];
    mouse_12.leftButton = [];
    mouse_12.midButton = [];
    mouse_12.rightButton = [];
    mouse_12.time = [];
    mouse_12.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Hearing.started', globalClock.getTime());
    HearingMaxDuration = null
    // keep track of which components have finished
    HearingComponents = [];
    HearingComponents.push(slider_8);
    HearingComponents.push(textbox_38);
    HearingComponents.push(textbox_27);
    HearingComponents.push(textbox_29);
    HearingComponents.push(polygon_12);
    HearingComponents.push(mouse_12);
    
    for (const thisComponent of HearingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function HearingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Hearing' ---
    // get current time
    t = HearingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_8* updates
    if (t >= 0.0 && slider_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_8.tStart = t;  // (not accounting for frame time here)
      slider_8.frameNStart = frameN;  // exact frame index
      
      slider_8.setAutoDraw(true);
    }
    
    
    // *textbox_38* updates
    if (t >= 0.0 && textbox_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_38.tStart = t;  // (not accounting for frame time here)
      textbox_38.frameNStart = frameN;  // exact frame index
      
      textbox_38.setAutoDraw(true);
    }
    
    
    // *textbox_27* updates
    if (t >= 0.0 && textbox_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_27.tStart = t;  // (not accounting for frame time here)
      textbox_27.frameNStart = frameN;  // exact frame index
      
      textbox_27.setAutoDraw(true);
    }
    
    
    // *textbox_29* updates
    if (t >= 0.0 && textbox_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_29.tStart = t;  // (not accounting for frame time here)
      textbox_29.frameNStart = frameN;  // exact frame index
      
      textbox_29.setAutoDraw(true);
    }
    
    
    // *polygon_12* updates
    if (t >= 0.0 && polygon_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_12.tStart = t;  // (not accounting for frame time here)
      polygon_12.frameNStart = frameN;  // exact frame index
      
      polygon_12.setAutoDraw(true);
    }
    
    // *mouse_12* updates
    if (t >= 0.0 && mouse_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_12.tStart = t;  // (not accounting for frame time here)
      mouse_12.frameNStart = frameN;  // exact frame index
      
      mouse_12.status = PsychoJS.Status.STARTED;
      mouse_12.mouseClock.reset();
      prevButtonState = mouse_12.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_12.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_12.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_12.clickableObjects = eval(polygon_12)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_12.clickableObjects)) {
              mouse_12.clickableObjects = [mouse_12.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_12.clickableObjects) {
              if (obj.contains(mouse_12)) {
                  gotValidClick = true;
                  mouse_12.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_12.clicked_name.push(null);
          }
          _mouseXYs = mouse_12.getPos();
          mouse_12.x.push(_mouseXYs[0]);
          mouse_12.y.push(_mouseXYs[1]);
          mouse_12.leftButton.push(_mouseButtons[0]);
          mouse_12.midButton.push(_mouseButtons[1]);
          mouse_12.rightButton.push(_mouseButtons[2]);
          mouse_12.time.push(mouse_12.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HearingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HearingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Hearing' ---
    for (const thisComponent of HearingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Hearing.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_8.response', slider_8.getRating());
    psychoJS.experiment.addData('slider_8.rt', slider_8.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_12.x', mouse_12.x);
    psychoJS.experiment.addData('mouse_12.y', mouse_12.y);
    psychoJS.experiment.addData('mouse_12.leftButton', mouse_12.leftButton);
    psychoJS.experiment.addData('mouse_12.midButton', mouse_12.midButton);
    psychoJS.experiment.addData('mouse_12.rightButton', mouse_12.rightButton);
    psychoJS.experiment.addData('mouse_12.time', mouse_12.time);
    psychoJS.experiment.addData('mouse_12.clicked_name', mouse_12.clicked_name);
    
    // the Routine "Hearing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function HandednessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Handedness' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    HandednessClock.reset();
    routineTimer.reset();
    HandednessMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_31.setText(f'''Question {index} 
     
     {item_text}''');
    slider_7.reset()
    slider_7.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    slider_7.setFillColor('Red')
    slider_7.setBorderColor('White')
    slider_7.setOpacity(None)
    slider_7.setContrast(1.0)
    slider_7.setPos([(- 0), (- 0.025)])
    slider_7.setSize([0.5, 0.027])
    slider_7.setOri(1.0)
    // setup some python lists for storing info about the mouse_9
    // current position of the mouse:
    mouse_9.x = [];
    mouse_9.y = [];
    mouse_9.leftButton = [];
    mouse_9.midButton = [];
    mouse_9.rightButton = [];
    mouse_9.time = [];
    mouse_9.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Handedness.started', globalClock.getTime());
    HandednessMaxDuration = null
    // keep track of which components have finished
    HandednessComponents = [];
    HandednessComponents.push(textbox_31);
    HandednessComponents.push(slider_7);
    HandednessComponents.push(mouse_9);
    HandednessComponents.push(polygon_13);
    HandednessComponents.push(text_25);
    
    for (const thisComponent of HandednessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function HandednessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Handedness' ---
    // get current time
    t = HandednessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_31* updates
    if (t >= 0.0 && textbox_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_31.tStart = t;  // (not accounting for frame time here)
      textbox_31.frameNStart = frameN;  // exact frame index
      
      textbox_31.setAutoDraw(true);
    }
    
    
    // *slider_7* updates
    if (t >= 0.0 && slider_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_7.tStart = t;  // (not accounting for frame time here)
      slider_7.frameNStart = frameN;  // exact frame index
      
      slider_7.setAutoDraw(true);
    }
    
    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_9.clickableObjects = eval(polygon_13)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_9.clickableObjects)) {
              mouse_9.clickableObjects = [mouse_9.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_9.clickableObjects) {
              if (obj.contains(mouse_9)) {
                  gotValidClick = true;
                  mouse_9.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_9.clicked_name.push(null);
          }
          _mouseXYs = mouse_9.getPos();
          mouse_9.x.push(_mouseXYs[0]);
          mouse_9.y.push(_mouseXYs[1]);
          mouse_9.leftButton.push(_mouseButtons[0]);
          mouse_9.midButton.push(_mouseButtons[1]);
          mouse_9.rightButton.push(_mouseButtons[2]);
          mouse_9.time.push(mouse_9.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *polygon_13* updates
    if (t >= 0.0 && polygon_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_13.tStart = t;  // (not accounting for frame time here)
      polygon_13.frameNStart = frameN;  // exact frame index
      
      polygon_13.setAutoDraw(true);
    }
    
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HandednessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HandednessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Handedness' ---
    for (const thisComponent of HandednessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Handedness.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_7.response', slider_7.getRating());
    psychoJS.experiment.addData('slider_7.rt', slider_7.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_9.x', mouse_9.x);
    psychoJS.experiment.addData('mouse_9.y', mouse_9.y);
    psychoJS.experiment.addData('mouse_9.leftButton', mouse_9.leftButton);
    psychoJS.experiment.addData('mouse_9.midButton', mouse_9.midButton);
    psychoJS.experiment.addData('mouse_9.rightButton', mouse_9.rightButton);
    psychoJS.experiment.addData('mouse_9.time', mouse_9.time);
    psychoJS.experiment.addData('mouse_9.clicked_name', mouse_9.clicked_name);
    
    // the Routine "Handedness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function collegeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'college' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    collegeClock.reset();
    routineTimer.reset();
    collegeMaxDurationReached = false;
    // update component parameters for each repeat
    var_15.reset()
    var_15.setColor([1.0, 1.0, 1.0], colorSpace='rgb')
    var_15.setFillColor('Red')
    var_15.setBorderColor('White')
    var_15.setOpacity(None)
    var_15.setContrast(1.0)
    var_15.setPos([(- 0.5), (- 0.1)])
    var_15.setSize([0.027, 0.2])
    var_15.setOri(1.0)
    textbox_34.setText(f'''Question {index} 
     
     {item_text}''');
    // setup some python lists for storing info about the mouse_13
    mouse_13.clicked_name = [];
    gotValidClick = false; // until a click is received
    textbox_32.setText('Yes\n       I major/ed in \n       I graduate(d) in');
    textbox_33.setText('No\n       The highest degree I earned is\n       I graduated in');
    textbox_30.setText('');
    textbox_30.refresh();
    textbox_35.setText('');
    textbox_35.refresh();
    textbox_37.setText('');
    textbox_37.refresh();
    textbox_36.setText('');
    textbox_36.refresh();
    psychoJS.experiment.addData('college.started', globalClock.getTime());
    collegeMaxDuration = null
    // keep track of which components have finished
    collegeComponents = [];
    collegeComponents.push(var_15);
    collegeComponents.push(textbox_34);
    collegeComponents.push(polygon_14);
    collegeComponents.push(mouse_13);
    collegeComponents.push(textbox_32);
    collegeComponents.push(textbox_33);
    collegeComponents.push(textbox_30);
    collegeComponents.push(textbox_35);
    collegeComponents.push(textbox_37);
    collegeComponents.push(textbox_36);
    
    for (const thisComponent of collegeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function collegeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'college' ---
    // get current time
    t = collegeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *var_15* updates
    if (t >= 0.0 && var_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_15.tStart = t;  // (not accounting for frame time here)
      var_15.frameNStart = frameN;  // exact frame index
      
      var_15.setAutoDraw(true);
    }
    
    
    // *textbox_34* updates
    if (t >= 0.0 && textbox_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_34.tStart = t;  // (not accounting for frame time here)
      textbox_34.frameNStart = frameN;  // exact frame index
      
      textbox_34.setAutoDraw(true);
    }
    
    
    // *polygon_14* updates
    if (t >= 0.0 && polygon_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_14.tStart = t;  // (not accounting for frame time here)
      polygon_14.frameNStart = frameN;  // exact frame index
      
      polygon_14.setAutoDraw(true);
    }
    
    // *mouse_13* updates
    if (t >= 0.0 && mouse_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_13.tStart = t;  // (not accounting for frame time here)
      mouse_13.frameNStart = frameN;  // exact frame index
      
      mouse_13.status = PsychoJS.Status.STARTED;
      mouse_13.mouseClock.reset();
      prevButtonState = mouse_13.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_13.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_13.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_13.clickableObjects = eval(polygon_14)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_13.clickableObjects)) {
              mouse_13.clickableObjects = [mouse_13.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_13.clickableObjects) {
              if (obj.contains(mouse_13)) {
                  gotValidClick = true;
                  mouse_13.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_13.clicked_name.push(null);
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *textbox_32* updates
    if (t >= 0.0 && textbox_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_32.tStart = t;  // (not accounting for frame time here)
      textbox_32.frameNStart = frameN;  // exact frame index
      
      textbox_32.setAutoDraw(true);
    }
    
    
    // *textbox_33* updates
    if (t >= 0.0 && textbox_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_33.tStart = t;  // (not accounting for frame time here)
      textbox_33.frameNStart = frameN;  // exact frame index
      
      textbox_33.setAutoDraw(true);
    }
    
    
    // *textbox_30* updates
    if (t >= 0.0 && textbox_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_30.tStart = t;  // (not accounting for frame time here)
      textbox_30.frameNStart = frameN;  // exact frame index
      
      textbox_30.setAutoDraw(true);
    }
    
    
    // *textbox_35* updates
    if (t >= 0.0 && textbox_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_35.tStart = t;  // (not accounting for frame time here)
      textbox_35.frameNStart = frameN;  // exact frame index
      
      textbox_35.setAutoDraw(true);
    }
    
    
    // *textbox_37* updates
    if (t >= 0.0 && textbox_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_37.tStart = t;  // (not accounting for frame time here)
      textbox_37.frameNStart = frameN;  // exact frame index
      
      textbox_37.setAutoDraw(true);
    }
    
    
    // *textbox_36* updates
    if (t >= 0.0 && textbox_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_36.tStart = t;  // (not accounting for frame time here)
      textbox_36.frameNStart = frameN;  // exact frame index
      
      textbox_36.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of collegeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function collegeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'college' ---
    for (const thisComponent of collegeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('college.stopped', globalClock.getTime());
    psychoJS.experiment.addData('var_15.response', var_15.getRating());
    psychoJS.experiment.addData('var_15.rt', var_15.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_13.getPos();
    _mouseButtons = mouse_13.getPressed();
    psychoJS.experiment.addData('mouse_13.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_13.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_13.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_13.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_13.rightButton', _mouseButtons[2]);
    if (mouse_13.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_13.clicked_name', mouse_13.clicked_name[0]);}
    psychoJS.experiment.addData('textbox_30.text',textbox_30.text)
    psychoJS.experiment.addData('textbox_35.text',textbox_35.text)
    psychoJS.experiment.addData('textbox_37.text',textbox_37.text)
    psychoJS.experiment.addData('textbox_36.text',textbox_36.text)
    // the Routine "college" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Thank_you_finalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thank_you_final' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Thank_you_finalClock.reset(routineTimer.getTime());
    routineTimer.add(6.000000);
    Thank_you_finalMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment.experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify({
            experimentID: '1xGByceEIL1B', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★
            filename: filename,
            data: data,
        }),
    })
    .then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    });
    
    psychoJS.experiment.addData('Thank_you_final.started', globalClock.getTime());
    Thank_you_finalMaxDuration = null
    // keep track of which components have finished
    Thank_you_finalComponents = [];
    Thank_you_finalComponents.push(text_17);
    Thank_you_finalComponents.push(text_18);
    Thank_you_finalComponents.push(text_19);
    Thank_you_finalComponents.push(text_20);
    Thank_you_finalComponents.push(text_21);
    
    for (const thisComponent of Thank_you_finalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Thank_you_finalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thank_you_final' ---
    // get current time
    t = Thank_you_finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 3.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_17.setAutoDraw(false);
    }
    
    
    // *text_18* updates
    if (t >= 0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_18.setAutoDraw(false);
    }
    
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_19.setAutoDraw(false);
    }
    
    
    // *text_20* updates
    if (t >= 1.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_20.setAutoDraw(false);
    }
    
    
    // *text_21* updates
    if (t >= 2.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_21.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Thank_you_finalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Thank_you_finalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thank_you_final' ---
    for (const thisComponent of Thank_you_finalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thank_you_final.stopped', globalClock.getTime());
    if (Thank_you_finalMaxDurationReached) {
        Thank_you_finalClock.add(Thank_you_finalMaxDuration);
    } else {
        Thank_you_finalClock.add(6.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
