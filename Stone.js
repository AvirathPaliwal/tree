class Stone{
constructor(x,y,width,height){
    var position={
     isStatic:false,
     restitution:0,
     friction:1,
     density:1.2
    }
    this.body=Bodies.rectangle(x,y,width,height,position);
    this.w=width
    this.h=height
    this.image=loadImage("stone.png")
    World.add(world,this.body);
}
display(){
  //  var pos =this.body.position
  rectMode(CENTER)
  imageMode(CENTER)
  image(this.image,150,470,50,50);
}
}