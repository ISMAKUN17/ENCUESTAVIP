
type TranslationKey = 
  | 'survey_title'
  | 'survey_subtitle'
  | 'next'
  | 'previous'
  | 'submit'
  | 'submitting'
  | 'thank_you_title'
  | 'thank_you_message'
  | 'thank_you_footer1'
  | 'thank_you_footer2'
  | 'section'
  | 'yes'
  | 'no'
  | 'very_good'
  | 'good'
  | 'poor'
  | 'very_poor'
  | 'comment_placeholder';

export type Language = 'en' | 'es' | 'fr' | 'pt';

export const languageNames = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português'
};

type Translations = {
  [key in Language]: {
    [key in TranslationKey]: string;
  }
};

export const translations: Translations = {
  en: {
    survey_title: 'Guest Satisfaction Survey',
    survey_subtitle: 'Your feedback helps us improve our services. Thank you for your time.',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    submitting: 'Submitting...',
    thank_you_title: 'Thank You!',
    thank_you_message: 'Your feedback has been successfully submitted. We appreciate your time and value your opinion.',
    thank_you_footer1: 'We are constantly working to improve our services based on your feedback.',
    thank_you_footer2: 'We hope to see you again soon.',
    section: 'Section',
    yes: 'Yes',
    no: 'No',
    very_good: 'Very Good',
    good: 'Good',
    poor: 'Poor',
    very_poor: 'Very Poor',
    comment_placeholder: 'Share your thoughts with us...'
  },
  es: {
    survey_title: 'Encuesta de Satisfacción',
    survey_subtitle: 'Su opinión nos ayuda a mejorar nuestros servicios. Gracias por su tiempo.',
    next: 'Siguiente',
    previous: 'Anterior',
    submit: 'Enviar',
    submitting: 'Enviando...',
    thank_you_title: '¡Gracias!',
    thank_you_message: 'Su opinión ha sido enviada con éxito. Agradecemos su tiempo y valoramos su opinión.',
    thank_you_footer1: 'Trabajamos constantemente para mejorar nuestros servicios basados en sus comentarios.',
    thank_you_footer2: 'Esperamos verlo nuevamente pronto.',
    section: 'Sección',
    yes: 'Sí',
    no: 'No',
    very_good: 'Muy Bueno',
    good: 'Bueno',
    poor: 'Malo',
    very_poor: 'Muy Malo',
    comment_placeholder: 'Comparta sus pensamientos con nosotros...'
  },
  fr: {
    survey_title: 'Enquête de Satisfaction',
    survey_subtitle: 'Vos commentaires nous aident à améliorer nos services. Merci pour votre temps.',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    submitting: 'Soumission...',
    thank_you_title: 'Merci!',
    thank_you_message: 'Vos commentaires ont été soumis avec succès. Nous apprécions votre temps et valorisons votre opinion.',
    thank_you_footer1: 'Nous travaillons constamment à améliorer nos services en fonction de vos commentaires.',
    thank_you_footer2: 'Nous espérons vous revoir bientôt.',
    section: 'Section',
    yes: 'Oui',
    no: 'Non',
    very_good: 'Très Bien',
    good: 'Bien',
    poor: 'Médiocre',
    very_poor: 'Très Médiocre',
    comment_placeholder: 'Partagez vos pensées avec nous...'
  },
  pt: {
    survey_title: 'Pesquisa de Satisfação',
    survey_subtitle: 'Seu feedback nos ajuda a melhorar nossos serviços. Obrigado pelo seu tempo.',
    next: 'Próximo',
    previous: 'Anterior',
    submit: 'Enviar',
    submitting: 'Enviando...',
    thank_you_title: 'Obrigado!',
    thank_you_message: 'Seu feedback foi enviado com sucesso. Agradecemos seu tempo e valorizamos sua opinião.',
    thank_you_footer1: 'Estamos constantemente trabalhando para melhorar nossos serviços com base em seu feedback.',
    thank_you_footer2: 'Esperamos vê-lo novamente em breve.',
    section: 'Seção',
    yes: 'Sim',
    no: 'Não',
    very_good: 'Muito Bom',
    good: 'Bom',
    poor: 'Ruim',
    very_poor: 'Muito Ruim',
    comment_placeholder: 'Compartilhe seus pensamentos conosco...'
  }
};

