const input = document.getElementById('input');

input.style.display = 'none';

const peer = new Peer({
  host: 'p0syd0n-audiochat-frl517njez6.ws-us110.gitpod.io/',
  port: 3000,
  path: '/peer' // Updated to match the server configuration
 });
 

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
});