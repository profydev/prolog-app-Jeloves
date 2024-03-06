import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button2, ButtonPropsType } from "./button";

export default {
  title: "Button2/Button",
  component: Button2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button2>;

const Template: StoryFn<ButtonPropsType> = (args) => <Button2 {...args} />;

export const Default = Template.bind({});
