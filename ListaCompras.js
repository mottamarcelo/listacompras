const Lista = []

let input = document.querySelector('input');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        return(insereProduto())
    }
})


function insereProduto() {
    let valorProduto = document.getElementById('input')

    let produto = (valorProduto.value)

    Lista.push(produto)

    console.log(Lista)

    const element = document.createElement('section')
    element.innerHTML = `<div>${produto}</div>`
    document.body.appendChild(element)

    document.querySelectorAll('input').forEach(input => (input.value = ''))
}
