state = 
    {  
        one: {count:0,Name:'8 Pm',price:7.50},
        two: {count:0,Name:'Domaine Serene',price:3.00},
        three: {count:0,Name:'Johny Walker',price:9.25},
        four: {count:0,Name:'Turborg',price:6.00},
        five: {count:0,Name:'Kingfisher',price:4.00},
        six: {count:6,Name:'Breezers',price:8.80}
    }

let item=[];

for (let key in state)
{
    let val = state[key];
    
    console.log(val.count);
}

