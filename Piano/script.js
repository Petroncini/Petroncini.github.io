Tone.start()
const synth = new Tone.Synth().toDestination()
document.onkeydown = function (e) {
    e = e || window.event
    var key = e.which || e.keyCode
    if (key === 65) {
        playNote('C')
    }
    if (key === 83) {
        playNote('D')
    }
    if (key === 68) {
        playNote('E')
    }
    if (key === 70) {
        playNote('F')
    }
    if (key === 71) {
        playNote('G')
    }
    if (key === 72) {
        playNote('A')
    }
    if (key === 74) {
        playNote('B')
    }
  }
  function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, '8n')
    document.getElementById(note).style.background = '#E5293F'
    setTimeout(() => {
        document.getElementById(note).style.background = 'white'
     }, 200)
  }


