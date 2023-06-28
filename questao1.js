//Importar CLasses
import Vertice from './FigurasG/vertice.js';

//Importar PromptSync
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho');

/*
class Vertice {
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
*/
// Leitura dos valores do usuário
const x1 = parseFloat(prompt('Digite a coordenada x do Vértice 1:'));
const y1 = parseFloat(prompt('Digite a coordenada y do Vértice 1:'));
const v1 = new Vertice(x1, y1);

const x2 = parseFloat(prompt('Digite a coordenada x do Vértice 2:'));
const y2 = parseFloat(prompt('Digite a coordenada y do Vértice 2:'));
const v2 = new Vertice(x2, y2);

const x3 = parseFloat(prompt('Digite a coordenada x do Vértice 3:'));
const y3 = parseFloat(prompt('Digite a coordenada y do Vértice 3:'));
const v3 = new Vertice(x3, y3);

console.log(`Coordenadas de v1: (${v1.x}, ${v1.y})`);
console.log(`Coordenadas de v2: (${v2.x}, ${v2.y})`);
console.log(`Coordenadas de v3: (${v3.x}, ${v3.y})`);

//Distância entre os Pontos
const distancia12 = v1.distancia(v2);
console.log(`Distância entre v1 e v2: ${distancia12}`);

const distancia23 = v2.distancia(v3);
console.log(`Distância entre v1 e v3: ${distancia23}`);

const distancia13 = v1.distancia(v3);
console.log(`Distância entre v1 e v3: ${distancia13}`);

//Mover Vértice para Outra Posição
v1.move(5, 3);
console.log(`Nova posição da Coordenada 1: (${v1.x}, ${v1.y})`);

//Verificar se os vértices são iguais (Falta 2-3 e 1-2)
console.log(`Coordenada 1 é igual a Coordenada 3? ${v1.equals(v3)}`);
console.log(`Coordenada 1 é igual a Coordenada 2? ${v1.equals(v2)}`);
console.log(`Coordenada 2 é igual a Coordenada 3? ${v2.equals(v3)}`);