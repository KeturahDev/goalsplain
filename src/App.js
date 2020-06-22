import React from 'react';
import {inject, observer} from 'mobx-react'

@inject('GoalStore') //have access to this thanks to provider
@observer // declare that this component will watch store and rerender to match changes
class App extends React.Component {
  render() {
    return (
      <div className="App">
        hallo
      </div>
    );
  }
  
}

export default App;
