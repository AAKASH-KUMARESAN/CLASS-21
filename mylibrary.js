function isTouching(ball2,ball1){


    if( ball2.x - ball1.x < ball2.width/2 + ball1.width/2 
      &&  ball1.x - ball2.x < ball2.width/2 + ball1.width/2 
      &&  ball1.y - ball2.y < ball2.height/2 + ball1.height/2 
      && ball2.y - ball1.y < ball2.height/2 + ball1.height/2 
       ){
         return true;
     
  
    }else{
      return false;
  
    }
  
  
  
  }
  