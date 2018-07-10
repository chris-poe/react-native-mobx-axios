import landing from '../../../assets/images/landing.png';
import noImage from '../../../assets/images/no_image.png';

const images = {
  landing,
  noImage,
};

const getImage = name => images[name];

export default getImage;
