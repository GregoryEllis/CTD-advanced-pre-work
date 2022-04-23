let results= document.querySelector('#results'); 
let peopleData = [];
// API requests
let peopleRequest = 'https://swapi.dev/api/people'
let filmsRequest = 'https://swapi.dev/api/films'

// To listen for clicks
document.querySelector('.buttons').addEventListener('click', (e) => {
    // To store API data
    let output = '';
    
    // To pull item.name data from API
    if (e.target.id === 'people') {
        console.log('people');
        fetch(peopleRequest)
        .then(response => response.json())
        .then(data => data.results.forEach(item => {
            output += `
            <div class"container">  
                <div class= "a center col-lg-4 text-center card p3 m-3  bg-dark text-white" style= "opacity: .7"
                     <h4 id="hover" class="card-title text-center">${item.name}</h4>    
                </div>
            </div> `
            results.innerHTML = output;
        }))
            
        // To pull films data from API
    } else if (e.target.id === 'films') {
        console.log('films');
        fetch(filmsRequest)
        .then(response => response.json())
        .then(data => data.results.forEach(item => {
            output += `
            <div class="fade"></div>
            <div class="filmsDiv">
            <section class="star-wars">  
                <div class= "crawl center text-center 
                    <h3 class=" card-title text-center">${'Episode IV'}
                    <h4 class=" card-title text-center">${item.title}</h4>
                    <div class= "films card-content fw-normal">
                        <span style="text-decoration: underline">Producer</span>: ${item.producer}<br>
                         <span style="text-decoration: underline">Director</span>: ${item.director}<br>
                        <span style="text-decoration: underline">Release date</span>: ${item.release_date}<br>
                        <p class"text-center>${item.opening_crawl}</p>
                     </div>
                </div>
            </div>
            </section>`
            results.innerHTML = output;
        }));
    }

    // To listen for the click of the back button
    document.body.addEventListener('click',(e)=>{
        if(e.target.id === 'back' ) {
            results.innerHTML = output;
        }
    })
})

// To pull data from API
fetch(peopleRequest)
.then(response => response.json())
.then(function(data){
    peopleData = data
});

// To listen to clicks of the individual people which will then pull info from the API
document.body.addEventListener('click',(e)=>{
    let output2 ='';
    if(e.target.className ==='a center col-lg-4 text-center card p3 m-3  bg-dark text-white'){   
        // To filter peopleData for item.name
        let peopleNames =  peopleData.results.filter(item => e.target.innerText === item.name)
        peopleNames.forEach(item => { 
            output2 += `
            <div class" container">  
                <div class= "center col-lg-4 text-center card p3 m-3 pb-3  bg-dark text-white" style= "opacity: .7">
                    <h4 class="card-title text-center ">${item.name}</h4>
                    <div class= "card-content fw-normal">
                        <span style="text-decoration: underline">Height</span>: ${item.height}<br>
                        <span style="text-decoration: underline">Mass</span>: ${item.mass}<br>
                        <span style="text-decoration: underline">Hair color</span>: ${item.hair_color}<br>
                        <span style="text-decoration: underline">Birth year</span>: ${item.birth_year}<br>
                        <button type="button" id="back" class="btn btn-outline-warning mt-2">Back</button>
                     </div>
                </div>
            </div>
            ` 
            results.innerHTML = output2;
        });
    }
})

