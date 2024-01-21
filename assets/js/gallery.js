lightbox = document.getElementById("lightbox");
_previouslySelected = document.getElementById("preview-1");

function setSelected(imageId) {
  image = document.getElementById(`preview-${imageId}`);
  lightbox.style.backgroundImage = `url(${image.src})`;
  _previouslySelected.classList.remove("lb-selected");
  image.classList.add("lb-selected");
  _previouslySelected = image;
}

setSelected(1);
