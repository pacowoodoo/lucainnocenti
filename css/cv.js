!function(t){"function"==typeof define&&define.amd?define("libs/dyb/obfuscator",["jquery"],t):t(window.$)}(function(t){t.fn.dybObfuscator=function(){this.each(function(){var e=t(this),i=(""+e.data("obf")).split("."),n=e.find("[data-obf-value]"),a=i.length,o=0,r="",d="",s=e.data("obfAction");for(n=n.length>0?n:e,o;a>o;o++)d+=String.fromCharCode(i[o]-1),r+="<span>&#"+(i[o]-1)+";</span>";n.html(r),s&&e.on("click",function(){window.location=s+d})})}}),define("cv/cv",["jquery","libs/dyb/obfuscator"],function(t){var e={directives:{"[data-obf]":function(t){t.dybObfuscator()},"[data-dyb-custom-class]":function(t){t.dybCustomClass()},"[data-auto-mfp]":function(t){t.autoMfp()},"iframe, object, embed":function(t){t.fitToContainer(".widget-element-content")},"[data-dyb-showhide]":function(e){e.each(function(e,i){var n=t(i),a=n.find(".showhide-trigger"),o=n.find(".showhide-content");a.click(function(){o.toggle()}),t(document).click(function(e){var i=t(e.target);i===n||n.has(i).length>0||o.hide()}),o.hide()})},"[data-dyb-popover]":function(i){require(["libs/bootstrap/bootstrap.min"],function(){i.each(function(i,n){n=t(n);var a=n.data("dybPopover")||t(n.data("dybPopoverTarget")).html(),o=t("<div>"+a+"</div>");e.compile(o),n.popover({html:!0,content:o,trigger:"manual"});var r=function(){n.popover("show"),n.off("click")};n.click(r);var d=function(e){n.is(e.target)||0!==n.has(e.target).length||0!==t(".popover").has(e.target).length||(n.popover("hide"),n.click(r))};t(document).off("click",d),t(document).click(d)})})},"[data-dyb-tooltip]":function(e){require(["libs/bootstrap/bootstrap.min"],function(){e.each(function(e,i){i=t(i);var n=i.data("dybTooltip");n||(n=t(i.data("dybTooltipContent")).html()),i.tooltip({title:n})})})},"[data-dyb-audio-player]":function(e){if(e.length>0){var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href","/bundles/dyb/js/build/libs/jplayer/css/flat.audio.css"),document.getElementsByTagName("head")[0].appendChild(i)}e.each(function(e,i){var n=t(i),a=parseInt((new Date).getTime()*Math.random(),10),o="jp_container_"+a;n.after('<div class="jp-audio" id="'+o+'"><div class="jp-controls"><a class="jp-play"></a><a class="jp-pause"></a></div><div class="jp-bar"><div class="jp-seek-bar"><div class="jp-play-bar"></div><div class="jp-duration"></div><div class="jp-title"></div></div></div><div class="jp-no-solution">Media Player Error<br />Update your browser or Flash plugin</div></div>'),require(["libs/jplayer/js/jquery.jplayer.min"],function(){n.jPlayer({ready:function(){var t=n.data("dybAudioPlayer");t&&n.jPlayer("setMedia",{mp3:t})},timeFormat:{padMin:!1},cssSelectorAncestor:"#"+o,swfPath:"/bundles/dyb/js/build/libs/jplayer/js",supplied:"mp3",wmode:"window"})})})}},compile:function(e){var i,n,a;e=e||t(document);for(i in this.directives)this.directives.hasOwnProperty(i)&&(a=this.directives[i],n=e.find(i),a(n))}};return t.fn.fitToContainer=function(e){if(!(this.length<=0)){var i,n=this,a=function(){t.each(n,function(e,i){i=t(i);var n=i.height()/i.width()||0,a=7/16,o=1,r=Math.min(Math.max(n,a),o);i.data("ratio",r).width(0)}),t.each(n,function(i,n){n=t(n);var a=n.data("ratio"),o=n.parents(e),r=o.width(),d=r*a,s=n.attr("src");n.width(r).height(d).attr("width",r).attr("height",d).attr("src","").attr("src",s)})};a(),t(window).resize(function(){i&&window.clearTimeout(i),i=window.setTimeout(function(){return document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement||document.fullscreenElement?!1:void a()},500)})}},t.fn.dybCustomClass=function(){this.each(function(e,i){var n=t(i),a=n.data("dybCustomClass");n.parent().addClass(a)})},t.fn.autoMfp=function(){this.each(function(e,i){var n=t(i);require(["libs/jquery/jquery.magnific-popup.min"],function(){t.magnificPopup.open({items:{src:n}},0)})})},t(function(t){t(document).delegate("a.mfp","mouseover",function(e){var i=t(e.target).parents("a.mfp");return i=i.length>0?i:t(this),i.attr("mfp-init")?!1:(require(["libs/jquery/jquery.magnific-popup.min"],function(){i.magnificPopup({type:i.data("mfpType"),mainClass:"mfp-fade",closeBtnInside:!1,zoom:{enabled:!0,duration:300,easing:"ease-in-out"},iframe:{patterns:{youtube:{index:"dontdoanything.extensionthatshouldneverexists",id:"fjdlsqmjgs=",src:"//felix.com"}}}}),i.attr("mfp-init",!0)}),!1)}),void 0===window.angular&&e.compile()}),e});