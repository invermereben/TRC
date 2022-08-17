let dlehdrjfl = 0;
let rkrkatlrks = 0;
let wlffid = 0;
let emdthrthreh = 0;

let dlehdtlrks = 0;
let rkthrqngk = 0;
let tjsthreh = 0;
let akckfqngk = 0;
let rkrkathrtlrks = 0;
let rkwjscpqngk = 0;
let emdthrtlrks = 0;
let emdwjscpqngk = 0;
let rkthreh = 0;
let rkawjscpqngk = 0;
let dhlqngla = 0;
let vudrbsqngk = 0;
let akckfrPtn = 0.02;
let vudrbstjsthreh = 0;
let wndfurrkthreh = 9.8;
let rkthrtlgkwnd = 0;
let dkswjsrPtn = 1.5;
let vudrbsgkwnd = 0;
let ehdrlrnehd = 1;
let ahapsxm = 0;

let gjdydgkwnd = 0;
let tnaudrPtks = 0;
let rlqhsgkwnd = 0;
let vlfdyghlwjsthreh = 0;
let vlsldjsqksrud = 0;
let rpm = 2000;
let vudrbstjsthreh1 = 0;
let dyrnrkathr = 0;
let ghlwjsdlthdrjfl = 0;
let vudrbsgkwnd1 = 0;
let cncjsrkathr = 0;
let result = 0;
let i = 0;
let j = 0;
let of = 0;
let rkathrqlresult = 0;
let motordlsjtu = 0;
let rkathrrlxhzm = 0;
let motorwjdrurxhzm = 0;
let motorchleoxhzm = 0;

let motorwjdrurxhzmpro = 0;
let motorwjdrurqngk = 0;
let motorchleoxhzmpro = 0;
let motorchleoqngk = 0;
let motorahapsxm = 0;
let rnjswkdahapsxmql = 0;
let motorahapsxmqngk = 0;



const names = new Array(Array('TRC1008A','200','130','0.02546','0.08'),
                        Array('TRC1010A','380','250','0.031831','0.1'),
                        Array('TRC1210A','750','500','0.038197','0.12'),
                        Array('TRC1610A','2000','1000','0.0509','0.16'),
                        Array('TRC2010A','3000','1500','0.0637','0.2'),
                        Array('TRC2510A','4400','2200','0.0796','0.25'),
                        Array('TRC3212A','7200','3600','0.1222','0.384'),
                        Array('TRC4012A','12000','6000','0.1528','0.48'),
                        Array('TRC4014A','21000','14000','0.1783','0.56'),
                        Array('TRC6012A','42000','28000','0.2292','0.72'),
                        Array('사용불가','0','0','0','0'));



document.getElementById("akckfrPtn").value = akckfrPtn;
document.getElementById("wndfurrkthreh").value = wndfurrkthreh;
document.getElementById("dkswjsrPtn").value = dkswjsrPtn;
document.getElementById("ehdrlrnehd").value = ehdrlrnehd;
document.getElementById("dhlqngla").value = dhlqngla;
document.getElementById("rpm").value = rpm;

