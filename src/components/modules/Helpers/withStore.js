import { inject, observer } from 'mobx-react';

const withStore = Component => inject('store')(observer(Component));

export default withStore;
