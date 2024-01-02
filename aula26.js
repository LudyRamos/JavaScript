const cursos=['HTML e CSS' , 'Javascript', 'Python', 'React']
cursos.map((el,i)=>{
    console.log('cursos: ' + el + '- Posição: ' + i)
})


// DOM

// let el=document.getElementsByTagName('p')
// el=[...el]
// el.map((e,i)=>{
//     e.innerHTML='CFB cursos'
// })


// const el=document.getElementsByName("p")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

// fim do DOM

// const converterInt=(e)=>parseInt(e)
// const dobrar=(e)=>e*2
// let num=['1', '2', '3', '4', '5'].map(dobrar)
// console.log(num)