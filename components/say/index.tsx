import * as React from 'react';
import { Button } from 'antd';

interface SayProps {
  sth?: string;
}

export default function Say(props: SayProps) {
  const { sth } = props;
  return (
    <div className='iloop-say'>
      <span>Say:</span>
      <Button>{sth}</Button>
    </div>
  );
}
