const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];
//lista das coisas

function adicionarTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
    //criei o objeto para adicionar mais de um valor no comando "push"
  });
  //adicionar o item ao array

  input.value = "";
  //limpa o campo depois de digitar

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
      <li class="task ${item.concluida && "feita"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})" />
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-lixo" onclick="deletarItem(${posicao})"/>
      </li>
    `;
    //"${item.concluida && "feita"}" caso o "item.concluida" seja true,
    //ele adiciona a classe "feita" a li. isso permite mudar algumas coisas do css.
    //
    //"item.tarefa" pega o item selecionado do forEach e depois qual a tarefa da
    //função "adicionarTarefa".
    //"deletarItem(${posicao})" é acionado assim que alguém clica na lixeira,
    //indicando qual a posicao deve ser deletada a partir da informação do forEach.
  });
  //essa função adiciona itens dentro do html

  listaCompleta.innerHTML = novaLi;
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
  //isso inverte o valor, inicialmente começa em false e troca para true.
  //ou vice-versa.

  mostrarTarefas();
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1);
  mostrarTarefas();
}

button.addEventListener("click", adicionarTarefa);
//fica esperando o evento ser acionado
