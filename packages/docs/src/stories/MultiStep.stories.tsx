import type { Meta, StoryObj } from '@storybook/react';
import { Box, MultiStep, MultiStepProps } from '@as-ui/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      );
    }
  ]
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const ThreeStep: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 3
  }
};
