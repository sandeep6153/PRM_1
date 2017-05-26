import { Component,Input,forwardRef,Inject} from '@angular/core';
import { articleComponent } from './app.article'
@Component({
    selector:'feedback',
    template:'<h1>Number of likes:{{val}}</h1><button (click)="incrementLikes()" [disabled]="!likeEnabled">Like Article</button>'
})

export class FeedbackComponent{
    @Input() val:number;
    article:articleComponent;
    likeEnabled:boolean=false;
    constructor(@Inject(forwardRef(()=>articleComponent))articleComp:articleComponent){
            this.article=articleComp;
    }
    incrementLikes():void{
        this.article.incrementLikes();
    }
    setLikeEnable(newEnableStatus:boolean):void{
        this.likeEnabled=newEnableStatus;
    }
}