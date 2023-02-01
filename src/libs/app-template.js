import icons from "./database-icons.js";


export default  {
    name: "template",
    id: 0,
    svg: icons.earth,
    backgroundColor: "rgb(0, 50, 0)",
    script: `
/////////////////////////////////////////////////////////////
//
// 🤖 README FIRST
//
// 1) type some characters between these brackets : [     ]
//    and the app should auto-start above in preview mode !
//
// 2) use chrome brower debug window for debugging (only on desktop 🥲)
//    . Press option+command+i on chrome osx,
//    . Use the 'console' tab to see the errors message while you
//      are typing code,
//    . Add 'debugger' instruction (without brackets) to add a breakpoint
//      anywhere in your code in this page,
//    . Each time you type a character... the app auto relaunch.
//
//  ✅ Done !
//


//////////////////////////
//
// 🤩 TEMPLATE APP 1.0
//

// some printings
print('👀<center><h1><orange>Hello<yellow> World!</h1>')


/////////////////////////////
//
// 📚 libs
//
// NB: _ prefixed function are 'private' to 'libs'
function getUI(uiId) {
  const ui = document.getElementById(uiId)
  if (!ui) {
    const div = document.createElement('div')
    div.id = uiId
    document.body.appendChild(div)
    _initUI(div)
  }
  return document.getElementById(uiId)
} 

function _initUI(ui) {
  ui.innerHTML = ''
  ui.innerHTML = '<style>center{position:fixed; left:50%; top:50%; transform:translate(-50%,-50%)} red{color:red} white{color:white} blue{color:blue} green{color:green} yellow{color:yellow} orange{color:orange} purple{color:purple}</style>'

  ui.style.fontFamily = 'monospace'
  ui.style.fontSize = '20px'
  ui.style.position = 'fixed'
  ui.style.top = '0px'
  ui.style.left = '0px'
  ui.style.backgroundColor = 'rgba(0,0,0,0.5)'
  ui.style.width = '100%'
  ui.style.height = '100%'
  ui.style.overflow = 'scroll'
  ui.style.color = 'green'
  ui.style.textAlign = 'center'
  ui.style.borderRadius = '25px'
  ui.style.margin = '0px'
  ui.style.padding = '0px'
  return ui
}

function clear(uiId = 'ui') {
  const ui = getUI(uiId)
  ui.innerHTML = ''
  ui.innerHTML = '<style>center{position:fixed; left:50%; top:50%; transform:translate(-50%,-50%)} red{color:red} white{color:white} blue{color:blue} green{color:green} yellow{color:yellow} orange{color:orange} purple{color:purple}</style>'
}
  
function printf(param, uiId = 'ui') {
  const ui = getUI(uiId)
  ui.innerHTML += param
}

function print(param, uiId = 'ui') {
  const ui = getUI(uiId)
  ui.innerHTML += param + '<br>'
}
    
`}