import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './CSS/Style.css'
import AppProvider from './context/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
      <AppProvider>
		  <App />
      </AppProvider>
	</React.StrictMode>
);
