#!/bin/bash

# Function to convert kebab-case or snake_case to PascalCase
to_pascal_case() {
  echo "$1" | awk -F'[-_]' '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1' OFS=''
}

# Check if a component name was provided
if [ -z "$1" ]; then
  echo "Error: No component name provided."
  echo "Usage: npm run create-component <component-name>"
  exit 1
fi

# Convert input name to PascalCase
COMPONENT_NAME=$(to_pascal_case "$1")

# Define the component directory
COMPONENT_DIR="./src/components/$COMPONENT_NAME"

COMPONENT_PROPS_NAME=$COMPONENT_NAME"Props"

# Create the component folder
mkdir -p "$COMPONENT_DIR"

# Create the component files
echo "export { default } from './$COMPONENT_NAME';" > "$COMPONENT_DIR/index.ts"
touch "$COMPONENT_DIR/$COMPONENT_NAME.module.scss"
touch "$COMPONENT_DIR/$COMPONENT_NAME.types.ts"

cat > "$COMPONENT_DIR/$COMPONENT_NAME.types.ts" <<EOL
export default interface $COMPONENT_PROPS_NAME {}
EOL

# Writes the content of the .tsx file
cat > "$COMPONENT_DIR/$COMPONENT_NAME.tsx" <<EOL
import React from 'react';
import s from './$COMPONENT_NAME.module.scss';
import $COMPONENT_PROPS_NAME from './$COMPONENT_NAME.types';

const $COMPONENT_NAME: React.FC<$COMPONENT_PROPS_NAME> = () => {
  return <div className={s.$(echo "$COMPONENT_NAME" | awk '{print tolower(substr($0,1,1)) substr($0,2)}')} />;
};

export default $COMPONENT_NAME;
EOL


cat > "$COMPONENT_DIR/$COMPONENT_NAME.module.scss" <<EOL
@use '../index.scss';


EOL


cat > "$COMPONENT_DIR/$COMPONENT_NAME.stories.tsx" <<EOL
import { Meta, StoryFn } from '@storybook/react';
import $COMPONENT_NAME from './$COMPONENT_NAME';
import $COMPONENT_PROPS_NAME from './$COMPONENT_NAME.types';

export default {
  title: 'Components/$COMPONENT_NAME',
  component: $COMPONENT_NAME,
} as Meta;

const Template: StoryFn = (args) => <$COMPONENT_NAME {...args} />;

export const Default = Template.bind({} as $COMPONENT_PROPS_NAME);
Default.args = {};
EOL

echo "Component '$COMPONENT_NAME' created successfully in '$COMPONENT_DIR'"
