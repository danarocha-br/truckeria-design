import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Text } from '../src';

const App = () => {
  return (
    <div>
      <Text>hey</Text>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
