/* eslint-disable prettier/prettier */

"use client";

import { Component, ReactNode } from "react";

interface TProps {
  fallback: ReactNode;
  children: ReactNode;
}
interface TState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
