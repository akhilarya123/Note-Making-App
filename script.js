let x=document.getElementById("newsubject");

var count=0;
var dic={};
var l=[];
x.addEventListener("click",function(){
	if(count<1){
		count=count+1;
		var subj = prompt("Please enter your Subject name");
		l.push(subj);
		dic[subj]=count;
		document.getElementById("notebox").innerHTML="<div class='subject'>" +"<h1 id='home2'>"+subj+"</h1>"+"</div>";
	}
	else{
		var subj = prompt("Please enter your Subject name");
		if(dic[subj]==undefined){
			count=count+1;
			dic[subj]=count;
			l.push(subj);
			document.getElementById("notebox").innerHTML=document.getElementById("notebox").innerHTML+"<div class='subject'>" +"<h1 id='home2'>"+subj+"</h1>"+"</div>";
		}
		else{
			alert("Oops subject is already there , Enter a new name");
		}
		
	}
	
})


let y=document.getElementById("newnote");

let nt_count={};

y.addEventListener("click",function(){
	var subject_list=[]= document.getElementsByClassName("subject");
	var qry= prompt("Please enter your Subject where you wish to add note");
	if(dic[qry]==undefined){
		alert("Oops , there is no subject with that name , try again");
	}
	else{
		var nte= prompt("Please enter the note you want to add");
		if(nte==null || nte==""){
			alert("It was a null note");
		}
		else{
				if(nt_count[qry]==undefined){
				nt_count[qry]=0;
				subject_list[dic[qry]-1].innerHTML =subject_list[dic[qry]-1].innerHTML+"<p></p>";
				}
			
				nt_count[qry]=nt_count[qry]+1;
				subject_list[dic[qry]-1].innerHTML =subject_list[dic[qry]-1].innerHTML+"<p></p>"+nt_count[qry]+" ) "+nte;
			
		}
		
		
	}
})





