class Iron{
	constructor(x,y,w,h)
	{
	var options={
		restituion:0.8,friction:3,density:30
	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0,0,this.w,this.h)

			pop()
	}

}