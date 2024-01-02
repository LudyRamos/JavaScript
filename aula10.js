const obj1 = document.getElementsByTagName('p')
const obj2 = [...document.getElementsByTagName('p')]

obj2.forEach(element => {
    element.innerHTML='oi'
});

console.log(obj1)
console.log(obj2)