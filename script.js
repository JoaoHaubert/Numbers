let num = document.querySelector('input#txtn')
let tab = document.querySelector('select#addvalue')
let res = document.querySelector('div#res')
let values = []
//----FUNCTIONS----
function inNumber(n){
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}
 
function isList(n, l){
    if(l.indexOf(Number(n)) != -1){ // -1  QUANDO NAO EXISTE ELEMENTO DENTRO DA ARRAY
        return true
    } else{
        return false
    }
}


function verify(){
    if(inNumber(num.value) && !isList(num.value, values)){//*!isList* [O sinal ! = Nao]
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `The value ${num.value} was added`
        tab.appendChild(item)
    } else {
        window.alert ('Invalid number or it already exist in the list')
    }
    num.value ='' //PARA LIMPAR A CAIXA DE TEXTO
    num.focus()   //FOCUS DEIXAR O CURSOR STACKADO NA CAIXA DE TEXTO
}

function final(){
    if(values.length == 0){
        window.alert('Add something to the list, please')
    } else{
        let result = values.length
        let small = values [0]
        let bigger = values[0]
        let sum = 0
        let division = 0
        for(let pos in values){ //ESTRUTURA DE REPETICAO
            sum += values[pos]
            if(values[pos] > bigger)
                bigger = values[pos]
            if(values[pos] < small)
                small = values[pos]
            
        } 
        division = sum / result    
        res.innerHTML =''
        res.innerHTML += `<p>You added ${result} elements in the list</p>`
        res.innerHTML +=`<p>The small value is ${small} and the higher is ${bigger}</p>`
        res.innerHTML +=`<p>The sum between the value is ${sum}`
        res.innerHTML += `<p>The average between then is ${division}`
    }
}
