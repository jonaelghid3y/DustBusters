import { Logo } from '../Components/Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
  },
};
