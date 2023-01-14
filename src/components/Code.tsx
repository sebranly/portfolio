import * as React from 'react';

export interface CodeProps {
  className?: string;
  lines: string[];
}

const Code: React.FC<CodeProps> = (props) => {
  const { className, lines } = props;

  return (
    <code className={className}>
      {lines.map((line: string, index: number) => {
        return <pre key={index}>{line}</pre>;
      })}
    </code>
  );
};

export { Code };
