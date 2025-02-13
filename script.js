document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.valentine-card');
  const heartAnimation = document.getElementById('heart-animation');
  const hugBtn = document.getElementById('hugBtn');

  // Card Interaction
  card.addEventListener('click', function() {
    this.classList.toggle('is-open');
  });

  // Heart Animation
  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartAnimation.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }

  // Create hearts periodically
  const heartInterval = setInterval(createHeart, 500);

  // Virtual Hug
  hugBtn.addEventListener('click', createVirtualHug);

  function createVirtualHug() {
    const hugElement = document.createElement('div');
    hugElement.className = 'virtual-hug';
    hugElement.textContent = '¡Abrazo Virtual! (づ｡◕‿‿◕｡)づ';
    document.body.appendChild(hugElement);

    setTimeout(() => {
      hugElement.remove();
    }, 3000);
  }
});