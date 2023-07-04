let game1=document.createElement('div');
let lvl=document.getElementById('lvl');
lvl.innerHTML=1;
let gameinin=document.getElementsByClassName('gameinin')[0];
let gamein=document.getElementsByClassName('gamein')[0];
let int=document.getElementsByClassName('int');
let gameonoff=0;
let alreadyha=0;
let st=document.getElementById('start');
let yaad=0;
let rec=document.getElementsByClassName('recordsin')[0];
let t=59;
let y=1;

function levelinc(){
    if(gameonoff==1)return;
    if(lvl.innerText==1){
        lvl.innerText=2;
        t=39;
    return;}
    if(lvl.innerText="2"){
        lvl.innerText=3;
        t=59;
    return;}
}
function leveldec(){
    if(gameonoff==1)return;
    if(lvl.innerText==3){
        lvl.innerText=2;
        t=39;
    return;}
    if(lvl.innerText="2"){
        lvl.innerText=1;
        t=59;
    return;}
}

function start(){
    if(lvl.innerText=="1"){
        let i=t;
    if(gameonoff==1){
        clearInterval(arv);
        st.innerHTML="Continue";
        gameonoff=0;
        t=sec.innerHTML;
    }
    else{
        game1.setAttribute('style','display:flex');
        gameinin.setAttribute('style','display:none');
        st.innerHTML="Pause"; 
        if(lvl.innerText=="1" && gameonoff==0){
            gameonoff=1;
            arv=setInterval(function b(){
                if(i<=9)sec.innerHTML="0"+i;
                else
                sec.innerHTML=i;
                i--;
                if(sec.innerHTML=="00"){
                    gameonoff=0;
                    for(let k=0;k<int.length;k++){
                        int[k].setAttribute('style','background-color:black');
                    }
           alert('The Game is over');
           clearInterval(arv);
           i=59;
           sec.innerHTML=i;
           game1.setAttribute('style','display:none');
           gameinin.setAttribute('style','display:flex');
           st.innerHTML="Start";
        }
    },1000)};
    if(alreadyha==0 && lvl.innerText=="1"){
        alreadyha=1;
    game1.setAttribute('class','game1');
    let row1=document.createElement('div');
    row1.setAttribute('class','row1');
    let row2=document.createElement('div');
    row2.setAttribute('class','row1');
    let row3=document.createElement('div');
    row3.setAttribute('class','row1');
    let row4=document.createElement('div');
    row4.setAttribute('class','row1');
    let span1=document.createElement('span');
    let span2=document.createElement('span');
    let span3=document.createElement('span');
    let span4=document.createElement('span');
    span1.setAttribute('class','int');
    span2.setAttribute('class','int');
    span3.setAttribute('class','int');
    span4.setAttribute('class','int');
    span1.setAttribute('onclick','show(this)');
    span2.setAttribute('onclick','show(this)');
    span3.setAttribute('onclick','show(this)');
    span4.setAttribute('onclick','show(this)');
    let span5=document.createElement('span');
    let span6=document.createElement('span');
    let span7=document.createElement('span');
    let span8=document.createElement('span');
    span5.setAttribute('class','int');
    span6.setAttribute('class','int');
    span7.setAttribute('class','int');
    span8.setAttribute('class','int');
    span5.setAttribute('onclick','show(this)');
    span6.setAttribute('onclick','show(this)');
    span7.setAttribute('onclick','show(this)');
    span8.setAttribute('onclick','show(this)');
    let span9=document.createElement('span');
    let span10=document.createElement('span');
    let span11=document.createElement('span');
    let span12=document.createElement('span');
    span9.setAttribute('class','int');
    span10.setAttribute('class','int');
    span11.setAttribute('class','int');
    span12.setAttribute('class','int');
    span9.setAttribute('onclick','show(this)');
    span10.setAttribute('onclick','show(this)');
    span11.setAttribute('onclick','show(this)');
    span12.setAttribute('onclick','show(this)');
    let span13=document.createElement('span');
    let span14=document.createElement('span');
    let span15=document.createElement('span');
    let span16=document.createElement('span');
    span13.setAttribute('class','int');
    span14.setAttribute('class','int');
    span15.setAttribute('class','int');
    span16.setAttribute('class','int');
    span13.setAttribute('onclick','show(this)');
    span14.setAttribute('onclick','show(this)');
    span15.setAttribute('onclick','show(this)');
    span16.setAttribute('onclick','show(this)');


    let words = ["1", "2", "3", "4", "5", "6", "7", "8"];
        words = [...words, ...words];
        let i=0;
        let rand = Math.floor(Math.random() * (15 - i));
    span1.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span2.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span3.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span4.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span5.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span6.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span7.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span8.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span9.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span10.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span11.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span12.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span13.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span14.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span15.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span16.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    
    span1.setAttribute('style','background-color:black');
    span2.setAttribute('style','background-color:black');
    span3.setAttribute('style','background-color:black');
    span4.setAttribute('style','background-color:black');
    span5.setAttribute('style','background-color:black');
    span6.setAttribute('style','background-color:black');
    span7.setAttribute('style','background-color:black');
    span8.setAttribute('style','background-color:black');
    span9.setAttribute('style','background-color:black');
    span10.setAttribute('style','background-color:black');
    span11.setAttribute('style','background-color:black');
    span12.setAttribute('style','background-color:black');
    span13.setAttribute('style','background-color:black');
    span14.setAttribute('style','background-color:black');
    span15.setAttribute('style','background-color:black');
    span16.setAttribute('style','background-color:black');
    row1.appendChild(span1);
    row1.appendChild(span2);
    row1.appendChild(span3);
    row1.appendChild(span4);
    row2.appendChild(span5);
    row2.appendChild(span6);
    row2.appendChild(span7);
    row2.appendChild(span8);
    row3.appendChild(span9);
    row3.appendChild(span10);
    row3.appendChild(span11);
    row3.appendChild(span12);
    row4.appendChild(span13);
    row4.appendChild(span14);
    row4.appendChild(span15);
    row4.appendChild(span16);
    game1.appendChild(row1);
    game1.appendChild(row2);
    game1.appendChild(row3);
    game1.appendChild(row4);
    gamein.appendChild(game1);
    }
}
}
if(lvl.innerText=="2"){
    let i=t;
    if(gameonoff==1){
        clearInterval(tar);
        st.innerHTML="Continue";
        gameonoff=0;
        t=sec.innerHTML;
    }
    else{
        game1.setAttribute('style','display:flex');
        gameinin.setAttribute('style','display:none');
        st.innerHTML="Pause"; 
        if(lvl.innerText=="2" && gameonoff==0){
            gameonoff=1;
            tar=setInterval(function b(){
                if(i<=9)sec.innerHTML="0"+i;
                else
                sec.innerHTML=i;
                i--;
                if(sec.innerHTML=="00"){
                    gameonoff=0;
                    for(let k=0;k<int.length;k++){
                        int[k].setAttribute('style','background-color:black');
                    }
           alert('The Game is over');
           clearInterval(tar);
           i=40;
           sec.innerHTML=i;
           game1.setAttribute('style','display:none');
           gameinin.setAttribute('style','display:flex');
           st.innerHTML="Start";
        }
    },1000)};
    if(alreadyha==0 && lvl.innerText=="2"){
        alreadyha=1;
    game1.setAttribute('class','game1');
    let row1=document.createElement('div');
    row1.setAttribute('class','row1');
    let row2=document.createElement('div');
    row2.setAttribute('class','row1');
    let row3=document.createElement('div');
    row3.setAttribute('class','row1');
    let row4=document.createElement('div');
    row4.setAttribute('class','row1');
    let span1=document.createElement('span');
    let span2=document.createElement('span');
    let span3=document.createElement('span');
    let span4=document.createElement('span');
    span1.setAttribute('class','int');
    span2.setAttribute('class','int');
    span3.setAttribute('class','int');
    span4.setAttribute('class','int');
    span1.setAttribute('onclick','show(this)');
    span2.setAttribute('onclick','show(this)');
    span3.setAttribute('onclick','show(this)');
    span4.setAttribute('onclick','show(this)');
    let span5=document.createElement('span');
    let span6=document.createElement('span');
    let span7=document.createElement('span');
    let span8=document.createElement('span');
    span5.setAttribute('class','int');
    span6.setAttribute('class','int');
    span7.setAttribute('class','int');
    span8.setAttribute('class','int');
    span5.setAttribute('onclick','show(this)');
    span6.setAttribute('onclick','show(this)');
    span7.setAttribute('onclick','show(this)');
    span8.setAttribute('onclick','show(this)');
    let span9=document.createElement('span');
    let span10=document.createElement('span');
    let span11=document.createElement('span');
    let span12=document.createElement('span');
    span9.setAttribute('class','int');
    span10.setAttribute('class','int');
    span11.setAttribute('class','int');
    span12.setAttribute('class','int');
    span9.setAttribute('onclick','show(this)');
    span10.setAttribute('onclick','show(this)');
    span11.setAttribute('onclick','show(this)');
    span12.setAttribute('onclick','show(this)');
    let span13=document.createElement('span');
    let span14=document.createElement('span');
    let span15=document.createElement('span');
    let span16=document.createElement('span');
    span13.setAttribute('class','int');
    span14.setAttribute('class','int');
    span15.setAttribute('class','int');
    span16.setAttribute('class','int');
    span13.setAttribute('onclick','show(this)');
    span14.setAttribute('onclick','show(this)');
    span15.setAttribute('onclick','show(this)');
    span16.setAttribute('onclick','show(this)');

    let words = ["1", "2", "3", "4", "5", "6", "7", "8"];
        words = [...words, ...words];
        let i=0;
        let rand = Math.floor(Math.random() * (15 - i));
    span1.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span2.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span3.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span4.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span5.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span6.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span7.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span8.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span9.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span10.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span11.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span12.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span13.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span14.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span15.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (15 - i));
    span16.innerText=words[rand];
    words.splice(rand, 1);
    i++;


    // span1.innerText="4";
    // span2.innerText="1";
    // span3.innerText="3";
    // span4.innerText="2";
    // span5.innerText="7";
    // span6.innerText="4";
    // span7.innerText="5";
    // span8.innerText="1";
    // span9.innerText="6";
    // span10.innerText="8";
    // span11.innerText="3";
    // span12.innerText="7";
    // span13.innerText="5";
    // span14.innerText="6";
    // span15.innerText="8";
    // span16.innerText="2";
    span1.setAttribute('style','background-color:black');
    span2.setAttribute('style','background-color:black');
    span3.setAttribute('style','background-color:black');
    span4.setAttribute('style','background-color:black');
    span5.setAttribute('style','background-color:black');
    span6.setAttribute('style','background-color:black');
    span7.setAttribute('style','background-color:black');
    span8.setAttribute('style','background-color:black');
    span9.setAttribute('style','background-color:black');
    span10.setAttribute('style','background-color:black');
    span11.setAttribute('style','background-color:black');
    span12.setAttribute('style','background-color:black');
    span13.setAttribute('style','background-color:black');
    span14.setAttribute('style','background-color:black');
    span15.setAttribute('style','background-color:black');
    span16.setAttribute('style','background-color:black');
    row1.appendChild(span1);
    row1.appendChild(span2);
    row1.appendChild(span3);
    row1.appendChild(span4);
    row2.appendChild(span5);
    row2.appendChild(span6);
    row2.appendChild(span7);
    row2.appendChild(span8);
    row3.appendChild(span9);
    row3.appendChild(span10);
    row3.appendChild(span11);
    row3.appendChild(span12);
    row4.appendChild(span13);
    row4.appendChild(span14);
    row4.appendChild(span15);
    row4.appendChild(span16);
    game1.appendChild(row1);
    game1.appendChild(row2);
    game1.appendChild(row3);
    game1.appendChild(row4);
    gamein.appendChild(game1);
    }
}
}

