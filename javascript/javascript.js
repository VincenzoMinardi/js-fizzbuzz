const eleGrid = document.querySelector('.grid');
let num = parseInt(prompt('numero quadrati'))

for (let i = 0; i <= num; i++) {
	console.log(i);
	eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;

    if( i % 3 == 0) console.log('Fizz');

    else if (i % 5 == 0) console.log ('Buzz');

    else if ( i % 15 == 0) console.log ('FizzBuzz');

    else (i)


}


    
