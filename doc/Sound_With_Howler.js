
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script>
<script>
    var sound = new Howl({
      src: ['YOUR AUDIO DIRECTORY'],
      volume: 1.0,
      onend: function () {
        console.log('succes')
      }
    });
    setTimeout(function(){
      sound.play()
    },1000) // this time for timeout work
</script>

// Paste it in the HTML file just above / before </body>
