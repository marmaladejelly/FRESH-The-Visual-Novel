let stage = 0;
let startScreen;
let bg;
let textBox;
let newGame,settings,backB;
let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;

function preload() {
  startScreen = loadImage('start_screen.png'); //start screen
  bg = loadImage('background.png'); //blank background
  textBox = loadImage('text_box.png'); //text box
  
}
  
  function setup() {
    createCanvas(1366,768); //set the canvas width and height using the browser's dimensions.
  
    //create new game button
    newGame = createButton('NEW GAME');
    newGame.position(30,600);
    newGame.style('font-family','Courier New');
    newGame.style('font-size','40px');
          
    //create new game button
    settings = createButton('SETTINGS');
    settings.position(30,660);
    settings.style('font-family','Courier New');
    settings.style('font-size','40px');

    //create back button
    backB = createButton('BACK');
    backB.position(30,660);
    backB.style('font-family','Courier New');
    backB.style('font-size','40px');
    backB.hide();
  
    //story line
    a = createButton('Global warming is really global-ing.');
    a.position(50,610);
    a.style('font-family','Courier New');
    a.style('font-size','25px');
    a.style('color','#ffffff');
    a.style('background-color','#000000');
    a.hide();

    b = createButton('> No, shes probably just looking for a friend.');
    b.position(70,610);
    b.style('font-family','Courier New');
    b.style('font-size','25px');
    b.style('color','#ffffff');
    b.style('background-color','#000000');
    b.hide();

    c = createButton('> I mean… It is getting late. "Uhm.. Do you need help?"');
    c.position(70,650);
    c.style('font-family','Courier New');
    c.style('font-size','25px');
    c.style('color','#ffffff');
    c.style('background-color','#000000');
    c.hide();

    d = createButton('Suddenly I felt someone grab the back of my shirt.');
    d.position(50,560);
    d.style('font-family','Courier New');
    d.style('font-size','25px');
    d.style('color','#ffffff');
    d.style('background-color','#000000');
    d.hide();

    //text formatting
    textStyle(BOLD);  
    textFont('Courier New');
    fill("white");
    textSize(25);
    textWrap(WORD);
    textAlign(LEFT,TOP);
  }


  function draw() {
 
  switch (stage) {
    case 0:
        //start screen
        image(startScreen,0,0);

        //start game when the button is pressed.
        newGame.mousePressed(()=>{stage = 5
            newGame.hide();
            settings.hide();
            a.show();
        });
        
        //when you press settings it goes to settings page
        settings.mousePressed(()=>{stage = 1
            newGame.hide();
            settings.hide();
        });

        break;
    
    //settings page
    case 1:
        //background screen
        image(bg,0,0);     
        
        backB.show();

        //goes back to start screen when button is pressed.
        backB.mousePressed(()=>{stage = 0
            backB.hide();
            settings.show();
            newGame.show();
        });

        break;
    /* 
    //custom name for y/n
    case 2:
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
    
    //game start
    case 5:      
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);  
        
        text('Today was a great day to go shopping, its been hot all week til today.',50,560,1200);
        a.mousePressed(()=>{stage = 6
            a.hide();
            b.show();
            c.show();
        });
    

        break;

    case 6:
        //background screen
        image(bg,0,0);
  
        //text box
        image(textBox,0,0);  
        
        text('She looks lost, I wonder if i should help her?',50,560,1200);

        b.mousePressed(()=>{stage = 7
            b.hide();
            c.hide();
        });

        c.mousePressed(()=>{stage = 8
            b.hide();
            c.hide();
        });

  
        break;

    case 7:
        //background screen
        image(bg,0,0);
    
        //text box
        image(textBox,0,0); 

        d.show();

        d.mousePressed(()=>{stage = 8
            d.hide();
        });


  
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

