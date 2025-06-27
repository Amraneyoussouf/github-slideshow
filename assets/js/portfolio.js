document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('#testimonials .slide');
  var index = 0;
  function showSlide(i) {
    slides.forEach(function (s, idx) {
      s.classList.toggle('active', idx === i);
    });
  }
  if (slides.length > 0) {
    showSlide(index);
    setInterval(function () {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 5000);
  }

  var countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    var targetDate = new Date(countdownEl.dataset.date);
    function updateCountdown() {
      var diff = targetDate - new Date();
      if (diff < 0) diff = 0;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      countdownEl.textContent = days + 'j ' + hours + 'h ' + minutes + 'm';
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);
  }
  document.querySelectorAll('.reserve').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var total = document.getElementById('reserve-total');
      if (total) {
        total.textContent = parseInt(total.textContent) + 1;
      }
    });
  });
});
