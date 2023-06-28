//Importar FigurasG
import Vertice from "./FigurasG/vertice.js"
import Poligono from "./FigurasG/poligono.js"

//Módulos PromptSync
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C
//let nome = prompt('Eduardo Carvalho');

/*
    class Poligono{
        constructor (vertices){
            if (vertices.length < 3) {
                throw new Error('O Polígono não tem três vértices.');
            }
            this.vertices = vertices;
        }

        addVertice(v){
            if (this.vertices.includes(v)){
                return false;
            }
            this.vertices.push(v);
            return true;
        }

        get qtdVertices(){
            return this.vertices.length;
        }

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
*/

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

    console.log('Criar um Polígono');
    const qtdVertices = parseInt(prompt('Digite a quantidade de Vértices do Polígono:'), 10);
    const vertices = lerVertices(qtdVertices);

    try {
        const poligono = new Poligono(vertices);
        console.log('Poligono Criado!');
        console.log('Quantidade de Vértices:', poligono.qtdVertices);
        console.log('Perímetro:', poligono.perimetro);
    } catch (error) {
        console.log('Erro ao Criar o Polígono:', error.message);
    }
