const a0_0x37f8ac=a0_0x5ec0;(function(_0xb1a2a,_0x5a09b0){const _0x51d721=a0_0x5ec0,_0x22fdfe=_0xb1a2a();while(!![]){try{const _0xe0b1fd=-parseInt(_0x51d721(0x1a8))/0x1*(parseInt(_0x51d721(0x1b5))/0x2)+parseInt(_0x51d721(0x1a1))/0x3+parseInt(_0x51d721(0x19e))/0x4*(-parseInt(_0x51d721(0x18f))/0x5)+-parseInt(_0x51d721(0x1a6))/0x6+parseInt(_0x51d721(0x1bc))/0x7*(-parseInt(_0x51d721(0x19f))/0x8)+-parseInt(_0x51d721(0x1ae))/0x9+parseInt(_0x51d721(0x1a7))/0xa;if(_0xe0b1fd===_0x5a09b0)break;else _0x22fdfe['push'](_0x22fdfe['shift']());}catch(_0x3a5c39){_0x22fdfe['push'](_0x22fdfe['shift']());}}}(a0_0x56bb,0xabaff));const axios=require(a0_0x37f8ac(0x198)),crypto=require(a0_0x37f8ac(0x1ad)),ProxyChecker=require(a0_0x37f8ac(0x1b0));function a0_0x5ec0(_0x1c8133,_0x1ca252){const _0x56bb3b=a0_0x56bb();return a0_0x5ec0=function(_0x5ec018,_0x2f5256){_0x5ec018=_0x5ec018-0x18e;let _0x213836=_0x56bb3b[_0x5ec018];return _0x213836;},a0_0x5ec0(_0x1c8133,_0x1ca252);}class Bot{constructor(_0x1021e3,_0x54aa21){const _0x9620e1=a0_0x37f8ac;this[_0x9620e1(0x1a2)]=_0x1021e3,this[_0x9620e1(0x1bb)]=_0x54aa21,this[_0x9620e1(0x1a4)]=new ProxyChecker(_0x1021e3,_0x54aa21);}async[a0_0x37f8ac(0x190)](_0x2f2dd6,_0x2046df=null){const _0x5ba293=a0_0x37f8ac;try{const _0x5159a5=_0x5ba293(0x1ab),_0x565043=await this['getSession'](_0x2f2dd6,_0x5159a5,_0x2046df);console[_0x5ba293(0x1b3)]('✅\x20'+_0x5ba293(0x1bf)[_0x5ba293(0x19b)]+'\x20for\x20UID:\x20'+_0x565043[_0x5ba293(0x1b8)]),this[_0x5ba293(0x1bb)]['info']('Session\x20info',{'uid':_0x565043[_0x5ba293(0x1b8)],'name':_0x565043[_0x5ba293(0x1a5)],'useProxy':!!_0x2046df}),console[_0x5ba293(0x1b3)]('');const _0x126841=setInterval(async()=>{const _0xbde096=_0x5ba293;try{await this[_0xbde096(0x1b4)](_0x565043,_0x2f2dd6,_0x5159a5,_0x2046df);}catch(_0x3fce11){console[_0xbde096(0x1b3)]('❌\x20'+'Ping\x20error'['red']+':\x20'+_0x3fce11['message']),this[_0xbde096(0x1bb)][_0xbde096(0x19c)](_0xbde096(0x1ac),{'error':_0x3fce11['message']});}},this['config'][_0x5ba293(0x194)]);process['on'](_0x5ba293(0x1a9),()=>clearInterval(_0x126841));}catch(_0x2c742a){console[_0x5ba293(0x1b3)]('❌\x20'+'Connection\x20error'['red']+':\x20'+_0x2c742a[_0x5ba293(0x1a3)]),this[_0x5ba293(0x1bb)][_0x5ba293(0x19c)](_0x5ba293(0x1b6),{'error':_0x2c742a[_0x5ba293(0x1a3)],'proxy':_0x2046df});}}async[a0_0x37f8ac(0x19a)](_0x489357,_0x5563b4,_0x1d1f59){const _0x1a3da1=a0_0x37f8ac;try{const _0x242ef1={'headers':{'Authorization':_0x1a3da1(0x1bd)+_0x489357,'Content-Type':_0x1a3da1(0x1ba),'User-Agent':_0x5563b4,'Accept':'application/json'}};_0x1d1f59&&(_0x242ef1[_0x1a3da1(0x1b2)]=this[_0x1a3da1(0x192)](_0x1d1f59));const _0x42df60=await axios[_0x1a3da1(0x1c0)](this[_0x1a3da1(0x1a2)][_0x1a3da1(0x1b7)],{},_0x242ef1);return _0x42df60[_0x1a3da1(0x1b9)][_0x1a3da1(0x1b9)];}catch(_0x11fe81){throw new Error('Session\x20request\x20failed');}}async[a0_0x37f8ac(0x1b4)](_0x8a24be,_0x3d6d77,_0x477f3a,_0xff6c3a){const _0x521fd8=a0_0x37f8ac,_0x2ad506=_0x8a24be['uid']||crypto[_0x521fd8(0x1b1)](0x8)[_0x521fd8(0x197)]('hex'),_0x509b39=_0x8a24be[_0x521fd8(0x1af)]||crypto[_0x521fd8(0x1b1)](0x8)['toString'](_0x521fd8(0x18e)),_0x544972={'id':_0x2ad506,'browser_id':_0x509b39,'timestamp':Math['floor'](Date[_0x521fd8(0x196)]()/0x3e8),'version':_0x521fd8(0x191)};try{const _0xa1f71e={'headers':{'Authorization':_0x521fd8(0x1bd)+_0x3d6d77,'Content-Type':_0x521fd8(0x1ba),'User-Agent':_0x477f3a,'Accept':_0x521fd8(0x1ba)}};_0xff6c3a&&(_0xa1f71e[_0x521fd8(0x1b2)]=this[_0x521fd8(0x192)](_0xff6c3a)),await axios[_0x521fd8(0x1c0)](this['config']['pingURL'],_0x544972,_0xa1f71e),console[_0x521fd8(0x1b3)]('📡\x20'+'Ping\x20sent'['cyan']+'\x20for\x20UID:\x20'+_0x2ad506),this[_0x521fd8(0x1bb)][_0x521fd8(0x1a0)](_0x521fd8(0x193),{'uid':_0x2ad506,'browserId':_0x509b39,'ip':_0xff6c3a?_0xff6c3a[_0x521fd8(0x1aa)]:'direct'});}catch(_0x15fdaf){throw new Error(_0x521fd8(0x199));}}[a0_0x37f8ac(0x192)](_0x47b64a){const _0x5e8c70=a0_0x37f8ac;return _0x47b64a&&_0x47b64a[_0x5e8c70(0x1aa)]?{'host':_0x47b64a['host'],'port':parseInt(_0x47b64a['port']),'auth':_0x47b64a[_0x5e8c70(0x19d)]&&_0x47b64a[_0x5e8c70(0x195)]?{'username':_0x47b64a[_0x5e8c70(0x19d)],'password':_0x47b64a[_0x5e8c70(0x195)]}:undefined}:undefined;}}function a0_0x56bb(){const _0x2ee320=['6WItgiv','Connection\x20error','sessionURL','uid','data','application/json','logger','7MGOPYT','Bearer\x20','exports','Connected\x20to\x20session','post','hex','3433195RkFAXM','connect','2.2.7','buildProxyConfig','Ping\x20sent','retryInterval','password','now','toString','axios','Ping\x20request\x20failed','getSession','green','error','username','4NrKxlG','10081592llifYN','info','1762440EnQrIR','config','message','proxyCheck','name','2966064dsRLnw','37551820FkipKk','125633tbAzFj','SIGINT','host','Mozilla/5.0\x20...\x20Safari/537.3','Ping\x20error','crypto','7392150sxJPif','browser_id','./proxyChecker','randomBytes','proxy','log','sendPing'];a0_0x56bb=function(){return _0x2ee320;};return a0_0x56bb();}module[a0_0x37f8ac(0x1be)]=Bot;