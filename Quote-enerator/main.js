const quotes = [
    {
        author: 'Brucelee',
        quote: 'Pratice makes a man perfect'
    },
    {
        author: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        author: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
        author: 'Jhon Lennon',
        quote: 'Life is what happens when you arere busy making other plans.'
    },
    {
        author: 'Mother Teresa',
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        author: 'Albert Einstein',
        quote: 'Imagination is more important than knowledge..'
    },
    {
        author: 'APJ Abdul Kalam',
        quote: 'Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.'
    },
    {
        author: 'Plato',
        quote: 'Reality is created by the mind, we can change our reality by changing our mind.'
    },
    {
        author: 'William Shakespeare',
        quote: 'It is not in the stars to hold our destiny but in ourselves.'
    },
    {
        author: 'Earl Nightingale',
        quote: 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.'
    },
    {
        author: 'Brucelee',
        quote: 'The successful warrior is the average man, with laser-like focus.'
    },
    {
        author: 'Steve jobs',
        quote: 'Stay hungry, stay foolish.'
    },
    {
        author: 'Budhha',
        quote: 'All that we are is the result of what we have thought'
    },
    {
        author: 'lec Brown',
        quote: 'Shoot for the moon. Even if you miss, you will land among the stars.'
    }


]
let quoteBtn = document.getElementById('quoteBtn');
let quote = document.getElementById('quote');
let quoteAuthor = document.getElementById('quoteAuthor');

quoteBtn.addEventListener('click', getQuote);
function getQuote(e) {
    console.log('you clicked');
    let randIndex = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '"' + quotes[randIndex].quote + '"';
    quoteAuthor.innerHTML = '- ' + quotes[randIndex].author;
}