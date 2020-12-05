import React from "react";

import MyOtherComponent from "./MyOtherComponent";
/* eslint-disable */
export default {
  component: MyOtherComponent,
  title: "My other component with args and env files",
};
/* eslint-enable */

const Template = (args) => <MyOtherComponent {...args} />;

export const OtherExample = Template.bind({});
OtherExample.args = {
  propertyA:
    process.env.NODE_ENV === "production"
      ? `boop ${process.env.STORYBOOK_VARIABLE_PROD}`
      : `boop ${process.env.STORYBOOK_VARIABLE_DEV}`,
  propertyB:
    process.env.NODE_ENV === "production"
      ? `zoinks ${process.env.REACT_APP_VARIABLE_PROD}`
      : `zoinks ${process.env.REACT_APP_VARIABLE_DEV}`,
};
