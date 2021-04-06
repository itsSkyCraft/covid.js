const fetch = require('node-fetch');
const chalk = require('chalk');

class covid {
    /**
     * @param {string} [CountryName] - The Country Name
     */

    static async all(){
        const fetched = await fetch('https://covid19.mathdro.id/api').then(res => res.json());

        return {
            confirmed: fetched.confirmed.value,
            recovered: fetched.recovered.value,
            deaths: fetched.deaths.value
        }
    }
    static async getCountry(CountryName){
        if(!CountryName || typeof CountryName !== 'string') throw new TypeError('Expected A Country name!');

        const fetched = await fetch(`https://covid19.mathdro.id/api/countries/${CountryName}`).then(res => res.json());

        return{
            name: CountryName,
            confirmed: fetched.confirmed.value,
            recovered: fetched.recovered.value,
            deaths: fetched.deaths.value
        }
    }
}

module.exports = covid;