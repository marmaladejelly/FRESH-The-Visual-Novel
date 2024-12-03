//variables
let stage = 0;
let startScreen;
let bg;
let textBox;
let newGame,settings,backB;
let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
let a1,b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,l1,m1,n1,o1,p1,q1,r1,s1,t1,u1,v1,w1,x1,y1,z1;
let ss0,ss1,ss2,ss3,ss4,ss5,ss6,ss7,ss8,ss9;
let st0,st1,st2,st3,st4,st5,st6,st7,st8,st9;
let stb0,stb1,stb2,stb3,stb4,stb5,stb6,stb7,stb8,stb9;
let END1,END2;

function preload() {
  startScreen = loadImage('start_screen.png'); //start screen
  bg = loadImage('background.png'); //blank background
  textBox = loadImage('text_box.png'); //text box
  /*
  ss0 = loadImage('');
  ss1 = loadImage('');
  ss2 = loadImage('');
  ss3 = loadImage('');
  ss4 = loadImage('');
  ss5 = loadImage('');
  ss6 = loadImage('');
  ss7 = loadImage('');
  ss8 = loadImage('');
  ss9 = loadImage('');
  st0 = loadImage('');
  st1 = loadImage('');
  st2 = loadImage('');
  st3 = loadImage('');
  st4 = loadImage('');
  st5 = loadImage('');
  st6 = loadImage('');
  st7 = loadImage('');
  st8 = loadImage('');
  st9 = loadImage('');
  stb0 = loadImage('');
  stb1 = loadImage('');
  stb2 = loadImage('');
  stb3 = loadImage('');
  stb4 = loadImage('');
  stb5 = loadImage('');
  stb6 = loadImage('');
  stb7 = loadImage('');
  stb8 = loadImage('');
  stb9 = loadImage(''); */
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

    e = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    e.position(70,610);
    e.style('font-family','Courier New');
    e.style('font-size','25px');
    e.style('color','#ffffff');
    e.style('background-color','#000000');
    e.hide();

    f = createButton('> "Uhm.. Yea, okay." You walk with her to Faded Times.');
    f.position(70,640);
    f.style('font-family','Courier New');
    f.style('font-size','25px');
    f.style('color','#ffffff');
    f.style('background-color','#000000');
    f.hide();

    g = createButton('> "Sorry but Im in a rush right now."');
    g.position(70,680);
    g.style('font-family','Courier New');
    g.style('font-size','25px');
    g.style('color','#ffffff');
    g.style('background-color','#000000');
    g.hide();

    h = createButton('> "Yea." I nod, a bit taken back from her fast change in expressions.');
    h.position(70,650);
    h.style('font-family','Courier New');
    h.style('font-size','25px');
    h.style('color','#ffffff');
    h.style('background-color','#000000');
    h.hide();

    i = createButton('She smiles wider before walking off... Weird.');
    i.position(50,560);
    i.style('font-family','Courier New');
    i.style('font-size','25px');
    i.style('color','#ffffff');
    i.style('background-color','#000000');
    i.hide();

    j = createButton('> I reach my door and giggle my keys in the lock but something feels wrong.');
    j.position(70,680);
    j.style('font-family','Courier New');
    j.style('font-size','25px');
    j.style('color','#ffffff');
    j.style('background-color','#000000');
    j.hide();

    k = createButton('> I open the door and nothing seems off. Atleast no one tried to break in.');
    k.position(70,640);
    k.style('font-family','Courier New');
    k.style('font-size','25px');
    k.style('color','#ffffff');
    k.style('background-color','#000000');
    k.hide();

    l = createButton('I decide to get ready for bed, I have to work on my final tomorrow after all.');
    l.position(50,560);
    l.style('font-family','Courier New');
    l.style('font-size','25px');
    l.style('color','#ffffff');
    l.style('background-color','#000000');
    l.hide();

    m = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    m.position(70,640);
    m.style('font-family','Courier New');
    m.style('font-size','25px');
    m.style('color','#ffffff');
    m.style('background-color','#000000');
    m.hide();

    n = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    n.position(70,640);
    n.style('font-family','Courier New');
    n.style('font-size','25px');
    n.style('color','#ffffff');
    n.style('background-color','#000000');
    n.hide();

    o = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    o.position(70,640);
    o.style('font-family','Courier New');
    o.style('font-size','25px');
    o.style('color','#ffffff');
    o.style('background-color','#000000');
    o.hide();

    p = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    p.position(70,640);
    p.style('font-family','Courier New');
    p.style('font-size','25px');
    p.style('color','#ffffff');
    p.style('background-color','#000000');
    p.hide();

    q = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    q.position(70,640);
    q.style('font-family','Courier New');
    q.style('font-size','25px');
    q.style('color','#ffffff');
    q.style('background-color','#000000');
    q.hide();

    r = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    r.position(70,640);
    r.style('font-family','Courier New');
    r.style('font-size','25px');
    r.style('color','#ffffff');
    r.style('background-color','#000000');
    r.hide();

    s = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    s.position(70,640);
    s.style('font-family','Courier New');
    s.style('font-size','25px');
    s.style('color','#ffffff');
    s.style('background-color','#000000');
    s.hide();

    t = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    t.position(70,640);
    t.style('font-family','Courier New');
    t.style('font-size','25px');
    t.style('color','#ffffff');
    t.style('background-color','#000000');
    t.hide();

    u = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    u.position(70,640);
    u.style('font-family','Courier New');
    u.style('font-size','25px');
    u.style('color','#ffffff');
    u.style('background-color','#000000');
    u.hide();

    v = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    v.position(70,640);
    v.style('font-family','Courier New');
    v.style('font-size','25px');
    v.style('color','#ffffff');
    v.style('background-color','#000000');
    v.hide();

    w = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    w.position(70,640);
    w.style('font-family','Courier New');
    w.style('font-size','25px');
    w.style('color','#ffffff');
    w.style('background-color','#000000');
    w.hide();

    x = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    x.position(70,640);
    x.style('font-family','Courier New');
    x.style('font-size','25px');
    x.style('color','#ffffff');
    x.style('background-color','#000000');
    x.hide();

    y = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    y.position(70,640);
    y.style('font-family','Courier New');
    y.style('font-size','25px');
    y.style('color','#ffffff');
    y.style('background-color','#000000');
    y.hide();

    z = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    z.position(70,640);
    z.style('font-family','Courier New');
    z.style('font-size','25px');
    z.style('color','#ffffff');
    z.style('background-color','#000000');
    z.hide();

    a1 = createButton('> "Uh.. Yea, I know where that is." You give her verbal directions.');
    a1.position(70,640);
    a1.style('font-family','Courier New');
    a1.style('font-size','25px');
    a1.style('color','#ffffff');
    a1.style('background-color','#000000');
    a1.hide();

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
        newGame.mousePressed(()=>{stage = 6
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

        //text box
        image(textBox,0,0);

        text('Hello, what is your name?',60,600);    

        //type in your name input
        yourName = createInput();
        yourName.position(550,300);
        text(yn, 25, 55);
        //go to case 3
        break; 

    case 3:
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);
        
        text('Are you sure?',50,560);

        '> Uhm.. No, let me change it.'
        //go to case 4

        '> Uhm.. No, let me change it.'
        //go to case 2
        break; 

    case 4:
        //background screen
        image(bg,0,0);

        //text box
        image(textBox,0,0);     

        text('Interesting choice... but okay.',50,560);

        '> Nevermind, I change my mind.'
        //go to case 5
        break;

    case 5:
        //bg
        text('Hmmm, let me think... no.',50,560);
        
        '> What-'
        //go to case 6
        break; */

    //game start
    case 6:      
        //background screen
        image(bg,0,0);

        //text
        image(textBox,0,0);  
        text('Today was a great day to go shopping, its been hot all week til today.',50,560,1200);
       
        a.mousePressed(()=>{stage = 7
            a.hide();
            b.show();
            c.show();
        });
        break;

    case 7:
        //background screen
        image(bg,0,0);
  
        //text
        image(textBox,0,0);  
        text('She looks lost, I wonder if i should help her?',50,560,1200);

        b.mousePressed(()=>{stage = 8
            b.hide();
            c.hide();
            d.show();
        });

        c.mousePressed(()=>{stage = 9
            b.hide();
            c.hide();
            e.show();
        });
        break;

    case 8:
        //background screen
        image(bg,0,0);
    
        //text
        image(textBox,0,0); 

        d.mousePressed(()=>{stage = 9
            d.hide();
            e.show();
        });


  
        break;

    case 9:
        //background screen
        image(bg,0,0);
      
        //text
        image(textBox,0,0);    
        text('[???] "Faded Times? Do you know where it is..?"',50,560,1200);
        
        e.mousePressed(()=>{stage = 10
            e.hide();        
            f.show();
            g.show();
        });
      
        break;

    case 10:
        //background screen
        image(bg,0,0);
        
        //text
        image(textBox,0,0);    
        text('[???] "Could you walk with me..? My sense of direction is constantly challenged."', 50, 560,1200);

        f.mousePressed(()=>{stage = 11
            f.hide();
            g.hide();
        });
        
        g.mousePressed(()=>{stage = 11
            f.hide();
            g.hide();
            h.show();
        });

        break;

    case 11:
        //background screen
        image(bg,0,0);
        
        //text
        image(textBox,0,0);     
        text('[???] “You said make a left at the end of the block and its on the right next to the Cat Cafe. Right..?”',50,560,1200)
        
        h.mousePressed(()=>{stage = 12
            h.hide();
            i.show();
        });    
        break;

    case 12:
        //background screen
        image(bg,0,0);
          
        //text 
        image(textBox,0,0);     

        i.mousePressed(()=>{stage = 13
            i.hide();
            j.show();
        }); 
        break;

    case 13:
        //background screen
        image(bg,0,0);
          
        //text 
        image(textBox,0,0);            
        text('I walk into Bennys Supplier of Things and decide to go on with my day, thinking little of the awkward encounter I just... well, encoutered. I head home after getting everything I needed.',50,560,1200);

        j.mousePressed(()=>{stage = 14
            j.hide();
            k.show();
        });
        break; 
    
    case 14:
        //background scene
        image(bg,0,0);

        //text
        image(textBox,0,0);
        text('I couldve sworn that I locked the door when I left earlier today.. Did I forget?',50,560,1200);
        k.mousePressed(()=>{stage = 15
            k.hide();
            l.show();
        });
        break;

    case 15:
        //background scene
        image(bg,0,0);

        //text
        image(textBox,0,0);
        l.mousePressed(()=>{stage = 16
            l.hide();
            m.show();
        });
        break;

    case 16:
        //background scene
        image(bg,0,0);

        //text
        image(textBox,0,0);
        m.mousePressed(()=>{stage = 17
            k.hide();
            l.show();
        });
        break;

    case 17:
        //background scene
        image(bg,0,0);
    
        //text
        image(textBox,0,0);
        text('')
        n.mousePressed(()=>{stage = 18
            k.hide();
            l.show();
        });

        o.mousePressed(()=>{stage = 19
            k.hide();
            l.show();
        });
        break;
 }
}

