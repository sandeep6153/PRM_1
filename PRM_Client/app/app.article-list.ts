import { Component } from '@angular/core'
import { articles } from './app/ArticlesComponent.component'

@Component({
    selector:'article-list',
    template:'Type in textbox and press enter to add items:<input (keyup.enter)="add($event)"><articles *ngFor="let title of titleList;let i=index" [articleTitle]=title><button (click)="remove(i)">&#10006;</button></articles>'
})
export class ArticleListComponent{
    titleList:Array<string>=[];
    add(e:Event):void{
        this.titleList.push(e.target.value);
        e.target.value="";

    }
    remove(index):void{
        this.titleList.splice(index,1)
    }
}