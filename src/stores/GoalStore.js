import {observable, action, computed} from 'mobx';

class Goal {
  @observable goals = [];

  
}

//garantees that information exported from this file will include the same information all throughout the various components importing this data
const store = new Goal();
export default store;