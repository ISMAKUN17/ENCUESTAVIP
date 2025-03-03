
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import SurveySection from '@/components/SurveySection';
import ProgressIndicator from '@/components/ProgressIndicator';
import ThankYouScreen from '@/components/ThankYouScreen';

// Define survey structure
const surveyData = [
  {
    id: 'facilities',
    title: 'Facilities',
    questions: [
      {
        id: 'vip_lounge_services',
        text: 'How would you rate the VIP LOUNGE services?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_lounge_cleaning',
        text: 'How do you consider the cleaning of the VIP LOUNGE?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_lounge_maintenance',
        text: 'How do you consider the maintenance of the VIP LOUNGE?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_lounge_food',
        text: 'How would you rate the food and beverages quality in the VIP lounge?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'room_cleaning',
        text: 'How would you rate the cleaning in your room?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'night_coverage',
        text: 'Did you received the night coverage service?',
        options: ['Yes', 'No'],
        type: 'radio' as const,
      },
      {
        id: 'turndown',
        text: 'How do you consider the turndown?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_beach_club_services',
        text: 'How would you rate the VIP BEACH CLUB services?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_beach_club_cleaning',
        text: 'How do you consider the cleaning of the VIP BEACH CLUB?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_beach_club_maintenance',
        text: 'How do you consider the maintenance of the VIP BEACH CLUB?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'vip_beach_club_beverages',
        text: 'How would you rate the beverages quality in the VIP BEACH CLUB?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
    ],
  },
  {
    id: 'concierge',
    title: 'Concierge VIP',
    questions: [
      {
        id: 'checkin_checkout',
        text: 'How was the attention during your check in/ out process?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'concierge_info',
        text: 'Did the concierge provides you with the information you required?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'concierge_suggestions',
        text: 'Did the concierge offers suggestions to improve your Live Aqua experience?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'concierge_follow_through',
        text: 'Was everything offered done?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
    ],
  },
  {
    id: 'butler',
    title: 'Butler Service',
    questions: [
      {
        id: 'butler_attitude',
        text: 'How do you consider the butler attitude?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_help',
        text: 'Did the butler offered help and support given to your needs?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_promptness',
        text: 'Did the butler handle your requirements promptly?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_suggestions',
        text: 'Did the butler offered suggestions to improve your Live Aqua Experience?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_unexpected',
        text: 'How did the butler react to unexpected situations?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_expectations',
        text: 'Did the butler fulfilled your expectations?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'butler_friendly',
        text: 'Was the butler\'s attitude kind and friendly?',
        options: ['Very Good', 'Good', 'Poor', 'Very Poor'],
        type: 'radio' as const,
      },
      {
        id: 'comments',
        text: 'Share your comments with us.',
        options: [],
        type: 'textarea' as const,
      },
    ],
  },
];

const Index = () => {
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // For animation effect on load
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulating submission to a server
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      console.log('Survey submitted:', responses);
      
      // In a real app, you would send the data to your server here
      // fetch('/api/submit-survey', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(responses),
      // })
      
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
      <ProgressIndicator 
        currentSection={currentSection}
        totalSections={surveyData.length}
        sectionTitles={surveyData.map(section => section.title)}
      />
      
      <div className="container max-w-3xl py-6 md:py-12 px-4 md:px-0">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 animate-fade-in">
            Guest Satisfaction Survey
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            Your feedback helps us improve our services. Thank you for your time.
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
            Previous
          </Button>
          
          {currentSection < surveyData.length - 1 ? (
            <Button
              onClick={goToNext}
              disabled={!canProceed()}
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed() || isLoading}
              className="flex items-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <>
                  Submit
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
