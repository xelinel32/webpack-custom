import * as $ from 'jquery';
import Post from '@models/Post'; // work with alias
import json from './assets/json'; // simple input json without .json extension
import xml from './assets/data';
import WebpackLogo from '@/assets/webpack-logo';
import './styles/styles.css';
import './styles/style.sass';

const post = new Post('Webpack is it just', WebpackLogo);

$('pre')
  .addClass('code')
  .html(post.toString());

// console.log('Post to String:', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
