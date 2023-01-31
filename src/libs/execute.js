function execute(ui,code) {
    ui.style.border = 'solid green 2px'
    const iframe = document.createElement('iframe')
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.srcdoc = '<script type="module">' + code + '</script>'
    ui.innerHTML = ''
    ui.appendChild(iframe)}

export default execute