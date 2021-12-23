
( () => {
    const criarTarefa = (event) => {
    event.preventDefault();
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${value}<p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = '';
  }

  const novaTarefa = document.querySelector('[data-form-button]');

  novaTarefa.addEventListener('click', criarTarefa);

  const BotaoConclui = () => {
    const botaoConlui = document.createElement('button');
    
    botaoConlui.classList.add('check-button');
    botaoConlui.innerHTML = 'Concluir';

    botaoConlui.addEventListener('click', concluirTarefa);

    return botaoConlui;
  }

  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerHTML = 'Deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
  }

  const deletarTarefa = (event) => {
    const botaoDeleta = event.target;
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove()

    return botaoDeleta;
  }

  const concluirTarefa = (event) => {
    const botaoConlui = event.target;
    const tarefaCompleta = botaoConlui.parentElement;
    
    tarefaCompleta.classList.toggle('done');
  }
}) ();