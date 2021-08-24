let p5
let hiNumber2
let lowNumber2
let numberPlaces2
export default class KnobMaker{
  constructor(imgSrc, dia, locx, locy, lowNumber, hiNumber, defaultNumber, numberPlaces, lbl, P5){
      p5 = P5
      hiNumber2 = hiNumber
      lowNumber2 = lowNumber
      numberPlaces2 = numberPlaces
    this.pos = p5.createVector(0,0);
    this.pos.x = locx;
    this.pos.y = locy;
    this.lowNum = lowNumber;
    this.hiNum = hiNumber;
    this.rotateMe = p5.map(defaultNumber, lowNumber, hiNumber, 0, -280);
    this.currentRot = p5.map(defaultNumber, lowNumber, hiNumber, 0, -280);
    this.diameter = dia;
    this.knobValue = defaultNumber;
    this.displayValue=0;
    this.isClickedOn = false;
    this.mouseOver = false;
    this.myY=p5.mouseY;
    this.label=lbl;
    this.numPlaces = numberPlaces;
    // this.img = loadImage('knob.svg');
    this.img = p5.loadImage(imgSrc);
    this.textColor = [0,0,0];
    this.textPt = 18;
    }

    update = function() {
      p5.push(); // store the coordinate matrix ------------------------------------
      
      // move the origin to the pivot point
      p5.translate(this.pos.x, this.pos.y);
  
        // rotate the grid around the pivot point by a
        // number of degrees based on drag on button
      if (p5.dist(this.pos.x, this.pos.y, p5.mouseX, p5.mouseY) < this.diameter/2) {
        this.mouseOver = true;
      } else {
        this.mouseOver = false;
      }
        if (p5.mouseIsPressed && this.isClickedOn) { 
        this.rotateMe=this.currentRot+p5.map(p5.mouseY, this.myY, 300, 0, 280);
          this.rotateMe=p5.int(this.rotateMe);
          if (this.rotateMe <  -280) { this.rotateMe = -280; }
          if (this.rotateMe > 0) { this.rotateMe = 0; }
          p5.rotate(p5.radians(-this.rotateMe)); 	// change degrees to radians
        } else {
          p5.rotate(p5.radians(-this.rotateMe));
        }
    
      if (!p5.mouseIsPressed ) {
        this.currentRot=this.rotateMe;
        this.isClickedOn = false;
      } 
      // now we actually draw the knob to the screen ----------------------------
      p5.imageMode(p5.CENTER);
      p5.image(this.img,0,0,this.diameter,this.diameter);
        p5.pop(); // restore coordinate matrix
    
        p5.rotate(0);
    
     // add the display value and label
        p5.textAlign(p5.CENTER);
        this.knobValue=p5.map(this.rotateMe, -280, 0, hiNumber2, lowNumber2);
        p5.textSize(this.textPt);
        p5.fill(this.textColor);
      this.displayValue = p5.nfc(this.knobValue, numberPlaces2); // added in version 4.2.1
        p5.text(this.displayValue, this.pos.x, this.pos.y+this.diameter/2+15+this.textPt); // display value to 2 decimal places
        p5.fill(this.textColor);
        p5.text(this.label, this.pos.x, this.pos.y+this.diameter/2+20+2.4*this.textPt);
      // set the cursor
      if (this.mouseOver || this.isClickedOn) { this.pointerCursor = true; }
    }; // end update method
    
    active = function() {
      if (this.mouseOver){
        this.isClickedOn = true; 
        this.myY=p5.mouseY;  
        p5.cursor('pointer');
      } else {
        this.isClickedOn = false;
      }
    }
    
    inactive = function() {
      this.currentRot=this.rotateMe;
      this.isClickedOn = false;
      p5.cursor('default');
    }
    
    // the update function will be called in the main program draw function
    
  
  } 