if(lvl.innerText=="3"){
    let j=y;
    let i=t;
    if(gameonoff==1){
        clearInterval(anu);
        st.innerHTML="Continue";
        gameonoff=0;
        t=sec.innerHTML;
        y=min.innerHTML.splice(0,1);
    }
    else{
        game1.setAttribute('style','display:flex');
        gameinin.setAttribute('style','display:none');
        st.innerHTML="Pause"; 
        if(lvl.innerText=="3" && gameonoff==0){
            gameonoff=1;
            anu=setInterval(function b(){
                // j=1;
           if(j<=9)min.innerHTML="0"+j;
                if(i<=9)sec.innerHTML="0"+i;
                else
                sec.innerHTML=i;
                i--;
                if(min.innerHTML=="00" && sec.innerHTML=="00"){
                    gameonoff=0;
                    for(let k=0;k<int.length;k++){
                        int[k].setAttribute('style','background-color:black');
                    }
           alert('The Game is over');
           clearInterval(anu);
           j=1;
           if(j<=9)min.innerHTML="0"+j;
           i=59;
           sec.innerHTML=i;
           game1.setAttribute('style','display:none');
           gameinin.setAttribute('style','display:flex');
           st.innerHTML="Start";
        }
                if(sec.innerHTML=="00" && min.innerHTML!="00"){
                    j=0;
                    min.innerHTML=j;
                    i=59;
                    sec.innerHTML=i;
                }
    },1000)};
    if(alreadyha==0 && lvl.innerText=="3"){
        alreadyha=1;
    game1.setAttribute('class','game1');
    let row1=document.createElement('div');
    row1.setAttribute('class','row1');
    let row2=document.createElement('div');
    row2.setAttribute('class','row1');
    let row3=document.createElement('div');
    row3.setAttribute('class','row1');
    let row4=document.createElement('div');
    row4.setAttribute('class','row1');
    let row5=document.createElement('div');
    row5.setAttribute('class','row1');
    let row6=document.createElement('div');
    row6.setAttribute('class','row1');
    let span1=document.createElement('span');
    let span2=document.createElement('span');
    let span3=document.createElement('span');
    let span4=document.createElement('span');
    span1.setAttribute('class','int');
    span2.setAttribute('class','int');
    span3.setAttribute('class','int');
    span4.setAttribute('class','int');
    span1.setAttribute('onclick','show(this)');
    span2.setAttribute('onclick','show(this)');
    span3.setAttribute('onclick','show(this)');
    span4.setAttribute('onclick','show(this)');
    let span5=document.createElement('span');
    let span6=document.createElement('span');
    let span7=document.createElement('span');
    let span8=document.createElement('span');
    span5.setAttribute('class','int');
    span6.setAttribute('class','int');
    span7.setAttribute('class','int');
    span8.setAttribute('class','int');
    span5.setAttribute('onclick','show(this)');
    span6.setAttribute('onclick','show(this)');
    span7.setAttribute('onclick','show(this)');
    span8.setAttribute('onclick','show(this)');
    let span9=document.createElement('span');
    let span10=document.createElement('span');
    let span11=document.createElement('span');
    let span12=document.createElement('span');
    span9.setAttribute('class','int');
    span10.setAttribute('class','int');
    span11.setAttribute('class','int');
    span12.setAttribute('class','int');
    span9.setAttribute('onclick','show(this)');
    span10.setAttribute('onclick','show(this)');
    span11.setAttribute('onclick','show(this)');
    span12.setAttribute('onclick','show(this)');
    let span13=document.createElement('span');
    let span14=document.createElement('span');
    let span15=document.createElement('span');
    let span16=document.createElement('span');
    span13.setAttribute('class','int');
    span14.setAttribute('class','int');
    span15.setAttribute('class','int');
    span16.setAttribute('class','int');
    span13.setAttribute('onclick','show(this)');
    span14.setAttribute('onclick','show(this)');
    span15.setAttribute('onclick','show(this)');
    span16.setAttribute('onclick','show(this)');



    let span17=document.createElement('span');
    let span18=document.createElement('span');
    let span19=document.createElement('span');
    let span20=document.createElement('span');
    span17.setAttribute('class','int');
    span18.setAttribute('class','int');
    span19.setAttribute('class','int');
    span20.setAttribute('class','int');
    span17.setAttribute('onclick','show(this)');
    span18.setAttribute('onclick','show(this)');
    span19.setAttribute('onclick','show(this)');
    span20.setAttribute('onclick','show(this)');


    let span21=document.createElement('span');
    let span22=document.createElement('span');
    let span23=document.createElement('span');
    let span24=document.createElement('span');
    span21.setAttribute('class','int');
    span22.setAttribute('class','int');
    span23.setAttribute('class','int');
    span24.setAttribute('class','int');
    span21.setAttribute('onclick','show(this)');
    span22.setAttribute('onclick','show(this)');
    span23.setAttribute('onclick','show(this)');
    span24.setAttribute('onclick','show(this)');

    let span25=document.createElement('span');
    let span26=document.createElement('span');
    let span27=document.createElement('span');
    let span28=document.createElement('span');
    span25.setAttribute('class','int');
    span26.setAttribute('class','int');
    span27.setAttribute('class','int');
    span28.setAttribute('class','int');
    span25.setAttribute('onclick','show(this)');
    span26.setAttribute('onclick','show(this)');
    span27.setAttribute('onclick','show(this)');
    span28.setAttribute('onclick','show(this)');

    let span29=document.createElement('span');
    let span30=document.createElement('span');
    let span31=document.createElement('span');
    let span32=document.createElement('span');
    span29.setAttribute('class','int');
    span30.setAttribute('class','int');
    span31.setAttribute('class','int');
    span32.setAttribute('class','int');
    span29.setAttribute('onclick','show(this)');
    span30.setAttribute('onclick','show(this)');
    span31.setAttribute('onclick','show(this)');
    span32.setAttribute('onclick','show(this)');


    let span33=document.createElement('span');
    let span34=document.createElement('span');
    let span35=document.createElement('span');
    let span36=document.createElement('span');
    span33.setAttribute('class','int');
    span34.setAttribute('class','int');
    span35.setAttribute('class','int');
    span36.setAttribute('class','int');
    span33.setAttribute('onclick','show(this)');
    span34.setAttribute('onclick','show(this)');
    span35.setAttribute('onclick','show(this)');
    span36.setAttribute('onclick','show(this)');

    let words = ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18"];
        words = [...words, ...words];
        let i=0;
        let rand = Math.floor(Math.random() * (35 - i));
    span1.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span2.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span3.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span4.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span5.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span6.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span7.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span8.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span9.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span10.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span11.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span12.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span13.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span14.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span15.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span16.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span17.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span18.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span19.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span20.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span21.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span22.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span23.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span24.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span25.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span26.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span27.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span28.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span29.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span30.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span31.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span32.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span33.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span34.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span35.innerText=words[rand];
    words.splice(rand, 1);
    i++;

    rand = Math.floor(Math.random() * (35 - i));
    span36.innerText=words[rand];
    words.splice(rand, 1);
    i++;
    // span1.innerText="9";
    // span2.innerText="10";
    // span3.innerText="4";
    // span4.innerText="1";
    // span5.innerText="3";
    // span6.innerText="2";
    // span7.innerText="12";
    // span8.innerText="10";
    // span9.innerText="7";
    // span10.innerText="4";
    // span11.innerText="5";
    // span12.innerText="1";
    // span13.innerText="13";
    // span14.innerText="15";
    // span15.innerText="6";
    // span16.innerText="8";
    // span17.innerText="3";
    // span18.innerText="7";
    // span19.innerText="14";
    // span20.innerText="9";
    // span21.innerText="5";
    // span22.innerText="6";
    // span23.innerText="8";
    // span24.innerText="2";
    // span25.innerText="16";
    // span26.innerText="18";
    // span27.innerText="15";
    // span28.innerText="13";
    // span29.innerText="11";
    // span30.innerText="12";
    // span31.innerText="11";
    // span32.innerText="17";
    // span33.innerText="18";
    // span34.innerText="14";
    // span35.innerText="16";
    // span36.innerText="17";


    span1.setAttribute('style','background-color:black');
    span2.setAttribute('style','background-color:black');
    span3.setAttribute('style','background-color:black');
    span4.setAttribute('style','background-color:black');
    span5.setAttribute('style','background-color:black');
    span6.setAttribute('style','background-color:black');
    span7.setAttribute('style','background-color:black');
    span8.setAttribute('style','background-color:black');
    span9.setAttribute('style','background-color:black');
    span10.setAttribute('style','background-color:black');
    span11.setAttribute('style','background-color:black');
    span12.setAttribute('style','background-color:black');
    span13.setAttribute('style','background-color:black');
    span14.setAttribute('style','background-color:black');
    span15.setAttribute('style','background-color:black');
    span16.setAttribute('style','background-color:black');
    span17.setAttribute('style','background-color:black');
    span18.setAttribute('style','background-color:black');
    span19.setAttribute('style','background-color:black');
    span20.setAttribute('style','background-color:black');
    span21.setAttribute('style','background-color:black');
    span22.setAttribute('style','background-color:black');
    span23.setAttribute('style','background-color:black');
    span24.setAttribute('style','background-color:black');
    span25.setAttribute('style','background-color:black');
    span26.setAttribute('style','background-color:black');
    span27.setAttribute('style','background-color:black');
    span28.setAttribute('style','background-color:black');
    span29.setAttribute('style','background-color:black');
    span30.setAttribute('style','background-color:black');
    span31.setAttribute('style','background-color:black');
    span32.setAttribute('style','background-color:black');
    span33.setAttribute('style','background-color:black');
    span34.setAttribute('style','background-color:black');
    span35.setAttribute('style','background-color:black');
    span36.setAttribute('style','background-color:black');
    row1.appendChild(span1);
    row1.appendChild(span2);
    row1.appendChild(span3);
    row1.appendChild(span4);
    row1.appendChild(span5);
    row1.appendChild(span6);

    row2.appendChild(span7);
    row2.appendChild(span8);
    row2.appendChild(span9);
    row2.appendChild(span10);
    row2.appendChild(span11);
    row2.appendChild(span12);

    row3.appendChild(span13);
    row3.appendChild(span14);
    row3.appendChild(span15);
    row3.appendChild(span16);
    row3.appendChild(span17);
    row3.appendChild(span18);

    row4.appendChild(span19);
    row4.appendChild(span20);
    row4.appendChild(span21);
    row4.appendChild(span22);
    row4.appendChild(span23);
    row4.appendChild(span24);

    row5.appendChild(span25);
    row5.appendChild(span26);
    row5.appendChild(span27);
    row5.appendChild(span28);
    row5.appendChild(span29);
    row5.appendChild(span30);

    row6.appendChild(span31);
    row6.appendChild(span32);
    row6.appendChild(span33);
    row6.appendChild(span34);
    row6.appendChild(span35);
    row6.appendChild(span36);

    game1.appendChild(row1);
    game1.appendChild(row2);
    game1.appendChild(row3);
    game1.appendChild(row4);
    game1.appendChild(row5);
    game1.appendChild(row6);
    gamein.appendChild(game1);
    }
}
}
}

