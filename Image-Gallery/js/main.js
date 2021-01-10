const input = document.getElementById('input')
const btn = document.getElementById('btn')
const gallery = document.getElementById('gallery')

const key = 'IDTISLLpEu4wUHDkV3CeAqBWF0giXDtGKgOxj-K7T54'

btn.addEventListener('click', getImages);

async function getImages() {
    //get the user input
    const inputValue = input.value
    //call the api
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${inputValue}&orientation=squarish&per_page=12`)
    //convert into json format
    const responseJson = await response.json()
    //get the result array
    results = responseJson.results;
    //iterate every element
    results.forEach(elm => {
        //create a image tag
        const img = document.createElement('img');
        //add a class name to the image
        img.classList.add('items')
        //add the src to the iamge
        img.src = elm.urls.regular
        //append to the gallery div
        gallery.appendChild(img);
    })
}