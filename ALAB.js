//Part 1: Fizz Buzz

for ( let i = 1; i <= 100; i++)
{
    console.log(i);
}

	for ( let j=0; j <= 100 ; j++)
		{
			if ( j % 3 === 0 && j % 5 === 0)
				{
				console.log (j + " :Fizz Buzz")
				}
			else if (j % 3 === 0) 
				{
				console.log(j + " :Fizz");
				}
			else if(j % 5 === 0)
				{
				console.log(j + " :Buzz");
				}
            else
                {
                    console.log ( j + " :A number is not divisible by either 3 or 5 ");
                }
		}

// // Part 2: Prime Time

for ( let k = 1; k <= 100; k++)
    {
        if ( k % 2 === 0 || k % 3 === 0 || k % 5 === 0 || k % 7 === 0 || k % 9 === 0 )
        {
            console.log( k + " : Not Prime no" ) ;
        }
        else
        {
            console.log( k + " : prime no" )
        }

    }

