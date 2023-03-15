import React from 'react';
import styles from './scrollView.module.scss';
import classnames from 'classnames';

interface ScrollViewProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, className, style }, ref) => {
    return (
      <div
        ref={ref}
        style={{ ...style }}
        className={classnames(className, styles['container'])}
      >
        {children}
      </div>
    );
  }
);

ScrollView.displayName = 'ScrollView';
export { ScrollView };
