/*
 *
 * A binary sum module
 * Author: Onyela Udochukwuka
 *  Github Profile : https://github.com/Onyelaudochukwuka
 */

    // create app Module
const app = {};
  
    
   
    // Create a function for converting values to base 10

    app.baseTenNumberCoverter = (a) => {
        var sum = 0;

        var num = a.split('').map(a => Number(a));
        for (var j =  0 ; j < num.length; j++){
        sum += num[j] * (2 ** j);
    } 
    return sum;
}

    // Create a function for converting arguments to base 2

app.binaryConverter = (a) => {
    
    var num = a;

    var arr = [];

    while (num > 0) {

        if (num % 2 == 1) {
            arr.unshift('1')
            num = (num - 1) / 2;
        }

        else if (num === 1) {
            arr.unshift('1');
        }
        else {
            arr.unshift('0');
            num = num / 2;
        }
    }
    return Number(arr.join(''));
}

    // Create a function for summing Numbers in base 2

app.binarySum = (a, b) => {
        // Pass your arguments into the already made function
        return  app.binaryConverter(app.baseTenNumberCoverter(a) + app.baseTenNumberCoverter(b));
    };

console.log(app.binarySum('11', '1'));

// export module
module.export = app;
