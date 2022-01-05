import React from "react";

interface FallbackProps {
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
}

interface ErrorBoundaryProps {
    onReset?: (...args: Array<unknown>) => void;
    onError?: (error: Error, info: { componentStack: string }) => void;
    FallbackComponent?: React.ComponentType<FallbackProps>;
}

type ErrorBoundaryState = { error: Error | null };

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<
    React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
    ErrorBoundaryState
> {
    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    state = initialState;
    resetErrorBoundary = (...args: Array<unknown>) => {
        this.props.onReset?.(...args);
        this.reset();
    };

    reset() {
        this.setState(initialState);
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.props.onError?.(error, info);
    }

    render() {
        const { error } = this.state;

        const { FallbackComponent } = this.props;

        if (error !== null) {
            const props = {
                error,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if (FallbackComponent) {
                return <FallbackComponent {...props} />;
            } else {
                throw new Error("react-error-boundary requiresFallbackComponent prop");
            }
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
export type { FallbackProps, ErrorBoundaryProps };
