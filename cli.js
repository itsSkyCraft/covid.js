#!/usr/bin/env node

const chalk = require('chalk');
const enquirer = require('enquirer');
const fetch = require('node-fetch');
const covid = require('./index.js');
const figlet = require('figlet');

async function res(){
    const response = new enquirer.Select({
        name: 'Select',
        message: chalk.green('What Do you Want to do?'),
        choices: ['all', 'get Country Covid Info', 'Exit']
    });

    response.run()
    .then(answers => {

    if(answers === 'Exit') {
        figlet('Covid',function(err, data) {
            console.log('-----------------------')
            console.log(data);
            console.log('-----------------------')
        });
        return;
    }
        
    if(answers === 'all'){
        figlet('Covid',function(err, data) {
            console.log('-----------------------')
            console.log(data);
        });
        covid.all().then(res => {
            console.log(`-----------------------\nName: ${chalk.greenBright('All')}\nTotal Confirmed: ${chalk.greenBright(res.confirmed.toLocaleString())}\nTotal Recovered: ${chalk.greenBright(res.recovered.toLocaleString())}\nTotal Deaths: ${chalk.greenBright(res.deaths.toLocaleString())}\n-----------------------`);
        });
    }
    if(answers === 'get Country Covid Info'){


    fetch('https://covid19.mathdro.id/api/countries')
    .then(res => res.json())
    .then(res => {
        const countries = res.countries.map(r => {
            return r.name 
        });

        const prompt = new enquirer.AutoComplete({
            name: 'Countries',
            message: chalk.green('Pick The Countries Or Type The Name: '),
            limit: 10,
            initial: 2,
            choices: countries,
        });

        prompt.run().then(answer => {
            figlet('Covid',function(err, data) {
                console.log('-----------------------')
                console.log(data);
            });
            covid.getCountry(answer).then(res => {
                console.log(`-----------------------\nCountry Name: ${chalk.greenBright(res.name)}\nTotal Confirmed: ${chalk.greenBright(res.confirmed.toLocaleString())}\nTotal Recovered: ${chalk.greenBright(res.recovered.toLocaleString())}\nTotal Deaths: ${chalk.greenBright(res.deaths.toLocaleString())}\n-----------------------`);
            });
        }).catch(console.error);
    });
}
    }).catch(console.error);

    
    
}

res();