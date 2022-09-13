import {action, computed, observable} from 'mobx';

export class UserStore {
  @observable count = 0;
  @observable userName = 'John Doe';

  @computed increment() {
    this.count++;
  }

  @action setUserName(name: string) {
    this.userName = name;
  }
}
