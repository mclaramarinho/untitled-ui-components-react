import { StoryFn, Meta } from "@storybook/react";
import TemplateButtonProps from "./TemplateButton.types";
import TemplateButton from "./TemplateButton";
export default {
    title: "UntitledUI/TemplateButton",
    component: TemplateButton
} as Meta<typeof TemplateButton>;

const Template: StoryFn<typeof TemplateButton> = (args) => <TemplateButton { ...args } />;

export const TemplateButtonTest = Template.bind({} as TemplateButtonProps);

TemplateButtonTest.args = {
    text: "Template Button"
};