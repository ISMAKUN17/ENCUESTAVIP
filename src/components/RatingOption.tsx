
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type RatingOptionProps = {
  id: string;
  name: string;
  value: string;
  isSelected: boolean;
  onChange: (value: string) => void;
};

const RatingOption = ({ id, name, value, isSelected, onChange }: RatingOptionProps) => {
  // Map value to css class and icon color
  const valueToClass = {
    'very good': 'very-good',
    'good': 'good',
    'poor': 'poor',
    'very poor': 'very-poor',
    'yes': 'very-good',
    'no': 'very-poor',
  };

  const valueToColor = {
    'very good': 'hsl(var(--survey-very-good))',
    'good': 'hsl(var(--survey-good))',
    'poor': 'hsl(var(--survey-poor))',
    'very poor': 'hsl(var(--survey-very-poor))',
    'yes': 'hsl(var(--survey-very-good))',
    'no': 'hsl(var(--survey-very-poor))',
  };

  const className = valueToClass[value.toLowerCase() as keyof typeof valueToClass] || '';
  const iconColor = valueToColor[value.toLowerCase() as keyof typeof valueToColor] || '';
  
  return (
    <div className={cn('rating-option', className, 'animate-scale-in')}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <label 
        htmlFor={id} 
        className="flex justify-between items-center gap-2 hover:bg-secondary transition-all"
      >
        <span className="font-medium">{value}</span>
        {isSelected && (
          <Check size={16} className="text-primary animate-fade-in" style={{ color: iconColor }} />
        )}
      </label>
    </div>
  );
};

export default RatingOption;
