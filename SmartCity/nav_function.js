var count = 1
setTimeout(tag, 500)
setTimeout(tag, 700)
setTimeout(tag, 900)
setTimeout(tag, 2000)

setTimeout(tag, 2500)
setTimeout(tag, 2750)
setTimeout(tag, 3050)


var mousein = false
function tag() {
   if(mousein) return
   document.getElementById('tag' + count++)
      .classList.toggle('hover')
   
}

// function tag2() {
//    if(mousein) return
//    document.getElementById('tag2')
//       .classList.toggle('hover')
// }

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})