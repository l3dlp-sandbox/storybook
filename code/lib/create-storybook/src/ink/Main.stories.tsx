import type { Meta, StoryObj } from '@storybook/react';

import { Main } from './Main';
import { xtermDecorator } from './xtermDecorator';

const meta: Meta<typeof Main> = {
  component: Main,
  args: {
    features: ['onboarding', 'examples', 'essentials'],
    intents: ['dev', 'docs', 'test'],
    ignoreGitNotClean: false,
    width: 120,
    height: 50,
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [xtermDecorator],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Normal: Story = {};
