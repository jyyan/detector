!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):"object"==typeof exports?exports.detector=n():e.detector=n()}(this,function(){return function(e){function n(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){e.exports=r(1)},function(e,n,r){(function(e,n){function r(e){return Object.prototype.toString.call(e)}function o(e){return"[object Object]"===r(e)}function i(e){return"[object Function]"===r(e)}function t(e,n){for(var r=0,o=e.length;o>r&&n.call(e,e[r],r)!==!1;r++);}function a(e){if(!p.test(e))return null;var n,r,o,i,t;if(-1!==e.indexOf("trident/")&&(n=/\btrident\/([0-9.]+)/.exec(e),n&&n.length>=2)){o=n[1];var a=n[1].split(".");a[0]=parseInt(a[0],10)+4,t=a.join(".")}n=p.exec(e),i=n[1];var b=n[1].split(".");return"undefined"==typeof t&&(t=i),b[0]=parseInt(b[0],10)-4,r=b.join("."),"undefined"==typeof o&&(o=r),{browserVersion:t,browserMode:i,engineVersion:o,engineMode:r,compatible:o!==r}}function b(e){if(c)try{var n=c.twGetRunPath.toLowerCase(),r=c.twGetSecurityID(l),o=c.twGetVersion(r);if(n&&-1===n.indexOf(e))return!1;if(o)return{version:o}}catch(i){}}function u(e,n,t){var a=i(n)?n.call(null,t):n;if(!a)return null;var b={name:e,version:f,codename:""},u=r(a);if(a===!0)return b;if("[object String]"===u){if(-1!==t.indexOf(a))return b}else{if(o(a))return a.hasOwnProperty("version")&&(b.version=a.version),b;if(a.exec){var s=a.exec(t);if(s)return s.length>=2&&s[1]?b.version=s[1].replace(/_/g,"."):b.version=f,b}}}function s(e,n,r,o){var i=O;t(n,function(n){var r=u(n[0],n[1],e);return r?(i=r,!1):void 0}),r.call(o,i.name,i.version)}var c,d={},f="-1",l=this,p=/\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/,w=/\bbb10\b.+?\bversion\/([\d.]+)/,m=/\bblackberry\b.+\bversion\/([\d.]+)/,v=/\bblackberry\d+\/([\d.]+)/,h=[["nokia",function(e){return-1!==e.indexOf("nokia ")?/\bnokia ([0-9]+)?/:/\bnokia([a-z0-9]+)?/}],["samsung",function(e){return-1!==e.indexOf("samsung")?/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/:/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/}],["wp",function(e){return-1!==e.indexOf("windows phone ")||-1!==e.indexOf("xblwp")||-1!==e.indexOf("zunewp")||-1!==e.indexOf("windows ce")}],["pc","windows"],["ipad","ipad"],["ipod","ipod"],["iphone",/\biphone\b|\biph(\d)/],["mac","macintosh"],["mi",/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],["hongmi",/\bhm[ \-]?([a-z0-9]+)/],["aliyun",/\baliyunos\b(?:[\-](\d+))?/],["meizu",function(e){return e.indexOf("meizu")>=0?/\bmeizu[\/ ]([a-z0-9]+)\b/:/\bm([0-9cx]{1,4})\b/}],["nexus",/\bnexus ([0-9s.]+)/],["huawei",function(e){var n=/\bmediapad (.+?)(?= build\/huaweimediapad\b)/;return-1!==e.indexOf("huawei-huawei")?/\bhuawei\-huawei\-([a-z0-9\-]+)/:n.test(e)?n:/\bhuawei[ _\-]?([a-z0-9]+)/}],["lenovo",function(e){return-1!==e.indexOf("lenovo-lenovo")?/\blenovo\-lenovo[ \-]([a-z0-9]+)/:/\blenovo[ \-]?([a-z0-9]+)/}],["zte",function(e){return/\bzte\-[tu]/.test(e)?/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/:/\bzte[ _\-]?([a-su-z0-9\+]+)/}],["vivo",/\bvivo(?: ([a-z0-9]+))?/],["htc",function(e){return/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e)?/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/:/\bhtc[ _\-]?([a-z0-9 ]+)/}],["oppo",/\boppo[_]([a-z0-9]+)/],["konka",/\bkonka[_\-]([a-z0-9]+)/],["sonyericsson",/\bmt([a-z0-9]+)/],["coolpad",/\bcoolpad[_ ]?([a-z0-9]+)/],["lg",/\blg[\-]([a-z0-9]+)/],["android",/\bandroid\b|\badr\b/],["blackberry",function(e){return e.indexOf("blackberry")>=0?/\bblackberry\s?(\d+)/:"bb10"}]],x=[["wp",function(e){return-1!==e.indexOf("windows phone ")?/\bwindows phone (?:os )?([0-9.]+)/:-1!==e.indexOf("xblwp")?/\bxblwp([0-9.]+)/:-1!==e.indexOf("zunewp")?/\bzunewp([0-9.]+)/:"windows phone"}],["windows",/\bwindows nt ([0-9.]+)/],["macosx",/\bmac os x ([0-9._]+)/],["ios",function(e){return/\bcpu(?: iphone)? os /.test(e)?/\bcpu(?: iphone)? os ([0-9._]+)/:-1!==e.indexOf("iph os ")?/\biph os ([0-9_]+)/:/\bios\b/}],["yunos",/\baliyunos ([0-9.]+)/],["android",function(e){return e.indexOf("android")>=0?/\bandroid[ \/-]?([0-9.x]+)?/:e.indexOf("adr")>=0?e.indexOf("mqqbrowser")>=0?/\badr[ ]\(linux; u; ([0-9.]+)?/:/\badr(?:[ ]([0-9.]+))?/:"android"}],["chromeos",/\bcros i686 ([0-9.]+)/],["linux","linux"],["windowsce",/\bwindows ce(?: ([0-9.]+))?/],["symbian",/\bsymbian(?:os)?\/([0-9.]+)/],["blackberry",function(e){var n=e.match(w)||e.match(m)||e.match(v);return n?{version:n[1]}:"blackberry"}]],g=[["edgehtml",/edge\/([0-9.]+)/],["trident",p],["blink",function(){return"chrome"in l&&"CSS"in l&&/\bapplewebkit[\/]?([0-9.+]+)/}],["webkit",/\bapplewebkit[\/]?([0-9.+]+)/],["gecko",function(e){var n;return(n=e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/))?{version:n[1]+"."+n[2]}:void 0}],["presto",/\bpresto\/([0-9.]+)/],["androidwebkit",/\bandroidwebkit\/([0-9.]+)/],["coolpadwebkit",/\bcoolpadwebkit\/([0-9.]+)/],["u2",/\bu2\/([0-9.]+)/],["u3",/\bu3\/([0-9.]+)/]],y=[["edge",/edge\/([0-9.]+)/],["sogou",function(e){return e.indexOf("sogoumobilebrowser")>=0?/sogoumobilebrowser\/([0-9.]+)/:e.indexOf("sogoumse")>=0?!0:/ se ([0-9.x]+)/}],["theworld",function(){var e=b("theworld");return"undefined"!=typeof e?e:"theworld"}],["360",function(e){var n=b("360se");return"undefined"!=typeof n?n:-1!==e.indexOf("360 aphone browser")?/\b360 aphone browser \(([^\)]+)\)/:/\b360(?:se|ee|chrome|browser)\b/}],["maxthon",function(){try{if(c&&(c.mxVersion||c.max_version))return{version:c.mxVersion||c.max_version}}catch(e){}return/\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/}],["micromessenger",/\bmicromessenger\/([\d.]+)/],["qq",/\bm?qqbrowser\/([0-9.]+)/],["green","greenbrowser"],["tt",/\btencenttraveler ([0-9.]+)/],["liebao",function(e){if(e.indexOf("liebaofast")>=0)return/\bliebaofast\/([0-9.]+)/;if(-1===e.indexOf("lbbrowser"))return!1;var n;try{c&&c.LiebaoGetVersion&&(n=c.LiebaoGetVersion())}catch(r){}return{version:n||f}}],["tao",/\btaobrowser\/([0-9.]+)/],["coolnovo",/\bcoolnovo\/([0-9.]+)/],["saayaa","saayaa"],["baidu",/\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],["ie",p],["mi",/\bmiuibrowser\/([0-9.]+)/],["opera",function(e){var n=/\bopera.+version\/([0-9.ab]+)/,r=/\bopr\/([0-9.]+)/;return n.test(e)?n:r}],["oupeng",/\boupeng\/([0-9.]+)/],["yandex",/yabrowser\/([0-9.]+)/],["ali-ap",function(e){return e.indexOf("aliapp")>0?/\baliapp\(ap\/([0-9.]+)\)/:/\balipayclient\/([0-9.]+)\b/}],["ali-ap-pd",/\baliapp\(ap-pd\/([0-9.]+)\)/],["ali-am",/\baliapp\(am\/([0-9.]+)\)/],["ali-tb",/\baliapp\(tb\/([0-9.]+)\)/],["ali-tb-pd",/\baliapp\(tb-pd\/([0-9.]+)\)/],["ali-tm",/\baliapp\(tm\/([0-9.]+)\)/],["ali-tm-pd",/\baliapp\(tm-pd\/([0-9.]+)\)/],["uc",function(e){return e.indexOf("ucbrowser/")>=0?/\bucbrowser\/([0-9.]+)/:e.indexOf("ubrowser/")>=0?/\bubrowser\/([0-9.]+)/:/\buc\/[0-9]/.test(e)?/\buc\/([0-9.]+)/:e.indexOf("ucweb")>=0?/\bucweb([0-9.]+)?/:/\b(?:ucbrowser|uc)\b/}],["chrome",/ (?:chrome|crios|crmo)\/([0-9.]+)/],["android",function(e){return-1!==e.indexOf("android")?/\bversion\/([0-9.]+(?: beta)?)/:void 0}],["blackberry",function(e){var n=e.match(w)||e.match(m)||e.match(v);return n?{version:n[1]}:"blackberry"}],["safari",/\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],["webview",/\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],["firefox",/\bfirefox\/([0-9.ab]+)/],["nokia",/\bnokiabrowser\/([0-9.]+)/]],O={name:"na",version:f},k=function(e){e=(e||"").toLowerCase();var n={};s(e,h,function(e,r){var o=parseFloat(r);n.device={name:e,version:o,fullVersion:r},n.device[e]=o},n),s(e,x,function(e,r){var o=parseFloat(r);n.os={name:e,version:o,fullVersion:r},n.os[e]=o},n);var r=a(e);return s(e,g,function(e,o){var i=o;r&&(o=r.engineVersion||r.engineMode,i=r.engineMode);var t=parseFloat(o);n.engine={name:e,version:t,fullVersion:o,mode:parseFloat(i),fullMode:i,compatible:r?r.compatible:!1},n.engine[e]=t},n),s(e,y,function(e,o){var i=o;r&&("ie"===e&&(o=r.browserVersion),i=r.browserMode);var t=parseFloat(o);n.browser={name:e,version:t,fullVersion:o,mode:parseFloat(i),fullMode:i,compatible:r?r.compatible:!1},n.browser[e]=t},n),n};if("object"==typeof e&&"[object process]"===e.toString()){var z=n.require("./morerule");[].unshift.apply(h,z.DEVICES||[]),[].unshift.apply(x,z.OS||[]),[].unshift.apply(y,z.BROWSER||[]),[].unshift.apply(g,z.ENGINE||[])}else{var _=navigator.userAgent||"",V=navigator.appVersion||"",j=navigator.vendor||"";c=l.external,d=k(_+" "+V+" "+j)}d.parse=k,n.exports=d}).call(n,r(2),r(3)(e))},function(e,n){function r(){s=!1,a.length?u=a.concat(u):c=-1,u.length&&o()}function o(){if(!s){var e=setTimeout(r);s=!0;for(var n=u.length;n;){for(a=u,u=[];++c<n;)a&&a[c].run();c=-1,n=u.length}a=null,s=!1,clearTimeout(e)}}function i(e,n){this.fun=e,this.array=n}function t(){}var a,b=e.exports={},u=[],s=!1,c=-1;b.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];u.push(new i(e,n)),1!==u.length||s||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},b.title="browser",b.browser=!0,b.env={},b.argv=[],b.version="",b.versions={},b.on=t,b.addListener=t,b.once=t,b.off=t,b.removeListener=t,b.removeAllListeners=t,b.emit=t,b.binding=function(e){throw new Error("process.binding is not supported")},b.cwd=function(){return"/"},b.chdir=function(e){throw new Error("process.chdir is not supported")},b.umask=function(){return 0}},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});