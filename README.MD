## Covid.js
An Advanced package For Getting Covid Info And Command Line InterFaces
## installation
Hey there! if you Want to install ``covid.js``,
Do 
```
npm i -g covid.js
```
it Requires a Global if you Wanted to try Our CLI!
## Basic Usage
To get started, Here An Example Of Getting Worldwide Covid!
```js
const covid = require('covid.js');

covid.all().then(res => {
    console.log(res);

    /*{
        {
            confirmed: 131869262
            recovered: 74898414
            deaths: 2862248
        }
    }*/

});
```
And Heres an Example of getting Country Covid info
```js
const covid = require('covid.js');

covid.getCountry('Indonesia').then(res => {
    console.log(res);

    /*{
        {
            confirmed: 1537967
            recovered: 1381677
            deaths: 41815
        }
    }*/

});
```
## Cli Usage
To Use The Covid CLI, You Have to install this Globally. using ``npm i -g covid.js``
And To Use the cli, type ``covid`` in Command prompt. Heres the Example of the CLI.
![CliExample](./Images/Cli.png)