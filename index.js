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

  const displaySlider = () => {
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('images-container');

    for (let i = 0; i < images.length; i += 1) {
      const imageContainer = document.createElement('img');
      imageContainer.classList.add('image');
      imagesContainer.appendChild(imageContainer);
      imageContainer.src = `./images/${images[i]}`;
    }

    document.getElementById('slider-frame').appendChild(imagesContainer);
  };

  return { displaySlider };
})();

imageSlider.displaySlider();
