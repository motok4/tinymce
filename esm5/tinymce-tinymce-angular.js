import { __extends } from 'tslib';
import { Output, EventEmitter, Component, Input, ElementRef, forwardRef, NgZone, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var Events = /** @class */ (function () {
    function Events() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
    return Events;
}());
Events.propDecorators = {
    "onBeforePaste": [{ type: Output },],
    "onBlur": [{ type: Output },],
    "onClick": [{ type: Output },],
    "onContextMenu": [{ type: Output },],
    "onCopy": [{ type: Output },],
    "onCut": [{ type: Output },],
    "onDblclick": [{ type: Output },],
    "onDrag": [{ type: Output },],
    "onDragDrop": [{ type: Output },],
    "onDragEnd": [{ type: Output },],
    "onDragGesture": [{ type: Output },],
    "onDragOver": [{ type: Output },],
    "onDrop": [{ type: Output },],
    "onFocus": [{ type: Output },],
    "onFocusIn": [{ type: Output },],
    "onFocusOut": [{ type: Output },],
    "onKeyDown": [{ type: Output },],
    "onKeyPress": [{ type: Output },],
    "onKeyUp": [{ type: Output },],
    "onMouseDown": [{ type: Output },],
    "onMouseEnter": [{ type: Output },],
    "onMouseLeave": [{ type: Output },],
    "onMouseMove": [{ type: Output },],
    "onMouseOut": [{ type: Output },],
    "onMouseOver": [{ type: Output },],
    "onMouseUp": [{ type: Output },],
    "onPaste": [{ type: Output },],
    "onSelectionChange": [{ type: Output },],
    "onActivate": [{ type: Output },],
    "onAddUndo": [{ type: Output },],
    "onBeforeAddUndo": [{ type: Output },],
    "onBeforeExecCommand": [{ type: Output },],
    "onBeforeGetContent": [{ type: Output },],
    "onBeforeRenderUI": [{ type: Output },],
    "onBeforeSetContent": [{ type: Output },],
    "onChange": [{ type: Output },],
    "onClearUndos": [{ type: Output },],
    "onDeactivate": [{ type: Output },],
    "onDirty": [{ type: Output },],
    "onExecCommand": [{ type: Output },],
    "onGetContent": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onInit": [{ type: Output },],
    "onLoadContent": [{ type: Output },],
    "onNodeChange": [{ type: Output },],
    "onPostProcess": [{ type: Output },],
    "onPostRender": [{ type: Output },],
    "onPreInit": [{ type: Output },],
    "onPreProcess": [{ type: Output },],
    "onProgressState": [{ type: Output },],
    "onRedo": [{ type: Output },],
    "onRemove": [{ type: Output },],
    "onReset": [{ type: Output },],
    "onSaveContent": [{ type: Output },],
    "onSetAttrib": [{ type: Output },],
    "onObjectResizeStart": [{ type: Output },],
    "onObjectResized": [{ type: Output },],
    "onObjectSelected": [{ type: Output },],
    "onSetContent": [{ type: Output },],
    "onShow": [{ type: Output },],
    "onSubmit": [{ type: Output },],
    "onUndo": [{ type: Output },],
    "onVisualAid": [{ type: Output },],
};
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var bindHandlers = function (ctx, editor, initEvent) {
    validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
            }
        }
    });
};
var unique = 0;
var uuid = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
var injectScriptTag = function (scriptId, doc, url, callback) {
    var scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};
var getTinymce = function () {
    var w = (window);
    return w && w.tinymce ? w.tinymce : null;
};
var scriptState = create();
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent(elementRef, ngZone) {
        var _this = _super.call(this) || this;
        _this.element = undefined;
        _this.id = '';
        _this.toolbar = null;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function (x) { };
        _this.elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    EditorComponent.prototype.writeValue = function (value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init["inline"];
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            var doc = this.element.ownerDocument;
            var channel = this.cloudChannel || 'stable';
            var apiKey = this.apiKey || '';
            load(scriptState, doc, "http://www.ambar.net.br/guia-sobrevivencia-ouro-preto/tinymce/js/tinymce/tinymce.min.js", this.initialise);
        }
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    };
    EditorComponent.prototype.createElement = function () {
        var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    };
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var finalInit = Object.assign({}, this.init, { selector: "#" + this.id, inline: this.inline, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function (e) {
                    _this.initEditor(e, editor);
                });
                if (_this.init && typeof _this.init["setup"] === 'function') {
                    _this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    EditorComponent.prototype.initEditor = function (initEvent, editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.once('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('setcontent', function (_a) {
            var content = _a.content, format = _a.format;
            return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
        });
        editor.on('change keyup undo redo', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
        bindHandlers(this, editor, initEvent);
    };
    return EditorComponent;
}(Events));
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                styles: [':host { display: block; }'],
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
            },] },
];
EditorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
]; };
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: Input },],
    "apiKey": [{ type: Input },],
    "init": [{ type: Input },],
    "id": [{ type: Input },],
    "initialValue": [{ type: Input },],
    "inline": [{ type: Input },],
    "tagName": [{ type: Input },],
    "plugins": [{ type: Input },],
    "toolbar": [{ type: Input },],
};
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] },
];

export { EditorModule, Events as ɵb, EditorComponent as ɵa };
//# sourceMappingURL=tinymce-tinymce-angular.js.map
