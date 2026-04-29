document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.project-item');
  const reveal = document.querySelector('.hover-reveal');
  const revealImg = document.querySelector('.reveal-img');
  const projectList = document.querySelector('.project-list');
  
  // 👉 1. 원래 있던 동그란 커서 요소를 가져옵니다.
  const mainCursor = document.getElementById("custom-cursor");

  // 처음에는 사진 숨겨두기
  gsap.set(reveal, { opacity: 0 });

  // 1. 마우스 이동
  window.addEventListener('mousemove', (e) => {
    gsap.to(reveal, {
      x: e.clientX - 200, 
      y: e.clientY - 125, 
      duration: 0.6,
      ease: "power3.out"
    });
  });

  // 2. 아이템 호버 시
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // 👉 2. 프로젝트 영역에 들어오면 원래 커서를 투명하게 만듭니다.
      if (mainCursor) mainCursor.style.opacity = "0";

      const imgPath = item.dataset.img;
      if (imgPath) {
        revealImg.src = imgPath;
        gsap.to(reveal, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          overwrite: true
        });
      }
    });
  });

  // 3. 리스트 영역 전체를 나가면
  projectList.addEventListener('mouseleave', () => {
    // 👉 3. 리스트를 나가면 다시 원래 커서를 보이게 합니다.
    if (mainCursor) mainCursor.style.opacity = "1";

    gsap.to(reveal, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      overwrite: true
    });
  });
});