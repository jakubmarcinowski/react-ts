import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// Example of component
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  onDecrement = (): void => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="blue" />, document.querySelector('#root'));
