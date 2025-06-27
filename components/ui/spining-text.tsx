'use client';
import { cn } from '@/lib/utils';
import { motion, type Transition, type Variants } from 'framer-motion';
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

const BASE_TRANSITION: Transition = {
  repeat: Infinity,
  ease: 'linear',
};

const BASE_ITEM_VARIANTS: Variants = {
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
  const finalTransition: Transition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants: Variants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  const renderLetters = () => {
  const childrenArray = React.Children.toArray(children);
  const text = childrenArray
    .map(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child.toString();
      }

      if (React.isValidElement(child)) {
        const element = child as React.ReactElement;
        // @ts-ignore
        const inner = element.props.children;
        if (typeof inner === 'string' || typeof inner === 'number') {
          return inner.toString();
        }
      }

      return '';
    })
    .join('');

  const letters = text.split('');
  const totalLetters = letters.length;

  return letters.map((letter, index) => {
    const rotateDeg = (360 / totalLetters) * index;
    const letterStyle: CSSProperties = {
      fontSize: `${fontSize}rem`,
      transform: `
        translate(-50%, -50%)
        rotate(${rotateDeg}deg)
        translateY(${-radius}ch)
      `,
      transformOrigin: 'center',
    };

    return (
      <motion.span
        aria-hidden="true"
        key={`${index}-${letter}`}
        variants={itemVariants}
        className="absolute left-1/2 top-1/2 inline-block"
        style={letterStyle}
      >
        {letter}
      </motion.span>
    );
  });
};


  return (
    <motion.div
      className={cn('relative', className)}
      style={style}
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
