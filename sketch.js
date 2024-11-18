let stage = 0;
let startScreen;
let bg;
let textBox;

function preload() {
  startScreen = loadImage('start_screen.png'); //start screen
  bg = loadImage('background.png'); //blank background
  textBox = loadImage('text_box.png'); //text box
  
}

function setup() {
  createCanvas(1366,768); //set the canvas width and height using the browser's dimensions.
  
  }


  function draw() {
  background('#ffffff');

  cursor(CROSS); //Set the cursor to crosshairs: +

  textStyle(BOLD);  
  textFont('Courier New');
  fill("white");
  textSize(25);
  textWrap(WORD);

 
  switch (stage) {
    case 0:
        //start screen
        image(startScreen,0,0);

        //create new game button
        let newGame = createButton('NEW GAME');
        newGame.position(30,600);
        newGame.style('font-family','Courier New');
        newGame.style('font-size','40px');
        //start game when the button is pressed.
        newGame.mousePressed(()=>{stage = 5});
        
        //create new game button
        let settings = createButton('SETTINGS');
        settings.position(30,660);
        settings.style('font-family','Courier New');
        settings.style('font-size','40px');
        //goes to settings when the button is pressed.
        settings.mousePressed(()=>{stage = 5});

        break;
     case 1:
        //background screen
        image(bg,0,0);     
                
        //create back button
        let backB = createButton('BACK');
        backB.position(30,660);
        backB.style('font-family','Courier New');
        backB.style('font-size','40px');
        //goes back to start screen when button is pressed.
        backB.mousePressed(()=>{stage = 0});

        break;
    /* case 2:
        //background screen
        image(bg,0,0);
        
        //type in your name
        yourName = createInput();
        yourName.position(550,300);
        text(yn, 25, 55);

        //text box
        image(textBox,0,0);
        text('Hello, what is your name?',60,600);

        break; 
    case 3:
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);
        
        text('Are you sure?', 60, 640);
        let A = createButton('> Yes.');
        A.position(70,640);
        A.style('font-family','Courier New');
        A.style('font-size','25px');
        A.style('color','#ffffff');
        A.style('background-color','#000000');
        A.mousePressed(()=>{stage = 4});

        let B = createButton('> Uhm.. No, let me change it.');
        B.position(70,640);
        B.style('font-family','Courier New');
        B.style('font-size','25px');
        B.mousePressed(()=>{stage = 2});
        B.style('color','#ffffff');
        B.style('background-color','#000000');

        break; 
    case 4:
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);     

        break; */
    case 5:
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);  
        
        text('Today was a great day to go shopping, its been hot all week til today. I mean I moved north to avoid the heat, not suffer ten times more. Global warming is really global-ing.',50,560,1200);

        break;
    case 6:
        //background screen
        image(bg,0,0);
  
        //text box
        image(textBox,0,0);  
        
        text('She looks lost, I wonder if i should help her?',50,560,1200);
        let nos = createButton('> No, shes probably just looking for a friend.');
        nos.position(70,640);
        noS.style('font-family','Courier New');
        nos.style('font-size','25px');
        nos.style('color','#ffffff');
        nos.style('background-color','#000000');
        nos.mousePressed(()=>{stage = 7});

        let im = createButton('> I mean… It is getting late. "Uhm.. Do you need help?"');
        im.position(70,640);
        im.style('font-family','Courier New');
        im.style('font-size','25px');
        im.mousePressed(()=>{stage = 8});
        im.style('color','#ffffff');
        im.style('background-color','#000000');
  
        break;
    case 7:
        //background screen
        image(bg,0,0);
    
        //text box
        image(textBox,0,0);   
        
        text('Suddenly I felt someone grab the back of my shirt.',50,560,1200);

        if (keyIsPressed === true) {
          (()=>{stage = 9});
        } else {
          (()=>{stage = 7});
        }
  
        break;
    case 8:
        //background screen
        image(bg,0,0);
      
        //text box
        image(textBox,0,0);  
        
        text('[???] "Faded Times? Do you know where it is..?"',50,560,1200);
        let uy = createButton('> "Uh.. Yea, I know where that is. If you go down that way and take a left at the end of the block, it should be on your right. Its next to the Cat Cafe."');
        uy.position(70,640);
        uy.style('font-family','Courier New');
        uy.style('font-size','25px');
        uy.style('color','#ffffff');
        uy.style('background-color','#000000');
        uy.mousePressed(()=>{stage = 4});

        /* let B = createButton('Uhm.. No, let me change it.');
        B.position(70,640);
        B.style('font-family','Courier New');
        B.style('font-size','25px');
        B.mousePressed(()=>{stage = 2});
        B.style('color','#ffffff');
        B.style('background-color','#000000'); */
      
        break;
    /* case 9:
        //background screen
        image(bg,0,0);
        
        //text box
        image(textBox,0,0);    
        
        text('[???] "Im so sorry but could you tell me where the shop Faded Times is? Ive been wandering around for half an hour already and I still cant seem to find it."', 60, 640);
        let uy = createButton('> "Uh.. Yea, I know where that is. If you go down that way and take a left at the end of the block, it should be on your right. Its next to the Cat Cafe."');
        uy.position(70,640);
        uy.style('font-family','Courier New');
        uy.style('font-size','25px');
        uy.style('color','#ffffff');
        uy.style('background-color','#000000');
        uy.mousePressed(()=>{stage = 4});

        let B = createButton('Uhm.. No, let me change it.');
        B.position(70,640);
        B.style('font-family','Courier New');
        B.style('font-size','25px');
        B.mousePressed(()=>{stage = 2});
        B.style('color','#ffffff');
        B.style('background-color','#000000');
        
        break;
    case 10:
        //background screen
        image(bg,0,0);
        
        //text box
        image(textBox,0,0);     

        text('Are you sure?', 60, 640);
        let A = createButton('Yes.');
        A.position(70,640);
        A.style('font-family','Courier New');
        A.style('font-size','25px');
        A.style('color','#ffffff');
        A.style('background-color','#000000');
        A.mousePressed(()=>{stage = 4});

        let B = createButton('Uhm.. No, let me change it.');
        B.position(70,640);
        B.style('font-family','Courier New');
        B.style('font-size','25px');
        B.mousePressed(()=>{stage = 2});
        B.style('color','#ffffff');
        B.style('background-color','#000000');
        
        break;
    case 11:
        //background screen
        image(bg,0,0);
          
        //text box
        image(textBox,0,0);     

        text('Are you sure?', 60, 640);
        let A = createButton('Yes.');
        A.position(70,640);
        A.style('font-family','Courier New');
        A.style('font-size','25px');
        A.style('color','#ffffff');
        A.style('background-color','#000000');
        A.mousePressed(()=>{stage = 4});

        let B = createButton('Uhm.. No, let me change it.');
        B.position(70,640);
        B.style('font-family','Courier New');
        B.style('font-size','25px');
        B.mousePressed(()=>{stage = 2});
        B.style('color','#ffffff');
        B.style('background-color','#000000');
          
        break; */


 }
}

