class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,40,height,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}