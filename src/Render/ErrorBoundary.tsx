import React from 'react';

class ErrorBoundary extends React.Component<
  { children: React.ReactElement },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ops, Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
