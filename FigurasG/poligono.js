//Importando Vertice
import Vertice from './vertice.js';

//Exportar Poligono
export default class Poligono{
    constructor (vertices){
        if (vertices.length < 3) {
            throw new Error('O Polígono não tem três vértices.');
        }
        this.vertices = vertices;
    }

//Adicionar um novo Vértice ao Polígono
    addVertice(v){
        if (this.vertices.includes(v)){
            return false;
        }
        this.vertices.push(v);
        return true;
    }

//Quantidade de Vértices
    get qtdVertices(){
        return this.vertices.length;
    }

//Perímetro
    get perimetro(){
        let perimetro = 0;
        for (let i = 0; i < this.vertices.length; i++){
            const v1 = this.vertices[i];
            const v2 = this.vertices[(i + 1) % this.vertices.length];
            const distancia = v1.distancia(v2);
            perimetro += distancia;
        }
        return perimetro;
    }
}
    function lerVertices(qtdVertices){
        const vertices = [];
            for (let i = 0; i < qtdVertices; i++){
        console.log(`Digite as coordenadas do vértice ${i+1}:`);
        const x = parseFloat(prompt('x: '));
        const y = parseFloat(prompt('y: '));
        const vertice = new Vertice(x, y);
        vertices.push(vertice); 
    }
    return vertices;
}