'use strict';

const { ReviewImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

options.tableName = 'ReviewImages'

/** @type {import('sequelize-cli').Migration} */

const reviewImages = [
  {
    reviewId: 1,
    url: 'reviewImageUrl1'
  },
  {
    reviewId: 1,
    url: 'reviewImageUrl12'
  },
  {
    reviewId: 2,
    url: 'reviewImageUrl2'
  },
  {
    reviewId: 3,
    url: 'reviewImageUrl3'
  },
  {
    reviewId: 4,
    url: 'reviewImageUrl4'
  },
  {
    reviewId: 5,
    url: 'reviewImageUrl5'
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await ReviewImage.bulkCreate(reviewImages, {validate: true})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6] }
    });
  }
};
