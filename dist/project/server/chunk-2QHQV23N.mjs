import './polyfills.server.mjs';
import{$ as Oe,A as f,B as De,C as S,D as be,E as l,F as Me,G as b,H as v,O as Ae,P as Ee,Q as oe,S as Fe,T as we,U as Ie,X as Se,a as ve,b as _e,ba as xe,c as Ce,ca as Ne,d as G,da as Pe,e as D,ea as ke,f as Ve,g as j,h as C,i as F,j as y,k as R,l as h,m as B,n as U,o as te,p as ne,q as m,r as d,s as w,t as g,u as I,v as ie,w as V,x as re,y as a,z as u}from"./chunk-HTND7Z5B.mjs";import{a as p,b as _}from"./chunk-VVCT4QZE.mjs";var Te=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["app-home"]],standalone:!0,features:[v],decls:2,vars:0,template:function(r,o){r&1&&(a(0,"p"),l(1,"home works!"),u())}});let t=e;return t})();var Ge=(()=>{let e=class e{constructor(){this.title="project"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:9,vars:0,consts:[["routerLink","/"],["routerLink","/register"]],template:function(r,o){r&1&&(a(0,"div")(1,"ul")(2,"li")(3,"a",0),l(4,"Home"),u()(),a(5,"li")(6,"a",1),l(7,"Register"),u()()()(),f(8,"router-outlet"))},dependencies:[ke,Oe,Ne],styles:["ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333}li[_ngcontent-%COMP%]{float:left}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#111}"]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(d(ne),d(te))},e.\u0275dir=h({type:e});let t=e;return t})(),bt=(()=>{let e=class e extends qe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=U(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[g]});let t=e;return t})(),ze=new C("");var Mt={provide:ze,useExisting:D(()=>K),multi:!0};function At(){let t=oe()?oe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Et=new C(""),K=(()=>{let e=class e extends qe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!At())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(d(ne),d(te),d(Et,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&S("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[b([Mt]),g]});let t=e;return t})();function Ze(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var J=new C(""),Xe=new C("");function Ft(t){return Ze(t.value)?{required:!0}:null}function wt(t){if(!t)return se;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(Ze(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function se(t){return null}function Ye(t){return t!=null}function Ke(t){return De(t)?ve(t):t}function Je(t){let e={};return t.forEach(i=>{e=i!=null?p(p({},e),i):e}),Object.keys(e).length===0?null:e}function Qe(t,e){return e.map(i=>i(t))}function It(t){return!t.validate}function et(t){return t.map(e=>It(e)?e:i=>e.validate(i))}function St(t){if(!t)return null;let e=t.filter(Ye);return e.length==0?null:function(i){return Je(Qe(i,e))}}function tt(t){return t!=null?St(et(t)):null}function Ot(t){if(!t)return null;let e=t.filter(Ye);return e.length==0?null:function(i){let n=Qe(i,e).map(Ke);return Ce(n).pipe(_e(Je))}}function nt(t){return t!=null?Ot(et(t)):null}function je(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function it(t){return t._rawValidators}function rt(t){return t._rawAsyncValidators}function ae(t){return t?Array.isArray(t)?t:[t]:[]}function W(t,e){return Array.isArray(t)?t.includes(e):t===e}function Re(t,e){let i=ae(e);return ae(t).forEach(r=>{W(i,r)||i.push(r)}),i}function Be(t,e){return ae(e).filter(i=>!W(t,i))}var q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=tt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},A=class extends q{get formDirective(){return null}get path(){return null}},N=class extends q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},xt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Sn=_(p({},xt),{"[class.ng-submitted]":"isSubmitted"}),ot=(()=>{let e=class e extends z{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(N,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[g]});let t=e;return t})(),st=(()=>{let e=class e extends z{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(A,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[g]});let t=e;return t})();var O="VALID",L="INVALID",M="PENDING",x="DISABLED";function de(t){return(Q(t)?t.validators:t)||null}function Nt(t){return Array.isArray(t)?tt(t):t||null}function ce(t,e){return(Q(e)?e.asyncValidators:t)||null}function Pt(t){return Array.isArray(t)?nt(t):t||null}function Q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function at(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new G(1e3,"");if(!n[i])throw new G(1001,"")}function lt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new G(1002,"")})}var E=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===L}get pending(){return this.status==M}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(n=>{n.disable(_(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(n=>{n.enable(_(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let i=Ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(L)?L:O}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Pt(this._rawAsyncValidators)}},Z=class extends E{constructor(e,i,n){super(de(i),ce(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){lt(this,!0,e),Object.keys(e).forEach(n=>{at(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var le=class extends Z{};var he=new C("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function kt(t,e){return[...e.path,t]}function Ue(t,e,i=ee){fe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Gt(t,e),Rt(t,e),jt(t,e),Tt(t,e)}function He(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),Y(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function X(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Tt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function fe(t,e){let i=it(t);e.validator!==null?t.setValidators(je(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=rt(t);e.asyncValidator!==null?t.setAsyncValidators(je(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();X(e._rawValidators,r),X(e._rawAsyncValidators,r)}function Y(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=it(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(i=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=rt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(i=!0,t.setAsyncValidators(o))}}}let n=()=>{};return X(e._rawValidators,n),X(e._rawAsyncValidators,n),i}function Gt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function jt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Rt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Bt(t,e){t==null,fe(t,e)}function Ut(t,e){return Y(t,e)}function Ht(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Lt(t){return Object.getPrototypeOf(t.constructor)===bt}function $t(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Wt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===K?i=o:Lt(o)?n=o:r=o}),r||n||i||null}function qt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Le(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function $e(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var $=class extends E{constructor(e=null,i,n){super(de(i),ce(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(i)&&(i.nonNullable||i.initialValueIsDefault)&&($e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){$e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt=t=>t instanceof $;var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var ct=new C("");var Zt={provide:A,useExisting:D(()=>pe)},pe=(()=>{let e=class e extends A{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Y(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return Ue(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){He(n.control||null,n,!1),qt(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,$t(this.form,this.directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,o=this.form.get(n.path);r!==o&&(He(r||null,n),zt(o)&&(Ue(o,n,this.callSetDisabledState),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);Bt(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&Ut(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){fe(this.form,this),this._oldForm&&Y(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(d(J,10),d(Xe,10),d(he,8))},e.\u0275dir=h({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&S("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{form:[F.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[b([Zt]),g,B]});let t=e;return t})();var Xt={provide:N,useExisting:D(()=>me)},me=(()=>{let e=class e extends N{set isDisabled(n){}constructor(n,r,o,s,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Wt(this,s)}ngOnChanges(n){this._added||this._setUpControl(),Ht(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return kt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(d(A,13),d(J,10),d(Xe,10),d(ze,10),d(ct,8))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""]],inputs:{name:[F.None,"formControlName","name"],isDisabled:[F.None,"disabled","isDisabled"],model:[F.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[b([Xt]),g,B]});let t=e;return t})();var ht=(()=>{let e=class e{constructor(){this._validator=se}ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):se,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,features:[B]});let t=e;return t})();var Yt={provide:J,useExisting:D(()=>ge),multi:!0};var ge=(()=>{let e=class e extends ht{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Ae,this.createValidator=n=>Ft}enabled(n){return n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=U(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&ie("required",o._enabled?"":null)},inputs:{required:"required"},features:[b([Yt]),g]});let t=e;return t})();var Kt={provide:J,useExisting:D(()=>ye),multi:!0},ye=(()=>{let e=class e extends ht{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=n=>n,this.createValidator=n=>wt(n)}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=U(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(r,o){r&2&&ie("pattern",o._enabled?o.pattern:null)},inputs:{pattern:"pattern"},features:[b([Kt]),g]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=j({});let t=e;return t})(),ue=class extends E{constructor(e,i,n){super(de(i),ce(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,n={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,i={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){lt(this,!1,e),e.forEach((n,r)=>{at(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,n)=>n._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,n)=>{e(i,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function We(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var pt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let n=new e;return n.useNonNullable=!0,n}group(n,r=null){let o=this._reduceControls(n),s={};return We(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new Z(o,s)}record(n,r=null){let o=this._reduceControls(n);return new le(o,r)}control(n,r,o){let s={};return this.useNonNullable?(We(r)?s=r:(s.validators=r,s.asyncValidators=o),new $(n,_(p({},s),{nonNullable:!0}))):new $(n,r,o)}array(n,r,o){let s=n.map(c=>this._createControl(c));return new ue(s,r,o)}_reduceControls(n){let r={};return Object.keys(n).forEach(o=>{r[o]=this._createControl(n[o])}),r}_createControl(n){if(n instanceof $)return n;if(n instanceof E)return n;if(Array.isArray(n)){let r=n[0],o=n.length>1?n[1]:null,s=n.length>2?n[2]:null;return this.control(r,o,s)}else return this.control(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var mt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:he,useValue:n.callSetDisabledState??ee}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=j({imports:[ft]});let t=e;return t})(),gt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ct,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:he,useValue:n.callSetDisabledState??ee}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=j({imports:[ft]});let t=e;return t})();function Qt(t,e){t&1&&(a(0,"span",13),l(1,"Please Enter Name!!"),u())}function en(t,e){t&1&&(a(0,"span",13),l(1,"Please Enter valid Phone no!!"),u())}function tn(t,e){t&1&&(a(0,"span",13),l(1,"Please Enter valid Email!!"),u())}function nn(t,e){t&1&&(a(0,"span",13),l(1,"Please Enter valid Password!!"),u())}var yt=(()=>{let e=class e{constructor(n,r){this.fb=n,this.router=r}ngOnInit(){this.myform=this.fb.group({uname:[""],phn:[""],email:[""],psw:[""]})}onSubmit(){console.log(this.myform.value.uname),console.log(this.myform.value.phn),console.log(this.myform.value.email),console.log(this.myform.value.psw),this.myform.valid?(alert("you are registered!!"),this.router.navigate(["/regsucess"],{state:{data:this.myform.value}})):(alert("something went wrong!!"),this.myform.reset())}};e.\u0275fac=function(r){return new(r||e)(d(pt),d(xe))},e.\u0275cmp=y({type:e,selectors:[["app-registration"]],standalone:!0,features:[v],decls:39,vars:6,consts:[[3,"formGroup"],["f","ngForm"],[1,"container"],["for","uname"],["type","text","placeholder","Enter Username","name","uname","id","uname","formControlName","uname","pattern","^[a-zA-Z]+(\\s[a-zA-Z]+){1,2}$","required",""],["style","color: red;",4,"ngIf"],["type","text","placeholder","Enter Phone No","name","phn","id","phn","formControlName","phn","pattern","[6-9]{1}[0-9]{9}","required",""],["for","email"],["type","text","placeholder","Enter Email","name","email","id","email","formControlName","email","required",""],["for","psw"],["type","password","placeholder","Enter Password","name","psw","id","psw","formControlName","psw","required",""],["href","#"],["type","submit",1,"registerbtn",3,"disabled","click"],[2,"color","red"]],template:function(r,o){if(r&1&&(a(0,"p"),l(1,"registration works!"),u(),a(2,"form",0,1)(4,"div",2)(5,"h1"),l(6,"Register"),u(),a(7,"p"),l(8,"Please fill in this form to create an account."),u(),f(9,"hr"),a(10,"label",3),l(11,"Username"),u(),f(12,"input",4),I(13,Qt,2,0,"span",5),f(14,"br"),a(15,"label"),l(16,"Phone No"),u(),f(17,"input",6),I(18,en,2,0,"span",5),f(19,"br"),a(20,"label",7)(21,"b"),l(22,"Email"),u()(),f(23,"input",8),I(24,tn,2,0,"span",5),f(25,"br"),a(26,"label",9)(27,"b"),l(28,"Password"),u()(),f(29,"input",10),I(30,nn,2,0,"span",5),f(31,"br")(32,"hr"),a(33,"p"),l(34,"By creating an account you agree to our "),a(35,"a",11),l(36,"Terms & Privacy"),u()(),a(37,"button",12),S("click",function(){return o.onSubmit()}),l(38,"Register"),u()()()),r&2){let s=be(3),c,P,k,T;m(2),V("formGroup",o.myform),m(11),V("ngIf",((c=o.myform.get("uname"))==null?null:c.invalid)&&((c=o.myform.get("uname"))==null?null:c.touched)),m(5),V("ngIf",((P=o.myform.get("phn"))==null?null:P.invalid)&&((P=o.myform.get("phn"))==null?null:P.touched)),m(6),V("ngIf",((k=o.myform.get("email"))==null?null:k.invalid)&&((k=o.myform.get("email"))==null?null:k.touched)),m(6),V("ngIf",((T=o.myform.get("psw"))==null?null:T.invalid)&&((T=o.myform.get("psw"))==null?null:T.touched)),m(7),V("disabled",!s.valid)}},dependencies:[mt,dt,K,ot,st,ge,ye,we,Fe,gt,pe,me],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{padding:16px}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:15px;margin:5px 0 22px;display:inline-block;border:none;background:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus{background-color:#ddd;outline:none}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}.registerbtn[_ngcontent-%COMP%]{background-color:#04aa6d;color:#fff;padding:16px 20px;margin:8px 0;border:none;cursor:pointer;width:100%;opacity:.9}.registerbtn[_ngcontent-%COMP%]:hover{opacity:1}a[_ngcontent-%COMP%]{color:#1e90ff}.signin[_ngcontent-%COMP%]{background-color:#f1f1f1;text-align:center}"]});let t=e;return t})();var vt=(()=>{let e=class e{ngOnInit(){this.data=history.state.data}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["app-regsucess"]],standalone:!0,features:[v],decls:4,vars:1,template:function(r,o){r&1&&(a(0,"p"),l(1,"regsucess works!"),u(),a(2,"h2"),l(3),u()),r&2&&(m(3),Me("Welcome ",o.data.uname,""))}});let t=e;return t})();var _t=[{path:"",component:Te},{path:"register",component:yt},{path:"regsucess",component:vt}];var Ct={providers:[Pe(_t)]};var rn={providers:[Se()]},Vt=Ee(Ct,rn);var on=()=>Ie(Ge,Vt),Jn=on;export{Jn as a};
