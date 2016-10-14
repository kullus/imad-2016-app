//counter code

var button=document.getElementById('counter');
var counter=0;

button.onclick=function(){
//make a request to  counter endpoint
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.ready.State===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.response.text;
            }
        }
        //not done yet
    }
    counter=counter+1;
    var span=getElementById('count');
    span.innerHTML=counter.toString();
};