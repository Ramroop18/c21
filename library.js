function isTouching(fixedrect,movingrect){
    if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
        movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
        fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
        movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
         return true
    
        }
        else{
            return false
        }
}
function bounceOff(fixedrect,movingrect){
    if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
        movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 ){
            fixedrect.velocityX=fixedrect.velocityX*-1
            movingrect.velocityX=movingrect.velocityX*-1
        }
        if( fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
            movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
            fixedrect.velocityY=fixedrect.velocityY*-1
            movingrect.velocityY=movingrect.velocityY*-1 
            }
}