function changeCave() {
  let cave = document.getElementById("cavePic");
  if (cave.src.match("cave_01.jpg")) {
    cave.src = "The example/cave_02.jpg";
    cave.alt = "The cave 2 picture";
  } else {
  cave.src = "The example/cave_01.jpg";
  cave.alt = "The cave 1 picture";
  }
} 

function changeMoon() {
    let moon = document.getElementById("moonPic");
    if (moon.src.match("moon_01.jpg")) {
        moon.src = "The example/moon_02.jpg";
        moon.alt = "The moon 2 picture";
    } else {
    moon.src = "The example/moon_01.jpg";
    moon.alt = "The moon 1 picture";
    }
}