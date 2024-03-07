import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./checkbox";

export default {
  title: "Checkbox/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn = () => <Checkbox />;

export const Default = Template.bind({});
