import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

// Load messages manually, react native doesn't solve dynamic imports like this lib expects
// https://github.com/skaterdav85/validatorjs/issues/65
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';

lang._set('en', en);

const createForm = ({ fields, onSuccess, onError }) => {
  const options = {
    showErrorsOnInit: false,
    showErrorsOnChange: false,
    autoParseNumbers: false,
    allowRequired: false,
  };

  const plugins = {
    dvr: validatorjs,
  };

  const hooks = {
    onSuccess,
    onError,
  };

  return new MobxReactForm({ fields }, { options, plugins, hooks });
};

export default createForm;
