const variable = [
    {
        country: "India",
        president: "Draupadi Murmu",
        state: [{
            stateName: "West Bengal",
            CM: "Mamata Banerjee",
            capital: "Kolkata"
        },
        {
            stateName: "Maharashtra",
            CM: "Shiv Takhre",
            capital: "Mumbai"
        },
        {
            stateName: "Uttar Pradesh",
            CM: "Yogi Adityanath",
            capital: "Lucknow"
        },
        {
            stateName: "Telagana",
            CM: "Ovaishi",
            capital: "Hyderabad"
        },
        {
            stateName: "Delhi",
            CM: "Arvind Kejrival" 
        }
        ]
    },
    {
        country: "Russia",
        president: "Vlamdir Putin"
    },
    {
        country: "USA",
        president: "Joe Bidem"
    },
    {
        country: "UK",
        president: "Rishi Sunak"
    },
    {
        country: "Pakistan",
        president: "Nawaz Shariff"
    },
    {
        country: "Israel",
        president: "Benjamin Tanayu"
    },

    
]

variable.map( (item) => {
    console.log(item.state)
})