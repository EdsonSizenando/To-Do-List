

let produtos = ['Arroz', 'Feijão', 'Açucar', 'Sal',
    'Óleo', 'farinha', 'Trigo', 'Macarrão',
    'Café', 'Temperos', 'Verduras', 'Frutas', 'Biscoitos',
    'Leite', 'Manteiga', 'Iogurte', 'Queijo',
    'Presunto', 'Pão', 'Carnes', 'Suco',
    'Cerveja', 'Refrigenrante', 'Chocolate',
    'Sorvete', 'Produtos de Higienes', 'Produtos de Limpeza']


let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')

let selecionados = []

produtos.forEach(produto => {
    const li = document.createElement('li')
    
    //estilo
    li.style.display = 'flex';
    li.style.gap = '8px';
      
    
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.id = produto;
    
    let label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = produto;
    
    
    


    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {

            selecionados.push(produto);
            li.classList.add('selected');






        } else {
            selecionados = selecionados.filter(item => item !== produto);
            li.classList.remove('selected');


        }

        console.log('selecionados:', selecionados);





    })
    
    li.appendChild(checkbox);
    li.appendChild(label)
    lista.appendChild(li)
    



})
function limpar() {

    selecionados = []
    resultado.innerHTML = ``
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}

function adicionar() {
    resultado.innerHTML = `${selecionados.length} Itens no seu carrinho`

    




    if (selecionados.length === 0) {
        return window.alert('Selecione algum item antes de adicionar.')
    }

    let ul = document.createElement('ul');

    selecionados.forEach(item => {
        let li = document.createElement('li');
        

        //estilo
        li.style.display = 'flex';
        li.style.type = 'none';
        li.style.gap = '10px';
        
        let botaoLixeira = document.createElement('button');
        let labelDelete = document.createElement('label')
        
        //estilo
        botaoLixeira.style.display = 'flex';
        botaoLixeira.style.height = '20px';
        botaoLixeira.style.background = '#498191fe';
        botaoLixeira.style.border = 'none';
        

        
        botaoLixeira.innerHTML = '<img src="img/lixeira.png" alt="Lixeira">';


        botaoLixeira.addEventListener('click', function () {


            li.remove();
            
            //remove do array selecionados
            selecionados = selecionados.filter(i => i !==  item); 
            
            //atualiza a contagem de resultado
            //firstChild pega o primeiro elemto ds div resposta
            resultado.firstChild.textContent = `${selecionados.length} Itens no seu carrinho`;

        })






        li.textContent = item;
        ul.appendChild(li);
        li.appendChild(botaoLixeira)
        
        
    })

    resultado.appendChild(ul);
    ul.appendChild(checkbox)

};
















