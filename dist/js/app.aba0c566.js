(function(){"use strict";var e={2366:function(e,n,t){var l=t(9242),c=t(3396),r=t(7139);const a={class:"layout"},i=(0,c._)("div",{class:"header"}," Branch name generator ",-1),g={class:"container"},s={class:"input"},p=(0,c._)("div",{class:"input__title"}," Your name: ",-1),o=(0,c.Uk)(" / "),u=(0,c._)("div",{class:"input__title"}," Put your text here: ",-1),h={class:"result"},v={class:"result__block"},d={class:"result__div-copy"},w=(0,c.uE)('<g id="Text-files"><path id="Text-files2" d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228\n                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999\n                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64\n                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002\n                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228\n                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999\n                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z\n                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699\n                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946\n                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999\n                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path><path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005\n                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997\n                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path><path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986\n                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016\n                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path><path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997\n                S39.16465,29.4603004,38.6031494,29.4603004z"></path><path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997\n                S29.0059509,37.5872993,28.4444485,37.5872993z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>',16),_=[w],f={class:"result__block"},x=(0,c.uE)('<g id="Text-files"><path id="Text-files2" d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228\n                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999\n                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64\n                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002\n                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228\n                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999\n                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z\n                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699\n                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946\n                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999\n                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path><path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005\n                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997\n                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path><path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986\n                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016\n                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path><path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997\n                S39.16465,29.4603004,38.6031494,29.4603004z"></path><path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997\n                S29.0059509,37.5872993,28.4444485,37.5872993z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>',16),y=[x],C={class:"result__block"},A=(0,c.uE)('<g id="Text-files"><path id="Text-files2" d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228\n                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999\n                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64\n                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002\n                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228\n                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999\n                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z\n                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699\n                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946\n                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999\n                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path><path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005\n                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997\n                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path><path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986\n                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016\n                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path><path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997\n                S39.16465,29.4603004,38.6031494,29.4603004z"></path><path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997\n                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997\n                S29.0059509,37.5872993,28.4444485,37.5872993z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>',16),m=[A];function b(e,n,t,w,x,A){return(0,c.wg)(),(0,c.iD)("div",a,[i,(0,c._)("div",g,[(0,c._)("div",s,[(0,c._)("div",null,[p,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>w.inputName=e),type:"text",class:"input__name"},null,512),[[l.nr,w.inputName]]),o]),u,(0,c.wy)((0,c._)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=e=>w.inputText=e),rows:"10",class:"input__text"},null,512),[[l.nr,w.inputText]])]),(0,c._)("div",h,[(0,c._)("div",v,[(0,c._)("div",{class:"result__value",onClick:n[2]||(n[2]=e=>w.copyURL(w.result))},(0,r.zw)(w.result),1),(0,c._)("div",d,[((0,c.wg)(),(0,c.iD)("svg",{class:"result__copy",id:"Layer_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve",onClick:n[3]||(n[3]=e=>w.copyURL(w.result))},_))])]),(0,c._)("div",f,[(0,c._)("div",{class:"result__value",onClick:n[4]||(n[4]=e=>w.copyURL(w.createNewBranch))},(0,r.zw)(w.createNewBranch),1),(0,c._)("div",null,[((0,c.wg)(),(0,c.iD)("svg",{class:"result__copy",id:"Layer_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve",onClick:n[5]||(n[5]=e=>w.copyURL(w.createNewBranch))},y))])]),(0,c._)("div",C,[(0,c._)("div",{class:"result__value",onClick:n[6]||(n[6]=e=>w.copyURL(w.gitPush))},(0,r.zw)(w.gitPush),1),(0,c._)("div",null,[((0,c.wg)(),(0,c.iD)("svg",{class:"result__copy",id:"Layer_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve",onClick:n[7]||(n[7]=e=>w.copyURL(w.gitPush))},m))])])])])])}var k=t(4870),z={name:"App",components:{},setup(){const e=(0,k.iH)("ihryshko"),n=(0,k.iH)('DT-4324 \n\n[FE]: Add Deploy`men\'t "tab", on home dashboard.'),t=(0,c.Fl)((()=>{let e=n.value.replaceAll(" ","-");return e=e.replaceAll("\n","-"),e=e.replaceAll("[","-"),e=e.replaceAll("]","-"),e=e.replaceAll("{","-"),e=e.replaceAll("}","-"),e=e.replaceAll("(","-"),e=e.replaceAll(")","-"),e=e.replaceAll("#","-"),e=e.replaceAll("$","-"),e=e.replaceAll("%","-"),e=e.replaceAll("+","-"),e=e.replaceAll(":","-"),e=e.replaceAll("=","-"),e=e.replaceAll("`",""),e=e.replaceAll('"',"-"),e=e.replaceAll("'",""),e=e.replaceAll("?","-"),e=e.replaceAll("!","-"),e=e.replaceAll(".","-"),e=e.replaceAll(",","-"),e=e.replaceAll("------","-"),e=e.replaceAll("-----","-"),e=e.replaceAll("----","-"),e=e.replaceAll("---","-"),e=e.replaceAll("--","-"),"-"===e[e.length-1]&&(e=e.slice(0,-1)),e})),l=(0,c.Fl)((()=>`${e.value}/${t.value}`)),r=(0,c.Fl)((()=>`git checkout -b ${l.value}`)),a=(0,c.Fl)((()=>`git push --set-upstream origin testBranch ${l.value}`));function i(e){navigator.clipboard.writeText(e).then((()=>{}),(()=>{}))}return{inputName:e,inputText:n,changedText:t,copyURL:i,result:l,createNewBranch:r,gitPush:a}}},M=t(89);const H=(0,M.Z)(z,[["render",b]]);var V=H;(0,l.ri)(V).mount("#app")}},n={};function t(l){var c=n[l];if(void 0!==c)return c.exports;var r=n[l]={exports:{}};return e[l](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,l,c,r){if(!l){var a=1/0;for(p=0;p<e.length;p++){l=e[p][0],c=e[p][1],r=e[p][2];for(var i=!0,g=0;g<l.length;g++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](l[g])}))?l.splice(g--,1):(i=!1,r<a&&(a=r));if(i){e.splice(p--,1);var s=c();void 0!==s&&(n=s)}}return n}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[l,c,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var c,r,a=l[0],i=l[1],g=l[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(c in i)t.o(i,c)&&(t.m[c]=i[c]);if(g)var p=g(t)}for(n&&n(l);s<a.length;s++)r=a[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(p)},l=self["webpackChunktest_datrics"]=self["webpackChunktest_datrics"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(2366)}));l=t.O(l)})();
//# sourceMappingURL=app.aba0c566.js.map