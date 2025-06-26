'use client';
import { cn } from '@/lib/utils';
import { motion, Transition, Variants } from 'motion/react';
import React, { CSSProperties, ReactNode } from 'react';

export type SpinningTextProps = {
  children: ReactNode;
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: 'linear',
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  fontSize = 1,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  const renderLetters = () => {
    const childrenArray = React.Children.toArray(children);
    const text = childrenArray
      .map(child => {
        if (typeof child === 'string') return child;
        if (typeof child === 'number') return child.toString();
        // For elements, get their children recursively if it's a span or fragment
        if (React.isValidElement(child)) {
          if (typeof child.props.children === 'string') return child.props.children;
        }
        return ''; // ignore other types
      })
      .join('');

    const letters = text.split('');
    const totalLetters = letters.length;

    return letters.map((letter, index) => (
      <motion.span
        aria-hidden='true'
        key={`${index}-${letter}`}
        variants={itemVariants}
        className='absolute left-1/2 top-1/2 inline-block'
        style={
          {
            '--index': index,
            '--total': totalLetters,
            '--font-size': fontSize,
            '--radius': radius,
            fontSize: `calc(var(--font-size, 2) * 1rem)`,
            transform: `
              translate(-50%, -50%)
              rotate(calc(360deg / var(--total) * var(--index)))
              translateY(calc(var(--radius, 5) * -1ch))
            `,
            transformOrigin: 'center',
          } as React.CSSProperties
        }
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className={cn('relative', className)}
      style={{
        ...style,
      }}
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      transition={finalTransition}
    >
      {renderLetters()}
      <span className='sr-only'>
        {typeof children === 'string' ? children : null}
      </span>
    </motion.div>
  );
}
