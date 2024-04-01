window.__require = function t(e, o, n) {
function r(a, i) {
if (!o[a]) {
if (!e[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!e[p]) {
var d = "function" == typeof __require && __require;
if (!i && d) return d(p, !0);
if (c) return c(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var s = o[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return r(e[a][1][t] || t);
}, s, s.exports, t, e, o, n);
}
return o[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
AddMyCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "789fbyKKOBFN4UReuMkZW61", "AddMyCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node1 = null;
e.num = null;
e.cardList = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.cardList = [];
for (var e = 0; e < this.node.children.length; e++) {
this.node.children[e].getComponent("CardText").str = this.node1.getComponent("MyCards1").cards[0];
this.cardList.push(this.node1.getComponent("MyCards1").cards[0]);
this.node1.getComponent("MyCards1").cards.shift();
}
this.node.children[0].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 260;
t.node.children[1].y = t.node.y + 240;
t.node.children[2].y = t.node.y + 240;
t.num = 0;
}, this);
this.node.children[1].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 240;
t.node.children[1].y = t.node.y + 260;
t.node.children[2].y = t.node.y + 240;
t.num = 1;
}, this);
this.node.children[2].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 240;
t.node.children[1].y = t.node.y + 240;
t.node.children[2].y = t.node.y + 260;
t.num = 2;
}, this);
};
c([ p(cc.Node) ], e.prototype, "node1", void 0);
c([ p ], e.prototype, "num", void 0);
c([ p ], e.prototype, "cardList", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
Back: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "46cb1uNsOlJnY1f0YHCEQ4D", "Back");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = (a.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.loadScene("home");
}, this);
};
return c([ i ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
CardText: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c3d94sYDf1Kfq344zTXtHFo", "CardText");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.textNode = null;
e.sprite = null;
e.str = "";
return e;
}
e.prototype.start = function() {
null === this.str ? this.addDate("N5") : this.addDate(this.str);
};
e.prototype.addDate = function(t) {
var e = this;
console.log("======>" + t);
var o, n = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
"A" === t.charAt(0) ? this.label.string = n[0] : "B" === t.charAt(0) ? this.label.string = n[1] : "C" === t.charAt(0) ? this.label.string = n[2] : "D" === t.charAt(0) ? this.label.string = n[3] : "E" === t.charAt(0) ? this.label.string = n[4] : "F" === t.charAt(0) ? this.label.string = n[5] : "G" === t.charAt(0) ? this.label.string = n[6] : "H" === t.charAt(0) ? this.label.string = n[7] : "I" === t.charAt(0) ? this.label.string = n[8] : "J" === t.charAt(0) ? this.label.string = n[9] : "K" === t.charAt(0) ? this.label.string = n[10] : "L" === t.charAt(0) ? this.label.string = n[11] : "M" === t.charAt(0) ? this.label.string = n[12] : this.label.string = "";
o = "1" === t.charAt(1) ? 0 : "2" === t.charAt(1) ? 1 : "3" === t.charAt(1) ? 2 : "4" === t.charAt(1) ? 3 : 4;
cc.loader.loadRes([ "1.png", "2.png", "3.png", "4.png", "5.png" ][o], cc.SpriteFrame, function(t, o) {
t && console.error("Failed to Load sprite frame:", t);
e.sprite.spriteFrame = o;
});
this.textNode.color = 1 == o || 3 == o ? cc.color(215, 67, 33) : cc.color(67, 77, 226);
};
c([ p(cc.Label) ], e.prototype, "label", void 0);
c([ p(cc.Node) ], e.prototype, "textNode", void 0);
c([ p(cc.Sprite) ], e.prototype, "sprite", void 0);
c([ p ], e.prototype, "str", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
CardVenueTS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "647cbAeVvNAHaoZ+H85Eu9/", "CardVenueTS");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.num = 0;
e.cards_ = [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4", "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4", "L1", "L2", "L3", "L4", "M1", "M2", "M3", "M4" ];
e.node1 = null;
e.node2 = null;
e.node3 = null;
e.node4 = null;
e.popup = null;
e.handCard = null;
return e;
}
e.prototype.onLoad = function() {
this.cards_ = this.shuffleArray(this.cards_);
console.log("数组:" + this.cards_);
this.node1.getComponent("MyCards1").cards = this.cards_.slice(0, 26);
this.node2.getComponent("MyCards1").cards = this.cards_.slice(26, 52);
this.node2.getComponent("MyCards1").string = "2";
this.node3.getComponent("MyCards1").cards = [];
this.node4.getComponent("MyCards1").cards = [];
};
e.prototype.start = function() {};
e.prototype.add = function() {
var t = this, e = cc.instantiate(this.card), o = this.handCard.getComponent("AddMyCard");
if (null != o.num) {
e.getComponent("CardText").str = o.cardList[o.num];
e.setParent(this.node);
0 == o.num ? e.x = -90 : 1 == o.num ? e.x = 0 : 2 == o.num && (e.x = 90);
e.y = -225;
var n = cc.moveTo(.5, cc.v2(this.node.children[this.node.children.length - 2].x + 50, this.node.children[this.node.children.length - 2].y));
this.handCard.children[o.num].active = !1;
e.runAction(cc.sequence(n, cc.callFunc(function() {
if (0 == t.node1.getComponent("MyCards1").cards.length && 0 != t.node3.getComponent("MyCards1").cards.length) {
t.node1.getComponent("MyCards1").cards = t.shuffleArray(t.node3.getComponent("MyCards1").cards);
t.node3.getComponent("MyCards1").cards = [];
t.node1.getComponent("MyCards1").updateLabel();
t.node3.getComponent("MyCards1").updateLabel();
} else if (0 == t.node1.getComponent("MyCards1").cards.length && 0 == t.node3.getComponent("MyCards1").cards.length) {
t.popup.getComponent("PopupTS").showPopup("0");
t.num = null;
return;
}
t.handCard.children[o.num].active = !0;
t.handCard.children[t.handCard.getComponent("AddMyCard").num].y = t.handCard.y + 240;
t.handCard.children[t.handCard.getComponent("AddMyCard").num].getComponent("CardText").str = t.node1.getComponent("MyCards1").cards[0];
t.handCard.children[t.handCard.getComponent("AddMyCard").num].getComponent("CardText").addDate(t.node1.getComponent("MyCards1").cards[0]);
t.handCard.getComponent("AddMyCard").cardList[t.handCard.getComponent("AddMyCard").num] = t.node1.getComponent("MyCards1").cards[0];
t.node1.getComponent("MyCards1").cards.shift();
t.node1.getComponent("MyCards1").updateLabel();
t.handCard.getComponent("AddMyCard").num = null;
setTimeout(function() {
console.log("添加1:" + e.getComponent("CardText").label.string);
for (var o = 0; o < t.node.children.length - 1; o++) if (e.getComponent("CardText").label.string === t.node.children[o].getComponent("CardText").label.string) {
for (var n = t.node.children.length - 1; n >= o; n--) {
t.node3.getComponent("MyCards1").cards.push(t.node.children[n].getComponent("CardText").str);
t.node3.getComponent("MyCards1").updateLabel();
t.collectCard("1", t.node.children[n]);
}
setTimeout(function() {
t.num = 0;
}, 800);
return;
}
t.enemyAdd();
}, 300);
})));
} else this.num = 0;
};
e.prototype.enemyAdd = function() {
var t = this;
if (this.node2.getComponent("MyCards1").cards.length <= 3 && this.node4.getComponent("MyCards1").cards.length > 0) {
this.node2.getComponent("MyCards1").cards = this.shuffleArray(this.node2.getComponent("MyCards1").cards.concat(this.node4.getComponent("MyCards1").cards));
this.node4.getComponent("MyCards1").cards = [];
this.node2.getComponent("MyCards1").updateLabel1();
this.node4.getComponent("MyCards1").updateLabel();
}
var e = cc.instantiate(this.card);
e.getComponent("CardText").str = this.node2.getComponent("MyCards1").cards[0];
console.log("牌组2:" + this.node2.getComponent("MyCards1").cards);
this.node2.getComponent("MyCards1").cards.shift();
this.node2.getComponent("MyCards1").updateLabel1();
e.setParent(this.node);
e.x = -90;
e.y = 225;
var o = cc.moveTo(.5, cc.v2(this.node.children[this.node.children.length - 2].x + 50, this.node.children[this.node.children.length - 2].y));
e.runAction(cc.sequence(o, cc.callFunc(function() {
setTimeout(function() {
console.log("添加2:" + e.getComponent("CardText").label.string);
for (var o = 0; o < t.node.children.length - 1; o++) {
console.log("场地2:" + t.node.children[o].getComponent("CardText").label.string);
if (e.getComponent("CardText").label.string === t.node.children[o].getComponent("CardText").label.string) {
for (var n = t.node.children.length - 1; n >= o; n--) {
t.node4.getComponent("MyCards1").cards.push(t.node.children[n].getComponent("CardText").str);
t.node4.getComponent("MyCards1").updateLabel();
t.collectCard("2", t.node.children[n]);
}
setTimeout(function() {
t.enemyAdd();
}, 800);
return;
}
}
t.num = 0;
if (t.node2.getComponent("MyCards1").cards.length <= 3 && 0 == t.node4.getComponent("MyCards1").cards.length) {
t.popup.getComponent("PopupTS").showPopup("1");
t.num = null;
}
}, 300);
})));
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.slice(), n = o.length - 1; n > 0; n--) {
var r = Math.floor(Math.random() * (n + 1));
e = [ o[r], o[n] ], o[n] = e[0], o[r] = e[1];
}
return o;
};
e.prototype.collectCard = function(t, e) {
if ("1" == t) {
var o = cc.moveTo(.5, cc.v2(-310, -240));
e.runAction(cc.sequence(o, cc.callFunc(function() {
e.destroy;
e.removeFromParent();
})));
} else if ("2" == t) {
o = cc.moveTo(.5, cc.v2(400, 240));
e.runAction(cc.sequence(o, cc.callFunc(function() {
e.destroy;
e.removeFromParent();
})));
}
};
e.prototype.update = function() {};
c([ p(cc.Prefab) ], e.prototype, "card", void 0);
c([ p ], e.prototype, "num", void 0);
c([ p ], e.prototype, "cards_", void 0);
c([ p(cc.Node) ], e.prototype, "node1", void 0);
c([ p(cc.Node) ], e.prototype, "node2", void 0);
c([ p(cc.Node) ], e.prototype, "node3", void 0);
c([ p(cc.Node) ], e.prototype, "node4", void 0);
c([ p(cc.Node) ], e.prototype, "popup", void 0);
c([ p(cc.Node) ], e.prototype, "handCard", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
Cards: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c9ebdojdsJCJK06/RH39Csf", "Cards");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = (a.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("cards");
}, this);
};
return c([ i ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
MyCards1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bb17bZNzjVLHYKJ3W1ky3gw", "MyCards1");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cards = null;
e.label = null;
e.string = "1";
return e;
}
e.prototype.start = function() {
console.log("数组1:" + this.cards);
"1" === this.string ? this.updateLabel() : this.updateLabel1();
};
e.prototype.updateLabel = function() {
this.label.string = this.cards.length.toString();
};
e.prototype.updateLabel1 = function() {
this.label.string = (this.cards.length - 3).toString();
};
e.prototype.update = function() {};
c([ p ], e.prototype, "cards", void 0);
c([ p(cc.Label) ], e.prototype, "label", void 0);
c([ p ], e.prototype, "string", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
PopupTS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1ebb6VPya5Ci53R9b4Rf9Bf", "PopupTS");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.popupPrefab = null;
return e;
}
e.prototype.showPopup = function(t) {
var e, o = this, n = cc.instantiate(this.popupPrefab);
n.y = 40;
e = "1" === t ? "win.png" : "lose.png";
cc.loader.loadRes(e, cc.SpriteFrame, function(t, e) {
t && console.error("Failed to Load sprite frame:", t);
n.children[0].getComponent(cc.Sprite).spriteFrame = e;
});
n.parent = this.node;
n.children[1].on(cc.Node.EventType.TOUCH_END, function() {
o.closePopup();
cc.director.loadScene("home");
}, this);
};
e.prototype.closePopup = function() {
this.node.removeAllChildren();
};
c([ p(cc.Prefab) ], e.prototype, "popupPrefab", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
ResetBt: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a689c5uEN9B/4ql6XpfORIs", "ResetBt");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mNode1 = null;
e.mNode3 = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
if (0 != t.mNode3.getComponent("MyCards1").cards.length) {
t.mNode1.getComponent("MyCards1").cards = t.shuffleArray(t.mNode1.getComponent("MyCards1").cards.concat(t.mNode3.getComponent("MyCards1").cards));
t.mNode3.getComponent("MyCards1").cards = [];
t.mNode1.getComponent("MyCards1").updateLabel();
t.mNode3.getComponent("MyCards1").updateLabel();
console.log("牌组:" + t.mNode1.getComponent("MyCards1").cards);
console.log("牌库:" + t.mNode3.getComponent("MyCards1").cards);
}
}, this);
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.slice(), n = o.length - 1; n > 0; n--) {
var r = Math.floor(Math.random() * (n + 1));
e = [ o[r], o[n] ], o[n] = e[0], o[r] = e[1];
}
return o;
};
c([ p(cc.Node) ], e.prototype, "mNode1", void 0);
c([ p(cc.Node) ], e.prototype, "mNode3", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
StartGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "913e889ZldCoonxoeZmY2tE", "StartGame");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = (a.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("main");
}, this);
};
return c([ i ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
addCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "24304h9nPJANohOPWKpx8D6", "addCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.cards = [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4", "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4", "L1", "L2", "L3", "L4", "M1", "M2", "M3", "M4" ];
return e;
}
e.prototype.start = function() {
for (var t = 0; t < this.cards.length; t++) {
var e = cc.instantiate(this.card);
e.getComponent("CardText").str = this.cards[t];
e.setParent(this.node);
if (t < 13) {
e.x = 70 * t - 490;
e.y = 90;
} else if (t < 26) {
e.x = 70 * (t - 13) - 490;
e.y = 0;
} else if (t < 39) {
e.x = 70 * (t - 26) - 490;
e.y = -90;
} else {
e.x = 70 * (t - 39) - 490;
e.y = -180;
}
}
};
c([ p(cc.Prefab) ], e.prototype, "card", void 0);
c([ p ], e.prototype, "cards", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ],
gameOut: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e00ffBxLKpBtJ9c5Qub2dfY", "gameOut");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = (a.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
cc.game.end();
}, this);
};
return c([ i ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
gameplay: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a81b2KW2nJJZITvsAXnEGLL", "gameplay");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = (a.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("introdution");
}, this);
};
return c([ i ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
palyBt: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "acdd2ra9tdE+6Yf97ziPp6o", "palyBt");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (a = (c < 3 ? r(a) : c > 3 ? r(e, o, a) : r(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, p = a.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cardVenue = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
if (0 == t.cardVenue.getComponent("CardVenueTS").num) {
t.cardVenue.getComponent("CardVenueTS").num = 1;
t.cardVenue.getComponent("CardVenueTS").add();
}
}, this);
};
c([ p(cc.Node) ], e.prototype, "cardVenue", void 0);
return c([ i ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {} ]
}, {}, [ "addCard", "Cards", "StartGame", "gameOut", "gameplay", "AddMyCard", "Back", "CardText", "CardVenueTS", "MyCards1", "PopupTS", "ResetBt", "palyBt" ]);