const Lista = []

let input = document.querySelector('input');

let item = {}

function insereProduto() {

    let produto = (document.getElementById('input')).value
    Lista.push(produto)
    console.log(Lista)

    let item = {
        nome: produto,
        id: gerarId()
    }
    console.log(item.id)

    const element = document.createElement('section')

    element.innerHTML = 
    `<div class='item' id=${item.id}>
        <p>${produto}</p>
        <div>
        <!-- <button class="alterar" onclick="alteraProduto('${item.id}')"> <i class="fa-solid fa-pen"></i> </button> -->
        <button class="excluir" onclick="excluiProduto('${item.id}')"> <i class="fa-solid fa-trash"></i> </button>
        </div>
    </div>`

    document.body.appendChild(element)

    document.querySelectorAll('input').forEach(input => (input.value = ''))
}


function gerarId(){
    return Math.floor(Math.random() * 3000)
}


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        return(insereProduto())
    }
})


function excluiProduto(idProduto){

    let excluido = document.getElementById(idProduto);
    console.log(excluido)
    excluido.remove()
    //document.section.removeChild(excluido)
}
