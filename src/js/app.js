import '@/vars'; // global vars 
import '@/service-worker'; // enable service-worker

console.log('Check import functions:', $("body"));

const testAsync =  async () => {
   await console.log('Check async funtions: Ok')
}

testAsync()

try {
   console.log('Check babel job:', testAsync);
} catch (error) {
      console.log('Error', error);
}




