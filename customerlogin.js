const add=document.querySelector("#b1");


add.addEventListener('click',async()=>{
    const name=String(document.querySelector("#name").value);
    const pass=String(document.querySelector("#pass").value);
    
    if(name==""||pass=="") {
        alert("ENTER YOUR DETAILS");
    }
    
        else{
           
        fetch('http://localhost:5000/cuslog',{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                pass:pass                
            })
        })
        .then(async(e)=>{
            alert(e);
            alert("LOGIN SUCCESSFULL");
            
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })
       
        }}

)