(this["webpackJsonpdynamic-programming-visualizer"]=this["webpackJsonpdynamic-programming-visualizer"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=(n(12),n(13),n(14),n(1)),u=n(2),s=n(4),m=n(3),l=(n(15),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.row,o=e.number,r=void 0===o?0:o;return a.a.createElement("div",{id:"node-".concat(n,"-").concat(t),className:"node"},a.a.createElement("div",{className:"text"},"".concat(r)))}}]),n}(o.Component)),d=(n(16),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).myChangeHandler=function(e){o.setState({money:e.target.value}),console.log(e.target.value)},o.state={grid:[],isWorking:!1,money:12},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=f(this.state.money);this.setState({grid:e})}},{key:"clear",value:function(){var e=this;!0!==this.state.isWorking&&function(){for(var t=e.state.grid,n=e.state.money,o=function(o){for(var a=function(n){setTimeout((function(){var a=document.getElementById("node-".concat(t[o][n].row,"-").concat(t[o][n].col));t[o][n].number=0,a.className="node",e.setState({grid:t})}),50*n+500*o)},r=0;r<n+2;r++)a(r)},a=0;a<5;a++)o(a);e.setState({grid:t})}()}},{key:"makeZero",value:function(e){for(var t=this.state.grid,n=0;n<5;n++)for(var o=0;o<e+2;o++){var a=document.getElementById("node-".concat(t[n][o].row,"-").concat(t[n][o].col));t[n][o].number=0,a.className="node"}this.setState({grid:t})}},{key:"getNumberOfWays",value:function(e){var t=this;!0!==this.state.isWorking&&function(){var n=t.state.money;console.log(n),t.setState({isWorking:!0}),t.makeZero(n);for(var o=t.state.grid,a=function(e){setTimeout((function(){o[e][1].number=1,document.getElementById("node-".concat(o[e][1].row,"-").concat(o[e][1].col)).className="node node-visited",t.setState({grid:o})}),100*e)},r=1;r<5;r++)a(r);o[0][0].number=0,document.getElementById("node-".concat(o[0][0].row,"-").concat(o[0][0].col)).className="out-node",o[1][0].number=0,document.getElementById("node-".concat(o[1][0].row,"-").concat(o[1][0].col)).className="out-node";for(var c=2;c<5;c++)o[c][0].number=e[c-2],document.getElementById("node-".concat(o[c][0].row,"-").concat(o[c][0].col)).className="out-node";for(var i=1;i<n+2;i++)o[0][i].number=i-1,document.getElementById("node-".concat(o[0][i].row,"-").concat(o[0][i].col)).className="out-node";t.setState({grid:o});for(var u=function(a){for(var r=function(r){a>1&&(r-e[a-2]<1?setTimeout((function(){o[a][r].number=o[a-1][r].number,document.getElementById("node-".concat(o[a][r].row,"-").concat(o[a][r].col)).className="node node-visited",t.setState({grid:o})}),100*r+a*n*100):setTimeout((function(){o[a][r].number=o[a-1][r].number+o[a][r-e[a-2]].number,document.getElementById("node-".concat(o[a][r].row,"-").concat(o[a][r].col)).className="node node-visited",t.setState({grid:o})}),100*r+a*n*100))},c=1;c<n+2;c++)r(c);3===a&&setTimeout((function(){t.setState({isWorking:!1})}),a*n*150)},s=1;s<5;s++)u(s);t.setState({grid:o})}()}},{key:"render",value:function(){var e=this,t=this.state.grid;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){return e.clear()}},"Clear All"),a.a.createElement("button",{onClick:function(){return e.getNumberOfWays([1,2,5])}},"Find"),a.a.createElement("div",{className:"grid"},t.map((function(e,t){return a.a.createElement("div",{key:t},e.map((function(e,t){var n=e.row,o=e.col,r=e.number;return a.a.createElement(l,{key:t,col:o,row:n,number:r})})))}))))}}]),n}(o.Component)),f=function(e){for(var t=[],n=0;n<5;n++){for(var o=[],a=0;a<e+2;a++)o.push(v(a,n));t.push(o)}return t},v=function(e,t){return{col:e,row:t,number:0}};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.adcaa7f3.chunk.js.map