// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback("Reno", function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 2000);
//   });
// }
//
// getTempPromise('Reno').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });
//
//

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A or B is not a number');
    }
  });
}

addPromise(1,2).then(function(sum){
  console.log('the sum of your numbers is ', sum);
}, function(err){
  console.log(err);
});

addPromise(1,'a').then(function(sum){
  console.log('the sum of your numbers is ', sum);
}, function(err){
  console.log(err);
});
