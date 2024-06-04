/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  allureWriter(on, config);
  configureAllureAdapterPlugins(on, config);
  return config;
}