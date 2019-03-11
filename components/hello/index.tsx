import * as React from 'react';

interface HelloProps {
  sth?: string;
}

export default function Hello(props: HelloProps) {
  const { sth } = props;
  return (
    <div className='iloop-hello'>hello: {sth}</div>
  );
}