function show(arg){
    if(gameonoff==0)return;
    if(arg==yaad)return;
    if(yaad==0){
        oops.innerHTML="";
        yaad=arg;
        arg.setAttribute('style','background-color:white');
    }
    else{
        if(yaad.innerHTML==arg.innerHTML){
            arg.setAttribute('style','background-color:white');
            oops.innerHTML="";
        }
        else{
            yaad.setAttribute('style','background-color:black');
            oops.innerHTML="Oops ! Wrong Card";
        }
        yaad=0;
    }
    int=document.getElementsByClassName('int');
    let s=0;
    // console.log(int[0].parentNode.style.backgroundColor);
    setTimeout(() => {
        for(let k=0;k<int.length;k++){
            if(int[k].style.backgroundColor=="black"){
                s=1;
                break;
            }
        }
        if(s==0){
            alert('Congrats You have won the game');
            yaad=0;
            gameonoff=0;
            let stat=document.createElement('div');
            stat.setAttribute('class','stat');
            let levelname=document.createElement('span');
            let time=document.createElement('span');
            if(lvl.innerText=="1"){
                levelname.innerHTML="Easy";
                time.innerText=sec.innerHTML+"secs left";
                 }
            else if(lvl.innerText=="2"){
                levelname.innerHTML="Medium";
                time.innerText=sec.innerHTML+"secs left";
            }
            else {
                levelname.innerHTML="Hard";
                time.innerText=min.innerHTML+":"+sec.innerHTML+"left";
            }
            stat.appendChild(levelname);
            stat.appendChild(time);
            rec.appendChild(stat);
            for(let k=0;k<int.length;k++){
                int[k].setAttribute('style','background-color:black');
            }
            if(lvl.innerHTML=="1"){
                clearInterval(arv);
                i=59;
                sec.innerHTML=i;
            }
            if(lvl.innerHTML=="2"){
                clearInterval(tar);
                i=40;
                sec.innerHTML=i;
            }
            if(lvl.innerHTML=="3"){
                clearInterval(anu);
                i=59;
                sec.innerHTML=i;
                j=0;
                min.innerHTML="0"+j;
            }
   game1.setAttribute('style','display:none');
   gameinin.setAttribute('style','display:flex');
   st.innerHTML="Start";
        }   
    },5);
}