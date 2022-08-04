/* eslint-disable no-use-before-define */
const imageSlider = (() => {
  const images = [
    'friends1.jpeg',
    'friends2.jpeg',
    'friends3.jpeg',
    'friends4.jpeg',
    'friends5.JPG',
    'friends6.JPG',
    'friends7.JPG',
    'golf1.JPG',
    'golf2.jpg',
  ];

  let currentIndex = 0;
  const imagesContainer = document.createElement('div');

  const displaySlider = () => {
    startInterval();
    imagesContainer.classList.add('images-container');

    for (let i = 0; i < images.length; i += 1) {
      const imageContainer = document.createElement('img');
      imageContainer.classList.add('image');
      imagesContainer.appendChild(imageContainer);
      imageContainer.src = `./images/${images[i]}`;
    }

    document.getElementById('slider-frame').appendChild(imagesContainer);

    generateButtons();
    updateButtons();
  };

  const changeMainImage = (e) => {
    while (imagesContainer.firstChild) {
      imagesContainer.firstChild.remove();
    }

    currentIndex = parseInt(e.target.id, 10);
    console.log(`Clicked on index ${currentIndex}`);

    let count = 0;
    let i = e.target.id;
    i = parseInt(i, 10);
    while (count < images.length) {
      const imageContainer = document.createElement('img');
      imageContainer.classList.add('image');
      imagesContainer.appendChild(imageContainer);
      imageContainer.src = `./images/${images[i]}`;
      count += 1;
      i += 1;
      if (i === images.length) {
        i = 0;
      }
    }
    // currentIndex += 1;
    updateButtons();
  };

  const moveSlidesForward = () => {
    currentIndex += 1;
    if (currentIndex >= images.length) currentIndex = 0;
    const firstImage = imagesContainer.firstChild;
    imagesContainer.firstChild.remove();
    imagesContainer.appendChild(firstImage);
    updateButtons();
  };

  const moveSlidesBackward = () => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex = images.length - 1;
    const lastImage = imagesContainer.lastChild;
    imagesContainer.lastChild.remove();
    imagesContainer.prepend(lastImage);
    updateButtons();
  };

  const generateButtons = () => {
    const buttonContainer = document.createElement('div');

    for (let i = 0; i < images.length; i += 1) {
      const button = document.createElement('button');
      buttonContainer.appendChild(button);
      button.id = i;
      button.addEventListener('click', changeMainImage);
    }

    document.getElementById('slider-frame').appendChild(buttonContainer);
  };

  const updateButtons = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.classList.remove('filled');
    });

    buttons[currentIndex].classList.add('filled');
  };

  const startInterval = () => {
    setInterval(moveSlidesForward, 3000);
  };

  return { displaySlider, moveSlidesBackward, moveSlidesForward };
})();

imageSlider.displaySlider();
