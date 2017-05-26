System.register(['@angular/core', './feedback'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, feedback_1;
    var articleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feedback_1_1) {
                feedback_1 = feedback_1_1;
            }],
        execute: function() {
            articleComponent = (function () {
                function articleComponent() {
                    this.title = 'default';
                    this.likes = 0;
                    this.wordCount = 0;
                    this.title = 'Cookbook';
                }
                articleComponent.prototype.updateWordCount = function (e) {
                    console.log(e);
                    this.wordCount = e;
                };
                articleComponent.prototype.changeLikesEnabled = function (e) {
                    this.feedbackComp.setLikeEnable(e.target.checked);
                };
                articleComponent.prototype.incrementLikes = function () {
                    this.likes++;
                };
                __decorate([
                    core_1.ViewChild(feedback_1.FeedbackComponent), 
                    __metadata('design:type', feedback_1.FeedbackComponent)
                ], articleComponent.prototype, "feedbackComp", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], articleComponent.prototype, "author", void 0);
                articleComponent = __decorate([
                    core_1.Component({
                        selector: 'article',
                        template: '<h1>{{title}} </h1><h2>{{author}}</h2><p>word Count:{{wordCount}}</p><text-editor (updateCount)="updateWordCount($event)"></text-editor><br><input #txt (keyup)="0"><h1>{{txt.value}}</h1><article-list></article-list><input type="checkbox" (click)="changeLikesEnabled($event)">Enable/Disable Likes:<feedback [val]="likes"></feedback>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], articleComponent);
                return articleComponent;
            }());
            exports_1("articleComponent", articleComponent);
        }
    }
});
//# sourceMappingURL=app.article.js.map