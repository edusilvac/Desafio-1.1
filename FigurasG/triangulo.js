//Importando Vertice
import Vertice from './vertice.js';

//Exportar Triangulo
export default class Triangulo{
    constructor (v1, v2, v3){
        this.vertices = [v1, v2, v3];

        if (!this.validarTriangulo()) {
            throw new Error('Os vértices não formam um triângulo válido.');
        }
    }

    validarTriangulo(){
        const [v1, v2, v3] = this.vertices;

        //Verificar se os vértices são diferentes
        if (v1 === v2 || v1 === v3 || v2 === v3){
            return false;
        }

        //Verificar se os pontos são colineares
        if ((v2.y - v1.y) * (v3.x - v1.x) === (v3.y - v1.y) * (v2.x - v1.x)) {
            return false;
        }
            return true;
    }

    equals(outroTriangulo){
        for (let i = 0; i < this.vertices.length; i++){
            if (this.vertices[i].x !== outroTriangulo.vertices[i].x ||
                this.vertices[i].y !== outroTriangulo.vertices[i].y){
                    return false;
                }
        }
        return true;
    }

//Perimetro dos Vértices
    get perimetro(){
        const [v1, v2, v3] = this.vertices;
        const lado1 = this.calcularDistancia(v1, v2);
        const lado2 = this.calcularDistancia(v2, v3);
        const lado3 = this.calcularDistancia(v1, v3);
        return lado1 + lado2 + lado3; 
    }

//Calcular distância euclidiana de um vértice ao outro.
    calcularDistancia(v1, v2){
        const dx = v2.x - v1.x;
        const dy = v2.y - v1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

//Tipo de Triângulos: Equilátero, Isósceles e Escaleno.
    get tipo(){
        const [v1, v2, v3] = this.vertices;
        const lado1 = this.calcularDistancia(v1, v2);
        const lado2 = this.calcularDistancia(v2, v3);
        const lado3 = this.calcularDistancia(v1, v3);

        if (lado1 === lado2 && lado2 === lado3){
            return 'Equilátero';
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    }

//Clonar um Triangulo
    clone(){
        const [v1, v2, v3] = this.vertices;
        const cloneV1 = new Vertice (v1.x, v1.y);
        const cloneV2 = new Vertice (v2.x, v2.y);
        const cloneV3 = new Vertice (v3.x, v3.y);
            return new Triangulo (cloneV1, cloneV2, cloneV3);
    }

//Area para Retornar a Área do Triângulo
    get area(){
        const [v1, v2, v3] = this.vertices;
        const lado1 = this.calcularDistancia(v1, v2);
        const lado2 = this.calcularDistancia(v2, v3);
        const lado3 = this.calcularDistancia(v1, v3);
        const semiperimetro = (this.perimetro / 2);
        return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    }
}