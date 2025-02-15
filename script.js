const naoButton = document.getElementById('nao');

naoButton.addEventListener('mouseover', function() {
  const screenWidth = window.innerWidth - naoButton.clientWidth;
  const screenHeight = window.innerHeight - naoButton.clientHeight;

  const randomX = Math.max(0, Math.floor(Math.random() * screenWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * screenHeight));

  naoButton.style.position = 'absolute';
  naoButton.style.left = randomX + 'px';
  naoButton.style.top = randomY + 'px';
});