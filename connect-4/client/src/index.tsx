import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const Index: React.FC<{}> = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'));