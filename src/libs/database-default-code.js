export default (`
















//////////////////////////
//
// 🎨 PIXEL APP 1.0 
//

clear()

print('<yellow>💫 !HELLO! 🚀')
print('👀')
print('my name is John!')
print('i am your 🤖')
print('<blue>yes <white>i <red>am')
print('so nice 🤩')

print('<canvas style="border: solid 2px orange; border-radius: 15px; touch-action:none; width:80%" class="rainbow-pixel-canvas"></canvas>')

print('so happy it works !')
print('<purple>Yeah Man !</red>')
print('👀')
print('my name is John !')
print('i am your 🤖')
print('<blue>yes <white>i <red>am')
print('so nice 🤩')
print('so happy it works !')
print('<purple>Yeah Man !</red>')

import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js';

var pixelSize = 16;

interact('.rainbow-pixel-canvas')
  .draggable({
    autoScroll: false,
    max: Infinity,
    maxPerElement: Infinity,
    origin: 'self',
    modifiers: [
      interact.modifiers.snap({
      // snap to the corners of a grid
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize }),
        ],
      }),
    ],
    listeners: {
      // draw colored squares on move
      move: function (event) {
        var context = event.target.getContext('2d');
        // calculate the angle of the drag direction
        var dragAngle =
          (180 * Math.atan2(event.dx, event.dy)) / Math.PI;
        // set color based on drag angle and speed
        context.fillStyle =
          'hsl(' +
          dragAngle +
          ', 86%, ' +
          (30 + Math.min(event.speed / 1000, 1) * 50) +
          '%)';
        // draw squares
        context.fillRect(
          event.pageX - pixelSize / 2,
          event.pageY - pixelSize / 2,
          pixelSize,
          pixelSize
        );
      },
    },
  })
  // clear the canvas on doubletap
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d');
    context.clearRect(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
    resizeCanvases();
  });

function resizeCanvases() {
  [].forEach.call(
    document.querySelectorAll('.rainbow-pixel-canvas'),
    function (canvas) {
      delete canvas.width;
      delete canvas.height;
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  );
}

resizeCanvases();
 
// interact.js can also add DOM event listeners
console.log(window)
interact(window).on('resize', resizeCanvases);


/////////////////////////////
//
// 📚 libs
//
function clear(e = false) {
  if (!e) e = document.getElementById('ui')
  if (!e) {
    const div = document.createElement('div')
    div.id = 'ui'
    document.body.appendChild(div)
  }
  e = document.getElementById('ui')
  e.innerHTML = ''
  const es = e.style
  es.fontFamily = 'monospace'
  es.fontSize = '20px'
  es.position = 'fixed'
  es.top = '0px'
  es.left = '0px'
  es.backgroundColor = 'rgba(0,0,0,0.5)'
  es.width = '100%'
  es.height = '100%'
  es.overflow = 'scroll'
  es.color = 'green'
  es.textAlign = 'center'

  es.borderRadius = '25px'
  es.margin = '0px'
  es.padding = '0px'
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