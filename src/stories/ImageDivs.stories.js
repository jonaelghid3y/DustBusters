import { ImageDivs } from '../Components/ImageDivs';

export default {
  title: 'Example/Imagediv',
  component: ImageDivs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const largeImage1 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6195278.jpg',
    size: 'large'
  }
};
export const mediumImage1 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6195278.jpg',
    size: 'Medium'
  }
};

export const smallImage1 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6195278.jpg',
    size: 'small'
  }
};

export const largeImage2 = {
  args:
  {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6196685.jpg',
    size: 'large'
  }
};

export const mediumImage2 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6196685.jpg',
    size: 'medium'
  }
};

export const smallImage2 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6196685.jpg',
    size: 'small'
  }
};

export const largeImage3 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6197122.jpg',
    size: 'large'
  }
};

export const mediumImage3 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6197122.jpg',
    size: 'medium'
  }
};

export const smallImage3 = {
  args: {
    primary: true,
    src: '/imgs/pexels-tima-miroshnichenko-6197122.jpg',
    size: 'small'
  }
};