import { create } from 'mobx-persist';
import ExampleStore from './example.store';

class RootStore {
  example: ExampleStore;

  constructor() {
    this.example = new ExampleStore(this);
  }
}

const store = new RootStore();
const hydrate = create({
  storage: localStorage,
});

hydrate('example', store.example);
export { ExampleStore, RootStore };

export default store;
