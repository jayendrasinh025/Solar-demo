import React, { useState } from 'react';
import { Sun } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#101C27] text-[#F5F5F0] p-8 overflow-hidden ${containerClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #C6F36B 0%, transparent 55%), linear-gradient(135deg, #101C27 0%, #1c2e3f 100%)',
          }}
        />
        <Sun className="w-8 h-8 text-[#C6F36B] mb-3 relative z-10 stroke-[1.5]" />
        <span className="text-xs tracking-widest uppercase text-[#F5F5F0]/70 font-mono-tabular relative z-10 text-center">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
