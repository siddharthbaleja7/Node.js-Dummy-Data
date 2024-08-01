const fs = require('fs');
const path = require('path');

const getData = (req, res) => {
    const data = readDataFromFile();
    res.json(data);
};

const filterData = (req, res) => {
    const { key, value } = req.query;
    let data = readDataFromFile();
    if (key && value) {
        data = data.filter(item => item[key] && item[key] == value);
    }
    res.json(data);
};

const sortData = (req, res) => {
    const { key, order } = req.query;
    let data = readDataFromFile();
    if (key) {
        data.sort((a, b) => {
            if (a[key] < b[key]) return order === 'desc' ? 1 : -1;
            if (a[key] > b[key]) return order === 'desc' ? -1 : 1;
            return 0;
        });
    }
    res.json(data);
};

const readDataFromFile = () => {
    const filePath = path.join(__dirname, '../../data/dummyData.json');
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

module.exports = {
    getData,
    filterData,
    sortData
};
