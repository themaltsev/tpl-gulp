import './vars.js';

const testAsync =  async () => {
   await console.log('async working!')
}

try {
   console.log('Test babel js and async functions OK!', testAsync);
} catch (error) {
      console.log(error);
}




