const produtos = ['Arroz', 'Feijão', 'Açucar', 'Sal',
    'Óleo', 'farinha', 'Trigo', 'Macarrão',
    'Café', 'Temperos', 'Verduras', 'Frutas', 'Biscoitos',
    'Leite', 'Manteira', 'Iorgute', 'Queijo',
    'Presunto', 'Pão', 'Carnes', 'Suco',
    'Cerveja', 'Refrigenrante', 'Chocolate', 
    'Sorvete', 'Produtos de Higienes', 'Produtos de Limpeza']


const Resultado = document.getElementById('resultado')
const listaEditada = document.getElementById('lista-edit')

let selecionados = []


const lista = document.createElement ('ul');

produtos.forEach(item => {
    const listItem = document.createElement ('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = item;

    listItem.textContent = item;

    lista.appendChild(listItem);
    listItem.appendChild(checkbox);
    
})

Resultado.appendChild(lista)

