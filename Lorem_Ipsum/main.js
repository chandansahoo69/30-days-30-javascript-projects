const text = [
    `He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go.`,
    `The young man wanted a role model. He looked long and hard in his youth, but that role model never materialized. His only choice was to embrace all the people in his life he didn't want to be like.`,
    `It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out. After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected.`,
    `The spot was perfect for camouflage. At least that's what she thought when she picked the spot. She couldn't imagine that anyone would ever be able to see her in these surroundings. So there she sat, confident that she was hidden from the world and safe from danger. Unfortunately, she had not anticipated that others may be looking upon her from other angles, and now they were stealthily descending toward her hiding spot.`,
    `"Begin today!" That's all the note said. There was no indication from where it came or who may have written it. Had it been meant for someone else? Meghan looked around the room, but nobody made eye contact back. For a brief moment, she thought it might be a message for her to follow her dreams, but ultimately decided it was easier to ignore it as she crumpled it up and threw it away.`,
    `Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?`,
    `He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.`,
    `Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.`,
    `There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. The old man used to go to fix fences and do other odd jobs for the farmers around, and while he was gone the old woman, his wife, did the work of the house and worked in their own little plot of land.`,
]

const color = ['danger', 'info', 'warning', 'primary', 'dark', 'success'];

const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');
const form = document.querySelector('form');
form.addEventListener('submit', data);

function data(e) {
    e.preventDefault();
    //default value of input field is string so 
    //convert it to int
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random() * text.length)
    const rancolor = Math.floor(Math.random() * color.length)

    //empty value or -1 or >9 for then show one para
    if (isNaN(value) || value > 9 || value <= 0) {
        result.innerHTML = `<p class="alert alert-${color[rancolor]}">${text[random]}</p>`
    }
    else {
        //we are slicing the value from 0 to 
        //that value user had enter form our 
        //array
        let tempText = text.slice(0, value)
        //we are maping over all the values 
        //and convert all of them to a paragraph 
        //and with join we are convert them as 
        //an element 
        tempText = tempText.map(item => {
            return `<p class="alert alert-${color[rancolor]}">${item}</p>`
        }).join("")
        result.innerHTML = tempText
    }
}