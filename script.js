// let a = 23

// alert(typeof a);

//условия
// if(5<4){
// console.log('right');

// } else{
// console.log('false');

// }



// for (let i = 1; i <= 10; i++) {
//    console.log( i );
   
// }




// let a = prompt('как тебя зовут?')
// let age = +prompt('сколько тебе лет')
// let city = prompt ('где ты живешь?')

// alert('Привет ' +a + ' ' + 'тебе' + ' ' + age +  ' ' + 'лет' + ' ' + ' ' + 'и ты живешь в городе' + ' ' + city)

// alert(`привет ${name}, тебе${age} лет, ты живешь в городе ${city} ` )




// const fn = (name) =>{
//     alert (`Hello ${name}`)
// }

// fn('Akmal')



//обьекты


// let user = {
//    name: 'Akmal',
//    surname: null,
//    carts: null
// }

// user.age = 69
// delete user.name


// console.log(user);




// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')

// if(num1 > num2){
// alert(`Первое число  больше второго`)

// } else if( num2 > num1 ) {
// alert(`Второе число больше первого` )

// } else  {
// alert(`Числа равны `)
// }



// let number = +prompt('Введите число')

// if( number == 0  ) {

//    alert(`число равно нулю`)

// } else if(number % 2 == 0) {
//    alert(`Число четное`)

// } else {
//    alert(`Число нечетное`)
// }



let secretNumber = Math.floor( Math.random() * 10 ) 


let guess = +prompt('Угадай число от 1 до 10')

if(guess == secretNumber) {
   alert(`Ты угадал поздравляю 👍 твое число ` + secretNumber )
} else {
   alert('Не угадал попробуй еще раз😘')
}


alert(secretNumber);