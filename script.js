   let name=document.getElementById("city").value;
        let btn=document.getElementById("btn");

function weather(){
    
        let name=document.getElementById("city").value;
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=47312e1a81e65d727c4692aa830dcdbd`)
        .then(response=>response.json())
        .then(data=>{const tempc=data.main.temp;
            let humid=data.main.humidity;
            let desc=data.weather[0].description;
            let id1=data.weather[0].id;
        let p=document.getElementById(`p`);
        let cname=document.getElementById(`cname`);
        let q=document.getElementById(`q`);
        let id=document.getElementById(`id`);
        let humid1=document.getElementById(`humid`);
        p.textContent="Temp:"+(tempc-273.).toFixed(1)+"°C";
         humid1.textContent=`humidity:`+humid+"%";
       q.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
        cname.textContent=name.slice(0,1).toUpperCase() + name.slice(1);
        


        if(id1==800){
            id.textContent="☀️";
        }
        else if(id1>=200 && id1<300){
            id.textContent="⛈️";
        }
        else if(id1>=300 && id1<400){
            id.textContent="🌧️";

        }
        else if(id1>=500 && id1<600){
            id.textContent="🌧️";

        }
        else if(id1>=600 && id1<700){
            id.textContent="❄️";

        }
        else if(id1>=700 && id1<800){
            id.textContent="🌪️";

        }
        else if(id1>800 && id1<900){
            id.textContent="☁️";

        }
        

       
    })
    .catch(error=>{
cname.textContent="Enter a Valid City ";

id.textContent="";
 q.textContent = "";
  humid1.textContent="";
   p.textContent="";
    });
        
    
}
