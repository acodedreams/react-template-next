import { action, computed, observable } from 'mobx';
import { RootStore } from './index';
import { ExampleRequest } from '~/services';

class ExampleStore {
  rootStore: RootStore;

  ExampleRequest: ExampleRequest;

  @observable
  example = 'string';

  constructor(rootStore: RootStore) {
    this.ExampleRequest = new ExampleRequest();
    this.rootStore = rootStore;
  }

  @computed
  // to computed values
  @action
  fetchReceipts = async (): Promise<void> => {
    if (this.rootStore.example) {
      const data = {
        example: this.rootStore.example.example,
      };
      await this.ExampleRequest.fetchExamples(data);
    }
  };
}

export default ExampleStore;
