const gameBoard=document.getElementById('gameBoard');
const context =gameBoard.getContext('2d');
const result=document.getElementById('result')
const width=gameBoard.width;
const height=gameBoard.height;
window.addEventListener('keydown',keys)
const unit=10
let score=0
let xvel=10
let yvel=0;
 let active=false
let snake=[
  {x:unit*3,y:0},
  {x:unit*2,y:0},
  {x:unit,y:0},
  {x:0,y:0}
]
startGame()
function startGame(){
  context.fillStyle='blue'
  context.fillRect(0,0,width,height);
  gameStart();
  createFood();
  displayFood();
  gameOver();
}

function createFood(){
  foodx= Math.floor(Math.random()*width/unit)*unit;
   foody= Math.floor(Math.random()*height/unit)*unit;
  
}

function displayFood(){

 context.fillStyle='white';
  context.fillRect(foodx,foody,unit,unit);
 
}
function clearBoard(){
  context.fillStyle='blue'
  context.fillRect(0,0,width,height);
  
}
function createSnake(){
  
  snake.forEach((snakePart)=>{
    context.fillStyle='yellow';
    context.strokeStyle='black'
    context.fillRect(snakePart.x,snakePart.y,unit,unit)
    context.strokeRect(snakePart.x,snakePart.y,unit,unit)
  })
  }
  function moveSnake(){
  const head={x:snake[0].x+xvel,y:snake[0].y+yvel}
  snake.unshift(head)
  if(snake[0].x==foodx && snake[0].y==foody){
    createFood()
   score +=1;
   result.innerHTML=score
  }
 else
  snake.pop()
  
  }
  function keys(event){
    active=true;
    
    const left=37;
    const up=38;
    const right=39;
    const down=40
    
    switch(true){
      case (event.keyCode==left && xvel!=unit):
      xvel=-unit;
      yvel=0 ;
      break
      case (event.keyCode==right && xvel != -unit):
        xvel=unit;
        yvel=0;
        break
        case(event.keyCode==down && yvel !=-unit):
        xvel=0
        yvel=unit;
      
        break
        case(event.keyCode==up && yvel !=unit):
        xvel=0
        yvel=-unit; 
    break
    }
    
    }
    
  function gameStart(){
    keys()
      if(active){
       setTimeout(()=>{
        
         clearBoard();
         displayFood()
         moveSnake();
         createSnake();
         gameStart()
        },100)
      }
     else{
      alert('hi')
     }
     
      
     }
     function gameOver(){

      switch(true){
        case(snake[0].x<0):
        case(snake[0].x>=width):
        case(snake[0].y<0):
        case(snake[0].y<=height):
        active=false;
        alert('game over')
        break;
      }
     }
