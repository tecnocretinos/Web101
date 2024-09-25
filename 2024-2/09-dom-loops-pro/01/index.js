const moviePhrases = [
    "I'll be back.",
    "Here's looking at you, kid.",
    "May the Force be with you.",
    "There's no place like home.",
    "You talking to me?",
    "I coulda been a contender.",
    "I'm gonna make him an offer he can't refuse.",
    "To infinity and beyond!",
    "I'll have what she's having.",
    "You can't handle the truth!",
    "Houston, we have a problem.",
    "I see dead people.",
    "There's no crying in baseball!",
    "I'm the king of the world!",
    "You had me at hello.",
    "Life is like a box of chocolates.",
    "Keep the change, ya filthy animal!",
    "Nobody puts Baby in a corner.",
    "Inconceivable!",
    "Just keep swimming.",
    "It's alive! It's alive!",
    "Why so serious?",
    "I'm the one who knocks!",
    "You complete me.",
    "After all, tomorrow is another day.",
    "You shall not pass!",
    "I am your father.",
    "What we've got here is failure to communicate.",
    "It's a trap!",
    "E.T. phone home.",
    "The name's Bond, James Bond.",
    "Say hello to my little friend!",
    "I’m not a smart man, but I know what love is.",
    "You're gonna need a bigger boat.",
    "Carpe Diem. Seize the day, boys.",
    "I am Groot.",
    "Get busy living, or get busy dying.",
    "You can't fight in here! This is the War Room!",
    "Just when I thought I was out, they pull me back in.",
    "I'm not bad. I'm just drawn that way.",
    "Keep the change, ya filthy animal!",
    "What we've got here is failure to communicate.",
    "You had me at 'hello.'",
    "I'm too old for this shit.",
    "You complete me.",
    "I want the truth!",
    "I'm king of the world!",
    "We're not in Kansas anymore.",
    "It's not the years, honey, it's the mileage.",
    "You can't handle the truth!",
    "I coulda been a contender.",
    "You had me at 'hello.'",
    "I’m king of the world!",
    "You had me at 'hello.'",
    "To infinity and beyond!",
    "You can't fight in here! This is the War Room!",
    "You talking to me?",
    "Why so serious?",
    "You shall not pass!",
    "There's no crying in baseball!",
    "I'll have what she's having.",
    "I'm the king of the world!",
    "You can't handle the truth!",
    "I see dead people.",
    "I'm not a smart man, but I know what love is.",
    "It's a trap!",
    "I'm too old for this shit.",
    "Life is like a box of chocolates.",
    "Get busy living, or get busy dying.",
    "Say hello to my little friend!",
    "After all, tomorrow is another day.",
    "I want the truth!",
    "Inconceivable!",
    "You had me at 'hello.'",
    "What we've got here is failure to communicate.",
    "You complete me.",
    "Just keep swimming.",
    "You can't fight in here! This is the War Room!",
    "You talking to me?",
    "I'm the one who knocks!",
    "I'm not bad. I'm just drawn that way.",
    "You had me at 'hello.'",
    "I'll be back.",
    "To infinity and beyond!",
    "Life is like a box of chocolates."
];

const container = document.getElementById("container")

function renderPhrases(list) {
    container.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        const phrase = list[i]
        container.innerHTML += `
        <div class="quote-item">
            <input type="checkbox">
            <p>${phrase}</p>
        </div>
        `
    }
}

function search() {
    const input = document.getElementById("input")
    const value = input.value
    if(value === "") {
        renderPhrases(moviePhrases)
    } else {
        let list = []
        for(let i = 0; i < moviePhrases.length; i++) {
            const phrase = moviePhrases[i]
            if(phrase.includes(value)) {
                list.push(phrase)
            }
        }
        
        renderPhrases(list)
    }
}


renderPhrases(moviePhrases)