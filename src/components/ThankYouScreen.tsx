
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ThankYouScreen = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
      <div className="glass-card p-10 rounded-xl max-w-lg mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
            <CheckCircle size={80} className="text-primary relative" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">{t('thank_you_title')}</h2>
        <p className="text-muted-foreground mb-6">
          {t('thank_you_message')}
        </p>
        
        <div className="border-t border-border pt-6 mt-6">
          <p className="text-sm text-muted-foreground">
            {t('thank_you_footer1')}
          </p>
          <p className="text-sm font-medium mt-2">
            {t('thank_you_footer2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
