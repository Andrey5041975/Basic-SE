function start_game() {
  object.classList.toggle("start");
  console.log("start_works");
  score = 0;
  document.title = "Score: 0";
}

function finish_game() {
    alert(`You lose Score ${score}`);
//   console.log("finish_game works");
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    no_sound.play;
    document.title = `Score: ${score}`;
    if (score < 0) {
      finish_game();
    }
    console.log("miss_works");

  }
}

function hit() {
  score++;
  document.title = `Score: ${score}`;
  
  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.floor(Math.random() * 340);
    object.style.left = `${random_offset}px`;
  //   console.log("score");

    hit_sound.currentTime = 0;
    hit_sound.play();

    if (score % 5 == 0) {
      increase_speed();
      change_object_size();
      const array_of_color = ('red', 'green', 'blue');
      const i = 1; 
     // Math.floor(Math.random() * 3);
     object.style.background = array_of_color[i];
     //array_of_color[i]; 
     // `${array_of_color[i]}`;

    }
    
    function increase_speed() {
      
      if (object_speed >= .5) {
        object_speed -= .1;
        object.style.animationDuration = `${object_speed}s`;
        
      }
      
    }

  
    
}

function change_object_size(){
  const random_size =Math.floor(Math.random() * 60);
  object.style.width = `${random_size}px`;
}

let object_speed = 5.5;
let score = 0;
let object = document.querySelector("#object");
const hit_sound = new Audio('sounds/hit.wav');
const no_sound = new Audio ('sounds/nepopal.wav');
