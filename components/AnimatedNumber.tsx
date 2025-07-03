'use client';
import { useEffect, useState } from 'react';
import { AnimatedNumber } from './ui/AnimatedNumber';

interface AnimatedNoProps {
  value: number;
  className?: string;
  duration?: number;
  bounce?: number;
}

export function AnimatedNo({
  value: targetValue,
  className = '',
  duration = 2000,
  bounce = 0,
}: AnimatedNoProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(targetValue);
  }, [targetValue]);

  return (
    <div className='flex w-full items-center justify-center'>
      <AnimatedNumber
        className={`inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50 ${className}`}
        springOptions={{
          bounce,
          duration,
        }}
        value={value}
      />
    </div>
  );
}
