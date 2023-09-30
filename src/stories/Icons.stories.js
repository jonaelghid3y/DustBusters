import { Icon } from '../Components/Icons'

export default {
    title: 'Example/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const PrimaryLarge = {
    args: {
        primary: true,
        src: '/imgs/Monster.png',
        size: 'large'
    }
};
export const PrimaryMedium = {
    args: {
        primary: true,
        src: '/imgs/Monster.png',
        size: 'Medium'
    }
};

export const PrimarySmall = {
    args: {
        primary: true,
        src: '/imgs/Monster.png',
        size: 'small'
    }
};


export const SecondaryLarge = {
    args:
    {
        primary: false,
        src: '/imgs/Certified.png',
        size: 'large'
    }
};

export const SecondaryMedium = {
    args: {
        primary: false,
        src: '/imgs/Certified.png',
        size: 'medium'
    }
};

export const SecondarySmall = {
    args: {
        primary: false,
        src: '/imgs/Certified.png',
        size: 'small'
    }
};


export const ThirdLarge = {
    args: {
        primary: false,
        src: '/imgs/Moneybag.png',
        size: 'large'
    }
};

export const ThirdMedium = {
    args: {
        primary: false,
        src: '/imgs/Moneybag.png',
        size: 'medium'
    }
};

export const ThirdSmall = {
    args: {
        primary: false,
        src: '/imgs/Moneybag.png',
        size: 'small'
    }
};
