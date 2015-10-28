import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax.setup';
import ContactinfoCollection from './Contactinfo.collection';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

console.log('Hello, World');