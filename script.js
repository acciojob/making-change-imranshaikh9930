const makeChange = (c) => {
  // your name here
	const pennyValue = 1;
	const nickelValue = 5;
	const dimeValue = 10;
	const quarterValue = 25;

	let q= 0 ;
	let d = 0;
	let n = 0;
	let p = 0;
 q = Math.floor(c / quarterValue);
  c %= quarterValue;

  
  d = Math.floor(c / dimeValue);
  c %= dimeValue;

  
  n = Math.floor(c / nickelValue);
  c %= nickelValue;

 
  p = c;

  
  const result = {
    q: q,
    d: d,
    n: n,
    p: p
  };

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
