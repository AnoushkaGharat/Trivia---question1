  class Form{
   constructor(){

     this.title = createElement("h1");

     this.input = createInput("Enter name here...");

     //this.button = createButton("Play");


 }

display(){
    textSize(175);
    textFont("chiller")
    fill("Red");
    text("Treacherous Trivia",windowWidth/2 - 700,windowHeight/2- 250);
    this.input.position(windowWidth/2 - 680,windowHeight/2 + 50)
   // this.title.position();
   //this.button.position(windowWidth/2 - 680,windowHeight/2 + 150);

}




}