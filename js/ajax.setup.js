import $ from 'jquery';

const APP_ID = 'SQkGvn5LwmMDgkAtn5vT0OQr0DzYQWirND9MLta2';
const API_KEY = 'iMSnDKKv08SpYo2iRJGqytdg9JSTEzfkzlzkXmAy';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});