document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".hero h1");
  const text = "فرداد گیم";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      headline.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 150);
    }
  }

  // پاک کردن متن اولیه و شروع تایپ
  headline.textContent = "";
  typeEffect();
});
