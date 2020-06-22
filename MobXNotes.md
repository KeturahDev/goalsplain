# Notes
***Just a place where Im gonna talk about key points ofr working with MobX***

* Actions are functions that can work directly with observables
* MobX decorators can only be used on class components
### Why actions work with observables
tutorial dude said: " stores dont have to be immutable"

Observables are not immutable like Redux storages, they can be manipulated directly

when we create an observable array, it wraps that datapiece with another array that keeps track of the changes you make... but thats all under the hood, and we dont need to worry about that. we can treat it like a normal array and use actions to manipulate it

### Give React App access to mobx store
Do this with provider tags from mobx, and render store from store file, and pass that in as an attribute into provider tag... this passes the store in as a prop
