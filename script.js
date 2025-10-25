

let produtos = ['Arroz', 'Feijão', 'Açucar', 'Sal',
    'Óleo', 'farinha', 'Trigo', 'Macarrão',
    'Café', 'Temperos', 'Verduras', 'Frutas', 'Biscoitos',
    'Leite', 'Manteira', 'Iorgute', 'Queijo',
    'Presunto', 'Pão', 'Carnes', 'Suco',
    'Cerveja', 'Refrigenrante', 'Chocolate',
    'Sorvete', 'Produtos de Higienes', 'Produtos de Limpeza']


let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')

let selecionados = []

produtos.forEach(produto => {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.id = produto;
    const label = document.createElement('label');
    label.textContent = produto;
    

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {

            selecionados.push(produto);
            li.classList.add('selected');

            const novaLista = document.createElement('li');
            novaLista.textContent = produto;
            novaLista.id = 'sel-' + produto;
            //resultado.appendChild(novaLista);




        } else {
            selecionados = selecionados.filter(item => item !== produto);
            li.classList.remove('selected');

            const itemRemover = document.getElementById('sel-' + produto);
            if (itemRemover) itemRemover.remove();
        }

        console.log('selecionados:', selecionados);





    })

    li.appendChild(checkbox);
    li.appendChild(label)
    lista.appendChild(li)




})
function limpar() {

    resultado.innerHTML = ``
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}

function adicionar() {
    resultado.innerHTML = `${selecionados}`
    

}















