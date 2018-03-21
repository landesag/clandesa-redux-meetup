import React from "react";
import Typography from "material-ui-next/Typography";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography>Something went wrong.</Typography>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
