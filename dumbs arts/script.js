const gameData = {
    Movies: 
        [
            { title: 'Yeh Dil Hai Mushkil', emojis: ['💔', '🔪'] },
            { title: 'The Lion King', emojis: ['🦁', '👑'] },
            { title: 'Dangal', emojis: ['💪', '👨‍👧‍👧'] },
            { title: 'Jab Tak Hai Jaan', emojis: ['❤️', '💔', '🔥'] },
            { title: 'Zindagi Na Milegi Dobara', emojis: ['🌍', '✈️', '🎉'] },
            { title: 'Lagaan', emojis: ['🏏', '💰'] },
            { title: 'Kabhi Khushi Kabhie Gham', emojis: ['👨‍👩‍👧‍👦', '🎉', '💔'] },
            { title: '3 Idiots', emojis: ['🎓', '🤔', '🎒'] },
            { title: 'Maine Pyar Kiya', emojis: ['💖', '🌹'] },
            { title: 'Dilwale Dulhania Le Jayenge', emojis: ['🇮🇳', '🚂', '💑'] },
            { title: 'Taare Zameen Par', emojis: ['🌍', '🖼️', '🎨'] },
            { title: 'Chennai Express', emojis: ['🚆', '💑', '🎉'] },
            { title: 'Bajrangi Bhaijaan', emojis: ['🕌', '🚶', '💓'] },
            { title: 'Barfi', emojis: ['❤️', '🎭', '🧑‍🦯'] },
            { title: 'Sholay', emojis: ['🤠', '💥', '👮'] },
            { title: 'Kabir Singh', emojis: ['💔', '🚗', '🏥'] },
            { title: 'Dil Chahta Hai', emojis: ['🌊', '👦', '🛶'] },
            { title: 'Raees', emojis: ['💸', '🔫', '👑'] },
            { title: 'Gully Boy', emojis: ['🎤', '🎶', '💥'] },
            { title: 'PK', emojis: ['👽', '🤔', '💥'] },
            { title: 'Inception', emojis: ['🌀', '💭'] },
            { title: 'Avengers', emojis: ['🦸‍♂️', '💥', '👑'] },
            { title: 'The Dark Knight', emojis: ['🦇', '⚖️', '🃏'] },
            { title: 'Interstellar', emojis: ['🚀', '🕳️', '🌌'] },
            { title: 'The Matrix', emojis: ['🖥️', '💻', '🧑‍🏫'] },
            { title: 'Fight Club', emojis: ['👊', '🥊', '💥'] },
            { title: 'The Godfather', emojis: ['🕴️', '💵', '🍝'] },
            { title: 'Gladiator', emojis: ['🛡️', '⚔️', '👑'] },
            { title: 'Jurassic Park', emojis: ['🦖', '🌳', '⚡'] },
            { title: 'The Shawshank Redemption', emojis: ['⛓️', '🕊️', '⚒️'] },
            { title: 'Forrest Gump', emojis: ['👟', '🍫', '🏃‍♂️'] },
            { title: 'Pulp Fiction', emojis: ['🍔', '🔫', '📞'] },
            { title: 'Avatar', emojis: ['🌍', '👽', '💡'] },
            { title: 'Star Wars', emojis: ['👽', '⚔️', '🚀'] },
            { title: 'The Lion King', emojis: ['🦁', '👑', '🌍'] },
            { title: 'Deadpool', emojis: ['🦸‍♂️', '🔪', '🤬'] },
            { title: 'Titanic', emojis: ['🚢', '💑', '❄️'] },
            { title: 'The Pursuit of Happyness', emojis: ['💼', '🚶', '💰'] },
            { title: 'The Wolf of Wall Street', emojis: ['💰', '🏙️', '🐺'] },
            { title: 'La La Land', emojis: ['🎶', '💃', '❤️'] },
            { title: 'Memento', emojis: ['🧠', '📝', '🔍'] },
            { title: 'Shutter Island', emojis: ['🏝️', '💡', '🧠'] },
            { title: 'The Prestige', emojis: ['🎩', '🎭', '🧳'] },
            { title: 'Inglourious Basterds', emojis: ['🔫', '💥', '🇩🇪'] },
            { title: 'No Country for Old Men', emojis: ['🔫', '💀', '🇺🇸'] },
            { title: 'The Revenant', emojis: ['🐻', '❄️', '💔'] },
            { title: 'A Clockwork Orange', emojis: ['🕒', '🔪', '🍊'] },
            { title: 'Donnie Darko', emojis: ['🐇', '⏳', '💭'] },
            { title: 'Trainspotting', emojis: ['🚂', '💉', '🏙️'] },
            { title: 'The Big Lebowski', emojis: ['🍸', '🕶️', '👨‍🦰'] },
            { title: 'Requiem for a Dream', emojis: ['💊', '💔', '🎭'] },
            { title: 'Eternal Sunshine of the Spotless Mind', emojis: ['🧠', '💔', '☀️'] },
            { title: 'A Beautiful Mind', emojis: ['🧠', '🏆', '💔'] },
            { title: 'Se7en', emojis: ['7️⃣', '💀', '🔪'] },
            { title: 'American Psycho', emojis: ['💵', '🔪', '💼'] },
            { title: 'The Godfather: Part II', emojis: ['🕴️', '💵', '👨‍👩‍👧‍👦'] },
            { title: 'There Will Be Blood', emojis: ['🛢️', '💰', '⚔️'] },
            { title: 'Revolver', emojis: ['🔫', '💰', '🧑‍🦱'] },
            { title: 'Oldboy', emojis: ['🔪', '⛓️', '🍽️'] },
            { title: 'Birdman', emojis: ['🐦', '🎭', '🧑‍🦰'] },
            { title: 'Inception', emojis: ['🌀', '💭'] },
            { title: 'Avengers', emojis: ['🦸‍♂️', '💥', '👑'] },
            { title: 'The Dark Knight', emojis: ['🦇', '⚖️', '🃏'] },
            { title: 'Memento', emojis: ['🧠', '📝', '🔍'] },
            { title: 'Shutter Island', emojis: ['🏝️', '💡', '🧠'] }
        ],
    Songs: [
        { title: 'Shape of You', emojis: ['🎤', '💃'] },
        { title: 'Let it Be', emojis: ['🎸', '🎶'] },
        { title: 'Blinding Lights', emojis: ['🎹', '🌟'] },
        { title: 'Rolling in the Deep', emojis: ['🎶', '💔'] },
        { title: 'Havana', emojis: ['💃', '🇨🇺'] },
        { title: 'Uptown Funk', emojis: ['🎺', '💃'] },
        { title: 'Bohemian Rhapsody', emojis: ['🎤', '🎶', '🎸'] },
        { title: 'Dance Monkey', emojis: ['🎤', '🦧', '💃'] },
        { title: 'Faded', emojis: ['🎶', '🔴'] },
        { title: 'Bad Guy', emojis: ['🎶', '👤'] },
        { title: 'Someone Like You', emojis: ['🎶', '💔'] },
        { title: 'Perfect', emojis: ['🎶', '❤️'] },
        { title: 'Eye of the Tiger', emojis: ['🐯', '🎶'] },
        { title: 'All of Me', emojis: ['🎶', '❤️'] },
        { title: 'Happy', emojis: ['🎶', '😊'] },
        { title: 'Thriller', emojis: ['🎶', '🧟‍♂️'] },
        { title: 'Shallow', emojis: ['🎶', '🌊'] },
        { title: 'Take Me to Church', emojis: ['🎶', '⛪'] },
        { title: 'Uptown Funk', emojis: ['🎷', '🕺'] }
    ],
    WebSeries: [
        { title: 'Stranger Things', emojis: ['👧', '🚲', '👽'] },
        { title: 'Money Heist', emojis: ['🏦', '💰', '🔫'] },
        { title: 'Narcos', emojis: ['💵', '⚖️', '🇲🇽'] },
        { title: 'Breaking Bad', emojis: ['💀', '🍪', '💉'] },
        { title: 'Friends', emojis: ['👫', '🏙️', '🍕'] },
        { title: 'Squid Game', emojis: ['🎲', '🦑', '🏅'] },
        { title: 'The Crown', emojis: ['👑', '🇬🇧', '🎭'] },
        { title: 'Dark', emojis: ['⏳', '🌀', '⚡'] },
        { title: 'The Witcher', emojis: ['⚔️', '🦄', '🧙‍♂️'] },
        { title: 'Stranger Things', emojis: ['👽', '🚲', '🔒'] },
        { title: 'The Boys', emojis: ['👊', '💥', '🦸‍♂️'] },
        { title: 'Black Mirror', emojis: ['📱', '💻', '🤖'] },
        { title: 'House of Cards', emojis: ['🏛️', '💼', '🎭'] },
        { title: 'The Mandalorian', emojis: ['🦸‍♂️', '🚀', '👽'] },
        { title: 'Peaky Blinders', emojis: ['💼', '🏙️', '🔫'] },
        { title: 'Mindhunter', emojis: ['🔪', '🧠', '🚔'] },
        { title: 'The Office', emojis: ['🏢', '💼', '😆'] },
        { title: 'Lupin', emojis: ['🕴️', '💰', '🇫🇷'] },
        { title: 'Fleabag', emojis: ['💃', '🎭', '💔'] },
        { title: 'Killing Eve', emojis: ['🔪', '💼', '💋'] }
    ],
    Animals: [
        { title: 'Lion', emojis: ['🦁'] },
        { title: 'Tiger', emojis: ['🐯'] },
        { title: 'Elephant', emojis: ['🐘'] },
        { title: 'Cat', emojis: ['🐱'] },
        { title: 'Dog', emojis: ['🐶'] },
        { title: 'Giraffe', emojis: ['🦒'] },
        { title: 'Penguin', emojis: ['🐧'] },
        { title: 'Koala', emojis: ['🐨'] },
        { title: 'Kangaroo', emojis: ['🦘'] },
        { title: 'Snake', emojis: ['🐍'] },
        { title: 'Crocodile', emojis: ['🐊'] },
        { title: 'Monkey', emojis: ['🐒'] },
        { title: 'Zebra', emojis: ['🦓'] },
        { title: 'Bear', emojis: ['🐻'] },
        { title: 'Fox', emojis: ['🦊'] },
        { title: 'Wolf', emojis: ['🐺'] },
        { title: 'Horse', emojis: ['🐴'] },
        { title: 'Camel', emojis: ['🐪'] },
        { title: 'Rhinoceros', emojis: ['🦏'] },
        { title: 'Panda', emojis: ['🐼'] }
    ],
    Landmarks: [
        { title: 'Eiffel Tower', emojis: ['🗼', '🇫🇷'] },
        { title: 'Taj Mahal', emojis: ['🏰', '🇮🇳'] },
        { title: 'Great Wall of China', emojis: ['🏯', '🇨🇳'] },
        { title: 'Mount Everest',  emojis: ['🏔️', '🇧🇹'] },
        { title: 'Pyramids of Giza', emojis: ['🏜️', '🇪🇬'] },
        { title: 'Machu Picchu', emojis: ['🏞️', '🇵🇪'] },
        { title: 'Statue of Liberty', emojis: ['🗽', '🇺🇸'] },
        { title: 'Sydney Opera House', emojis: ['🏛️', '🇦🇺'] },
        { title: 'Christ the Redeemer', emojis: ['⛪', '🇧🇷'] },
        { title: 'Colosseum', emojis: ['🏟️', '🇮🇹'] },
        { title: 'Big Ben', emojis: ['🕰️', '🇬🇧'] },
        { title: 'Mona Lisa', emojis: ['🖼️', '🇫🇷'] },
        { title: 'Neuschwanstein Castle', emojis: ['🏰', '🇩🇪'] },
        { title: 'Stonehenge', emojis: ['🪨', '🇬🇧'] },
        { title: 'Petra', emojis: ['🏛️', '🇯🇴'] },
        { title: 'Angkor Wat', emojis: ['🏰', '🇰🇭'] },
        { title: 'Grand Canyon', emojis: ['🏞️', '🇺🇸'] },
        { title: 'The Parthenon', emojis: ['🏛️', '🇬🇷'] },
        { title: 'Table Mountain', emojis: ['⛰️', '🇿🇦'] },
        { title: 'Sagrada Familia', emojis: ['⛪', '🇪🇸'] },
        { title: 'Buckingham Palace', emojis: ['🏰', '🇬🇧'] },
        { title: 'Golden Gate Bridge', emojis: ['🌉', '🇺🇸'] }
    ],
    Celebrities: [
        { title: 'Will Smith', emojis: ['👨‍🦱', '🎬', '🎤'] },
        { title: 'Priyanka Chopra', emojis: ['💃', '🎥', '🇮🇳'] },
        { title: 'Dwayne Johnson', emojis: ['💪', '🎬', '🤼'] },
        { title: 'Beyoncé', emojis: ['🎤', '💃', '⭐'] },
        { title: 'Taylor Swift', emojis: ['🎤', '🎶', '🇺🇸'] },
        { title: 'Lionel Messi', emojis: ['⚽', '🇦🇷'] },
        { title: 'Cristiano Ronaldo', emojis: ['⚽', '🇵🇹'] },
        { title: 'Emma Watson', emojis: ['🎬', '💖', '📚'] },
        { title: 'Ariana Grande', emojis: ['🎤', '🎶', '💁‍♀️'] },
        { title: 'Robert Downey Jr.', emojis: ['🦸‍♂️', '🎬'] },
        { title: 'Jennifer Lawrence', emojis: ['🎬', '💔', '💃'] },
        { title: 'Tom Hanks', emojis: ['🎬', '💡', '🎭'] },
        { title: 'Scarlett Johansson', emojis: ['🦸‍♀️', '🎬', '💄'] },
        { title: 'Shah Rukh Khan', emojis: ['🎬', '🎤', '🇮🇳'] },
        { title: 'Johnny Depp', emojis: ['🎬', '💀', '🧭'] },
        { title: 'Kim Kardashian', emojis: ['📸', '💄', '💋'] },
        { title: 'Keanu Reeves', emojis: ['🎬', '🚗', '🎭'] },
        { title: 'Kylie Jenner', emojis: ['💋', '💄', '📸'] },
        { title: 'Brad Pitt', emojis: ['🎬', '💥', '💪'] }
    ],
    Books: [
        { title: 'Harry Potter', emojis: ['🧙‍♂️', '📚', '⚡'] },
        { title: 'The Great Gatsby', emojis: ['🍸', '🏙️', '💔'] },
        { title: 'To Kill a Mockingbird', emojis: ['⚖️', '🐦', '📖'] },
        { title: '1984', emojis: ['📚', '👁️', '🔒'] },
        { title: 'The Catcher in the Rye', emojis: ['⚾', '🍃', '📖'] },
        { title: 'Pride and Prejudice', emojis: ['❤️', '💃', '📚'] },
        { title: 'The Alchemist', emojis: ['🧙‍♂️', '💰', '✨'] },
        { title: 'Moby Dick', emojis: ['🐋', '⚓', '📚'] },
        { title: 'The Lord of the Rings', emojis: ['💍', '🧙‍♂️', '🌍'] },
        { title: 'The Hunger Games', emojis: ['🏹', '🔥', '📚'] },
        { title: 'Crime and Punishment', emojis: ['⚖️', '🔪', '💭'] },
        { title: 'The Book Thief', emojis: ['📚', '⚰️', '🌟'] },
        { title: 'Frankenstein', emojis: ['⚡', '💀', '🧑‍🔬'] },
        { title: 'The Odyssey', emojis: ['⛵', '🏝️', '⚔️'] },
        { title: 'Jane Eyre', emojis: ['❤️', '🏰', '💔'] },
        { title: 'The Picture of Dorian Gray', emojis: ['🖼️', '💀', '🎨'] },
        { title: 'Wuthering Heights', emojis: ['🏞️', '❤️', '⚡'] },
        { title: 'Brave New World', emojis: ['👁️', '🔬', '📖'] },
        { title: 'The Little Prince', emojis: ['👑', '🌍', '🌟'] }
    ],
    Quotes: [
        { title: '“To be, or not to be.”', emojis: ['🎭', '🧠'] },
        { title: '“I think, therefore I am.”', emojis: ['🧠', '💭'] },
        { title: '“All that glitters is not gold.”', emojis: ['💰', '✨'] },
        { title: '“A picture is worth a thousand words.”', emojis: ['📸', '🖼️'] },
        { title: '“The only thing we have to fear is fear itself.”', emojis: ['😨', '👊'] },
        { title: '“Do not go gentle into that good night.”', emojis: ['🌙', '🌙'] },
        { title: '“I am the master of my fate.”', emojis: ['👑', '⚔️'] },
        { title: '“The only way to do great work is to love what you do.”', emojis: ['❤️', '💻'] },
        { title: '“It is not length of life, but depth of life.”', emojis: ['⏳', '💭'] },
        { title: '“The truth will set you free.”', emojis: ['🗣️', '💬'] },
        { title: '“Life is what happens when you’re busy making other plans.”', emojis: ['🔄', '💭'] },
        { title: '“The best way to predict the future is to create it.”', emojis: ['💡', '🛠️'] },
        { title: '“In three words I can sum up everything I’ve learned about life: It goes on.”', emojis: ['💭', '⏳'] },
        { title: '“That which does not kill us makes us stronger.”', emojis: ['💪', '⚔️'] },
        { title: '“It always seems impossible until it’s done.”', emojis: ['🔒', '🔑'] },
        { title: '“Life is really simple, but we insist on making it complicated.”', emojis: ['😌', '🔄'] },
        { title: '“The unexamined life is not worth living.”', emojis: ['💭', '💡'] },
        { title: '“Happiness depends upon ourselves.”', emojis: ['😊', '💭'] },
        { title: '“The only true wisdom is in knowing you know nothing.”', emojis: ['💭', '🤔'] }
    ],
    FoodAndDrinks: [
        { title: 'Pizza', emojis: ['🍕'] },
        { title: 'Burger', emojis: ['🍔'] },
        { title: 'Pasta', emojis: ['🍝'] },
        { title: 'Sushi', emojis: ['🍣'] },
        { title: 'Ice Cream', emojis: ['🍦'] },
        { title: 'Tacos', emojis: ['🌮'] },
        { title: 'French Fries', emojis: ['🍟'] },
        { title: 'Cake', emojis: ['🍰'] },
        { title: 'Pancakes', emojis: ['🥞'] },
        { title: 'Donuts', emojis: ['🍩'] },
        { title: 'Salad', emojis: ['🥗'] },
        { title: 'Steak', emojis: ['🥩'] },
        { title: 'Samosa', emojis: ['🥟'] },
        { title: 'Popcorn', emojis: ['🍿'] },
        { title: 'Soda', emojis: ['🥤'] },
        { title: 'Lemonade', emojis: ['🍋', '🥤'] },
        { title: 'Coffee', emojis: ['☕'] },
        { title: 'Wine', emojis: ['🍷'] },
        { title: 'Beer', emojis: ['🍺'] }
    ]
};

