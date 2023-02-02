import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes:Quiz[]=[]
currentQuiz=0;
correctAnswer=0
wrongAnswer=0
answerSelected=false
result=false
basic=false
medium=false
hard=false
  randomize!: number;
  
  
    constructor(private quizService:QuizService) { }
  
    ngOnInit(): void {
      this.quizzes=this.quizService.getQuizzes()
    this.randomize=Math.floor(Math.random())*length
      
    }
    onAnswer(option:any){
      this.answerSelected=true
      
      setTimeout(()=>{
        this.currentQuiz++
        this.answerSelected=false
  
      },3000)
  
      if(option){
        this.correctAnswer++
      }
      else{
        this.wrongAnswer++
      }
    }
    
    
    showResult(){
      this.result=true
      if(this.correctAnswer<=3){
        this.basic=true
      }
      if(this.correctAnswer>3 && this.correctAnswer<8){
        this.medium=true
      }
      if(this.correctAnswer>7){
        this.hard=true
      }
     
    }

}
    