import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { easyques } from 'src/app/shared/interfaces/ques.interface';
import { EasyServiceService } from '../easy-service.service';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {
  
  // data: easyques[] = [];
  Maxmarks=0
  abstract_reasoning=0
  Numerical_Reasoning=0
  General_Aptitude=0
  Personality=0
  Logical_Reasoning=0
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;
  timer: any;
  qu: any;
  currenQuestiom=0
  data: any;
  randomQuestion: any;
  randomQuestion2: any;
  name!:number
  isLoading = false;
  data2: any;
  category: any;
  selectedOption:any
  
  

  constructor(private quesService:EasyServiceService ) { }

//   currentQuiz=0;
// correctAnswer=0
// wrongAnswer=0
// answerSelected=false
// result=false
// basic=false
// medium=false
// hard=false
//   randomize!: number;

  ngOnInit(): void {
    this.fetchLogical()
    this.fetchCategory()
    // this.randomize=Math.floor(Math.random())*length
  }

  

  fetchLogical() {
    this.quesService.fetchLogicalques().subscribe((value: any)=>{
      this.data=value
      this.timer=this.data.length*10
      this.data.forEach((q:any)=>{
        q['givenAns']='';
      })
      this.Maxmarks=this.data.length
      console.log(this.data)
      this.startTimer();
    })
  }
  fetchCategory(){
    this.quesService.fetchCategory().subscribe((value2:any)=>{
      this.category=value2
      console.log(this.category)
    })
  }


  // createdform(){
  //   this.quizForm=new FormGroup({
  //     question:new FormControl(),
      
  //   }
  //   )
  // }
  submitQuiz(){
    this.isSubmit=true
    this.evalQuiz()
    
  }
  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 5000 );
  }
  startTimer(){
    let t:any=window.setInterval(()=>{
      if(this.timer<=0){
        this.submitQuiz()
        clearInterval(t)
      }
      else{
        this.timer--;
      }
    },1000)
  }

  getFormattedTime()
  {
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return `${mm} min : ${ss} sec`
  }

    //  select(option:any){
    //   this.selectedOption=option
    //     this.CheckAnswer(this.selectedOption)
    //  }
     
  //    CheckAnswer(this.selectedOption){
  //     this.data.forEach((q:any)=>{
  //       if (){
  //           this.correctAnswers++
  //       }
  //    })
  // }

  evalQuiz(){
      this.data.forEach((q:any) => {
        if (q.givenAns === q.answer && q.Cname==='Logical Reasoning') {
          this.Logical_Reasoning++;
          this.correctAnswers++;
        }
        if (q.givenAns === q.answer && q.Cname==='abstract reasoning') {
          this.abstract_reasoning++;
          this.correctAnswers++;
        }
        if (q.givenAns === q.answer && q.Cname==='Numerical Reasoning') {
          this. Numerical_Reasoning++;
          this.correctAnswers++;
        }
        if (q.givenAns === q.answer && q.Cname==='General Aptitude') {
          this.General_Aptitude++;
          this.correctAnswers++;
        }
           });
    console.log("correct answers:"+this.correctAnswers+"/"+this.data.length)
   console.log("marks got"+this.correctAnswers )
   console.log("attempted:"+this.attempted)    
      const obj=this.fetchResult()
      this.quesService.addResult(obj).subscribe(()=>console.log("done"))

   
  }
  fetchResult():any{
    const obj={
      Logical_Reasoning:this.Logical_Reasoning,
      abstract_reasoning:this.abstract_reasoning,
      Numerical_Reasoning:this.Numerical_Reasoning,
      General_Aptitude:this.General_Aptitude,
      correctAnswers:this.correctAnswers,
      Maxmarks:this.Maxmarks,
      UserID:1
    }
    console.log(obj)
    return obj;
  }
}

