// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Babbar"

// function changetext(event){
//     console.log(event)
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Babbar "
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changetext);

// fpara.removeEventListener('click',changetext);
function dontopenlink(event){
    event.preventDefault();
    anchorele.textContent ="Click done"

}

let anchorele = document.getElementById('fa');

anchorele.addEventListener('click',dontopenlink);