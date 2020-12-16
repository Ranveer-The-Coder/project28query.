class baseClass_tree{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic':true,
            'density':0
        }
        this.body = Bodies.rectangle(x, y, 600,600, options);
        this.width = 600;
        this.height = 600;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 600,600);
        pop();
      }
}