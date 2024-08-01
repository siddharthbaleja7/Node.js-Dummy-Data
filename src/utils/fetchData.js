const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

const fetchData = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        const filePath = path.join(__dirname, '../../data/dummydata.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Data fetched and saved to dummyData.json');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

module.exports = fetchData;
