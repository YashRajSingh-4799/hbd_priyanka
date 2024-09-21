(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
  
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  })();

  document.getElementById('play-pause').addEventListener('click', function() {
    var audio = document.getElementById('voice-note-audio');
    if (audio.paused) {
        audio.play();
        this.classList.add('paused');
    } else {
        audio.pause();
        this.classList.remove('paused');
    }
});
