//animacja przy scrollu dla eventow pokemonowych
const events = document.querySelectorAll(".event-container > div"); //Wyszukuje i pobiera wszystkie elementy div w srodku event-container z html(67 linijka kodu)

function pokazEventyScroll(){
    events.forEach(function(event){

        const top = event.getBoundingClientRect().top;

        //jesli element jest blisko ekranu
        if(top < window.innerHeight - 100){
            event.style.opacity = "1";
            event.style.transform = "translateY(0)";
        }
    });
}//event
window.addEventListener("scroll", pokazEventyScroll);
pokazEventyScroll();
