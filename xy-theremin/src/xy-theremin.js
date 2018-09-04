<script>
//XY Theremin v1.0.2017
//Programmer Onette du Joyeux
//Publisher Sounds Merry
    var AC = window.AudioContext || window.webkitAudioContext;
    var actx = new AC();
    var osc = actx.createOscillator(); osc.connect(actx.destination);
    var actx2 = new AC();
    var osc2 = actx2.createOscillator(); osc2.connect(actx2.destination);
</script>