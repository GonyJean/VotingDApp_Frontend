(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4244],{79742:function(t,e){"use strict";e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return(r+n)*3/4-n},e.toByteArray=function(t){var e,r,o=u(t),f=o[0],s=o[1],h=new i((f+s)*3/4-s),l=0,a=s>0?f-4:f;for(r=0;r<a;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[l++]=e>>16&255,h[l++]=e>>8&255,h[l++]=255&e;return 2===s&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[l++]=255&e),1===s&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[l++]=e>>8&255,h[l++]=255&e),h},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],f=0,s=n-i;f<s;f+=16383)o.push(function(t,e,n){for(var i,o=[],f=e;f<n;f+=3)o.push(r[(i=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(t,f,f+16383>s?s:f+16383));return 1===i?o.push(r[(e=t[n-1])>>2]+r[e<<4&63]+"=="):2===i&&o.push(r[(e=(t[n-2]<<8)+t[n-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=o.length;f<s;++f)r[f]=o[f],n[o.charCodeAt(f)]=f;function u(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(t,e,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,s.prototype),e}function s(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return l(t)}return u(t,e,r)}function u(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!s.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|y(t,e),n=f(r),i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(j(t,Uint8Array)){let e=new Uint8Array(t);return c(e.buffer,e.byteOffset,e.byteLength)}return a(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(j(t,ArrayBuffer)||t&&j(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(j(t,SharedArrayBuffer)||t&&j(t.buffer,SharedArrayBuffer)))return c(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return s.from(n,e,r);let i=function(t){var e;if(s.isBuffer(t)){let e=0|p(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?f(0):a(t):"Buffer"===t.type&&Array.isArray(t.data)?a(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function l(t){return h(t),f(t<0?0:0|p(t))}function a(t){let e=t.length<0?0:0|p(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function c(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),s.prototype),n}function p(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,e){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||j(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return M(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(t).length;default:if(i)return n?-1:M(t).length;e=(""+e).toLowerCase(),i=!0}}function g(t,e,r){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=$[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return b(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var o,f;return o=e,f=r,0===o&&f===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,f));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function d(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,i){var o;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){let o,f=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;f=2,s/=2,u/=2,r/=2}function h(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(i){let n=-1;for(o=r;o<s;o++)if(h(t,o)===h(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*f}else -1!==n&&(o-=o-n),n=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(h(t,o+n)!==h(e,n)){r=!1;break}if(r)return o}return -1}function b(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,f=e>239?4:e>223?3:e>191?2:1;if(i+f<=r){let r,n,s,u;switch(f){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],s=t[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&u<1114112&&(o=u)}}null===o?(o=65533,f=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=f}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function w(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function E(t,e,r,n,i,o){if(!s.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function B(t,e,r,n,i){R(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function A(t,e,r,n,i){R(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function L(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function I(t,e,r,n,o){return e=+e,r>>>=0,o||L(t,e,r,4,34028234663852886e22,-34028234663852886e22),i.write(t,e,r,n,23,4),r+4}function U(t,e,r,n,o){return e=+e,r>>>=0,o||L(t,e,r,8,17976931348623157e292,-17976931348623157e292),i.write(t,e,r,n,52,8),r+8}e.Buffer=s,e.SlowBuffer=function(t){return+t!=t&&(t=0),s.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,e,r){return(h(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},s.allocUnsafe=function(t){return l(t)},s.allocUnsafeSlow=function(t){return l(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,e){if(j(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),j(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=s.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(j(e,Uint8Array))i+e.length>n.length?(s.isBuffer(e)||(e=s.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(s.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},s.byteLength=y,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)d(this,e,e+1);return this},s.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},s.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},s.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?b(this,0,t):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){let t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(t,e,r,n,i){if(j(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,f=r-e,u=Math.min(o,f),h=this.slice(n,i),l=t.slice(e,r);for(let t=0;t<u;++t)if(h[t]!==l[t]){o=h[t],f=l[t];break}return o<f?-1:f<o?1:0},s.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){var i,o,f,s,u,h,l,a;if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let c=this.length-e;if((void 0===r||r>c)&&(r=c),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let f=e.length;for(n>f/2&&(n=f/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,P(M(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return f=e,s=r,P(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,f,s);case"base64":return u=e,h=r,P(N(t),this,u,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,a=r,P(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-l),this,l,a);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(t,e){return t>>>=0,e||w(t,1,this.length),this[t]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readBigUInt64LE=k(function(t){x(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&C(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=k(function(t){x(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&C(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return(t>>>=0,e||w(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},s.prototype.readInt16LE=function(t,e){t>>>=0,e||w(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){t>>>=0,e||w(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readBigInt64LE=k(function(t){x(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&C(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24))<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),s.prototype.readBigInt64BE=k(function(t){x(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&C(t,this.length-8),(BigInt((e<<24)+65536*this[++t]+256*this[++t]+this[++t])<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),s.prototype.readFloatLE=function(t,e){return t>>>=0,e||w(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t>>>=0,e||w(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t>>>=0,e||w(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t>>>=0,e||w(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,1,255,0),this[e]=255&t,e+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeBigUInt64LE=k(function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=k(function(t,e=0){return A(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,t,e,r,n-1,-n)}let i=0,o=1,f=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===f&&0!==this[e+i-1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,t,e,r,n-1,-n)}let i=r-1,o=1,f=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===f&&0!==this[e+i+1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeBigInt64LE=k(function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=k(function(t,e=0){return A(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(t,e,r){return I(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return I(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return U(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return U(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(!s.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},s.prototype.fill=function(t,e,r,n){let i;if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=s.isBuffer(t)?t:s.from(t,n),f=o.length;if(0===f)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%f]}return this};let _={};function T(t,e,r){_[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function O(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function R(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new _.ERR_OUT_OF_RANGE("value",n,t)}x(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&C(i,n.length-(o+1))}function x(t,e){if("number"!=typeof t)throw new _.ERR_INVALID_ARG_TYPE(e,"number",t)}function C(t,e,r){if(Math.floor(t)!==t)throw x(t,r),new _.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new _.ERR_BUFFER_OUT_OF_BOUNDS;throw new _.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}T("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),T("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),T("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=O(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=O(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);let S=/[^+/0-9A-Za-z-_]/g;function M(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let f=0;f<n;++f){if((r=t.charCodeAt(f))>55295&&r<57344){if(!i){if(r>56319||f+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function N(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function P(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}function j(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}let $=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function k(t){return"undefined"==typeof BigInt?F:t}function F(){throw Error("BigInt not supported")}},17187:function(t){"use strict";var e,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};e=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise(function(r,n){function i(r){t.removeListener(e,o),n(r)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),r([].slice.call(arguments))}g(t,e,o,{once:!0}),"error"!==e&&"function"==typeof t.on&&g(t,"error",i,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var f=10;function s(t){if("function"!=typeof t)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function h(t,e,r,n){if(s(r),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),f=o[e]),void 0===f)f=o[e]=r,++t._eventsCount;else if("function"==typeof f?f=o[e]=n?[r,f]:[f,r]:n?f.unshift(r):f.push(r),(i=u(t))>0&&f.length>i&&!f.warned){f.warned=!0;var i,o,f,h=Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=f.length,console&&console.warn&&console.warn(h)}return t}function l(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function a(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=l.bind(n);return i.listener=r,n.wrapFn=i,i}function c(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):y(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(t,e){for(var r=Array(e),n=0;n<e;++n)r[n]=t[n];return r}function g(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r);else if("function"==typeof t.addEventListener)t.addEventListener(e,function i(o){n.once&&t.removeEventListener(e,i),r(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");f=t}}),o.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){if(e.length>0&&(f=e[0]),f instanceof Error)throw f;var f,s=Error("Unhandled error."+(f?" ("+f.message+")":""));throw s.context=f,s}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)n(u,this,e);else for(var h=u.length,l=y(u,h),r=0;r<h;++r)n(l[r],this,e);return!0},o.prototype.addListener=function(t,e){return h(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return h(this,t,e,!0)},o.prototype.once=function(t,e){return s(e),this.on(t,a(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,a(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,f;if(s(e),void 0===(n=this._events)||void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){f=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,f||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0==arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},o.prototype.listeners=function(t){return c(this,t,!0)},o.prototype.rawListeners=function(t){return c(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},80645:function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,r,n,i){var o,f,s=8*i-n-1,u=(1<<s)-1,h=u>>1,l=-7,a=r?i-1:0,c=r?-1:1,p=t[e+a];for(a+=c,o=p&(1<<-l)-1,p>>=-l,l+=s;l>0;o=256*o+t[e+a],a+=c,l-=8);for(f=o&(1<<-l)-1,o>>=-l,l+=n;l>0;f=256*f+t[e+a],a+=c,l-=8);if(0===o)o=1-h;else{if(o===u)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=h}return(p?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var f,s,u,h=8*o-i-1,l=(1<<h)-1,a=l>>1,c=23===i?5960464477539062e-23:0,p=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,f=l):(f=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-f))<1&&(f--,u*=2),f+a>=1?e+=c/u:e+=c*Math.pow(2,1-a),e*u>=2&&(f++,u/=2),f+a>=l?(s=0,f=l):f+a>=1?(s=(e*u-1)*Math.pow(2,i),f+=a):(s=e*Math.pow(2,a-1)*Math.pow(2,i),f=0));i>=8;t[r+p]=255&s,p+=y,s/=256,i-=8);for(f=f<<i|s,h+=i;h>0;t[r+p]=255&f,p+=y,f/=256,h-=8);t[r+p-y]|=128*g}},83454:function(t,e,r){"use strict";var n,i;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(77663)},77663:function(t){!function(){var e={229:function(t){var e,r,n,i=t.exports={};function o(){throw Error("setTimeout has not been defined")}function f(){throw Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:f}catch(t){r=f}}();var u=[],h=!1,l=-1;function a(){h&&n&&(h=!1,n.length?u=n.concat(u):l=-1,u.length&&c())}function c(){if(!h){var t=s(a);h=!0;for(var e=u.length;e;){for(n=u,u=[];++l<e;)n&&n[l].run();l=-1,e=u.length}n=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===f||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new p(t,e)),1!==u.length||h||s(c)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}},f=!0;try{e[t](o,o.exports,n),f=!1}finally{f&&delete r[t]}return o.exports}n.ab="//";var i=n(229);t.exports=i}()}}]);