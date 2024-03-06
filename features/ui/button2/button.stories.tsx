import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonPropsType } from "./button";

export default {
  title: "Button2/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonPropsType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
