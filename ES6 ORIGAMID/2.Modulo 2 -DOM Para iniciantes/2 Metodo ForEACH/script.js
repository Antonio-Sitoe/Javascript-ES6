const paragraph =  window.document.querySelectorAll(`p`)
console.log(paragraph)
paragraph.forEach((p)=>{
   console.log(p.innerText)
})