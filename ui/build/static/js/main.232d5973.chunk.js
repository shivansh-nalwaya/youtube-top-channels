(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,n,t){e.exports=t.p+"static/media/first.d0a3d752.png"},195:function(e,n,t){e.exports=t.p+"static/media/second.d0bbb236.png"},196:function(e,n,t){e.exports=t.p+"static/media/third.010b6cdf.png"},207:function(e,n,t){e.exports=t(447)},447:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(7),l=t.n(c),i=t(19),o=t(29),s=t(25),u=t(23),h=t(24),d=t(41),m=t(130),p=t.n(m),f=t(147),b=t.n(f),E=t(163),v=t.n(E),g=t(164),j=t.n(g),O=t(118),y=t.n(O),w=t(119),k=t.n(w),x=t(82),C=t.n(x),A=t(14),_=t.n(A),S=t(59),I=t.n(S),F=t(167),V=t.n(F),L=t(181),B=t.n(L),D=t(124),M=t.n(D),R=t(182),z=t.n(R),T=t(185),G=t.n(T),J=t(60),N=t(17),U=t(200),P=t(456),K=p.a.Content,W=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).handleSearch=function(e,n){n(),t.setState({searchText:e[0]})},t.handleReset=function(e){e(),t.setState({searchText:""})},t.getColumnSearchProps=function(e){return{filterDropdown:function(n){var a=n.setSelectedKeys,c=n.selectedKeys,l=n.confirm,i=n.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(v.a,{ref:function(e){t.searchInput=e},placeholder:"Search ".concat(e),value:c[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return t.handleSearch(c,l)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(I.a,{type:"primary",onClick:function(){return t.handleSearch(c,l)},icon:"search",size:"small",style:{width:90,marginRight:8}},"Search"),r.a.createElement(I.a,{onClick:function(){return t.handleReset(i)},size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return r.a.createElement(_.a,{type:"search",style:{color:e?"#1890ff":void 0}})},onFilter:function(n,t){return t[e].toString().toLowerCase().includes(n.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout(function(){return t.searchInput.select()})}}},t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=[{title:"Rank",key:"rank",dataIndex:"rank",defaultSortOrder:"ascend",width:"10%",sorter:function(e,n){return e.rank-n.rank},sortDirections:["ascend","descend"]},{title:"Grade",key:"grade",dataIndex:"grade",width:"10%",filters:[{text:"A++",value:"A++"},{text:"A+",value:"A+"},{text:"A",value:"A"},{text:"A-",value:"A-"},{text:"B+",value:"B+"}],onFilter:function(e,n){return n.grade===e}},Object(U.a)({title:"Channel Name",key:"channel_name",dataIndex:"channel_name",width:"35%"},this.getColumnSearchProps("channel_name"),{render:function(e,n){return r.a.createElement(P.a,{to:"/".concat(n._id)},e)}}),{title:"Video Uploads",key:"video_uploads",dataIndex:"video_uploads",width:"15%",sorter:function(e,n){return e.video_uploads-n.video_uploads},sortDirections:["ascend","descend"]},{title:"Subscribers",key:"subscribers",dataIndex:"subscribers",width:"15%",sorter:function(e,n){return e.subscribers-n.subscribers},sortDirections:["ascend","descend"]},{title:"Video Views",key:"video_views",dataIndex:"video_views",sorter:function(e,n){return e.video_views-n.video_views},sortDirections:["ascend","descend"]}];return r.a.createElement(K,null,r.a.createElement(V.a,{columns:e,dataSource:this.props.channel.all.filter(function(e){return e.rank>3}),loading:this.props.channel.isLoading}))}}]),n}(r.a.Component),q=Object(J.a)(W),H=t(194),Y=t.n(H),$=t(195),Q=t.n($),X=t(196),Z=t.n(X),ee=function(e){var n=[Y.a,Q.a,Z.a];return r.a.createElement(y.a,{type:"flex",justify:"space-around"},r.a.createElement(k.a,null," "),r.a.createElement(k.a,null,r.a.createElement(P.a,{to:"/".concat(e.channel._id)},e.channel.channel_name)),r.a.createElement(k.a,null,r.a.createElement("img",{src:n[e.channel.rank-1],alt:"Logo",width:30,height:30})))},ne=function(e){return e.channel?r.a.createElement(B.a,{title:r.a.createElement(ee,e),style:{marginBottom:20}},r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Grade"),r.a.createElement(k.a,{span:12},e.channel.grade)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Video Uploads"),r.a.createElement(k.a,{span:12},e.channel.video_uploads)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Subscribers"),r.a.createElement(k.a,{span:12},e.channel.subscribers)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Video Views"),r.a.createElement(k.a,{span:12},e.channel.video_views))):r.a.createElement(B.a,null)},te=p.a.Content,ae=function(e){function n(e){var t;return Object(i.a)(this,n),t=Object(s.a)(this,Object(u.a)(n).call(this,e)),Object(N.f)(Object(d.a)(t),{topChannels:{},isLoading:!1}),e.channel.topChannels().then(function(e){t.topChannels.first=e.data[0],t.topChannels.second=e.data[1],t.topChannels.third=e.data[2]}),t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(te,{style:{padding:20}},r.a.createElement(M.a,{spinning:this.isLoading},r.a.createElement(y.a,{gutter:16},r.a.createElement(k.a,{span:8},r.a.createElement(ne,{channel:this.topChannels.second})),r.a.createElement(k.a,{span:8},r.a.createElement(ne,{channel:this.topChannels.first})),r.a.createElement(k.a,{span:8},r.a.createElement(ne,{channel:this.topChannels.third})))),r.a.createElement(q,{channel:this.props.channel}))}}]),n}(a.Component),re=Object(J.a)(ae),ce=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this,"api/"))).getAll=function(){return fetch("".concat(e.baseApi,"/").concat(e.api)).then(function(e){return e.json()}).then(function(n){e.all=n.data.map(function(e){return e.key=e._id,e}),e.isLoading=!1})},e.topChannels=function(){return fetch("".concat(e.baseApi,"/").concat(e.api,"top_channels")).then(function(e){return e.json()})},Object(N.f)(Object(d.a)(e),{all:[],isLoading:!0}),e}return Object(h.a)(n,e),n}(function e(n){var t=this;Object(i.a)(this,e),this.find=function(e){return fetch("".concat(t.baseApi,"/").concat(t.api,"/").concat(e)).then(function(e){return e.json()})},this.create=function(e){return fetch("".concat(t.baseApi,"/").concat(t.api),{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},this.delete=function(e){return fetch("".concat(t.baseApi,"/").concat(t.api,"/").concat(e),{method:"delete"}).then(function(e){return e.json()})},this.update=function(e,n){return fetch("".concat(t.baseApi,"/").concat(t.api,"/").concat(e),{method:"put",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()})},this.baseApi="http://localhost:3001",this.api=n}),le=function(e){return r.a.createElement(y.a,{type:"flex",justify:"space-around"},r.a.createElement(k.a,null," "),r.a.createElement(k.a,null,e.channel.channel_name),r.a.createElement(k.a,null))},ie=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).channelModel=new ce,Object(N.f)(Object(d.a)(t),{channel:{},isLoading:!0}),t.channelModel.find(e.match.params.channel_id).then(function(e){t.channel=e.result,t.isLoading=!1}),t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,{spinning:this.isLoading},r.a.createElement(B.a,{title:r.a.createElement(le,{channel:this.channel}),style:{marginBottom:20}},r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Rank"),r.a.createElement(k.a,{span:12},this.channel.rank)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Grade"),r.a.createElement(k.a,{span:12},this.channel.grade)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Video Uploads"),r.a.createElement(k.a,{span:12},this.channel.video_uploads)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Subscribers"),r.a.createElement(k.a,{span:12},this.channel.subscribers)),r.a.createElement(y.a,null,r.a.createElement(k.a,{span:12},"Video Views"),r.a.createElement(k.a,{span:12},this.channel.video_views))))}}]),n}(r.a.Component),oe=Object(J.a)(ie),se=t(457),ue=t(458),he=C.a.Option,de=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).rules=[{required:!0,message:"cannot be blank"}],t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,n){e||t.props.channel.create(n).then(function(){t.props.closeModal(),G.a.success("Added channel"),t.props.channel.getAll(),t.props.form.resetFields()}).catch(function(e){G.a.error(e)})})},t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(z.a,{title:"Add Channel",visible:this.props.visible,onOk:this.handleSubmit,onCancel:this.props.closeModal},r.a.createElement(b.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:14}},{onSubmit:this.handleSubmit}),r.a.createElement(b.a.Item,{label:"Channel Name",hasFeedback:!0},e("channel_name",{rules:this.rules})(r.a.createElement(v.a,null))),r.a.createElement(b.a.Item,{label:"Rank",hasFeedback:!0},e("rank",{rules:this.rules})(r.a.createElement(j.a,{style:{width:"100%"},min:5001}))),r.a.createElement(b.a.Item,{label:"Grade",hasFeedback:!0},e("grade",{rules:this.rules})(r.a.createElement(C.a,null,r.a.createElement(he,{key:"A++"},"A++"),r.a.createElement(he,{key:"A+"},"A+"),r.a.createElement(he,{key:"A"},"A"),r.a.createElement(he,{key:"A-"},"A-"),r.a.createElement(he,{key:"B+"},"B+")))),r.a.createElement(b.a.Item,{label:"Videos Uploads",hasFeedback:!0},e("video_uploads",{rules:this.rules})(r.a.createElement(j.a,{style:{width:"100%"},min:0}))),r.a.createElement(b.a.Item,{label:"Subscribers",hasFeedback:!0},e("subscribers",{rules:this.rules})(r.a.createElement(j.a,{style:{width:"100%"},min:0}))),r.a.createElement(b.a.Item,{label:"Video Views",hasFeedback:!0},e("video_views",{rules:this.rules})(r.a.createElement(j.a,{style:{width:"100%"},min:0})))))}}]),n}(r.a.Component),me=b.a.create({name:"channel_form"})(de),pe=t(45),fe=t(46);function be(){var e=Object(pe.a)(["\n  color: #000;\n  text-decoration: none;\n  font-size: 1.2em;\n"]);return be=function(){return e},e}function Ee(){var e=Object(pe.a)(["\n  font-size: 16px;\n  font-weight: 300;\n  padding: 8px;\n  cursor: pointer;\n  position: relative;\n  margin-left: 25px;\n\n  &:hover "," {\n    width: 100%;\n  }\n"]);return Ee=function(){return e},e}function ve(){var e=Object(pe.a)(["\n  height: 2px;\n  background-color: #000;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  transition: 0.3s ease;\n"]);return ve=function(){return e},e}function ge(){var e=Object(pe.a)(["\n  display: flex;\n"]);return ge=function(){return e},e}function je(){var e=Object(pe.a)(["\n  font-size: 30px;\n  font-weight: 700;\n  color: #000;\n  text-transform: uppercase;\n"]);return je=function(){return e},e}function Oe(){var e=Object(pe.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(pe.a)(["\n  height: 80px;\n  display: flex;\n  background-color: transparent;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  padding: 20px 40px;\n"]);return ye=function(){return e},e}var we=fe.a.div(ye()),ke=fe.a.div(Oe()),xe=fe.a.div(je()),Ce=fe.a.div(ge()),Ae=fe.a.div(ve()),_e=fe.a.div(Ee(),Ae),Se=fe.a.div(be()),Ie=function(e){return r.a.createElement(P.a,{to:"".concat(e.to),style:{textDecoration:"none"}},e.children)},Fe=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.closeModal=function(){t.setState({visible:!1})},t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(we,null,r.a.createElement(ke,null,r.a.createElement(Ie,{to:"/"},r.a.createElement(xe,null,"Youtube")),r.a.createElement(Ce,null,r.a.createElement(_e,null,r.a.createElement(Ie,{to:"/"},r.a.createElement(Se,null,"Home"),r.a.createElement(Ae,null))),r.a.createElement(_e,null,r.a.createElement("a",{onClick:this.showModal},r.a.createElement(Se,null,"Add Channel"),r.a.createElement(Ae,null))))),r.a.createElement(me,{visible:this.state.visible,closeModal:this.closeModal,channel:this.props.channel}))}}]),n}(r.a.Component),Ve=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).channel=new ce,t.channel.getAll(),t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(se.a,null,r.a.createElement("div",null,r.a.createElement(Fe,{channel:this.channel}),r.a.createElement(ue.a,{path:"/",exact:!0,render:function(n){return r.a.createElement(re,Object.assign({},n,{channel:e.channel}))}}),r.a.createElement(ue.a,{path:"/:channel_id",render:function(n){return r.a.createElement(oe,Object.assign({},n,{channel:e.channel}))}})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(444);l.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[207,1,2]]]);
//# sourceMappingURL=main.232d5973.chunk.js.map