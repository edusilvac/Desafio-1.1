export default class vertice{
    constructor (x, y){
        this.verticex = x;
        this.verticey = y;
    }

    get x (){
        return this.verticex;
    }

    get y(){
        return this.verticey;
    }

    distancia(outroVertice){
        const dx = outroVertice.x - this.verticex;
        const dy = outroVertice.y - this.verticey;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    move(novaPosiX, novaPosiY){
    this.verticex = novaPosiX;
    this.verticey = novaPosiY;
    }

    equals(verificaVerti){
        return this.verticex === verificaVerti.x && this.verticey === verificaVerti.y;
    }
}