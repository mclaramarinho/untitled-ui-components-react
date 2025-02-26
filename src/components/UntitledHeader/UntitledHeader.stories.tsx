import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import UntitledHeader from './UntitledHeader';
import { UntitledHeaderProps } from './UntitledHeader.types';
import { InputType } from 'storybook/internal/types';
import { validColors, validColorShades } from '../../types/colors.types';


// META ---------------------------------------------------------------------------------
const meta: Meta = {
  title: "Components/UntitledHeader",
  component: UntitledHeader,
}
export default meta;

// DEFAULT ARG TYPES ---------------------------------------------------------------------------------
const headerLevelOptions = [undefined, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const fontWeightOptions = [undefined, 'regular', 'medium', 'semibold', 'bold'];

const defaultArgTypes = {
  level: {
    options: headerLevelOptions,
    control: {
      type: "select",
      labels: headerLevelOptions,
    }
  } as InputType,
  fontWeight: {
    options: fontWeightOptions,
    control: {
      type: "select",
      labels: fontWeightOptions
    }
  } as InputType,
  style: {
    type: "string",
    description: "Object of type CSSProperties",
    control: {
      type: "object",
    }
  } as InputType
} as Partial<ArgTypes<UntitledHeaderProps>>;

// CUSTOM ARG TYPES ---------------------------------------------------------------------------------

const headerSizeOptions = [undefined, '2XL', 'XL', 'LG', 'MD', 'SM', 'XS'];

const fixedSizeArgTypes = {
  size: {
    options: headerSizeOptions,
    control: {
      type: "select",
      labels: headerSizeOptions,
    }
  } as InputType
} as Partial<ArgTypes<UntitledHeaderProps>>;

const freeCustomSizeArgTypes = {
  size: {
    control: {
      type: "number",
    }
  } as InputType
} as Partial<ArgTypes<UntitledHeaderProps>>;

const existingColorOptions = {
  color: {
    options: [ ...validColors, ...validColorShades ],
    control: {
      type: "select",
      labels: [ ...validColors, ...validColorShades ]
    }
  } as InputType
} as Partial<ArgTypes<UntitledHeaderProps>>;

const customColorOptions = {
  color: {
    control: {
      type: "color",
    }
  } as InputType
} as Partial<ArgTypes<UntitledHeaderProps>>;

type Story = StoryObj<typeof UntitledHeader>;

// STORIES ---------------------------------------------------------------------------------

export const DefaultSizes: Story = {
  args: {
    text: "Default size options"
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

