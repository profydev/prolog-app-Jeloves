import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectPropsType } from "./select";

export default {
  title: "Select/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<SelectPropsType> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: "/icons/user.svg",
  label: "Team member",
  hint: "This is a hint text to help user.",
};
