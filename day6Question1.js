let details = [
    {
        name:"Susidharan",
        age:23,
        city:"Thanjavur",
        salary:"15000INR",
    },
    {
        name:"KavinArasu",
        age:22,
        city:"Thanjavur",
        salary:"20000INR",
    },
    {
        name:"Ramanathan",
        age:23,
        city:"Chennai",
        salary:"30000INR",
    },
    {
        name:"Raja Durai",
        age:23,
        city:"Tirupur",
        salary:"40000INR",
    },
    {
        name:"Venkatesh",
        age:23,
        city:"Coimbatore",
        salary:"50000INR",
    },
    
];
   function display(superarray ){
       let sethupodu="";
       superarray.forEach(function(detail, index){
           let currentrow=`<tr>
           <td>${index+1}</td>
           <td>${detail.name}</td>
           <td>${detail.age}</td>
           <td>${detail.city}</td>
           <td>${detail.salary}</td>
           <td><button onclick="deletedetails(${indexs})">Delete</button></td>
           </tr>`;
           sethupodu+=currentrow;
       });
   
   document.getElementById("tdata").innerHTML= sethupodu;
    }
    display(details );

  
     
 
 

function searchByName() {
    let searchname=document.getElementById("searchName").value;
   let newdata= details.filter(function( detail){
        return (detail.name.toUpperCase().indexOf(searchname.toUpperCase())!= -1);
    });
    display(newdata);

}

function searchByCity(){
    let searchcity=document.getElementById("searchCity").value;
    let city=details.filter(function(detail){
        return(detail.city.toUpperCase().indexOf(searchcity.toUpperCase())!= -1);

    });
    display(city);
}

function deletedetails(index){
    details.splice(index,1);
    display(details);
}





