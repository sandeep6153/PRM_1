import {Component,Input,ViewChild} from '@angular/core';
import { TextEditorComponent } from './app.text-editor';
import { ArticleListComponent } from './app.article-list';
import { FeedbackComponent } from './feedback'

@Component({
    selector:'article',
    template:'<h1>{{title}} </h1><h2>{{author}}</h2><p>word Count:{{wordCount}}</p><text-editor (updateCount)="updateWordCount($event)"></text-editor><br><input #txt (keyup)="0"><h1>{{txt.value}}</h1><article-list></article-list><input type="checkbox" (click)="changeLikesEnabled($event)">Enable/Disable Likes:<feedback [val]="likes"></feedback>'
    
})
export class articleComponent{
    title:string='default';
    txt:string;
    likes:number=0;
   @ViewChild(FeedbackComponent) feedbackComp:FeedbackComponent;
    @Input() author:string;
    wordCount:number=0;
    updateWordCount(e:number):void{
        console.log(e);
        this.wordCount=e;
    }
    changeLikesEnabled(e:Event):void{
        this.feedbackComp.setLikeEnable(e.target.checked);
    }
    constructor(){
    this.title='Cookbook';
  
    }
    incrementLikes():void{
        this.likes++;
    }

}