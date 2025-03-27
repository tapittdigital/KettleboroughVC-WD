
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fade-in' | 'slide-in' | 'slide-up';
  delay?: number;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children?: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  animation = 'fade-in',
  delay = 0,
  once = true,
  tag = 'div',
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementRef.current) {
              elementRef.current.classList.add(`animate-${animation}`);
              elementRef.current.style.animationDelay = `${delay}s`;
            }
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (elementRef.current) {
              elementRef.current.classList.remove(`animate-${animation}`);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, once]);

  const TagName = tag as keyof JSX.IntrinsicElements;

  return (
    <div 
      ref={elementRef} 
      className={cn('opacity-0', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children ? children : <TagName>{text}</TagName>}
    </div>
  );
};

export default AnimatedText;