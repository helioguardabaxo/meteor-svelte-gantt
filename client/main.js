import { Template } from 'meteor/templating';
import App from './App.svelte'


import './main.html';


Template.App.helpers({
  App: () => App,
});