let currentCategory = '';
let currentItem = null;
let timer = null;
let timeLeft = 10; // Timer resets to 10 seconds for each guess
let score = 0;

// Navigate to a category
function navigateToCategory(category) {
    window.history.pushState({ category }, '', `/${category}`);
    currentCategory = category;
    currentItem = null;
    score = 0;

    // Hide the categories and show the game area
    document.querySelector('.Categories').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';

    // Update score and timer
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

    // Start the game
    startGame();
}

// Start the game
function startGame() {
    if (!gameData[currentCategory]) {
        showNotification('Category not found!', 'error');
        return;
    }

    loadNewItem();
}

// Load a new item
function loadNewItem() {
    const items = gameData[currentCategory];
    currentItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById('emojiClue').innerText = currentItem.emojis.join(' ');
    document.getElementById('userGuess').value = '';
    document.getElementById('feedback').innerText = '';

    resetAndStartTimer();
}

// Start or reset the timer
function resetAndStartTimer() {
    clearInterval(timer); // Clear any existing timer
    timeLeft = 60; // Reset timer to 10 seconds
    document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = 'Time’s up! ⌛';
            loadNewItem(); // Automatically load the next item
        }
    }, 1000);
}

// Check the user's guess
function checkGuess() {
    const userGuess = document.getElementById('userGuess').value.trim().toLowerCase();
    const correctAnswer = currentItem.title.toLowerCase();

    if (userGuess === correctAnswer) {
        score += 10; // Increase score
        document.getElementById('feedback').innerText = 'Correct! 🎉';
        document.getElementById('score').innerText = `Score: ${score}`;
        loadNewItem(); // Load next item and reset timer
    } else {
        document.getElementById('feedback').innerText = 'Try again! ❌';
    }
}

// End the game
function endGame() {
    clearInterval(timer);
    showNotification(`Game over! Your score: ${score}`, 'info');
    resetGame();
}

// Reset the game
function resetGame() {
    clearInterval(timer);
    score = 0;

    // Show categories and hide game area
    document.querySelector('.Categories').style.display = 'flex';
    document.querySelector('#gameArea').style.display = 'none';
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
