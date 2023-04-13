function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

var names = ['Erin H.','Harriet T.','Kristan H.','Debbie R.'];
var comeon = ['Absolutely awesome work adding a bedroom to our basement, plus additional jobs around our home. Very dependable and easy to work with. Highly recommend and will use again in the future.','We contracted Paul to paint 4 accent walls in our recently purchased condo. He was quick to respond with a quote and helpful tips for purchasing the paint. After seeing the quality of work and learning he has other construction skills, we look forward to using him again for future work such as replacing doors and baseboards.  Give Paul a try, you won’t be disappointed!','Paul did a great job with the finishing baseboard trim work and paint throughout my home. He also built a custom build in LShaped bench for my kitchen table. His work was flawless and perfectly finished. He was professional and accommodating. I was very comfortable with him doing work in my home and would hire him for any work I need done in the future. He completed the job as promised.','Paul was great to work with and did an excellent job.  We would definitely use Alekna Contracting for any of our painting projects in the future.'];
var acc = 0;

function reviews(){
  var namex = "Erin H.";
  var reviewx = "Absolutely awesome work adding a bedroom to our basement, plus additional jobs around our home. Very dependable and easy to work with. Highly recommend and will use again in the future.";
  var name = document.getElementById("name");
  var review = document.getElementById("text");
  name.innerHTML = namex;
  review.innerHTML = reviewx;
}

function right() {
  acc += 1;
  var name = document.getElementById("name");
  var review = document.getElementById("text");
  if (acc < 4) {
    name.innerHTML = names[acc];
    review.innerHTML = comeon[acc];
  } else {
    name.innerHTML = names[0];
    review.innerHTML = comeon[0];
    acc = 0;
  }
}

function left() {
  var name = document.getElementById("name");
  var review = document.getElementById("text");
  if (acc === 0) {
    name.innerHTML = names[3];
    review.innerHTML = comeon[3];
    acc = 3;
  }
  else {
    acc -= 1;
    name.innerHTML = names[acc];
    review.innerHTML = comeon[acc];
  }
}
