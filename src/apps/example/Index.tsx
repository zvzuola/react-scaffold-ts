import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export interface AppProps { list: any; }

class App extends React.PureComponent<AppProps, {}> {
  render() {
    console.log(this.props.list);
    return (
      <div>typescript react redux hello world</div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: state.list,
});
export default withRouter(connect(mapStateToProps)(App));
