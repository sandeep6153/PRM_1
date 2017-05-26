import {Component,Input} from '@angular/core';
@Component({
    selector:'articles',
    template:'<h1><ng-content></ng-content>{{articleTitle}}</h1>'
})
export class ArticlesComponent{
    @Input() articleTitle:string;
}