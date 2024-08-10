const list = ["pera","Uva","maçã","Salada mista"]

var span= document.createElement('span');
var body = document.getElementsByTagName('body');
console.log(body[0])
var div = document.getElementsByClassName('lista')

for(i=0; i<list.length;i++){
    textospan = document.createTextNode(list[i])
    span.appendChild(textospan);
    body[0].appendChild(span);
}



// var listaul = document.createElement('ul');

// var body = document.getElementsByTagName('Body')
// console.log(body[0])

// body[0].appendChild(listaul)
// var listaNoBody= document.getElementsByTagName('ul');

// for(i=0;i<= list.length;i++){
//     var li = document.createElement('li')
//     var textoli = document.createTextNode(list[i]);
//     li.appendChild(textoli);
//     listaNoBody[0].appendChild(li)

// }