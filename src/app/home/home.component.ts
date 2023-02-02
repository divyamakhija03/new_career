import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.chooseRandom();
  }


  demoQuestions:any = []
  demo = [
    [
      {question:'Laws do nothing to diminish discrimination', answer:false, selected:false},
      {question:'Patients should not ask doctors questions because this develops poor relationships between doctors and patients.', answer:false , selected:false},
      {question:'Aspirin is an legal drug', answer:true, selected:false},
      {question:'Everyone should exercise daily.', answer:true, selected:false},
    ],

  [
      {question:'Sharks are mammals.', answer:false, selected:false},
      {question:'Sea otters have a favorite rock they use to break open food.', answer:true, selected:false},
      {question:'The Atlantic Ocean is the biggest ocean on Earth.', answer:false, selected:false},
      {question:'Mount Everest is the tallest mountain in the world.', answer:true, selected:false},
    ],
    [
      {question:'Human skin regenerates every week.', answer:true, selected:false},
      {question:'The most common blood type is 0- negative.', answer:true, selected:false},
      {question:'Every country in the world has a rectangular flag.', answer:false,selected:false},
      {question:'Pineapples grow on trees.', answer:false, selected:false},
    ]
  ]


  getRandomInt():number{
    return Math.floor(Math.random()*2)
  }

  checkIfValid(question:any):boolean{
    return !question.selected
    
  }
  chooseRandom():void{
    for(let questionlevel of this.demo){

      let random1 = this.getRandomInt();
      let random2 = this.getRandomInt();
      let random3 = this.getRandomInt();
      console.log(random1,random2, random3)

      if(this.checkIfValid(questionlevel[random1])){

        this.demoQuestions.push(questionlevel[random1])
        questionlevel[random1].selected = true
      }
      
      if(this.checkIfValid(questionlevel[random2])){
        this.demoQuestions.push(questionlevel[random2])
        questionlevel[random2].selected = true;
      }

      if(this.checkIfValid(questionlevel[random3])){
        this.demoQuestions.push(questionlevel[random3])
        questionlevel[random3].selected = true;
      }

    }


    console.log(this.demoQuestions)
   }


}
