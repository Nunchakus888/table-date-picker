webpackJsonp([1],{"2jcE":function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l("7+uW");let a=null,n=null,c=null,r=null,o=0,i=1;var d={name:"table-date-picker",props:{rows:Array},data:()=>({}),computed:{columns:()=>["","周一","周二","周三","周四","周五","周六","周日"]},methods:{handleClick(e){const{cell:t}=e||{};t.selected=!t.selected,this.$emit("change",this.getSelectedCell())},getSelectedCell(){return this.rows.map((e,t)=>e.filter(e=>{if(e.selected)return e.week=t,e})).filter(e=>e.length&&e)},async autoSelect(e){e<7?setTimeout(()=>{this.autoSelect(e),e++},1e3):e=0},autoGo(e){o<24?setTimeout(()=>{e[o]&&(e[o].selected=!e[o].selected,o++,this.autoGo(e))},30):i<7?(i++,o=0,this.autoGo(this.rows[i])):(o=0,i=1,setTimeout(()=>{this.autoGo(this.rows[1])},2500))},reset(){o=0,i=1,this.rows.forEach(e=>{e.forEach(e=>{e.selected=!1})})},dragHandle(e,t,l){t.stopPropagation();const{cell:s,columnIndex:o,rowIndex:i}=l||{};switch(e){case"e-dragstart":c=o,r=i;break;case"e-dragover":if(n===s)return;n=s,(a=new Set).add(s),a.forEach(e=>{e.selected=!0});break;case"e-dragend":if(c===o){if(i-r>0)for(let e=r;e<i;e++)this.rows[o][e].selected=!0;else for(let e=r;e>i;e--)this.rows[o][e].selected=!0}this.$emit("change",this.getSelectedCell()),localStorage.setItem("cell",JSON.stringify(this.getSelectedCell())),n=null,a.clear(),c=r=null}}}},u={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-date-picker"},[e._l(e.rows,function(t,s){return l("div",{staticClass:"flex-center flex-a-baseline-i"},[l("div",{staticClass:"week-column flex-col-start unselect"},[l("span",[e._v(e._s(e.columns[s]))])]),l("div",{staticClass:"hour-row flex-v-center-j-start"},e._l(t,function(t,a){return l("span",[0===s?l("span",{staticClass:"cell unselect"},[e._v(e._s(t.value))]):l("span",{staticClass:"cell-border",class:{"cell-selected":t.selected},attrs:{draggable:!0},on:{dragstart:function(l){e.dragHandle("e-dragstart",l,{cell:t,columnIndex:s,rowIndex:a})},dragover:function(l){e.dragHandle("e-dragover",l,{cell:t,columnIndex:s,rowIndex:a})},dragend:function(l){e.dragHandle("e-dragend",l,{cell:t,columnIndex:s,rowIndex:a})},click:function(l){e.handleClick({cell:t,columnIndex:s})}}})])}))])}),l("div",{staticClass:"flex-center btn"},[l("button",{staticClass:"el-icon-delete red",attrs:{type:"text"},on:{click:e.reset}},[e._v("清空设置时段")]),l("button",{attrs:{type:"text"},on:{click:function(t){e.autoGo(e.rows[1])}}},[e._v("let's go")])])],2)},staticRenderFns:[]};var h={name:"App",components:{tableDatePicker:l("VU/8")(d,u,!1,function(e){l("2jcE")},"data-v-3285a666",null).exports},data:()=>({rows:(()=>{const e=new Array(24).fill(0).map((e,t)=>({value:t,selected:!1}));return new Array(8).fill(0).map((t,l)=>[...e].map((e,t)=>({value:t,selected:!1})))})(),"二零一八":[[2,3,4,5,8,9,10,11,15,19,20,21,22],[5,8,11,14,15,19,22],[5,8,11,15,19,22],[2,3,4,5,8,11,15,19,20,21,22],[2,8,11,15,19,22],[2,8,11,15,19,22],[2,3,4,5,8,9,10,11,14,15,16,19,20,21,22]]}),mounted(){this.二零一八.forEach((e,t)=>{e.forEach(e=>{this.rows.forEach((l,s)=>{l.forEach(l=>{s&&s===t+1&&e===l.value&&(l.selected=!0)})})})})},methods:{cellChange(e){console.log("---------------cellChange",e)}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("table-date-picker",{attrs:{rows:this.rows},on:{change:this.cellChange}})],1)},staticRenderFns:[]};var p=l("VU/8")(h,f,!1,function(e){l("dwMx")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:p},template:"<App/>"})},dwMx:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.abc31cb45ec7650e2196.js.map