(this.webpackJsonptodolist2=this.webpackJsonptodolist2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i,n=a(0),s=a.n(n),c=a(3),l=a.n(c),r=(a(14),a(6)),o=a(4),d=a(5),m=a(1),u=a(8),h=a(7),v=function(e){return 0!=e.randomPicks.length?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"description"},"We currently have ",s.a.createElement("span",{id:"special"},e.items.length)," idea(s) for what to do today!"),s.a.createElement("div",{id:"listContainer"},s.a.createElement("ul",null,e.items)),s.a.createElement("div",{id:"buttonContainer"},s.a.createElement("button",{onClick:e.pickTwoActivities},"Pick two ideas randomly")),s.a.createElement("div",{id:"ourIdeas"},"Today's activities: ",e.randomPicks[0],", ",e.randomPicks[1])):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"description"},"We currently have ",s.a.createElement("span",{id:"special"},e.items.length)," idea(s) for what to do today!"),s.a.createElement("div",{id:"listContainer"},s.a.createElement("ul",null,e.items)),s.a.createElement("div",{id:"buttonContainer"},s.a.createElement("button",{onClick:e.pickTwoActivities},"Pick two ideas randomly")),s.a.createElement("div",{id:"ourIdeas"},"Today's activities will go here!"))},p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={page1:!0,ideas:[],randomPicks:[],newInput:"",submit:""},i.handleSubmit=i.handleSubmit.bind(Object(m.a)(i)),i.handleActivityChange=i.handleActivityChange.bind(Object(m.a)(i)),i.changeTabs=i.changeTabs.bind(Object(m.a)(i)),i.pickTwoActivities=i.pickTwoActivities.bind(Object(m.a)(i)),i}return Object(d.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),""!=this.state.newInput?this.setState((function(e){return{ideas:[].concat(Object(r.a)(e.ideas),[e.newInput]),newInput:""}})):window.alert("You have to type an activity into the input bar before you add it!")}},{key:"handleActivityChange",value:function(e){this.setState({newInput:e.target.value})}},{key:"changeTabs",value:function(){this.state.page1?this.setState({page1:!1}):this.setState({page1:!0})}},{key:"pickTwoActivities",value:function(){this.state.ideas.length>2?(i=this.state.ideas.slice(0),console.log(i),this.setState({randomPicks:[i.splice(Math.floor(Math.random()*this.state.ideas.length),1)[0],i.splice(Math.floor(Math.random()*(this.state.ideas.length-1)),1)[0]]}),console.log(this.state.randomPicks)):window.alert("You need at least 3 ideas before you can pick 2 randomly!")}},{key:"render",value:function(){var e=this.state.randomPicks.slice(0),t=this.state.ideas.map((function(t,a){return-1!=e.indexOf(t)?s.a.createElement("li",{className:"selectedLi",key:a},t):s.a.createElement("li",{key:a},t)}));return this.state.page1?s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"headerItem"},"Add Activities"),s.a.createElement("span",{className:"headerItem",onClick:this.changeTabs},"Randomly Pick Activities")),s.a.createElement("div",{className:"description"},"Add new activities!"),s.a.createElement("div",{id:"listContainer"},s.a.createElement("ul",null,t)),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{value:this.state.newInput,onChange:this.handleActivityChange}),s.a.createElement("button",{type:"submit"},"Add"))):s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"headerItem",onClick:this.changeTabs},"Add Activities"),s.a.createElement("span",{className:"headerItem"},"Randomly Pick Activities")),s.a.createElement(v,{items:t,randomPicks:this.state.randomPicks,pickTwoActivities:this.pickTwoActivities}))}}]),a}(s.a.Component);l.a.render(s.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.30160e57.chunk.js.map