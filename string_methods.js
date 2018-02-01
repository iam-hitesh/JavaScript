let msg = 'Hello World'

   console.log(msg.startsWith('Hello')); //true
   console.log(msg.endsWith('!')) //false
   console.log(msg.includes('o')); // true

   console.log(msg.startsWith('ll',2)); // 2 is Index //true
   console.log(msg.endsWith('o',8)); // 8th Position from behind //true
   console.log(msg.includes('o',8)); //false

   
   document.write(msg.startsWith('Hello'))
