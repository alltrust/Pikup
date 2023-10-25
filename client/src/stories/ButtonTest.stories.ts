import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/ui/Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Test/Button',
    tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof meta>;

// const consoleFn = ()=>{
//     console.log("clicked")
// }
//args are the props alloted

/**Some comment about my lights */
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Click',
        backgroundColor: 'red',
    },
}

export const Warning: Story = {
    args: {
        primary: true,
        label: 'Delete now',
        backgroundColor: 'red',
    },
};

export const Disabled: Story = {
    args: {
        primary: true,
        label: 'Delete now',
        backgroundColor: 'red',
        isDisabled: true
    }
};