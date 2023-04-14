const eleGrid = document.querySelector('.grid');
let num = parseInt(prompt('numero quadrati'))

for (let i = 0; i <= num; i++) {
	console.log(i);
	eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
}
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    document.querySelector('.cell').innerHTML = ('FizzBuzz')
    if (i % 3 == 0) console.log("Fizz");
    document.querySelector('.cell').innerHTML = ('Fizz')
    
     if (i % 5 == 0) console.log("Buzz");
    document.querySelector('.cell').innerHTML = ('Buzz')
     console.log(i);
}
    
