import noImage from '../../assets/no-image.png';

const images = {
	noImage,
}

const getImage = name => images[name];

export default getImage;
