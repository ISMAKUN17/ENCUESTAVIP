
import React from 'react';
import { Progress } from '@/components/ui/progress';

type ProgressIndicatorProps = {
  currentSection: number;
  totalSections: number;
  sectionTitles: string[];
};

const ProgressIndicator = ({ currentSection, totalSections, sectionTitles }: ProgressIndicatorProps) => {
  const percentage = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b border-border pb-4 pt-4 px-4 md:px-0">
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground animate-fade-in">
            Section {currentSection + 1} of {totalSections}
          </span>
          <span className="text-sm font-medium text-primary animate-fade-in">
            {Math.round(percentage)}% completed
          </span>
        </div>
        <Progress value={percentage} className="h-2 transition-all duration-700 ease-in-out" />
        
        <div className="flex justify-between mt-2">
          {sectionTitles.map((title, index) => (
            <div 
              key={title}
              className={`flex-1 px-2 text-center text-xs md:text-sm transition-all duration-300 ${
                index === currentSection 
                  ? 'text-primary font-semibold scale-105' 
                  : (index < currentSection ? 'text-muted-foreground' : 'text-muted-foreground/50')
              }`}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
