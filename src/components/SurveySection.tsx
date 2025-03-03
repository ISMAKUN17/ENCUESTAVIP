
import React from 'react';
import { cn } from '@/lib/utils';
import RatingOption from './RatingOption';
import { useLanguage } from '@/context/LanguageContext';

type Question = {
  id: string;
  text: string;
  options: string[];
  type: 'radio' | 'textarea';
};

type SurveySectionProps = {
  title: string;
  questions: Question[];
  responses: Record<string, string>;
  onResponseChange: (questionId: string, value: string) => void;
  isActive: boolean;
  animationDelay?: number;
};

const SurveySection = ({
  title,
  questions,
  responses,
  onResponseChange,
  isActive,
  animationDelay = 0,
}: SurveySectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div
      className={cn(
        'transition-all duration-500 ease-in-out',
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none absolute'
      )}
      style={{
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <div className="p-6 md:p-8 glass-card rounded-xl mb-10 animate-fade-in">
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold mb-2">
            {t('section')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {questions.map((question, qIndex) => (
            <div 
              key={question.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${qIndex * 100 + 200}ms` }}
            >
              <p className="font-medium mb-3">{question.text}</p>
              
              {question.type === 'radio' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {question.options.map((option, index) => (
                    <RatingOption
                      key={`${question.id}-${option}`}
                      id={`${question.id}-${option}`}
                      name={question.id}
                      value={option}
                      isSelected={responses[question.id] === option}
                      onChange={(value) => onResponseChange(question.id, value)}
                    />
                  ))}
                </div>
              ) : (
                <textarea
                  id={question.id}
                  name={question.id}
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none transition-all"
                  placeholder={t('comment_placeholder')}
                  value={responses[question.id] || ''}
                  onChange={(e) => onResponseChange(question.id, e.target.value)}
                ></textarea>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveySection;
