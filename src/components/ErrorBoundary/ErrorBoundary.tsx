import { Component, ReactNode, ErrorInfo } from "react";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  public render(): ReactNode {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorBoundaryFallback />;
    }

    return this.props.children;
  }
}
