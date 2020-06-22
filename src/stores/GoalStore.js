import {observable, action, computed} from 'mobx';

class Goal {
  @observable goals = [];

  //function that performs a change to the store = action
  @action addGoald = (goal) => {
    this.goals.push(goal)
  }

  // any time you want to access the data and perform some sort of calculation on it, and have that calculation be reflected in real time with component, use computed
  @computed get goalCount () {
    return this.goals.size;
  }
}

//garantees that information exported from this file will include the same information all throughout the various components importing this data
const store = new Goal();
export default store;