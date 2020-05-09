function asyncAction()  {
    var promise = new Promise(function (resolve, reject) {
        resolve('finalizado');
        reject('finalizado');
    });
    return promise;
}

asyncAction().then(function(input) {
    console.log("control caso de ejecucion correcta " + input);
}).catch(function(error) {
    console.log("control caso de ejecucion error " + error);
});

