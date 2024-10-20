var ourDog = {
    "name" : "Camper", 
    "legs" : 4,
    "tails": 1,
    "friends" : ["everything"]
};

// Only change code below this line

var myDog = {
    "name" : "Quincy", 
    "legs" : 4,
    "tails": 2,
    "friends" : []
}

var testObj = {
    "hat" : "ballcap",
    "shirt" : "jersey",
    "shoes" : "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj["shoes"]

console.log(shoesValue)

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]

console.log(player)

// We can change the property of objects

ourDog.name = "Happy Camper"
console.log(ourDog.name)

// We can add a new property to an object

ourDog.bark = "bow"

console.log(ourDog)

delete ourDog.bark;

console.log(ourDog)

function phoneticLookup (val) {
    var result = "";

    var lookup  = {
        "alpha" : "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta" : "Denver",
        "echo": "Easy",
        "foxtrot" : "frank"
    };
    result = lookup[val]
    return result;
}

console.log(phoneticLookup("foxtrot"))

var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    } else {
        return "Not Found"
    }
}
console.log(checkObj("gift"))

// Manipulating Complex Objects

var myMusic = [
    {
        "artist" : "Billy Joel", 
        "title" : "Piano Man", 
        "release_year" : "1973", 
        "formats" : [
            "CD",
            "8T",
            "LP"
        ], 
        "gold": true
    },
    {
        "artist" : "Beau Carnes", 
        "title" : "Cereal Man", 
        "release_year" : "2003", 
        "formats" : [
            "Youtube Video",
            "LP"
        ], 
        "gold": true
    }
]


// Accessing Nested Objects

var myStorage = {
    "car" : {
        "inside" :{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)


var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]
console.log(secondTree)

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
        "tracks": [
            "Dancing Queen",
            "Take a Chance on Me"
        ]
    }
};

// Make copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));



function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop]
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection
}

updateRecords(2468, "tracks", "")
console.log(updateRecords(5439, "artist", "ABBA" ))