  const bannerItems = document.querySelectorAll('.banner-text-item');
  let currentItemIndex = 0;

  function showNextItem() {
    bannerItems[currentItemIndex].style.display = 'none';
    currentItemIndex = (currentItemIndex + 1) % bannerItems.length;
    bannerItems[currentItemIndex].style.display = 'block';
  }

  setInterval(showNextItem, 4000); // Change interval as needed (4 seconds)