function convert1() {

  
  dlehdrjfl = document.getElementById("dlehdrjfl").value;
  wlffid = document.getElementById("wlffid").value;
  ehdrlrnehd = document.getElementById("ehdrlrnehd").value;
  
  if(document.getElementById("rkrkatlrks").value==0){rkrkatlrks=0.01;}
  else{rkrkatlrks = document.getElementById("rkrkatlrks").value;}
  if(document.getElementById("emdthrthreh").value==0){emdthrthreh=0.01;}
  else{emdthrthreh = document.getElementById("emdthrthreh").value;}
  
  
  tjsthreh = emdthrthreh;
  document.getElementById("tjsthreh").value = Math.ceil(tjsthreh * 1000) / 1000;
  rkrkathrtlrks = rkrkatlrks;
  document.getElementById("rkrkathrtlrks").value = Math.ceil(rkrkathrtlrks * 1000) / 1000;
  emdthrtlrks = (dlehdrjfl*1-((emdthrthreh/rkrkatlrks)*rkrkatlrks*rkrkatlrks))/emdthrthreh;
  document.getElementById("emdthrtlrks").value = Math.ceil(emdthrtlrks * 1000) / 1000;
  rkthreh = emdthrthreh/rkrkatlrks;
  document.getElementById("rkthreh").value = Math.ceil(rkthreh * 1000) / 1000;
  dlehdtlrks = rkrkatlrks*2+emdthrtlrks*1;
  document.getElementById("dlehdtlrks").value = Math.ceil(dlehdtlrks * 1000) / 1000;
  dhlqngla = document.getElementById("dhlqngla").value;
  if(document.getElementById("akckfrPtn").value==0){akckfrPtn=0.02;}
  else{akckfrPtn = document.getElementById("akckfrPtn").value;}
  wndfurrkthreh = document.getElementById("wndfurrkthreh").value;
  if(document.getElementById("dkswjsrPtn").value==0){dkswjsrPtn=0.01;}
  else{dkswjsrPtn = document.getElementById("dkswjsrPtn").value;}

  rkthrqngk = wlffid*rkthreh;
  document.getElementById("rkthrqngk").value = Math.ceil(rkthrqngk * 1000) / 1000;
  akckfqngk = wlffid*wndfurrkthreh*akckfrPtn;
  document.getElementById("akckfqngk").value = Math.ceil(akckfqngk * 1000) / 1000;
  rkwjscpqngk = rkthrqngk*1+akckfqngk*1+dhlqngla*1;
  document.getElementById("rkwjscpqngk").value = Math.ceil(rkwjscpqngk * 1000) / 1000;
  emdwjscpqngk = akckfqngk*1+dhlqngla*1;
  document.getElementById("emdwjscpqngk").value = Math.ceil(emdwjscpqngk * 1000) / 1000;
  rkawjscpqngk = rkthrqngk*1+akckfqngk*1+dhlqngla*1;
  document.getElementById("rkawjscpqngk").value = Math.ceil(rkawjscpqngk * 1000) / 1000;
  vudrbsqngk = (rkwjscpqngk*1+emdwjscpqngk*1+rkawjscpqngk*1)/3;
  document.getElementById("vudrbsqngk").value = Math.ceil(vudrbsqngk * 1000) / 1000;
  vudrbstjsthreh = dlehdrjfl/dlehdtlrks;
  document.getElementById("vudrbstjsthreh").value = Math.ceil(vudrbstjsthreh * 1000) / 1000;
  rkthrtlgkwnd = rkwjscpqngk*dkswjsrPtn/ehdrlrnehd;
  document.getElementById("rkthrtlgkwnd").value = Math.ceil(rkthrtlgkwnd * 1000) / 1000;
  vudrbsgkwnd = vudrbsqngk*dkswjsrPtn/ehdrlrnehd;
  document.getElementById("vudrbsgkwnd").value = Math.ceil(vudrbsgkwnd * 1000) / 1000;
  ahapsxm = wlffid*vlsldjsqksrud*vlsldjsqksrud/2*10000;
  document.getElementById("ahapsxm").value = Math.ceil(ahapsxm * 1000) / 1000;
  vudrbstjsthreh1 = vudrbstjsthreh;
  document.getElementById("vudrbstjsthreh1").value = Math.ceil(vudrbstjsthreh1 * 1000) / 1000;
  vudrbsgkwnd1 = vudrbsgkwnd;
  document.getElementById("vudrbsgkwnd1").value = Math.ceil(vudrbsgkwnd1 * 1000) / 1000;


  for(i=0; i<10; i++){
    gjdydgkwnd = names[i][j+1];
    rlqhsgkwnd = names[i][j+2];
    vlsldjsqksrud = names[i][j+3]/2;
    ghlwjsdlthdrjfl = names[i][j+4];
    vlfdyghlwjsthreh = Math.floor(tjsthreh/ghlwjsdlthdrjfl*60*100000000000000)/100000000000000;
    tnaudrPtks = Math.cbrt(Math.pow(rlqhsgkwnd/vudrbsgkwnd,10))*60000000/vlfdyghlwjsthreh/60;
    if(tnaudrPtks>=10000){
      break;
    }   
  }

  dyrnrkathr = rpm/vlfdyghlwjsthreh;

  document.getElementById("gjdydgkwnd").value = gjdydgkwnd;
  document.getElementById("rlqhsgkwnd").value = rlqhsgkwnd;
  document.getElementById("vlsldjsqksrud").value = vlsldjsqksrud;
  document.getElementById("tnaudrPtks").value = Math.floor(tnaudrPtks*1000)/1000;
  document.getElementById("ghlwjsdlthdrjfl").value = ghlwjsdlthdrjfl;
  document.getElementById("vlfdyghlwjsthreh").value = Math.ceil(vlfdyghlwjsthreh * 100) / 100;
  rpm = document.getElementById("rpm").value;
  document.getElementById("dyrnrkathr").value = Math.floor(dyrnrkathr);
  document.getElementById("result").value = names[i][j];
  console.log(dyrnrkathr);
  console.log(vlfdyghlwjsthreh);
  
}

