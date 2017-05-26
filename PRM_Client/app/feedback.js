System.register(['@angular/core', './app.article'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, app_article_1;
    var FeedbackComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_article_1_1) {
                app_article_1 = app_article_1_1;
            }],
        execute: function() {
            FeedbackComponent = (function () {
                function FeedbackComponent(articleComp) {
                    this.likeEnabled = false;
                    this.article = articleComp;
                }
                FeedbackComponent.prototype.incrementLikes = function () {
                    this.article.incrementLikes();
                };
                FeedbackComponent.prototype.setLikeEnable = function (newEnableStatus) {
                    this.likeEnabled = newEnableStatus;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FeedbackComponent.prototype, "val", void 0);
                FeedbackComponent = __decorate([
                    core_1.Component({
                        selector: 'feedback',
                        template: '<h1>Number of likes:{{val}}</h1><button (click)="incrementLikes()" [disabled]="!likeEnabled">Like Article</button>'
                    }),
                    __param(0, core_1.Inject(core_1.forwardRef(function () { return app_article_1.articleComponent; }))), 
                    __metadata('design:paramtypes', [app_article_1.articleComponent])
                ], FeedbackComponent);
                return FeedbackComponent;
            }());
            exports_1("FeedbackComponent", FeedbackComponent);
        }
    }
});
//# sourceMappingURL=feedback.js.map