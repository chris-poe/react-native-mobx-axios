import { inject, observer } from 'mobx-react';

export default Component => inject('store')(observer(Component));
