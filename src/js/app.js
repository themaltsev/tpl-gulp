import './vars';

const testAsync =  async () => {
   await console.log('async working!')
}


console.log($("body"));


try {
   console.log('Test babel js and async functions OK!', testAsync);
} catch (error) {
      console.log(error);
}




