import { Meta, StoryObj } from '@storybook/react';
import UntitledText from './UntitledText';
import { UntitledTextProps } from './UntitledText.types';
import { ArgTypes, InputType } from 'storybook/internal/types';
import { validColors, validColorShades } from '../../types/colors.types';

const meta: Meta = {
  title: "Components/UntitledText",
  component: UntitledText
};

export default meta;

// DEFAULT ARG TYPES ---------------------------------------------------------------------------------
const fontWeightOptions = [undefined, 'regular', 'medium', 'semibold', 'bold'];
const defaultArgTypes = {
  weight: {
    options: fontWeightOptions,
    control: {
      type: "select",
      labels: fontWeightOptions
    }
  } as InputType,
  styles: {
    type: "string",
    description: "Object of type CSSProperties",
    control: {
      type: "object",
    }
  } as InputType
} as Partial<ArgTypes<UntitledTextProps>>;


// CUSTOM ARG TYPES ---------------------------------------------------------------------------------
const textSizeOptions = [undefined, 'XL', 'LG', 'MD', 'SM', 'XS'];

const fixedSizeArgTypes = {
  size: {
    options: textSizeOptions,
    control: {
      type: "select",
      labels: textSizeOptions,
    }
  } as InputType
} as Partial<ArgTypes<UntitledTextProps>>;

const freeCustomSizeArgTypes = {
  size: {
    control: {
      type: "number",
    }
  } as InputType
} as Partial<ArgTypes<UntitledTextProps>>;

const existingColorOptions = {
  color: {
    options: [ ...validColors, ...validColorShades ],
    control: {
      type: "select",
      labels: [ ...validColors, ...validColorShades ]
    }
  } as InputType
} as Partial<ArgTypes<UntitledTextProps>>;

const customColorOptions = {
  color: {
    control: {
      type: "color",
    }
  } as InputType
} as Partial<ArgTypes<UntitledTextProps>>;



// STORIES ---------------------------------------------------------------------------------
type Story = StoryObj<typeof UntitledText>;

export const DefaultSizes: Story = {
  args: {
    text: "Default size options",
  },
  argTypes: {
    ...defaultArgTypes,
    ...fixedSizeArgTypes
  }
}

export const CustomSizes: Story = {
  args: {
    text: "Custom size option"
  },
  argTypes: {
    ...defaultArgTypes,
    ...freeCustomSizeArgTypes
  }
}

export const ExistingColorOptions: Story = {
  args: {
    text: "Existing color options"
  },
  argTypes: {
    ...defaultArgTypes,
    ...freeCustomSizeArgTypes,
    ...existingColorOptions
  }
}

export const CustomColorOption: Story = {
  args: {
    text: "Existing color options"
  },
  argTypes: {
    ...defaultArgTypes,
    ...freeCustomSizeArgTypes,
    ...customColorOptions
  }
}

