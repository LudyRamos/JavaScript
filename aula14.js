const objs=document.getElementsByTagName('p')

for(n of objs){
    console.log(n.innerHTML='ludy')
}

for(n in objs){
    console.log(objs[n].innerHTML)
}
