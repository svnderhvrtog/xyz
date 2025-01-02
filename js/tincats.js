const swipeCatName = document.getElementById('swipe-catname');
const swipeCatDescription = document.getElementById('swipe-description');
const swipeCatContainer = document.getElementById('swipe-container');

const catNames = ['Angel', 'Bailey', 'Beverly', 'Callie', 'Eleanor', 'Ellie', 'Georgia', 'Gigi', 'Gladis', 'Honey', 'June', 'Maisy', 'Margot', 'Millie',
                  'Penny', 'Piper', 'Roxie', 'Sally', 'Sheba', 'Alvin', 'Aimsley', 'Andy', 'Bobby', 'Bubba', 'Charlie', 'George', 'Odie', 'Ralphie', 'Ricky',
                  'Theodore', 'Tubby', 'Wally', 'Winston', 'Ash', 'Aster', 'Basil', 'Buttercup', 'Camellia', 'Dahlia', 'Daisy', 'Daffodil', 'Dandelion', 'Fern',
                  'Flower', 'Holly', 'Iris', 'Ivy', 'Jasmine', 'Jude', 'Lavender', 'Lily', 'Magnolia', 'Maple', 'Mulberry', 'Pansy', 'Peppermint', 'Petunia',
                  'Poppy', 'Rose', 'Rosemary', 'Sage', 'Thyme', 'Tulip', 'Violet', 'Willow', 'Apple', 'Basil', 'Blueberry', 'Caraway', 'Cardamom', 'Celery',
                  'Cherry', 'Chili', 'Clementine', 'Clove', 'Cocoa', 'Cookie', 'Gelato', 'Ginger', 'Hazel', 'Kiwi', 'Mango', 'Nacho', 'Nugget', 'Nutmeg',
                  'Oreo', 'Okra', 'Paprika', 'Peaches', 'Pepper', 'Pumpkin', 'Sage', 'Snickers', 'Soda Pop', 'Sugar', 'Tomato', 'Twix', 'Blackie', 'Dobby',
                  'Dumbledore', 'Fleur', 'Fluffy', 'Ginny', 'Hedwig', 'Hermione', 'Luna', 'Malfoy', 'Mrs. Norris', 'Norbert', 'Padfoot', 'Pixie', 'Sirius',
                  'Weasley', 'Babe', 'Bambino', 'Beckham', 'Bolt', 'Brady', 'Clark', 'Jackie', 'Kobe', 'Lamar', 'Magic', 'Patrick', 'Sue', 'Tiger', 'Venus',
                  'Brando', 'Bullock',  'Butch', 'Dolly', 'Hemsworth', 'Hudson', 'Kardashian', 'Kylie', 'Mel', 'Monroe', 'Newman', 'Niro', 'Reynolds', 'Winfrey',
                  'Billie', 'Beyonce', 'Bowie', 'Bruno', 'Bruce', 'Cash', 'Chance', 'Chris', 'Cyrus', 'Dylan', 'Elvis', 'Elton', 'Frank', 'Harry', 'John',
                  'Legend', 'Lennon', 'Lizzo', 'Madonna', 'Mozart', 'Ozzy', 'Prince', 'Purry', 'Ringo', 'Sinatra', 'Stevie', 'Usher', 'Ziggy', 'Alice',
                  'Bella', 'Boo', 'Cheshire', 'Darcy', 'Eeyore', 'Edward', 'Gatsby', 'Jacob', 'Jo', 'Pippi', 'Radley', 'Rue', 'Sawyer', 'Scout', 'Tigger',
                  'Aristocat', 'Ariel', 'Baloo', 'Beast', 'Bambi', 'Belle', 'Elsa', 'Goofy', 'Isabela', 'Jasmine', 'Lilo', 'Max', 'Mickey', 'Mochi',
                  'Mirabel', 'Minnie', 'Moana', 'Mushu', 'Nala', 'Olaf', 'Oliver', 'Pepa', 'Pluto', 'Rufus', 'Scar', 'Simba', 'Stitch', 'Coco', 'Dash',
                  'Doc', 'Doug', 'Dory', 'Edna', 'Jessie', 'Luca', 'Mater', 'McQueen', 'Merida', 'Miguel', 'Mike', 'Rex', 'Remy', 'Russell', 'Sulley',
                  'Violet', 'Wall-e', 'Woody', 'Bucky', 'Captain', 'Carter', 'Flash', 'Fury', 'Groot', 'Hawkeye', 'Hulk', 'Joker', 'Loki', 'Marvel', 'Nebula',
                  'Parker', 'Robin', 'Shuri', 'Thor', 'Bert', 'Blue', 'Buyo', 'Chi', 'Cosmo', 'Daffy', 'Elmo', 'Ernie', 'Garfield', 'Jiji', 'Kermit', 'Oscar',
                  'Patrick', 'Scooby', 'Sylvester', 'Tom', 'Tweety', 'Winnie', 'Apalachicola', 'Charlotte', 'Dixie', 'Georgia', 'Houston', 'Magnolia', 'Monroe',
                  'Montgomery', 'Nash', 'Oxford', 'Pensacola', 'Ranger', 'Savanna', 'Tupelo', 'Virginia'];

swipeCatName.innerText = catNames[Math.floor(Math.random() * catNames.length)]

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_RTbWauJOcdV0lg1q6USUaTlhhCyHJsBBkFe6TO0FrGS8Ha6eOTMMJhVpgaub8Hzv"
});

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
.then(response => response.json())
.then(data => { 
    console.log(data)
    swipeCatContainer.style.backgroundImage = `url(${data[0].url})`
    swipeCatDescription.innerText = data[0].breeds[0].description
})
.catch(error => console.log('this is wrong:' + error))





const dogs = [
    {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },{
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]

// Create the Dog class here