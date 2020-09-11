let data = [
    {
        name:"Susidharan",
        age:23,
        country: "India",
        Hobbies:["netflix", "internet browsing", "Cricket", "Songs"],
    },
    
    {
        name:"Elanchezhian",
        age:23,
        country:"India",
        Hobbies:["cricket", "jogging", "Songs"],
    },
    {
        name:"Vin Diesel",
        age:53,
        country:"USA",
        Hobbies:["Cooking", "Play station", "Watching movies", "Reading"],
    },
     {
        name:"Kavin Arasu",
        age:22,
        country:"India",
        Hobbies:["Aquarium", "youtuber", "Mobile Games"],
    },
    {
        name:"Tom Cruise",
        age:58,
        country:"USA",
        Hobbies:["Fencing", "Sky diving", "Scuba diving"],
    },
    {
        name:"Ramanathan",
        age:23,
        country:"India",
        Hobbies:["Mobile games", "Hangout with GFs",],

    },    

]
console.log("Age below 30")
data.forEach(function(datas) {
    if(datas.age<30)
    {
        console.log(datas);
    }
})

console.log("Indian Residents")
data.forEach(function(datas) {
    if(datas.country=="India")
    {
        console.log(datas);
    }
})



