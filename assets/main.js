const nomeDoInput = document.getElementById('nomeDoInput');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnSortear = document.getElementById('btnSortear');
const btnLimpar = document.getElementById('btnLimpar');
const lista = document.getElementById('lista');
const display = document.getElementById('d');

const nomes = JSON.parse(localStorage.getItem('listaNomes')) || [];

function loop(){
    lista.innerHTML="";
    for (let nome of nomes){
        let li = document.createElement('li');
        let textoLi = document.createTextNode(nome);
        
        let link = document.createElement('a');
        link.setAttribute('class', 'material-icons')
        let pos = nomes.indexOf(nome);
        let textLink = document.createTextNode('delete_forever');
        link.appendChild(textLink);
        link.setAttribute('href', '#')
        link.setAttribute('onclick', `deletaNome(${pos})`)

        li.appendChild(textoLi);
        lista.appendChild(li);

        li.appendChild(link)
    }
};

loop();

function addnomes(){
    let value = nomeDoInput.value;
    if (value == ""){
        alert('Por Favor Digite um Nome...')
    } else {
        nomes.push(value);
        nomeDoInput.value = "";
        loop();
        save()
    }
};

function sortear(){
    let nPessoas = nomes.length;
    let pessoaSorteada = Math.floor(Math.random() * nPessoas);
    if(nomes.length == ""){
        alert('adicione pessoas para podermos fazer o sorteio!')
    } else {
        display.innerHTML = "Parabéns " + nomes[pessoaSorteada] + ", Você ganhou!"
    }
}

btnAdicionar.setAttribute('onclick', 'addnomes()');
btnSortear.setAttribute('onclick', 'sortear()');
btnLimpar.setAttribute('onclick', 'limpar()')

function save(){
    localStorage.setItem('listaNomes', JSON.stringify(nomes));
}

function limpar(){
    localStorage.clear()
    location.reload()
}

function deletaNome(pos){
    nomes.splice(pos, 1);
    loop();
    save();
}