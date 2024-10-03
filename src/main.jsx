import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'; // Your custom styles

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
