//Program to Check Prime Number

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));
console.log(test_prime(34));
console.log(test_prime(20));
console.log(test_prime(13));
console.log(test_prime(55));
