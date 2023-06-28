//Importar FigurasG
import Triangulo from "./FigurasG/triangulo.js"
import Vertice from "./FigurasG/vertice.js"

//Módulos PromptSync
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho');

/*
class Vertice{
    constructor(x, y){
        this.verticex = x;
        this.verticey = y; 
    }
}

class Triangulo {
    constructor (v1, v2, v3){
        this.vertices = [v1, v2, v3];

        if (!this.verificarTriangulo()) {
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

    get perimetro(){
        const [v1, v2, v3] = this.vertices;
        const lado1 = this.calcularDistancia(v1, v2);
        const lado2 = this.calcularDistancia(v2, v3);
        const lado3 = this.calcularDistancia(v1, v3);
        return lado1 + lado2 + lado3; 
    }

    calcularDistancia(v1, v2){
        const dx = v2.x - v1.x;
        const dy = v2.y - v1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

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

    clone(){
        const [v1, v2, v3] = this.vertices;
        const cloneV1 = new Vertice (v1.x, v1.y);
        const cloneV2 = new Vertice (v2.x, v2.y);
        const cloneV3 = new Vertice (v3.x, v3.y);
            return new Triangulo (cloneV1, cloneV2, cloneV3);
    }

    get area(){
        const [v1, v2, v3] = this.vertices;
        const lado1 = this.calcularDistancia(v1, v2);
        const lado2 = this.calcularDistancia(v2, v3);
        const lado3 = this.calcularDistancia(v1, v3);
        const semiperimetro = (this.perimetro / 2);
        return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    }
}

*/

// Função para ler um vértice a partir dos valores fornecidos pelo usuário
function lerVertice() {
    const x = parseFloat(prompt('Digite o valor de x do vértice:'));
    const y = parseFloat(prompt('Digite o valor de y do vértice:'));
    return new Vertice(x, y);
  }
  
  // Criar o primeiro triângulo
  console.log('Entre com as coordenadas do primeiro triângulo:');
  const v1Triangulo1 = lerVertice();
  const v2Triangulo1 = lerVertice();
  const v3Triangulo1 = lerVertice();
  const triangulo1 = new Triangulo(v1Triangulo1, v2Triangulo1, v3Triangulo1);
  
  // Criar o segundo triângulo
  console.log('Entre com as coordenadas do segundo triângulo:');
  const v1Triangulo2 = lerVertice();
  const v2Triangulo2 = lerVertice();
  const v3Triangulo2 = lerVertice();
  const triangulo2 = new Triangulo(v1Triangulo2, v2Triangulo2, v3Triangulo2);
  
  // Criar o terceiro triângulo
  console.log('Entre com as coordenadas do terceiro triângulo:');
  const v1Triangulo3 = lerVertice();
  const v2Triangulo3 = lerVertice();
  const v3Triangulo3 = lerVertice();
  const triangulo3 = new Triangulo(v1Triangulo3, v2Triangulo3, v3Triangulo3);
  
  // Chamar os métodos da classe Triangulo para cada triângulo criado
  console.log('Triângulo 1:');
  console.log('Perímetro:', triangulo1.perimetro);
  console.log('Tipo:', triangulo1.tipo);
  console.log('Área:', triangulo1.area);
  
  console.log('Triângulo 2:');
  console.log('Perímetro:', triangulo2.perimetro);
  console.log('Tipo:', triangulo2.tipo);
  console.log('Área:', triangulo2.area);
  
  console.log('Triângulo 3:');
  console.log('Perímetro:', triangulo3.perimetro);
  console.log('Tipo:', triangulo3.tipo);
  console.log('Área:', triangulo3.area);
  