const prompt = require('prompt-sync')({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho');

//Importando Classe Aluno.
class Aluno {
    constructor(matricula, nome){
        this.nome = nome;
        this.matricula = matricula;
        this.P1 = null;
        this.P2 = null;
    }

//Cálculo para Nota Final com suas condições.
    calcularNotaFinal(){
        if(this.notaP1 !== null && this.notaP2 !== null){
            return ((this.notaP1 + this.notaP2) / 2).toFixed(1);
        } else if (this.notaP1 !== null && this.notaP2 === null) {
            return (this.notaP1 / 2).toFixed(1);
          } else if (this.notaP1 === null && this.notaP2 !== null) {
            return (this.notaP2 / 2).toFixed(1);
        } else {
            return '0.0';
        }
    }
}

//Importando Classe Turma.
class Turma {
    constructor(){
        this.alunos = [];
    }

//Condições de cada aluno para a Classe Turma.
    inserirAluno(aluno) {
    const alunoExistente = this.alunos.find(a => a.matricula === aluno.matricula);
    if (alunoExistente) {
      console.log('Erro: Já existe um aluno com a mesma matrícula.');
    } else {
      this.alunos.push(aluno);
    }
  }
  

    removerAluno(matricula){
        const index = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (index !== -1){
            this.alunos.splice(index, 1);
        } else {
            console.log('Erro: Aluno não Matriculado')
        }
    }

    lancarNota(matricula, prova, nota){
        const aluno = this.alunos.find(a => a.matricula === matricula);
        if (aluno){
            if (prova === 'P1'){
                aluno.notaP1 = nota;
            } else if (prova === 'P2'){
                aluno.notaP2 = nota;
            } else {
                console.log('Erro: Prova não Encontrada.');
            }
        } else {
            console.log('Erro:Aluno não Encontrado.');
        }
    }

    imprimirAlunos() {
        console.log('---------------------------------------');
        console.log('Matricula Nome P1 P2 NF');
        console.log('---------------------------------------');
    
        this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    
        for (const aluno of this.alunos) {
          const { matricula, nome, notaP1, notaP2 } = aluno;
          const nf = aluno.calcularNotaFinal();
          console.log(`${matricula} ${nome} ${notaP1 || '-'} ${notaP2 || '-'} ${nf}`);
        }
    
        console.log('---------------------------------------');
      }
    }

const turma = new Turma();

const aluno1 = new Aluno('12345', 'Ana de Almeida');
aluno1.notaP1 = 8.0;
aluno1.notaP2 = 9.5;

const aluno2 = new Aluno('23456', 'Bruno Carvalho');
aluno2.notaP1 = 7.0;
aluno2.notaP2 = 0.0;

const aluno3 = new Aluno('34567', 'Fernanda Abreu');
aluno3.notaP2 = 8.5;
aluno3.notaP1 = 0.0;

const aluno4 = new Aluno('45678', 'Joao Santos');
aluno4.notaP1 = 0.0;
aluno4.notaP2 = 0.0;

turma.inserirAluno(aluno1);
turma.inserirAluno(aluno2);
turma.inserirAluno(aluno3);
turma.inserirAluno(aluno4);

turma.imprimirAlunos();