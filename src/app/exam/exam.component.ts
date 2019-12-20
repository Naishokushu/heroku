import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../dynamicForms/question-base';
import { QuestionService } from '../dynamicForms/question.service';
import * as questionData from './sessionTestData.json';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.sass']
})
export class ExamComponent implements OnInit {
  public questions: QuestionBase<any>[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions(questionData);
    console.log(this.questions);
  }

}
