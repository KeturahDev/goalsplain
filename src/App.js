import React from 'react';
import {inject, observer} from 'mobx-react'

@inject('GoalStore') //have access to this thanks to provider
@observer // declare that this component will watch store and rerender to match changes
class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const goal = this.goal.value
    this.props.GoalStore.addGoal(goal)
    this.goal.value = ""
  }
  render() {
    const {GoalStore} = this.props;

    return (
      <div className="App">
        <h2>You have {GoalStore.goalCount} goals</h2>

        <form onSubmit ={this.handleSubmit}>
          <input type="text" placeholder="Enter goal" ref={input => this.goal = input}/>
          <button>Add goal</button>
        </form>
        
        <ul>
          {GoalStore.goals.map((goal,index) => (
            <li key={index}>
              {goal}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
}

export default App;
