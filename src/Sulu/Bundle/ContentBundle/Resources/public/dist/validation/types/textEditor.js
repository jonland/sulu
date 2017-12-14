define(["jquery","type/default","form/util","services/husky/translator","services/husky/util"],function(a,b,c,d,e){"use strict";var f=function(a,b){App.emit("sulu.content.changed"),g(b,a)},g=function(a,b){var c=a.parent().find(".validate-error").children();c.hide(),h(a,b,"unpublished"),h(a,b,"removed")},h=function(a,b,c){if(b&&-1!==b.indexOf('sulu:validation-state="'+c+'"')){var f=a.parent().find("."+c),g=b.match(new RegExp('sulu:validation-state="'+c+'"',"g")),h="content.text_editor.error."+c+(1===g.length?"-single":"-multiple");f.text(e.sprintf(d.translate(h),g.length)),f.show()}},i=function(a,b){App.emit("sulu.preview.update",b,a,!0),f(a,b)},j=function(a,b){App.emit("sulu.preview.update",b,a),g(b,a)};return function(a,d){var e={instanceName:null},f={initializeSub:function(){App.off("husky.ckeditor."+this.options.instanceName+".changed",i),App.on("husky.ckeditor."+this.options.instanceName+".changed",i),App.off("husky.ckeditor."+this.options.instanceName+".focusout",j),App.on("husky.ckeditor."+this.options.instanceName+".focusout",j)},needsValidation:function(){return!0},validate:function(){return CKEDITOR.instances[this.options.instanceName]?"wysiwyg"===CKEDITOR.instances[this.options.instanceName].mode:!0},setValue:function(b){c.setValue(this.$el,this.getViewData(b)),g(a,b)}};return new b(a,e,d,"textEditor",f)}});