
function relogio() {

  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    })
  }

  const relogio = document.querySelector('.relogio')
  let seconds = 0
  let timer

  function inicia() {
    timer = setInterval(function () {
      seconds++
      relogio.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('iniciar')) {
      clearInterval(timer)
      inicia()
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer)
    }

    if (el.classList.contains('zerar')) {
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
      seconds = 0
    }
  })
  
}

relogio()
