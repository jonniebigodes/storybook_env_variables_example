export default function MyComponent() {
  if (process.env.NODE_ENV === "test") {
    return (
      <>
        <h3>I'm a Storybook component using test Env variables</h3>
        <h3>{process.env.STORYBOOK_VARIABLE_TEST}</h3>
        <h3>I'm a React component using test Env variables</h3>
        <h3>{process.env.REACT_APP_VARIABLE_TEST}</h3>
      </>
    );
  }
  return (
    <>
      <h2>I'm a Storybook component using Env variables</h2>
      {process.env.NODE_ENV === "production" ? (
        <div>
          <h3>Storybook prod environmnent variable</h3>
          <h4>{process.env.STORYBOOK_VARIABLE_PROD}</h4>
          <h3>React environment variable</h3>
          <h4>{process.env.REACT_APP_VARIABLE_PROD}</h4>
        </div>
      ) : (
        <div>
          <h3>Storybook dev environmnent variable</h3>
          <h4>{process.env.STORYBOOK_VARIABLE_DEV}</h4>
          <h3>React environment variable</h3>
          <h4>{process.env.REACT_APP_VARIABLE_DEV}</h4>
        </div>
      )}
    </>
  );
}
