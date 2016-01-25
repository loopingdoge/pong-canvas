import Ball from './ball';
import Bar from './bar';

const Ai = {
	
	var i;

	init(){

		for (i=0; ;i++){
			if (Bar.y > Ball.y){
				while (Bar.y > Ball.y){
					Bar.y--;
				}
			}
			else if (Bar.y < Ball.y){
				while (Bar.y < Ball.y){
					Bar.y++;
				}
			}
		} 

	}
};


export default function setAi() {
  return Object.assign({}, Ai);
}