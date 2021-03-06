(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=activate;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**//**
 * ProtoStub Interface
 */var MatrixProtoStub=function(){/**
   * Initialise the protocol stub including as input parameters its allocated
   * component runtime url, the runtime BUS postMessage function to be invoked
   * on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.
   * @param  {URL.runtimeProtoStubURL}                            runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   */function MatrixProtoStub(runtimeProtoStubURL,miniBus,configuration){var _this2=this;_classCallCheck(this,MatrixProtoStub);this._runtimeProtoStubURL=runtimeProtoStubURL;this._runtimeURL=configuration.runtimeURL;this._configuration=configuration;this._bus=miniBus;this._identity=null;this._ws=null;this._bus.addListener('*',function(msg){_this2._assumeOpen=true;_this2._sendWSMsg(msg);});this._assumeOpen=false;}/**
   * Connect the protocol stub to the back-end server.
   * @param  {IDToken} identity identity .. this can be either an idtoken,
   *         or a username/password combination to authenticate against the Matrix HS
   */_createClass(MatrixProtoStub,[{key:"connect",value:function connect(identity){var _this3=this;this._identity=identity;this._assumeOpen=true;return new Promise(function(resolve,reject){if(_this3._ws&&_this3._ws.readyState===1){resolve(_this3._ws);return;}// connect if not initialized or in CLOSED state
if(!_this3._ws||_this3._ws.readyState===3){// create socket to the MN
_this3._ws=new WebSocket(_this3._configuration.messagingnode+"?runtimeURL="+encodeURIComponent(_this3._runtimeURL));_this3._ws.onmessage=function(m){_this3._onWSMessage(m);};_this3._ws.onclose=function(){_this3._onWSClose();};_this3._ws.onerror=function(){_this3._onWSError();};_this3._ws.onopen=function(){_this3._waitReady(function(){_this3._onWSOpen();resolve();});};}else if(_this3._ws.readyState===0){// CONNECTING --> wait for CONNECTED
_this3._waitReady(function(){resolve();});}});}},{key:"_waitReady",value:function _waitReady(callback){var _this=this;if(this._ws.readyState===1){callback();}else{setTimeout(function(){_this._waitReady(callback);});}}/**
   * To disconnect the protocol stub.
   */},{key:"disconnect",value:function disconnect(){// send disconnect command to MN to indicate that resources for this runtimeURL can be cleaned up
// the close of the websocket will be initiated from server side
this._sendWSMsg({cmd:"disconnect",data:{runtimeURL:this._runtimeURL}});this._assumeOpen=false;}/**
   * Filter method that should be used for every messages in direction: Protostub -> MessageNode
   * @param  {Message} msg Original message from the MessageBus
   * @return {boolean} true if it's to be deliver in the MessageNode
   */},{key:"_filter",value:function _filter(msg){if(msg.body&&msg.body.via===this._runtimeProtoStubURL)return false;return true;}},{key:"_sendWSMsg",value:function _sendWSMsg(msg){var _this4=this;if(this._filter(msg)){if(this._assumeOpen){this.connect().then(function(){_this4._ws.send(JSON.stringify(msg));});}}}},{key:"_sendStatus",value:function _sendStatus(value,reason){var msg={type:'update',from:this._runtimeProtoStubURL,to:this._runtimeProtoStubURL+'/status',body:{value:value}};if(reason){msg.body.desc=reason;}this._bus.postMessage(msg);}},{key:"_onWSOpen",value:function _onWSOpen(){this._sendStatus("connected");}/**
   * Method that should be used to deliver the message in direction: Protostub -> MessageBus (core)
   * @param  {Message} msg Original message from the MessageNode
   */},{key:"_deliver",value:function _deliver(msg){if(!msg.body)msg.body={};msg.body.via=this._runtimeProtoStubURL;this._bus.postMessage(msg);}// parse msg and forward it locally to miniBus
},{key:"_onWSMessage",value:function _onWSMessage(msg){this._deliver(JSON.parse(msg.data));// this._bus.postMessage(JSON.parse(msg.data));
}},{key:"_onWSClose",value:function _onWSClose(){//console.log("+[MatrixProtoStub] [_onWSClose] websocket closed");
this._sendStatus("disconnected");}},{key:"_onWSError",value:function _onWSError(err){// console.log("+[MatrixProtoStub] [_onWSError] websocket error: " + err);
}}]);return MatrixProtoStub;}();function activate(url,bus,config){return{name:'MatrixProtoStub',instance:new MatrixProtoStub(url,bus,config)};}module.exports=exports['default'];

},{}]},{},[1])(1)
});