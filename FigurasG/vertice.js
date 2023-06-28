//Classe Vertice.
export default class Vertice{
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

//Distancia Euclidiana de Um Vértice ao Outro.
    distancia(outroVertice){
        const dx = outroVertice.x - this.verticex;
        const dy = outroVertice.y - this.verticey;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

//Mover o Vértice para outra Posição.
    move(novaPosiX, novaPosiY){
    this.verticex = novaPosiX;
    this.verticey = novaPosiY;
    }

//Verificar se os dois Vértices são iguais.
    equals(verificaVerti){
        return this.verticex === verificaVerti.x && this.verticey === verificaVerti.y;
    }
}