class Ground{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }

    display(c1,c2,c3){
    var pos=this.body.position;
    rectMode(CENTER);
    fill(c1,c2,c3);
    rect(pos.x,pos.y,this.width,this.height);
    }

}