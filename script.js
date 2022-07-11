

var b = 0;
var inver = "";
var cal = "";
var judge = false;
var len =0;
var pow ="";
var pIndex = 0;
var newC = "";

var xcal = "";
var xjudge = false;
var xlen =0;
var xpow ="";
var xpIndex = 0;
var xnewC = "";
check = true;


var create = document.querySelector("#tt");
function method(a,b,c,d){
    create.innerHTML = `<td><input type="button" value="Inv" onclick="inverse()"/></td>
     
    <td><input type="button" id="dg" value="Deg" onclick = "degOrRad()"/></td>
    <td><input type="button" id="si" value="sin${a}" onclick="display('sin${a}&#40;'); add('${c}Math.${b}sin&#40;${d}')" /></td>
    <td><input type="button" id="co" value="cos${a}" onclick="display('cos${a}&#40;'); add('${c}Math.${b}cos&#40;${d}')" /></td>
    <td><input type="button" id="ta" value="tan${a}" onclick="display('tan${a}&#40;'); add('${c}Math.${b}tan&#40;${d}')" /></td>`;
}
method("","","","(Math.PI/180)*");
const sin = document.getElementById("si");
const cos = document.getElementById("co");
const tan = document.getElementById("ta");


function clearScreen(){
    document.getElementById("result").value ="";
    cal ="";
}

function del(){
    var a = document.getElementById("result").value+"";
    document.getElementById("result").value = a.substring(0,a.length-1);
    cal = cal+"";
    cal = cal.substring(0,cal.length-1);
}

function funct(s,t,q){
    sin.setAttribute("onclick","display('sin('); add('"+q+"Math."+t+"sin("+s+"')");
    cos.setAttribute("onclick","display('cos('); add('"+q+"Math."+t+"cos("+s+"')");
    tan.setAttribute("onclick","display('tan('); add('"+q+"Math."+t+"tan("+s+"')");
}


function inverse(){
    check = !check;
    if(check){
        method("","","","(Math.PI/180)*"); inver = "";
    }else{
        method("&#8315;&#185;","a","(180/Math.PI)*",""); inver ="a";
    }
}

var validate = true;
function degOrRad(){
    validate = !validate;
    if(validate){
        funct("",inver,"180/Math.PI");
        document.querySelector("#dg").setAttribute("value","Deg");
    }else{
        funct("",inver,"");
        document.querySelector("#dg").setAttribute("value","Rad");
    }
}

function power(m){

    var index1  = cal.length-1;
    len = index1;
    var arr = m.split('');
    pIndex = m.indexOf('Q');

    if(m.includes('*')||m.includes('+')||m.includes('-')||m.includes('/')||m.includes('(')){
        
        while(!(arr[len]=='*' || arr[len]=='+' || arr[len]=='-' || arr[len]=='/' || arr[len]=='(')){
            len -= 1;
        }

        var cut = len;
        
        pow = m.substring(cut+1,pIndex);
        judge = true;
    }
    else{
        pow = m.substring(0,pIndex);
        judge = false;
    }    
}  
power(cal);

function expo(m){

    var xindex1  = cal.length-1;
    xlen = xindex1;
    var xarr = m.split('');
    xIndex = m.indexOf('Z');

    if(m.includes('+')||m.includes('-')||m.includes('/')||m.includes('(')){
        
        while(!(xarr[xlen]=='+' || xarr[xlen]=='-' || xarr[xlen]=='/' || xarr[xlen]=='(')){
            xlen -= 1;
        }

        var xcut = xlen;
        xpow = m.substring(xcut+1,xIndex-1);
        xjudge = true;
    }
    else{
        xpow = m.substring(0,xIndex-1);
        xjudge = false;
    }
}  
expo(cal);

    
function factorial(val){    
    var num = val;
    if(val===0){
        return 1;
    }
    else{
        for(let i=val-1;i>0;i--){
            num *= i;
        }
    }
    return num;
}

function add(val){
    
    if(val == "=")
    {
        b = eval(cal);
        document.getElementById("result").value = Number(b.toFixed(14));
        cal = b;
    }
    else if(val==='Q'){
        cal = cal + val;
        power(cal);
    }
    else if(val==='Z'){
        cal = cal + "*" +val;
        expo(cal);
    }
    else{
        cal= cal + val;
        if(cal.includes('Q')){
            var i = 0;
            if(cal.includes(')')&&cal.indexOf(')')>cal.indexOf('Q')){
            for( i=pIndex;i< cal.length;i++){
                if(cal.charAt(i)===')'){
                    newC = eval(cal.substring(pIndex+1,i));
                    break;
                }
            }
            if(judge){
                
                cal = eval(cal.slice(0,len))+Math.pow(pow,newC)+cal.substring(i+1);
            
                while(cal.includes("Q"))
                    power(cal);
                judge = false;
    
            }
            else{
                cal = Math.pow(pow,newC)+cal.substring(i+1);
            }
            document.getElementById("result").value = cal;
        }}
        if(cal.includes('Z')){
            var xi = 0;
            if(cal.includes(')')&&cal.indexOf(')')>cal.indexOf('Z')){
            for( xi=xIndex;xi< cal.length;xi++){
                if(cal.charAt(xi)===')'){
                    xnewC = eval(cal.substring(xIndex+1,xi));
                    break;
                }
            }
            if(xjudge){
                cal = eval(cal.slice(0,xlen))+xpow *Math.pow(10,xnewC)+cal.substring(xi+1);
            
                while(cal.includes("Z"))
                    expo(cal);
                xjudge = false;
    
            }
            else{
                cal =xpow * Math.pow(10,xnewC)+cal.substring(xi+1);
            }
            document.getElementById("result").value = cal;
        }}
        
}}


function display(value){
    if(value==="="){}
    else{
    document.getElementById("result").value +=value;}
}
