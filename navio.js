class Barco{
    constructor(x,y){
        this.imagem = loadImage("barco.png")
        this.body = Bodies.circle(x,y,70, {isStatic:false})
        World.add(world, this.body)
     
        this.speed = 0;
        this.size = 140
    }
    destruir(n){
      
        this.size = 280
        //comando que adiciona um delay (intervalo de tempo)
        setTimeout(()=>{
            World.remove(world, barcos[n].body);
            //tira da matriz
            delete barcos[n]            
        }, 1500)

        

    }
    animar(){
        this.speed += 0.05;
    }

    show(){
     
        var pos = this.body.position;
        image (this.imagem, pos.x, pos.y, this.size,this.size)
    }
}