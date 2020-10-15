function light(){
  var image = document.getElementById('off');
  if (image.src.match("lightoff.jpeg")) {
    image.src = "lighton.jpeg";
  } else {
    image.src = "lightoff.jpeg";
  }
}
