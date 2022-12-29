import React from 'react';
import ReactDOM from 'react-dom';
import { SeasonDisplay } from './SeasonDisplay';
import Loader from './Loader';
import './SeasonDisplay.css';
class App extends React.Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  state = {
    latitude: null,
    longitude: null,
    errMsg: '',
  };
  renderContent() {
    if (this.state.latitude || this.state.errMsg) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude || this.state.errMsg} />
        </div>
      );
    }

    return (
      <Loader
        message={'Please accept the location request to see weather...'}
      />
    );
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
