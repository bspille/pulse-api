import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import FieldLevelValidationForm from './FieldLevelValidationForm';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Pulse Validation</h2>
      <FieldLevelValidationForm onSubmit={showResults} />
      <Values form="fieldLevelValidation" />
    </div>
  </Provider>,
  rootEl,
);
