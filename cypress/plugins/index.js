/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  allureWriter(on, config);
  return config;
}