//Importar FigurasG
import triangulo from "./FigurasG/triangulo.js"

//Módulos ES6
import PromptSync from 'prompt-sync';

const prompt = require('prompt-sync')({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho');

class Triangulo {
    constructor (x, y,z){
        this.verticex = x;
        this.verticey = y;
        this.verticez = z;

        if (!this.verificarTriangulo()) {
            throw new Error('Os vértices não formam um triângulo válido.');
        }
    }

    verificarTriangulo(){
        const { verticex, verticey, verticez } = this;
        const ladox = this.calcularDistancia(verticex, verticey);
        const ladoy = this.calcularDistancia(verticey, verticez);
        const ladoz = this.calcularDistancia(verticez, verticex);
    
        return (
            ladox + ladoy > ladoz && ladoy + ladoz > ladox && ladoz + ladox > ladoy
        );    
    }

    equals(verificaTriIgual){
        const v1 = this.verticex;
        const v2 = this.verticey;
        const v3 = this.verticez;
        const vti1 = verificaTriIgual.verticex;
        const vti2 = verificaTriIgual.verticey;
        const vti3 = verificaTriIgual.verticez;

        return (
            this.calcularDistancia(v1, v2) === this.calcularDistancia(vti1, vti2) && 
            this.calcularDistancia(v2, v3) === this.calcularDistancia(vti2, vti3) &&
            this.calcularDistancia(v3, v1) === this.calcularDistancia(vti3, vti1) 
        );
    }

}