// Function to get translation
export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key];
};

// Section titles translations
export const sectionTitles = {
  en: {
    facilities: 'Facilities',
    concierge: 'Concierge VIP',
    butler: 'Butler Service'
  },
  es: {
    facilities: 'Instalaciones',
    concierge: 'Concierge VIP',
    butler: 'Servicio de Mayordomo'
  },
  fr: {
    facilities: 'Installations',
    concierge: 'Concierge VIP',
    butler: 'Service de Majordome'
  },
  pt: {
    facilities: 'Instalações',
    concierge: 'Concierge VIP',
    butler: 'Serviço de Mordomo'
  }
};

// Questions translations
export const questions = {
  en: {
    facilities: [
      { id: 'vip_lounge_services', text: 'How would you rate the VIP LOUNGE services?' },
      { id: 'vip_lounge_cleaning', text: 'How do you consider the cleaning of the VIP LOUNGE?' },
      { id: 'vip_lounge_maintenance', text: 'How do you consider the maintenance of the VIP LOUNGE?' },
      { id: 'vip_lounge_food', text: 'How would you rate the food and beverages quality in the VIP lounge?' },
      { id: 'room_cleaning', text: 'How would you rate the cleaning in your room?' },
      { id: 'night_coverage', text: 'Did you received the night coverage service?' },
      { id: 'turndown', text: 'How do you consider the turndown?' },
      { id: 'vip_beach_club_services', text: 'How would you rate the VIP BEACH CLUB services?' },
      { id: 'vip_beach_club_cleaning', text: 'How do you consider the cleaning of the VIP BEACH CLUB?' },
      { id: 'vip_beach_club_maintenance', text: 'How do you consider the maintenance of the VIP BEACH CLUB?' },
      { id: 'vip_beach_club_beverages', text: 'How would you rate the beverages quality in the VIP BEACH CLUB?' }
    ],
    concierge: [
      { id: 'checkin_checkout', text: 'How was the attention during your check in/ out process?' },
      { id: 'concierge_info', text: 'Did the concierge provides you with the information you required?' },
      { id: 'concierge_suggestions', text: 'Did the concierge offers suggestions to improve your Live Aqua experience?' },
      { id: 'concierge_follow_through', text: 'Was everything offered done?' }
    ],
    butler: [
      { id: 'butler_attitude', text: 'How do you consider the butler attitude?' },
      { id: 'butler_help', text: 'Did the butler offered help and support given to your needs?' },
      { id: 'butler_promptness', text: 'Did the butler handle your requirements promptly?' },
      { id: 'butler_suggestions', text: 'Did the butler offered suggestions to improve your Live Aqua Experience?' },
      { id: 'butler_unexpected', text: 'How did the butler react to unexpected situations?' },
      { id: 'butler_expectations', text: 'Did the butler fulfilled your expectations?' },
      { id: 'butler_friendly', text: 'Was the butler\'s attitude kind and friendly?' },
      { id: 'comments', text: 'Share your comments with us.' }
    ]
  },
  es: {
    facilities: [
      { id: 'vip_lounge_services', text: '¿Cómo calificaría los servicios del LOUNGE VIP?' },
      { id: 'vip_lounge_cleaning', text: '¿Cómo considera la limpieza del LOUNGE VIP?' },
      { id: 'vip_lounge_maintenance', text: '¿Cómo considera el mantenimiento del LOUNGE VIP?' },
      { id: 'vip_lounge_food', text: '¿Cómo calificaría la calidad de los alimentos y bebidas en el LOUNGE VIP?' },
      { id: 'room_cleaning', text: '¿Cómo calificaría la limpieza de su habitación?' },
      { id: 'night_coverage', text: '¿Recibió el servicio de cobertura nocturna?' },
      { id: 'turndown', text: '¿Cómo considera el servicio de apertura de cama?' },
      { id: 'vip_beach_club_services', text: '¿Cómo calificaría los servicios del CLUB DE PLAYA VIP?' },
      { id: 'vip_beach_club_cleaning', text: '¿Cómo considera la limpieza del CLUB DE PLAYA VIP?' },
      { id: 'vip_beach_club_maintenance', text: '¿Cómo considera el mantenimiento del CLUB DE PLAYA VIP?' },
      { id: 'vip_beach_club_beverages', text: '¿Cómo calificaría la calidad de las bebidas en el CLUB DE PLAYA VIP?' }
    ],
    concierge: [
      { id: 'checkin_checkout', text: '¿Cómo fue la atención durante su proceso de check in/out?' },
      { id: 'concierge_info', text: '¿El concierge le proporcionó la información que requería?' },
      { id: 'concierge_suggestions', text: '¿El concierge ofreció sugerencias para mejorar su experiencia en Live Aqua?' },
      { id: 'concierge_follow_through', text: '¿Se cumplió todo lo ofrecido?' }
    ],
    butler: [
      { id: 'butler_attitude', text: '¿Cómo considera la actitud del mayordomo?' },
      { id: 'butler_help', text: '¿El mayordomo ofreció ayuda y apoyo según sus necesidades?' },
      { id: 'butler_promptness', text: '¿El mayordomo atendió sus requerimientos con prontitud?' },
      { id: 'butler_suggestions', text: '¿El mayordomo ofreció sugerencias para mejorar su experiencia en Live Aqua?' },
      { id: 'butler_unexpected', text: '¿Cómo reaccionó el mayordomo ante situaciones inesperadas?' },
      { id: 'butler_expectations', text: '¿El mayordomo cumplió con sus expectativas?' },
      { id: 'butler_friendly', text: '¿La actitud del mayordomo fue amable y cordial?' },
      { id: 'comments', text: 'Comparta sus comentarios con nosotros.' }
    ]
  },
  fr: {
    facilities: [
      { id: 'vip_lounge_services', text: 'Comment évaluez-vous les services du SALON VIP?' },
      { id: 'vip_lounge_cleaning', text: 'Comment considérez-vous le nettoyage du SALON VIP?' },
      { id: 'vip_lounge_maintenance', text: 'Comment considérez-vous l\'entretien du SALON VIP?' },
      { id: 'vip_lounge_food', text: 'Comment évaluez-vous la qualité des aliments et des boissons dans le SALON VIP?' },
      { id: 'room_cleaning', text: 'Comment évaluez-vous le nettoyage de votre chambre?' },
      { id: 'night_coverage', text: 'Avez-vous reçu le service de couverture nocturne?' },
      { id: 'turndown', text: 'Comment considérez-vous le service de couverture?' },
      { id: 'vip_beach_club_services', text: 'Comment évaluez-vous les services du CLUB DE PLAGE VIP?' },
      { id: 'vip_beach_club_cleaning', text: 'Comment considérez-vous le nettoyage du CLUB DE PLAGE VIP?' },
      { id: 'vip_beach_club_maintenance', text: 'Comment considérez-vous l\'entretien du CLUB DE PLAGE VIP?' },
      { id: 'vip_beach_club_beverages', text: 'Comment évaluez-vous la qualité des boissons dans le CLUB DE PLAGE VIP?' }
    ],
    concierge: [
      { id: 'checkin_checkout', text: 'Comment était l\'attention pendant votre processus d\'enregistrement/départ?' },
      { id: 'concierge_info', text: 'Le concierge vous a-t-il fourni les informations dont vous aviez besoin?' },
      { id: 'concierge_suggestions', text: 'Le concierge a-t-il offert des suggestions pour améliorer votre expérience Live Aqua?' },
      { id: 'concierge_follow_through', text: 'Tout ce qui a été offert a-t-il été réalisé?' }
    ],
    butler: [
      { id: 'butler_attitude', text: 'Comment considérez-vous l\'attitude du majordome?' },
      { id: 'butler_help', text: 'Le majordome a-t-il offert de l\'aide et du soutien selon vos besoins?' },
      { id: 'butler_promptness', text: 'Le majordome a-t-il géré vos demandes rapidement?' },
      { id: 'butler_suggestions', text: 'Le majordome a-t-il offert des suggestions pour améliorer votre expérience Live Aqua?' },
      { id: 'butler_unexpected', text: 'Comment le majordome a-t-il réagi aux situations inattendues?' },
      { id: 'butler_expectations', text: 'Le majordome a-t-il répondu à vos attentes?' },
      { id: 'butler_friendly', text: 'L\'attitude du majordome était-elle aimable et amicale?' },
      { id: 'comments', text: 'Partagez vos commentaires avec nous.' }
    ]
  },
  pt: {
    facilities: [
      { id: 'vip_lounge_services', text: 'Como você avalia os serviços do LOUNGE VIP?' },
      { id: 'vip_lounge_cleaning', text: 'Como você considera a limpeza do LOUNGE VIP?' },
      { id: 'vip_lounge_maintenance', text: 'Como você considera a manutenção do LOUNGE VIP?' },
      { id: 'vip_lounge_food', text: 'Como você avalia a qualidade dos alimentos e bebidas no LOUNGE VIP?' },
      { id: 'room_cleaning', text: 'Como você avalia a limpeza do seu quarto?' },
      { id: 'night_coverage', text: 'Você recebeu o serviço de cobertura noturna?' },
      { id: 'turndown', text: 'Como você considera o serviço de abertura de cama?' },
      { id: 'vip_beach_club_services', text: 'Como você avalia os serviços do CLUBE DE PRAIA VIP?' },
      { id: 'vip_beach_club_cleaning', text: 'Como você considera a limpeza do CLUBE DE PRAIA VIP?' },
      { id: 'vip_beach_club_maintenance', text: 'Como você considera a manutenção do CLUBE DE PRAIA VIP?' },
      { id: 'vip_beach_club_beverages', text: 'Como você avalia a qualidade das bebidas no CLUBE DE PRAIA VIP?' }
    ],
    concierge: [
      { id: 'checkin_checkout', text: 'Como foi o atendimento durante seu processo de check-in/out?' },
      { id: 'concierge_info', text: 'O concierge forneceu as informações que você precisava?' },
      { id: 'concierge_suggestions', text: 'O concierge ofereceu sugestões para melhorar sua experiência no Live Aqua?' },
      { id: 'concierge_follow_through', text: 'Tudo o que foi oferecido foi realizado?' }
    ],
    butler: [
      { id: 'butler_attitude', text: 'Como você considera a atitude do mordomo?' },
      { id: 'butler_help', text: 'O mordomo ofereceu ajuda e suporte de acordo com suas necessidades?' },
      { id: 'butler_promptness', text: 'O mordomo atendeu aos seus pedidos prontamente?' },
      { id: 'butler_suggestions', text: 'O mordomo ofereceu sugestões para melhorar sua experiência no Live Aqua?' },
      { id: 'butler_unexpected', text: 'Como o mordomo reagiu a situações inesperadas?' },
      { id: 'butler_expectations', text: 'O mordomo atendeu às suas expectativas?' },
      { id: 'butler_friendly', text: 'A atitude do mordomo foi gentil e amigável?' },
      { id: 'comments', text: 'Compartilhe seus comentários conosco.' }
    ]
  }
};
