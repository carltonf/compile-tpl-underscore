window[JST]['test/templates/simple.tpl'] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h1>'+
((__t=( title ))==null?'':__t)+
'</h1>\n<p>'+
((__t=( content ))==null?'':__t)+
'</p>\n';
}
return __p;
}
