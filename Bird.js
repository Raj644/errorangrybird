class Bird {
    constructor (x,y,w,h) {
    var option = {
    restitution: 1
    }  
    this.body = Bodies.rectangle (x,y,w,h, option) 
    this.width = w 
    this.height = h
    World.add (world,this.body) 
    
    }
    display () {
    var pos = this.body.position 
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle 
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    strokeWeight (3)
    stroke ("blue")
    fill ("red")
    rectMode (CENTER)
    
    rect (0,0,this.width,this.height)
    pop ()
    }
    }