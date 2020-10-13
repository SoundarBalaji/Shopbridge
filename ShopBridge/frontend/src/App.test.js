import React, { useState } from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Modal1 from './components/Modal.js';
import Mainpage from './components/Mainpage.js';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom";



// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders-modal', () => {
  const div = document.createElement("div");
  ReactDOM.render(<form></form>, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('renders-mainpage', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Mainpage></Mainpage>, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('render-shopbridge', () => {
  const { getByText } = render(<Mainpage ></Mainpage>);
  expect(getByText("ShopBridge")).toBeInTheDocument();
});