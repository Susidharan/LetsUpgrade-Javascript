
    let travels=[
    
    ];  

function display (superarray ){
    let tabledata="";

    superarray.forEach(function(bus, index) {
      let currentrow=`<tr>
                      <td>${index+1}</td>
                      <td>${bus.name}</td>
                      <td>${bus.source}</td>
                      <td>${bus.destination}</td>
                      <td>${bus.number}</td>
                      <td>${bus.cap}</td
                    
                      </tr>`;
                  tabledata += currentrow;
                    

                    });
                    document.getElementById("tdata").innerHTML=tabledata;
    }

        display(travels);


function addbus(e) {
    
    e.preventDefault();
    let bus= {};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let cap=document.getElementById('cap').value;
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=Number(number);
    bus.cap=cap;
    
    travels.push(bus);
    localStorage.setItem("travels", JSON.stringify(travels));
  
    display(travels);
   name=document.getElementById('name').value="";
     source=document.getElementById('source').value="";
     destination=document.getElementById('destination').value="";
     number=document.getElementById('number').value="";
     cap=document.getElementById('cap').value="";
}

function searchBySource(){
     
    let searchValueS=document.getElementById("searchsource").value;
    let newsource = travels.filter(function(bus){
        return bus.source.indexOf(searchValueS)!= -1;

    });
    display(newsource);
}
function searchByDestination(){
    

    let searchValueD=document.getElementById("searchdestination").value;
    let newdes= travels.filter(function(bus){
        return bus.destination.indexOf(searchValueD)!= -1;

    });
    display(newdes);
}
