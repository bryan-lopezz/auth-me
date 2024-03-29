'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};
/** @type {import('sequelize-cli').Migration} */
options.tableName = 'Spots';

const spots = [
  {
    ownerId: 1,
    address: "234 Viper Street",
    city: "Phoenix",
    state: "Arizona",
    country: "United States of Valor",
    lat: 33.4483771,
    lng: -112.0740373,
    name: "Spike Haven Academy",
    description: "Training ground for tactical agents",
    price: 150,
  },
  {
    ownerId: 1,
    address: "324 Jett Street",
    city: "Phoenix",
    state: "Arizona",
    country: "United States of Valor",
    lat: 37.4483774,
    lng: -111.0740372,
    name: "Spike Icebox Academy",
    description: "Training ground for frozen agents",
    price: 160,
  },
  {
    ownerId: 2,
    address: "567 Jett Lane",
    city: "Windwalker",
    state: "Texas",
    country: "United States of Valor",
    lat: 29.4241219,
    lng: -98.4936282,
    name: "BladeMaster Institute",
    description: "Precision and agility in every move",
    price: 110,
  },
  {
    ownerId: 3,
    address: "890 Brimstone Boulevard",
    city: "Valkyrie",
    state: "California",
    country: "United States of Valor",
    lat: 34.052235,
    lng: -118.243683,
    name: "Phoenix Rising Academy",
    description: "Igniting the flames of victory",
    price: 135,
  },
  {
    ownerId: 4,
    address: "121 Sage Street",
    city: "Sentinel City",
    state: "Colorado",
    country: "United States of Valor",
    lat: 39.7392358,
    lng: -104.990251,
    name: "Tactical Intel Hub",
    description: "Mastering the art of strategic defense",
    price: 120,
  },
  {
    ownerId: 5,
    address: "789 Duelist Drive",
    city: "Radiant Heights",
    state: "Florida",
    country: "United States of Valor",
    lat: 27.9944024,
    lng: -81.760254,
    name: "Radiant Academy",
    description: "Elevating agents to Radiant status",
    price: 160,
  },
  {
    ownerId: 1,
    address: "123 Bind Avenue",
    city: "Haven",
    state: "Texas",
    country: "United States of Valor",
    lat: 29.9511,
    lng: -90.0715,
    name: "Bind Base",
    description: "Tactical training in the heart of Haven",
    price: 180,
  },
  {
    ownerId: 2,
    address: "456 Split Street",
    city: "Rift City",
    state: "California",
    country: "United States of Valor",
    lat: 34.0522,
    lng: -118.2437,
    name: "Split Safehouse",
    description: "Strategic hideout for covert operations",
    price: 175,
  },
  {
    ownerId: 3,
    address: "789 Haven Lane",
    city: "Breeze Bay",
    state: "Florida",
    country: "United States of Valor",
    lat: 27.9944024,
    lng: -81.760254,
    name: "Haven Hideout",
    description: "Safe haven amidst the chaos",
    price: 200,
  },
  {
    ownerId: 4,
    address: "567 Ascent Boulevard",
    city: "Ascend City",
    state: "New York",
    country: "United States of Valor",
    lat: 40.7128,
    lng: -74.006,
    name: "Ascent Arena",
    description: "Rise to new heights in Ascend City",
    price: 190,
  },
  {
    ownerId: 4,
    address: "890 Icebox Lane",
    city: "Frostwood",
    state: "Alaska",
    country: "United States of Valor",
    lat: 61.3025,
    lng: -158.775,
    name: "Icebox Outpost",
    description: "Frozen fortress in the heart of Frostwood",
    price: 210,
  },
  {
    ownerId: 5,
    address: "234 Haven Street",
    city: "Splitview",
    state: "Washington",
    country: "United States of Valor",
    lat: 47.7511,
    lng: -120.7401,
    name: "Splitview Safehouse",
    description: "Spectacular views from the Splitview cliffs",
    price: 185,
  },
  {
    ownerId: 1,
    address: "324 Haven Avenue",
    city: "Bindville",
    state: "Texas",
    country: "United States of Valor",
    lat: 31.9686,
    lng: -99.9018,
    name: "Bind Base Camp",
    description: "Strategic outpost on the outskirts of Bindville",
    price: 195,
  },
  {
    ownerId: 2,
    address: "678 Split Lane",
    city: "Splitport",
    state: "California",
    country: "United States of Valor",
    lat: 34.0522,
    lng: -118.2437,
    name: "Splitport Sanctuary",
    description: "Tranquil retreat on the shores of Splitport",
    price: 170,
  },
  {
    ownerId: 3,
    address: "890 Ascent Boulevard",
    city: "Ascendia",
    state: "New York",
    country: "United States of Valor",
    lat: 40.7128,
    lng: -74.006,
    name: "Ascendia Outpost",
    description: "Gateway to the skies in Ascendia",
    price: 220,
  },
  {
    ownerId: 4,
    address: "456 Icebox Avenue",
    city: "Frostville",
    state: "Alaska",
    country: "United States of Valor",
    lat: 61.3025,
    lng: -158.775,
    name: "Frostville Fortress",
    description: "Guardian stronghold in the heart of Frostwood",
    price: 225,
  },

];

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate(spots, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] }
    })
  }
};
