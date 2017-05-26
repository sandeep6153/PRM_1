import { Component ,Output,EventEmitter } from '@angular/core';

@Component({
selector:'text-editor',
template:'<textarea (keyup)="wordCount($event)"></textarea>'
})

export class TextEditorComponent{
    @Output() updateCount=new EventEmitter<number>();
    wordCount(e:Event):void{
        this.updateCount.emit((e.target.value.match(/\S+/g)	||	[]).length);
    }
}