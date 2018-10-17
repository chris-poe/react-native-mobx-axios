import { inject, observer } from 'mobx-react';

export default (withStore = Component => inject('store')(observer(Component)));
