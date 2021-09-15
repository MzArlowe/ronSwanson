// console.log(document);
// console.log(document.childNodes);
// console.log(document.childNodes[1].childNodes[2]);

let quoteContainer = document.querySelector('.quoteContainer')
let logo = document.getElementById('ronLogo')

let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

// fetch(baseURL)
// .then(re => res.json())
// .then(json => console.log(json))

logo.addEventListener('click', fetchQuote)

async function fetchQuote(){
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    displayQuote(json)
}

let displayQuote = (data) => {
    console.log(data)

    let logoContainer = document.getElementById('genQuote')

    logoContainer.firstElementChild != null ? logoContainer.removeChild(logo) : null;

    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '-Ron Swanson';
    quoteBy.style =
    'font-size: 3rem; font-family: billionDreams; color: #3a2718';

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `${data[0]}`
    quote.style = 
    'font-family: pinewood; color: #3a2718';

    if(data[0].length >= 50 && data[0].length <= 150) {
        quote.style.fontSize = '5rem';
    } else if (data[0].length < 50){
        quote.style.fontSize = '7rem';
    } else {
        quote.style.fontSize = '3rem';
    }

    let img = document.createElement('img');
    img.src='./assets/ron.png';
    img.style =
    'height: 100px; width: auto';

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(img);

    img.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);

        fetchQuote();
    })
}