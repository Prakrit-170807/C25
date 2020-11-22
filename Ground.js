class Ground extends Main {
  constructor(x, y, width, height) {
    super(x,y,width,height)
    this.image = loadImage('sprites/ground.png')
    Matter.Body.setStatic(this.body,true)
    }
  display(){
    super.display()
  }
};