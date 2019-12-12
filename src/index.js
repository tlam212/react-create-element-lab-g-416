import React from 'react';
import ReactDOM from 'react-dom';

const title = ('h1', {}, 'An Awesome Person');
const para = ('p', {}, 'Who is learning React');
const ulList = ('ul', {className:"my-interests"}, [js, react, movies, ice cream]);
const meInReact = ('div', {className:"me"}, [title, para, ulList]);

ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact
