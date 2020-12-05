import PropTypes from "prop-types";

export default function MyOtherComponent({ propertyA, propertyB }) {
  return (
    <>
      <h3> I'm a Storybook env var added through args</h3>
      <h4>{propertyA}</h4>
      <h3>I'm a React env var added through args</h3>
      <h4>{propertyB}</h4>
    </>
  );
}
MyOtherComponent.defaultProps = {
  propertyA:
    process.env.NODE_ENV === "production"
      ? process.env.STORYBOOK_VARIABLE_PROD
      : process.env.STORYBOOK_VARIABLE_DEV,
  propertyB:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_VARIABLE_PROD
      : process.env.REACT_APP_VARIABLE_DEV,
};

MyOtherComponent.propTypes = {
  propertyA: PropTypes.string,
  propertyB: PropTypes.string,
};
