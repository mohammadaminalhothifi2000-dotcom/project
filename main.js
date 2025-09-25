const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.nextElementSibling; // العنصر التالي بعد الزر
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
});

const forms = document.querySelectorAll('.profile-form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('.name-input').value;
    const email = form.querySelector('.email-input').value;

    if (!name || !email) {
      e.preventDefault(); // منع الإرسال
      alert("الرجاء ملء جميع الحقول!");
    }
  });
});

const picButtons = document.querySelectorAll('.change-pic-btn');

picButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.previousElementSibling; // الصورة قبل الزر
    img.src = "avatar2.png";
  });
});

const scrollText = document.querySelector('.scroll-text');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollText.style.color = "blue";
  } else {
    scrollText.style.color = "black";
  }
});