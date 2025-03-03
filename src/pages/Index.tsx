import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import SurveySection from '@/components/SurveySection';
import ProgressIndicator from '@/components/ProgressIndicator';
import ThankYouScreen from '@/components/ThankYouScreen';
import LanguageSelector from '@/components/LanguageSelector';
import UserInfoForm, { UserInfo } from '@/components/UserInfoForm';
import { useLanguage } from '@/context/LanguageContext';
import { sectionTitles, questions } from '@/lib/translations';

const Index = () => {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showUserInfoForm, setShowUserInfoForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // For animation effect on load
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define survey structure based on language
  const surveyData = [
    {
      id: 'facilities',
      title: sectionTitles[language].facilities,
      questions: questions[language].facilities.map(q => {
        // Use yes/no options only for night_coverage question
        const options = q.id === 'night_coverage' 
          ? [t('yes'), t('no')] 
          : [t('very_good'), t('good'), t('poor'), t('very_poor')];
        
        return {
          id: q.id,
          text: q.text,
          options: options,
          type: q.id === 'comments' ? 'textarea' as const : 'radio' as const,
        };
      }),
    },
    {
      id: 'concierge',
      title: sectionTitles[language].concierge,
      questions: questions[language].concierge.map(q => ({
        id: q.id,
        text: q.text,
        options: [t('very_good'), t('good'), t('poor'), t('very_poor')],
        type: q.id === 'comments' ? 'textarea' as const : 'radio' as const,
      })),
    },
    {
      id: 'butler',
      title: sectionTitles[language].butler,
      questions: questions[language].butler.map(q => ({
        id: q.id,
        text: q.text,
        options: [t('very_good'), t('good'), t('poor'), t('very_poor')],
        type: q.id === 'comments' ? 'textarea' as const : 'radio' as const,
      })),
    },
  ];

  const handleResponseChange = (questionId: string, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const canProceed = () => {
    const currentQuestions = surveyData[currentSection].questions;
    return currentQuestions.every((q) => 
      (q.type === 'textarea' && q.id === 'comments') || responses[q.id]
    );
  };

  const goToPrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (currentSection < surveyData.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenUserInfoForm = () => {
    setShowUserInfoForm(true);
  };

  const handleCloseUserInfoForm = () => {
    setShowUserInfoForm(false);
  };

  const handleUserInfoSubmit = (info: UserInfo) => {
    setUserInfo(info);
    setShowUserInfoForm(false);
    submitSurvey(info);
  };

  const submitSurvey = (info: UserInfo) => {
    setIsLoading(true);
    // Simulating submission to a server
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      
      // Combine survey responses with user information
      const completeData = {
        userInfo: info,
        responses
      };
      
      console.log('Survey submitted:', completeData);
      
      // In a real app, you would send the data to your server here
      // fetch('/api/submit-survey', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(completeData),
      // })
      
      toast({
        title: t('submit_success'),
        variant: "default",
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  // Calculate completion percentage for each section
  const getSectionCompletion = (sectionIndex: number) => {
    const sectionQuestions = surveyData[sectionIndex].questions;
    const requiredQuestions = sectionQuestions.filter(q => q.type !== 'textarea' || q.id !== 'comments');
    const answeredQuestions = requiredQuestions.filter(q => responses[q.id]);
    return (answeredQuestions.length / requiredQuestions.length) * 100;
  };

  if (submitted) {
    return <ThankYouScreen />;
  }

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
      <ProgressIndicator 
        currentSection={currentSection}
        totalSections={surveyData.length}
        sectionTitles={surveyData.map(section => section.title)}
      />
      
      <div className="container max-w-3xl py-6 md:py-12 px-4 md:px-0">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 animate-fade-in">
            {t('survey_title')}
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('survey_subtitle')}
          </p>
        </header>

        <div className="relative mb-8">
          {surveyData.map((section, index) => (
            <SurveySection
              key={section.id}
              title={section.title}
              questions={section.questions}
              responses={responses}
              onResponseChange={handleResponseChange}
              isActive={currentSection === index}
              animationDelay={index * 100}
            />
          ))}
        </div>

        <div className="flex justify-between items-center my-8 pt-4 border-t border-border animate-fade-in">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentSection === 0}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t('previous')}
          </Button>
          
          {currentSection < surveyData.length - 1 ? (
            <Button
              onClick={goToNext}
              disabled={!canProceed()}
              className="flex items-center"
            >
              {t('next')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleOpenUserInfoForm}
              disabled={!canProceed()}
              className="flex items-center"
            >
              {t('submit')}
              <Send className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>

      <UserInfoForm 
        open={showUserInfoForm} 
        onClose={handleCloseUserInfoForm} 
        onSubmit={handleUserInfoSubmit}
      />
    </div>
  );
};

export default Index;
