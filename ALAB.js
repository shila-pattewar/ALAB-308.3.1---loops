for ( i = 1; i<=100; i++)
{
    console.log(i);

if ( i % 3 == 0){
    console.log("Fizz");
} else if (i % 5 == 0){
    console.log("Buzz");
} else if ( i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz");
} else {
    console.log(i);
}

}

let n=10;

for ( let i = n; i <= n; n++)
    {
        if ( (n % 1 === 0 || n % 5 === 0 ) && (n % 2 === 0 || n % 3 === 0))
        console.log("PrimeNo:" + n) ;
    }

