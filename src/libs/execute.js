function execute(ui,code) {
    ui.style.border = 'solid green 2px'
    const iframe = document.createElement('iframe')
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.srcdoc = '<div id="ui" style="width:200px;height:100%"></div><canvas class="rainbow-pixel-canvas"></canvas><script type="module">' + code + '</script>'
    ui.innerHTML = ''
    ui.appendChild(iframe)}

export default execute