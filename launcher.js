function keyPressed(){
	if(keyCode === 32){
		MatterBody.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}