import React from "react";

import MyComponent from "./MyComponent";
/* eslint-disable */

export default {
  component: MyComponent,
  title: "MyComponent with Env file",
};

/* eslint-enable */

const Template = (args) => <MyComponent {...args} />;

export const Example = Template.bind({});
