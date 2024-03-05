import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ErrorScreen, ErrorScreenProps } from "./error-screen";

export default {
  title: "Error/ErrorScreen",
  component: ErrorScreen,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof ErrorScreen>;

const Template: StoryFn<ErrorScreenProps> = (args) => <ErrorScreen {...args} />;

export const Default = Template.bind({});
