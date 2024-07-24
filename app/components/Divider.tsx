'use client'
import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'; // Orientation of the divider
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal', // Default orientation is horizontal
}) => {
  const baseClasses =
    'my-4'; // Margin for spacing, can adjust as needed
  const orientationClasses =
    orientation === 'horizontal'
      ? 'border-t'
      : 'border-l';
  const colorClasses = 'border-primary'; // Default color
  const thicknessClasses = 'border'; // Default thickness

  return (
    <div
      className={`${baseClasses} ${orientationClasses} ${colorClasses} ${thicknessClasses}`}
      style={orientation === 'vertical' ? { height: '100%' } : {}}
    />
  );
};

export default Divider;
