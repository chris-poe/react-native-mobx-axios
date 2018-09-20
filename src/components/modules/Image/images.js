import landing from '../../../assets/images/landing.png';
import defaultUser from '../../../assets/images/default_user.png';
import logo from '../../../assets/images/logo.png';

const images = {
  landing,
  defaultUser,
  logo,
};

const getImage = name => images[name];

export { images, getImage };
