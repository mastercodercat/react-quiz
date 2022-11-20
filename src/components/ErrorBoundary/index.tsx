import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

import Layout from "components/Layout";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout title="Something went wrong...">
          <h1 className="pb-5">Oops... something went wrong!</h1>
          <Link to="/">Go Trivia Home</Link>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
