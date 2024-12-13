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
let end1,end2,end3;

function preload() {
  startScreen = loadImage('start_screen.png'); //start screen
  bg = loadImage('background.png'); //blank background
  textBox = loadImage('text_box.png'); //text box

  ss0 = loadImage('ss0.png'); //city
  ss1 = loadImage('ss1.png'); //city w/ dahlia
  ss2 = loadImage('ss2.png'); //city w/ mad dahlia
  ss3 = loadImage('ss3.png'); //city w/ happy dahlia
  ss4 = loadImage('ss4.png'); //apartment hall
  ss5 = loadImage('ss5.png'); //apartment inside night
  ss6 = loadImage('ss6.png'); //apartment inside night with shadow
  ss7 = loadImage('ss7.png'); //apartment inside morning
  ss8 = loadImage('ss8.png'); //apartment hallway with cop
  // ss9 = loadImage(''); //apartment hall with angry cop
  /* st0 = loadImage(''); 
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

  end2s = loadImage('end2.png'); // yn laying down tied up with blood
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
    a = createButton('> I should really try thrifting some clothes for the hot weather soon..');
    a.position(70,640);
    a.style('font-family','Courier New');
    a.style('font-size','25px');
    a.style('color','#ffffff');
    a.style('background-color','#000000');
    a.hide();

    b = createButton('> You help her.');
    b.position(70,660);
    b.style('font-family','Courier New');
    b.style('font-size','25px');
    b.style('color','#ffffff');
    b.style('background-color','#000000');
    b.hide();

    c = createButton('> You dont help her');
    c.position(70,700);
    c.style('font-family','Courier New');
    c.style('font-size','25px');
    c.style('color','#ffffff');
    c.style('background-color','#000000');
    c.hide();

    d = createButton('> She looks up at me, her eyes meeting mine and curls her lips into a smile.');
    d.position(70,640);
    d.style('font-family','Courier New');
    d.style('font-size','25px');
    d.style('color','#ffffff');
    d.style('background-color','#000000');
    d.hide();

    e = createButton('> "Yea, down the street on the right, across from Sallys Cat Cafe."');
    e.position(70,640);
    e.style('font-family','Courier New');
    e.style('font-size','25px');
    e.style('color','#ffffff');
    e.style('background-color','#000000');
    e.hide();

    f = createButton('> "Yea, ofcourse." I decide to walk with her to Faded Times, my project can wait.');
    f.position(70,640);
    f.style('font-family','Courier New');
    f.style('font-size','25px');
    f.style('color','#ffffff');
    f.style('background-color','#000000');
    f.hide();

    g = createButton('> "Im sorry but Im in a rush... I hope you get to your destination with no troubles."');
    g.position(70,680);
    g.style('font-family','Courier New');
    g.style('font-size','25px');
    g.style('color','#ffffff');
    g.style('background-color','#000000');
    g.hide();

    h = createButton('> "Well this is it.." I turn around to walk off but she grabs my hand.');
    h.position(70,680);
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

    m = createButton('> "What the... Did the winds blow that hard..??" Unable to fall asleep, I get ready.');
    m.position(70,640);
    m.style('font-family','Courier New');
    m.style('font-size','25px');
    m.style('color','#ffffff');
    m.style('background-color','#000000');
    m.hide();

    n = createButton('> Weird... Did I misplace it?');
    n.position(70,610);
    n.style('font-family','Courier New');
    n.style('font-size','25px');
    n.style('color','#ffffff');
    n.style('background-color','#000000');
    n.hide();

    o = createButton('> Call the police.');
    o.position(70,670);
    o.style('font-family','Courier New');
    o.style('font-size','25px');
    o.style('color','#ffffff');
    o.style('background-color','#000000');
    o.hide();

    p = createButton('> Dont call the police, its probably in the dirty laundry.');
    p.position(70,700);
    p.style('font-family','Courier New');
    p.style('font-size','25px');
    p.style('color','#ffffff');
    p.style('background-color','#000000');
    p.hide();

    q = createButton('> So am I just going crazy then..?');
    q.position(70,640);
    q.style('font-family','Courier New');
    q.style('font-size','25px');
    q.style('color','#ffffff');
    q.style('background-color','#000000');
    q.hide();

    r = createButton('I push it back as you being forgetful and go about my morning routine.');
    r.position(50,560);
    r.style('font-family','Courier New');
    r.style('font-size','25px');
    r.style('color','#ffffff');
    r.style('background-color','#000000');
    r.hide();

    s = createButton('> I close my eyes while I wash my face.');
    s.position(70,640);
    s.style('font-family','Courier New');
    s.style('font-size','25px');
    s.style('color','#ffffff');
    s.style('background-color','#000000');
    s.hide();

    t = createButton('I feel something heavy slam against my head, my eyes no longer able to open.');
    t.position(50,560);
    t.style('font-family','Courier New');
    t.style('font-size','25px');
    t.style('color','#ffffff');
    t.style('background-color','#000000');
    t.hide();

    u = createButton('I feel something heavy slam against my head, my eyes no longer able to open.');
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

    //endings
    end1 = createButton('> ENDING 1 UNLOCKED');
    end1.position(70,640);
    end1.style('font-family','Courier New');
    end1.style('font-size','25px');
    end1.style('color','#ffffff');
    end1.style('background-color','#000000');
    end1.hide();

    end2 = createButton('ENDING 2 UNLOCKED: KNAPPED');
    end2.position(50,560);
    end2.style('font-family','Courier New');
    end2.style('font-size','25px');
    end2.style('color','#ffffff');
    end2.style('background-color','#000000');
    end2.hide();

    end3 = createButton('ENDING 3 UNLOCKED: NEW GIRLFRIEND');
    end3.position(50,560);
    end3.style('font-family','Courier New');
    end3.style('font-size','25px');
    end3.style('color','#ffffff');
    end3.style('background-color','#000000');
    end3.hide();

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
        image(ss0,0,0);

        //text
        image(textBox,0,0);  
        text('Today was a great day to go shopping, its been hot all week til today. Global warming is really global-ing.',50,560,1200);
       
        a.mousePressed(()=>{stage = 7
            a.hide();
            b.show();
            c.show();
        });
        break;

    case 7:
        //background screen
        image(ss0,0,0);
  
        //text
        image(textBox,0,0);  
        text('As I approach the art shop Bennys Supplier I see a young woman. Her brown skin glistens in the sun as she looks around with wide eyes. She looks lost, I wonder if I should help her?',50,560,1200);

        b.mousePressed(()=>{stage = 8
            b.hide();
            c.hide();
            d.show();
        });

        c.mousePressed(()=>{stage = 23
            b.hide();
            c.hide();
            end1.show();
        });
        break;

    case 8:
        //background screen
        image(ss0,0,0);
    
        //text
        image(textBox,0,0); 
        text('I mean it is starting to get late... I approach her with a friendly smile, "Hey... do you need any help?"',50,560,1200)

        d.mousePressed(()=>{stage = 9
            d.hide();
            e.show();
        });


  
        break;

    case 9:
        //background screen
        image(ss1,0,0);
      
        //text
        image(textBox,0,0);    
        text('[???] "Faded Times.. Do you happen to know where that is..?" Her eyes full of confusion while she holds onto her arms.',50,560,1200);
        
        e.mousePressed(()=>{stage = 10
            e.hide();        
            f.show();
            g.show();
        });
      
        break;

    case 10:
        //background screen
        image(ss1,0,0);
        
        //text
        image(textBox,0,0);    
        text('[???] "Would it be possible for you to direct me there? I have a horrible sense of direction, Ill probably get lost along the way." She chuckles.', 50, 560,1200);
   
        f.mousePressed(()=>{stage = 11
            f.hide();
            g.hide();
            h.show();
        });
      
        g.mousePressed(()=>{stage = 23
            f.hide();
            g.hide();
        });

        break;

    case 11:
        //background screen
        image(ss2,0,0);
        
        //text
        image(textBox,0,0);     
        text('Her smile widens, almost creepily as her teeth are fully bared. I push the feeling to the back of my head as I walk with her, making small chat until we reach to the front doors of the mom and pop vintage shop.',50,560,1200)
        
        h.mousePressed(()=>{stage = 12
            h.hide();
            i.show();
        });    
        break;

    case 12:
        //background screen
        image(ss3,0,0);
          
        //text 
        image(textBox,0,0);     

        i.mousePressed(()=>{stage = 13
            i.hide();
            j.show();
        }); 
        break;

    case 13:
        //background screen
        image(ss0,0,0);
          
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
        image(ss4,0,0);

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
        image(ss6,0,0);

        //text
        image(textBox,0,0);
        l.mousePressed(()=>{stage = 16
            l.hide();
            m.show();
        });
        break;

    case 16:
        //background scene
        image(ss5,0,0);

        //text
        image(textBox,0,0);
        text('I woke up to a loud thud. When I looked to the side I saw my blancony doors open.',50,560,1200);

        m.mousePressed(()=>{stage = 17
            m.hide();
            n.show();
        });
        break;

    case 17:
        //background scene
        image(ss7,0,0);
    
        //text
        image(textBox,0,0);
        text('As Im making myself coffee, I cant seem to find my coffee cup.',50,560,1200);

        n.mousePressed(()=>{stage = 18
            n.hide();
            o.show();
            p.show();
        });
        break;

    case 18:
        //background scene
        image(ss7,0,0);

        //text
        image(textBox,0,0);
        text('I start to get changed but theres more of my things missing. My hoodies, tshirts, make up... perfume..? Where did all my things go?? Theres no way I misplaced them all.',50,560,1200);
        
        o.mousePressed(()=>{stage = 19
            o.hide();
            p.hide();
            q.show();
        });

        p.mousePressed(()=>{stage = 20
            o.hide();
            p.hide();
            r.show();
        });
        break;
        
    case 19:
        //background scene
        image(ss8,0,0);

        //text  
        image(textBox,0,0);
        text('They come but do absolutely nothing. "There was no sign of break in so theres nothing we can do about it," he said.',50,560,1200);
        
        q.mousePressed(()=>{stage = 23
            q.hide();
            end1.show();
        });
        break;s
    
    case 20:
        //background scene
        image(ss7,0,0);

        //text  
        image(textBox,0,0);

        r.mousePressed(()=>{stage = 21
            r.hide();
            s.show();
        });
        break;

    case 21:
        //background
        image(ss7,0,0);

        //text
        image(textBox,0,0);
        text('I head to the bathroom and strip down before hopping into the shower. I wait for the water to get steamy before starting my shoower.',50,560,1200);

        s.mousePressed(()=>{stage = 22
            s.hide();
            t.show();
        });
        break;

    case 22:
        //background
        image(bg,0,0);

        //text
        image(textBox,0,0);

        t.mousePressed(()=>{stage = 24
            t.hide();
            end2.show();
        });
        break;

    case 23:
        //background
        image(ss2,0,0);

        //text
        image(textBox,0,0);
        text('You avoided the woman forming a one-sided connection between you and her. You get home and never see her again.',50,560,1200);

        end1.mousePressed(()=>{stage = 0
            end1.hide();
            newGame.show();
            settings.show();
        });
        break;

    case 24:
        //background
        image(bg,0,0);

        //text
        image(textBox,0,0);

        end2.mousePressed(()=>{stage = 0
            end2.hide();
            newGame.show();
            settings.show();
        });
        break;

    case 25:
        //background
        //text
        break;
        
 }
}

