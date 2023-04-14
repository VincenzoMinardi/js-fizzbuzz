const eleGrid = document.querySelector('.grid');

for (let i = 1; i <=100; i++) {
    
	

    if ( i % 15 == 0){
        console.log('FizzBuzz');
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell15">FizzBuzz</div>`;
    
    } 
    else if( i % 3 == 0){
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell3">Fizz</div>`;
        console.log('Fizz');
    } 
    else if (i % 5 == 0){
        console.log('Buzz');
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell5">Buzz</div>`;
    } 
    else {
        console.log (i)
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    }
    
}


    