function convert2() {
 
  cncjsrkathr = document.getElementById("cncjsrkathr").value;
  document.getElementById("cncjsrkathr").value = cncjsrkathr;
  if(cncjsrkathr<=dyrnrkathr){
    document.getElementById("of").value = "OK";
  }
  else{
    document.getElementById("of").value = "FAIL";
  }

  document.getElementById("rkathrqlresult").value = "1/"+cncjsrkathr;
  motordlsjtu = ahapsxm/Math.pow(cncjsrkathr,2);
  document.getElementById("motordlsjtu").value = Math.ceil(motordlsjtu*1000)/1000;
  motorwjdrurxhzm = vudrbsgkwnd*vlsldjsqksrud/cncjsrkathr;
  document.getElementById("motorwjdrurxhzm").value = Math.ceil(motorwjdrurxhzm * 100) / 100;
  rkathrrlxhzm = rkthrtlgkwnd*vlsldjsqksrud;
  document.getElementById("rkathrrlxhzm").value = Math.ceil(rkathrrlxhzm * 10) / 10;
  motorchleoxhzm = rkthrtlgkwnd*vlsldjsqksrud/cncjsrkathr;
  document.getElementById("motorchleoxhzm").value = Math.ceil(motorchleoxhzm * 100) / 100;

}


function convert3() {

  motorwjdrurxhzmpro = document.getElementById("motorwjdrurxhzmpro").value;
  motorwjdrurqngk=motorwjdrurxhzm/motorwjdrurxhzmpro;
  document.getElementById("motorwjdrurqngk").value = Math.ceil(motorwjdrurqngk*100);
  motorchleoxhzmpro = document.getElementById("motorchleoxhzmpro").value;
  motorchleoqngk=motorchleoxhzm/motorchleoxhzmpro;
  document.getElementById("motorchleoqngk").value = Math.ceil(motorchleoqngk*100);
  motorahapsxm = document.getElementById("motorahapsxm").value;

  rnjswkdahapsxmql = document.getElementById("rnjswkdahapsxmql").value;
  motorahapsxmqngk = motordlsjtu / rnjswkdahapsxmql / motorahapsxm*100;
  if(motorahapsxmqngk>100){document.getElementById("motorahapsxmqngk").value = "FAIL";}
  else{document.getElementById("motorahapsxmqngk").value = Math.ceil(motorahapsxmqngk*10)/10;}


}


/*
    <section>
      <img class="imgposition"
        src="http://www.joneinc.com/sh_img/hd/top_menu/logo.png"
        width="400px"
      />
    </section>

  
*/

