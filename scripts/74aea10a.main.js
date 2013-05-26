!function(){Handlebars.registerHelper("normalize",function(a){return a.toLowerCase().replace(/\W+/g,"-")})}.call(this),this.Templates=this.Templates||{},this.Templates.fonts=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return h+='\n        <li>\n            <h2><a href="#',f={hash:{},data:b},h+=v((d=c.normalize,d?d.call(a,a.name,f):u.call(a,"normalize",a.name,f)))+'">',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),h+=v(e)+"</a></h2>\n            <ol>\n                ",e=c.each.call(a,a.fonts,{hash:{},inverse:x.noop,fn:x.program(2,g,b),data:b}),(e||0===e)&&(h+=e),h+="\n            </ol>\n        </li>\n        "}function g(a,b){var d,e,f,g="";return g+='\n                <li>\n                    <a href="#',f={hash:{},data:b},g+=v((d=c.normalize,d?d.call(a,a.name,f):u.call(a,"normalize",a.name,f)))+'" style="font-family: \'',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"'\">",(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"</a>\n                </li>\n                "}function h(a,b){var d,e,f,g="";return g+='\n<section id="',f={hash:{},data:b},g+=v((d=c.normalize,d?d.call(a,a.name,f):u.call(a,"normalize",a.name,f)))+'" class="classification">\n    <header>\n        <h1>',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"</h1>\n    </header>\n    ",e=c.each.call(a,a.fonts,{hash:{},inverse:x.noop,fn:x.program(5,i,b),data:b}),(e||0===e)&&(g+=e),g+="\n</section>\n"}function i(a,b){var d,e,f,g="";return g+='\n    <article id="',f={hash:{},data:b},g+=v((d=c.normalize,d?d.call(a,a.name,f):u.call(a,"normalize",a.name,f)))+'" class="font">\n        <header>\n            <h1>',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"</h1>\n            <dl>\n                ",e=c["if"].call(a,a.designer,{hash:{},inverse:x.noop,fn:x.program(6,j,b),data:b}),(e||0===e)&&(g+=e),g+="\n                ",e=c["if"].call(a,a.foundry,{hash:{},inverse:x.noop,fn:x.program(11,m,b),data:b}),(e||0===e)&&(g+=e),g+="\n                <dt>License</dt>\n                <dd>",e=c["if"].call(a,(d=a.license,null==d||d===!1?d:d.url),{hash:{},inverse:x.program(18,q,b),fn:x.program(16,p,b),data:b}),(e||0===e)&&(g+=e),g+="</dd>\n                <dt>Country of origin</dt>\n                <dd>",(e=c.country)?e=e.call(a,{hash:{},data:b}):(e=a.country,e=typeof e===w?e.apply(a):e),g+=v(e)+"</dd>\n                <dt>Release years</dt>\n                <dd>",(e=c.year)?e=e.call(a,{hash:{},data:b}):(e=a.year,e=typeof e===w?e.apply(a):e),g+=v(e)+"</dd>\n                <dt>Classification</dt>\n                <dd>",(e=c.classification)?e=e.call(a,{hash:{},data:b}):(e=a.classification,e=typeof e===w?e.apply(a):e),g+=v(e)+"</dd>\n                <dt>Styles</dt>\n                <dd>",(e=c.styles)?e=e.call(a,{hash:{},data:b}):(e=a.styles,e=typeof e===w?e.apply(a):e),g+=v(e)+'</dd>\n            </dl>\n        </header>\n        <figure class="character-set" style="font-family: \'',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"'; font-weight: "+v((d=a.webfont,d=null==d||d===!1?d:d.weight,typeof d===w?d.apply(a):d))+'">\n            <p class="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>\n            <p class="lowercase">abcdefghijklmnopqrstuvwxyz</p>\n            <p class="numerals">0123456789</p>\n            <p class="symbols">&frac14; &frac12; &frac34; [&agrave;&oacute;&uuml;&szlig;&ccedil;](.,:;?!$£&amp;-*){&Agrave;&Oacute;&Uuml;&Ccedil;}</p>\n            <figcaption>',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+" "+v((d=a.webfont,d=null==d||d===!1?d:d.weight,typeof d===w?d.apply(a):d))+'</figcaption>\n        </figure>\n        <figure class="anatomy" style="font-family: \'',(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===w?e.apply(a):e),g+=v(e)+"'; font-weight: "+v((d=a.webfont,d=null==d||d===!1?d:d.weight,typeof d===w?d.apply(a):d))+"; color: "+v((d=a.example,d=null==d||d===!1?d:d.color,typeof d===w?d.apply(a):d))+'">\n            <p>'+v((d=a.example,d=null==d||d===!1?d:d.text,typeof d===w?d.apply(a):d))+'</p>\n            <figcaption>\n                <p class="links">\n                    ',e=c.each.call(a,a.urls,{hash:{},inverse:x.noop,fn:x.program(20,r,b),data:b}),(e||0===e)&&(g+=e),g+="\n                </p>\n            </figcaption>\n        </figure>\n    </article>\n    "}function j(a,b){var d,e,f="";return f+="\n                <dt>Designer</dt>\n                <dd>",e=c["if"].call(a,(d=a.designer,null==d||d===!1?d:d.url),{hash:{},inverse:x.program(9,l,b),fn:x.program(7,k,b),data:b}),(e||0===e)&&(f+=e),f+="</dd>\n                "}function k(a){var b,c="";return c+='<a href="'+v((b=a.designer,b=null==b||b===!1?b:b.url,typeof b===w?b.apply(a):b))+'" rel="external">'+v((b=a.designer,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))+"</a>"}function l(a){var b;return v((b=a.designer,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))}function m(a,b){var d,e,f="";return f+="\n                <dt>Foundry</dt>\n                <dd>",e=c["if"].call(a,(d=a.foundry,null==d||d===!1?d:d.url),{hash:{},inverse:x.program(14,o,b),fn:x.program(12,n,b),data:b}),(e||0===e)&&(f+=e),f+="</dd>\n                "}function n(a){var b,c="";return c+='<a href="'+v((b=a.foundry,b=null==b||b===!1?b:b.url,typeof b===w?b.apply(a):b))+'" rel="external">'+v((b=a.foundry,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))+"</a>"}function o(a){var b;return v((b=a.foundry,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))}function p(a){var b,c="";return c+='<a href="'+v((b=a.license,b=null==b||b===!1?b:b.url,typeof b===w?b.apply(a):b))+'" rel="external">'+v((b=a.license,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))+"</a>"}function q(a){var b;return v((b=a.license,b=null==b||b===!1?b:b.name,typeof b===w?b.apply(a):b))}function r(a){var b="";return b+='\n                    <a href="'+v(typeof a===w?a.apply(a):a)+'" title="view at '+v(typeof a===w?a.apply(a):a)+'">view at '+v(typeof a===w?a.apply(a):a)+"</a>\n                    "}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||a.helpers,e=e||{};var s,t="",u=c.helperMissing,v=this.escapeExpression,w="function",x=this;return t+='<nav class="font-nav">\n    <h1>The Fonts</h1>\n    <ul>\n        ',s=c.each.call(b,b.families,{hash:{},inverse:x.noop,fn:x.program(1,f,e),data:e}),(s||0===s)&&(t+=s),t+="\n    </ul>\n</nav>\n\n",s=c.each.call(b,b.families,{hash:{},inverse:x.noop,fn:x.program(4,h,e),data:e}),(s||0===s)&&(t+=s),t+="\n"}),function(){window.fonts={families:[{name:"Humanist serif",fonts:[{name:"Crimson",webfont:{config:{custom:{family:"Crimson",url:"fonts/crimson/stylesheet.css"}},weight:400},urls:["http://www.fontsquirrel.com/fonts/Crimson"],designer:{name:"Sebastian Kosch",url:"http://www.aldusleaf.org/index.html"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Germany / Canada",year:2010,classification:"Humanist serif",styles:6,example:{text:"Swashbuckling",color:"#ed143d"}},{name:"Gentium Basic",webfont:{config:{google:{family:"Gentium+Basic::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Gentium%20Basic","http://www.fontsquirrel.com/fonts/Gentium-Basic"],designer:{name:"Victor Gaultney"},foundry:{name:"SIL International",url:"http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&cat_id=Home"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"USA / UK",year:2010,classification:"Humanist serif",styles:4,example:{text:"Lithography",color:"#336599"}}]},{name:"Transitional serif",fonts:[{name:"Libre Baskerville",webfont:{config:{google:{family:"Libre+Baskerville::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Libre+Baskerville","http://www.fontsquirrel.com/fonts/libre-baskerville"],designer:{name:"Pablo Impallari"},foundry:{name:"Impallari Type",url:"http://www.impallari.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:2012,classification:"Transitional serif",styles:3,example:{text:"Teleobjetivo",color:"#4682b4"}},{name:"Quattrocento",webfont:{config:{google:{family:"Quattrocento::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Quattrocento","http://www.fontsquirrel.com/fonts/quattrocento-roman"],designer:{name:"Pablo Impallari"},foundry:{name:"Impallari Type",url:"http://www.impallari.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:2011,classification:"Transitional serif",styles:2,example:{text:"Envergadura",color:"#97968b"}}]},{name:"Rational serif",fonts:[{name:"Elsie",webfont:{config:{google:{family:"Elsie::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Elsie"],designer:{name:"Alejandro Inler",url:"http://www.behance.net/inler"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:2012,classification:"Rational serif",styles:2,example:{text:"Enamoradizo",color:"#ba55d3"}},{name:"Prata",webfont:{config:{google:{family:"Prata::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Prata"],designer:{name:"Ivan Petrov"},foundry:{name:"Cyreal",url:"http://www.cyreal.org/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Russia",year:2011,classification:"Didone",styles:1,example:{text:"Dvoryanstvo",color:"#702f3b"}}]},{name:"Contemporary serif",fonts:[{name:"Alegreya",webfont:{config:{google:{family:"Alegreya::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Alegreya","http://www.fontsquirrel.com/fonts/alegreya"],designer:{name:"Juan Pablo del Peral"},foundry:{name:"Huerta Tipográfica",url:"http://www.huertatipografica.com.ar/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:2012,classification:"Contemporary serif",styles:12,example:{text:"Digitalización",color:"#1c974a"}},{name:"Merriweather",webfont:{config:{google:{family:"Merriweather::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Merriweather","http://www.fontsquirrel.com/fonts/merriweather"],designer:{name:"Eben Sorkin",url:"http://ebensorkin.wordpress.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"USA",year:2010,classification:"Contemporary serif",styles:8,example:{text:"Meteorologist",color:"#0066cc"}}]},{name:"Inscribed / Engraved",fonts:[{name:"Asul",webfont:{config:{google:{family:"Asul::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Asul"],designer:{name:"Mariela Monsalve"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:2012,classification:"Inscribed",styles:2,example:{text:"Defrenética",color:"#4682b4"}}]},{name:"Grotesque sans",fonts:[{name:"Cuprum",webfont:{config:{google:{family:"Cuprum"}},weight:400},urls:["http://www.google.com/fonts/specimen/Cuprum","http://www.fontsquirrel.com/fonts/CuprumFFU"],designer:{name:"Jovanny Lemonad",url:"http://www.jovanny.ru/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Russia",year:2012,classification:"Grotesque sans",styles:4,example:{text:"Vyzdoravlivajte",color:"#b87333"}},{name:"Roboto",webfont:{config:{google:{family:"Roboto::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Roboto","http://www.fontsquirrel.com/fonts/roboto"],designer:{name:"Christian Robertson"},foundry:{name:"Google"},license:{name:"Apache License, version 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},country:"USA",year:2011,classification:"Grotesque sans",styles:12,example:{text:"Kinematics",color:"#559acf"}}]},{name:"Gothic sans",fonts:[{name:"Noto Sans",webfont:{config:{google:{family:"Noto+Sans::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Noto+Sans"],foundry:{name:"Google"},license:{name:"Apache License, version 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},country:"USA",year:2013,classification:"Gothic sans",styles:4,example:{text:"Encompassing",color:"#00a816"}},{name:"Source Sans Pro",webfont:{config:{google:{family:"Source+Sans+Pro::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Source+Sans+Pro","http://www.fontsquirrel.com/fonts/source-sans-pro"],designer:{name:"Paul D. Hunt"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"USA / UK",year:2012,classification:"Gothic sans",styles:12,example:{text:"Simplifying",color:"#1f7eab"}}]},{name:"Geometric sans",fonts:[{name:"Play",webfont:{config:{google:{family:"Play::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Play","http://www.fontsquirrel.com/fonts/play"],designer:{name:"Jonas Hecksher"},foundry:{name:"Playtype",url:"https://www.playtype.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Denmark",year:2011,classification:"Geometric sans",styles:2,example:{text:"Nødstilfælde",color:"#FFD700"}},{name:"Josefin Sans",webfont:{config:{google:{family:"Josefin+Sans::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Josefin+Sans","http://www.fontsquirrel.com/fonts/Josefin"],designer:{name:"Santiago Orozco"},foundry:{name:"Typemade",url:"http://typemade.mx/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Mexico",year:2010,classification:"Geometric sans",styles:10,example:{text:"Café Negro",color:"#48D1CC"}},{name:"TeX Gyre Adventor",webfont:{config:{custom:{family:"TeX Gyre Adventor",url:"fonts/TeX-Gyre-Adventor/stylesheet.css"}},weight:400},urls:["http://www.fontsquirrel.com/fonts/TeX-Gyre-Adventor"],designer:{name:"Bogusław Jackowski, Janusz M. Nowacki"},foundry:{name:"GUST e-foundry",url:"http://www.gust.org.pl/projects-1/e-foundry"},license:{name:"GUST Font License (GFL)",url:"http://www.gust.org.pl/projects-1/e-foundry/licenses"},country:"Poland",year:2008,classification:"Geometric sans",styles:4,example:{text:"Podróżować",color:"#263957"}}]},{name:"Humanist sans",fonts:[{name:"PT Sans",webfont:{config:{google:{family:"PT+Sans::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/PT+Sans","http://www.fontsquirrel.com/fonts/PT-Sans"],foundry:{name:"Paratype",url:"http://www.paratype.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"USA",year:2009,classification:"Humanist sans",styles:4,example:{text:"Quantophrenia",color:"#990000"}},{name:"Lato",webfont:{config:{google:{family:"Lato::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Lato","http://www.fontsquirrel.com/fonts/lato"],designer:{name:"Łukasz Dziedzic"},foundry:{name:"tyPoland",url:"http://www.typoland.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Poland",year:2010,classification:"Neo-Humanist sans",styles:10,example:{text:"Dzieńdobry",color:"#00CD66"}},{name:"Rosario",webfont:{config:{google:{family:"Rosario::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Rosario","http://www.fontsquirrel.com/fonts/rosario"],designer:{name:"Héctor Gatti"},foundry:{name:"Omnibus-Type",url:"http://www.omnibus-type.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Argentina",year:"2003, 2011, 2013",classification:"Humanist sans, Semiserif",styles:4,example:{text:"Murciélago",color:"#4c8eb9"}}]},{name:"Grotesque slab",fonts:[{name:"Trocchi",webfont:{config:{google:{family:"Trocchi::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Trocchi","http://www.fontsquirrel.com/fonts/trocchi"],designer:{name:"Vernon Adams",url:"https://plus.google.com/107807505287232434305/about"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"UK",year:2012,classification:"Grotesque slab",styles:2,example:{text:"Gastromancy",color:"#9370DB"}},{name:"Arbutus Slab",webfont:{config:{google:{family:"Arbutus+Slab::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Arbutus+Slab"],designer:{name:"Karolina Lach",url:"http://www.thekarolina.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"USA",year:2012,classification:"Grotesque slab",styles:1,example:{text:"Repackaging",color:"#d1641b"}}]},{name:"Geometric slab",fonts:[{name:"Arvo",webfont:{config:{google:{family:"Arvo::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Arvo","http://www.fontsquirrel.com/fonts/arvo"],designer:{name:"Anton Koovit"},foundry:{name:"Fatype",url:"http://www.fatype.com/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Estonia / Netherlands",year:2010,classification:"Geometric slab",styles:4,example:{text:"Jalgratas",color:"#668B8B"}},{name:"Rokkitt",webfont:{config:{google:{family:"Rokkitt::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Rokkitt","http://www.fontsquirrel.com/fonts/rokkitt"],designer:{name:"Vernon Adams",url:"https://plus.google.com/107807505287232434305/about"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"UK",year:2011,classification:"Geometric slab",styles:2,example:{text:"Hypergolic",color:"#EE4000"}}]},{name:"Humanist slab",fonts:[{name:"Coustard",webfont:{config:{google:{family:"Coustard::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Coustard"],designer:{name:"Vernon Adams",url:"https://plus.google.com/107807505287232434305/about"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"UK",year:2013,classification:"Humanist slab",styles:2,example:{text:"Gallophile",color:"#6B8E23"}},{name:"Noticia Text",webfont:{config:{google:{family:"Noticia+Text::latin"}},weight:400},urls:["http://www.google.com/fonts/specimen/Noticia+Text","http://www.fontsquirrel.com/fonts/noticia-text"],designer:{name:"JM Solé",url:"http://jmsole.cl/"},license:{name:"SIL Open Font License 1.1",url:"http://scripts.sil.org/OFL"},country:"Chile",year:2012,classification:"Humanist slab",styles:4,example:{text:"Pichanga",color:"#e82925"}}]}]}}.call(this),function(){var a,b;window.WebFontConfig={google:{families:[]},custom:{families:[],urls:[]},fontactive:function(a){return $("#"+Handlebars.helpers.normalize(a)).addClass("wf-active").find(".anatomy").bigtext({maxfontsize:256,childSelector:"> p"})},active:function(){return window.location.hash?$(window).scrollTop($(""+window.location.hash).position().top):void 0}},a=function(){var a,b,c,d,e,f,g,h,i,j,k;for(a=$(this),e=a.find(".anatomy").css("color"),h=a.find(".anatomy > p").text(),d=function(){var a,b,c;for(c=[],f=a=0,b=h.length;b>=0?b>a:a>b;f=b>=0?++a:--a)c.push(h.charCodeAt(f));return c}(),k=[],i=0,j=d.length;j>i;i++)c=d[i],96>=c?(b=c-64,g=".uppercase"):(b=c-96,g=".lowercase"),k.push(a.find(".character-set "+g+" .char"+b).css("color",e));return k},b=function(b){return $(".container").append(Templates.fonts(b)),$(".character-set .uppercase, .character-set .lowercase").lettering(),$(".font").each(a)},$(function(){var a,c,d,e,f,g,h,i,j,k,l;for(b(fonts),k=fonts.families,g=0,i=k.length;i>g;g++)for(a=k[g],l=a.fonts,h=0,j=l.length;j>h;h++){c=l[h];for(d in c.webfont.config)null!=c.webfont.config[d].family&&WebFontConfig[d].families.push(c.webfont.config[d].family),null!=c.webfont.config[d].url&&WebFontConfig[d].urls.push(c.webfont.config[d].url)}return $("html").addClass("content-ready"),f=document.createElement("script"),f.src=("https:"===document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",f.async="true",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(f,e)})}.call(this);