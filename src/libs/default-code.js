export default (`// 🤓 DEFAULT EXAMPLE













//////////////////////////
//
// FIRST EXAMPLE 🥇
//


clear()

print('<yellow>💫 !HELLO! 🚀')
print('👀')
print('my name is John !')
print('i am your 🤖')
print('<blue>yes <white>i <red>am')
print('so nice 🤩')
print('so happy it works !')
print('<purple>Yeah Man !</red>')


















/////////////////////////////
//
// 📚 libs
//
function clear(e = false) {
  if (!e) e = document.getElementById('ui')
  e.innerHTML = ''
  const es = e.style
  es.fontFamily = 'monospace'
  es.fontSize = '20px'
  es.position = 'fixed'
  es.top = '33px'
  es.backgroundColor = 'rgba(0,0,0,0.5)'
  es.width = '95vw'
  es.height = '50vw'
  es.overflow = 'scroll'
  es.color = 'green'
  es.textAlign = 'center'
}

function printf(param, e = false) {
  if (!e) e = document.getElementById('ui')
  e.innerHTML += param
}

function print(param, e = false) {
  if (!e) e = document.getElementById('ui')
  e.innerHTML += param + '<br>'
}

let style = '<style> red{color:red} white{color:white} blue{color:blue} green{color:green} yellow{color:yellow} orange{color:orange} purple{color:purple}</style>'
printf(style)
`)