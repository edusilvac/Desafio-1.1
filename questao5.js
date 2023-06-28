//Módulos PromptSync
import PromptSync from 'prompt-sync';

const prompt = require('prompt-sync')({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Dados dos Clientes
function obterDadosCliente() {
  rl.question('Digite o nome do cliente: ', (nome) => {
    if (nome.length < 5) {
      console.log('O nome deve ter pelo menos 5 caracteres.');
      obterDadosCliente();
      return;
    }

    rl.question('Digite o CPF do cliente: ', (cpf) => {
      if (!validarCPF(cpf)) {
        console.log('CPF inválido. O CPF deve conter exatamente 11 dígitos.');
        obterDadosCliente();
        return;
      }

      rl.question('Digite a data de nascimento (DD/MM/AAAA): ', (dataNascimento) => {
        if (!validarDataNascimento(dataNascimento)) {
          console.log('Data de nascimento inválida. O cliente deve ter pelo menos 18 anos.');
          obterDadosCliente();
          return;
        }

        // Converter a data de nascimento para o formato Date
        const partesData = dataNascimento.split('/');
        const dia = parseInt(partesData[0]);
        const mes = parseInt(partesData[1]) - 1; // O mês começa do zero (janeiro = 0)
        const ano = parseInt(partesData[2]);
        const dataNascimentoCliente = new Date(ano, mes, dia);

        rl.question('Digite a renda mensal do cliente: ', (renda) => {
          const rendaNum = parseFloat(renda.replace(',', '.'));
          if (isNaN(rendaNum) || rendaNum < 0) {
            console.log('Renda inválida. A renda deve ser um valor numérico maior ou igual a zero.');
            obterDadosCliente();
            return;
          }

          rl.question('Digite o estado civil do cliente (C, S, V ou D): ', (estadoCivil) => {
            if (!validarEstadoCivil(estadoCivil)) {
              console.log('Estado civil inválido. O estado civil deve ser C, S, V ou D.');
              obterDadosCliente();
              return;
            }

            rl.question('Digite o número de dependentes do cliente (0 a 10): ', (dependentes) => {
              const dependentesNum = parseInt(dependentes);
              if (isNaN(dependentesNum) || dependentesNum < 0 || dependentesNum > 10) {
                console.log('Número de dependentes inválido. O número de dependentes deve ser um valor numérico entre 0 e 10.');
                obterDadosCliente();
                return;
              }

              // Dados corretos
              imprimirDadosCliente(nome, cpf, dataNascimentoCliente, rendaNum, estadoCivil, dependentesNum);
              rl.close();
            });
          });
        });
      });
    });
  });
}

function validarCPF(cpf) {
  return /^\d{11}$/.test(cpf);
}

function validarDataNascimento(dataNascimento) {
  const partesData = dataNascimento.split('/');
  if (partesData.length !== 3) {
    return false;
  }

  const dia = parseInt(partesData[0]);
  const mes = parseInt(partesData[1]) - 1; // O mês começa do zero (janeiro = 0)
  const ano = parseInt(partesData[2]);

  const dataNascimentoCliente = new Date(ano, mes, dia);
  const dataAtual = new Date();
  const idadeMinima = 18;

  return (
    !isNaN(dataNascimentoCliente) &&
    dataNascimentoCliente <= dataAtual &&
    calcularIdade(dataNascimentoCliente) >= idadeMinima
  );
}

function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();
  const mesNascimento = dataNascimento.getMonth();
  const diaNascimento = dataNascimento.getDate();

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }

  return idade;
}

function validarEstadoCivil(estadoCivil) {
  const estadosCivisValidos = ['C', 'S', 'V', 'D'];
  return estadosCivisValidos.includes(estadoCivil.toUpperCase());
}

//Tabela
function imprimirDadosCliente(nome, cpf, dataNascimento, renda, estadoCivil, dependentes) {
  const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  const dataNascimentoFormatada = `${dataNascimento.getDate()}/${dataNascimento.getMonth() + 1}/${dataNascimento.getFullYear()}`;
  const rendaFormatada = renda.toFixed(2).replace('.', ',');

  console.log('\nDados do cliente:');
  console.log(`Nome: ${nome}`);
  console.log(`CPF: ${cpfFormatado}`);
  console.log(`Data de Nascimento: ${dataNascimentoFormatada}`);
  console.log(`Renda Mensal: R$ ${rendaFormatada}`);
  console.log(`Estado Civil: ${estadoCivil.toUpperCase()}`);
  console.log(`Dependentes: ${dependentes}`);
}

// Iniciar a entrada dos dados
obterDadosCliente();
