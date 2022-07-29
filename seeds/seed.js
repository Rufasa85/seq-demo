require("dotenv").config();
const sequelize = require("../config/connection");

const {User,Kitten,Toy} = require("../models");

const userObj = [
    {
        username:"joejoe",
        email:"joe@joe.joe",
        password:"password"
    },
    {
        username:"catma",
        email:"cat@joe.joe",
        password:"password1"
    },
    {
        username:"pspspsppspsps",
        email:"extracat@joe.joe",
        password:"password1!"
    },
]

const kittenObjs = [
    {
        name:"Shiva",
        color:"Tortie",
        isCute:true,
        nickname:"Lil Sheeves",
        UserId:1
    },
    {
        name:"Bahamut",
        color:"Orange Tabby",
        isCute:true,
        nickname:"BH",
        UserId:1
    },
    {
        name:"Sir Reginald Floofbottom III",
        color:"Gray",
        isCute:true,
        nickname:"Reggie",
        UserId:3
    }
]

const toyObj = [
    {
        name:"doormouse",
        description:"its a mouse on an elastic string that hangs in a door frame.  I love it so much when daddy moves it.  ",
        KittenId:1
    },
    {
        name:"my tail",
        description:"Even though I am a full grown adult cat I still love to chase my tail.  Once i chased it so hard i fell of the mantle because I am a big dork",
        KittenId:1
    },
    {
        name:"RC car",
        description:"It has a feather and I will chase it all day",
        KittenId:3
    }
]


const seedMe = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate(userObj,{individualHooks:true});
    const kittens = await Kitten.bulkCreate(kittenObjs);
    const toys = await Toy.bulkCreate(toyObj); 
    console.log("data seeded!");
    process.exit(0);
}

seedMe();