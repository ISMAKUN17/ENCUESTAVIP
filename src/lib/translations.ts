
export type Language = 'en' | 'es' | 'fr' | 'pt';

export const languageNames: { [key in Language]: string } = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
};

export const sectionTitles: { [key in Language]: { [key: string]: string } } = {
  en: {
    facilities: 'Facilities',
    concierge: 'Concierge VIP',
    butler: 'Butler Service',
  },
  es: {
    facilities: 'Instalaciones',
    concierge: 'Conserjería VIP',
    butler: 'Servicio de Mayordomo',
  },
  fr: {
    facilities: 'Installations',
    concierge: 'Conciergerie VIP',
    butler: 'Service de Majordome',
  },
  pt: {
    facilities: 'Instalações',
    concierge: 'Concierge VIP',
    butler: 'Serviço de Mordomo',
  },
};

export const questions: { [key in Language]: { [key: string]: { id: string; text: string; }[] } } = {
  en: {
    facilities: [
      { id: 'vip_lounge_services', text: 'How would you rate the VIP LOUNGE services?' },
      { id: 'vip_lounge_cleaning', text: 'How do you consider the cleaning of the VIP LOUNGE?' },
      { id: 'vip_lounge_maintenance', text: 'How do you consider the maintenance of the VIP LOUNGE?' },
      { id: 'vip_lounge_food', text: 'How would you rate the food and beverages quality in the VIP lounge?' },
      { id: 'room_cleaning', text: 'How would you rate the cleaning in your room?' },
      { id: 'night_coverage', text: 'Did you receive the night coverage service?' },
      { id: 'turndown', text: 'How do you consider the turndown?' },
      { id: 'beach_club_services', text: 'How would you rate the VIP BEACH CLUB services?' },
      { id: 'beach_club_cleaning', text: 'How do you consider the cleaning of the VIP BEACH CLUB?' },
      { id: 'beach_club_maintenance', text: 'How do you consider the maintenance of the VIP BEACH CLUB?' },
      { id: 'beach_club_beverages', text: 'How would you rate the beverages quality in the VIP BEACH CLUB?' },
      { id: 'comments', text: 'Any additional comments about the facilities?' },
    ],
    concierge: [
      { id: 'checkin_process', text: 'How was the attention during your check in/out process?' },
      { id: 'information_provided', text: 'Did the concierge provide you with the information you required?' },
      { id: 'suggestions', text: 'Did the concierge offer suggestions to improve your Live Aqua experience?' },
      { id: 'everything_done', text: 'Was everything offered done?' },
      { id: 'comments', text: 'Any additional comments about the concierge?' },
    ],
    butler: [
      { id: 'attitude', text: 'How do you consider the butler attitude?' },
      { id: 'help_support', text: 'Did the butler offer help and support given to your needs?' },
      { id: 'promptness', text: 'Did the butler handle your requirements promptly?' },
      { id: 'suggestions', text: 'Did the butler offer suggestions to improve your Live Aqua Experience?' },
      { id: 'unexpected_situations', text: 'How did the butler react to unexpected situations?' },
      { id: 'expectations', text: 'Did the butler fulfill your expectations?' },
      { id: 'friendly_attitude', text: 'Was the butler\'s attitude kind and friendly?' },
      { id: 'comments', text: 'Share your comments with us.' },
    ],
  },
  es: {
    facilities: [
      { id: 'vip_lounge_services', text: '¿Cómo calificaría los servicios del LOUNGE VIP?' },
      { id: 'vip_lounge_cleaning', text: '¿Cómo considera la limpieza del LOUNGE VIP?' },
      { id: 'vip_lounge_maintenance', text: '¿Cómo considera el mantenimiento del LOUNGE VIP?' },
      { id: 'vip_lounge_food', text: '¿Cómo calificaría la calidad de alimentos y bebidas en el lounge VIP?' },
      { id: 'room_cleaning', text: '¿Cómo calificaría la limpieza en su habitación?' },
      { id: 'night_coverage', text: '¿Recibió el servicio de cobertura nocturna?' },
      { id: 'turndown', text: '¿Cómo considera el servicio de cobertura?' },
      { id: 'beach_club_services', text: '¿Cómo calificaría los servicios del CLUB DE PLAYA VIP?' },
      { id: 'beach_club_cleaning', text: '¿Cómo considera la limpieza del CLUB DE PLAYA VIP?' },
      { id: 'beach_club_maintenance', text: '¿Cómo considera el mantenimiento del CLUB DE PLAYA VIP?' },
      { id: 'beach_club_beverages', text: '¿Cómo calificaría la calidad de las bebidas en el CLUB DE PLAYA VIP?' },
      { id: 'comments', text: '¿Algún comentario adicional sobre las instalaciones?' },
    ],
    concierge: [
      { id: 'checkin_process', text: '¿Cómo fue la atención durante su proceso de check in/out?' },
      { id: 'information_provided', text: '¿El concierge le proporcionó la información que requería?' },
      { id: 'suggestions', text: '¿El concierge le ofreció sugerencias para mejorar su experiencia Live Aqua?' },
      { id: 'everything_done', text: '¿Se realizó todo lo ofrecido?' },
      { id: 'comments', text: '¿Algún comentario adicional sobre el concierge?' },
    ],
    butler: [
      { id: 'attitude', text: '¿Cómo considera la actitud del mayordomo?' },
      { id: 'help_support', text: '¿El mayordomo le ofreció ayuda y apoyo según sus necesidades?' },
      { id: 'promptness', text: '¿El mayordomo atendió sus requerimientos con prontitud?' },
      { id: 'suggestions', text: '¿El mayordomo ofreció sugerencias para mejorar su experiencia Live Aqua?' },
      { id: 'unexpected_situations', text: '¿Cómo reaccionó el mayordomo ante situaciones inesperadas?' },
      { id: 'expectations', text: '¿El mayordomo cumplió con sus expectativas?' },
      { id: 'friendly_attitude', text: '¿La actitud del mayordomo fue amable y cordial?' },
      { id: 'comments', text: 'Comparta sus comentarios con nosotros.' },
    ],
  },
  fr: {
    facilities: [
      { id: 'vip_lounge_services', text: 'Comment évaluez-vous les services du SALON VIP?' },
      { id: 'vip_lounge_cleaning', text: 'Comment considérez-vous la propreté du SALON VIP?' },
      { id: 'vip_lounge_maintenance', text: 'Comment considérez-vous l\'entretien du SALON VIP?' },
      { id: 'vip_lounge_food', text: 'Comment évaluez-vous la qualité de la nourriture et des boissons dans le salon VIP?' },
      { id: 'room_cleaning', text: 'Comment évaluez-vous la propreté de votre chambre?' },
      { id: 'night_coverage', text: 'Avez-vous reçu le service de couverture nocturne?' },
      { id: 'turndown', text: 'Comment considérez-vous le service de couverture?' },
      { id: 'beach_club_services', text: 'Comment évaluez-vous les services du CLUB DE PLAGE VIP?' },
      { id: 'beach_club_cleaning', text: 'Comment considérez-vous la propreté du CLUB DE PLAGE VIP?' },
      { id: 'beach_club_maintenance', text: 'Comment considérez-vous l\'entretien du CLUB DE PLAGE VIP?' },
      { id: 'beach_club_beverages', text: 'Comment évaluez-vous la qualité des boissons au CLUB DE PLAGE VIP?' },
      { id: 'comments', text: 'Avez-vous des commentaires supplémentaires sur les installations?' },
    ],
    concierge: [
      { id: 'checkin_process', text: 'Comment était l\'attention pendant votre processus d\'arrivée/départ?' },
      { id: 'information_provided', text: 'Le concierge vous a-t-il fourni les informations dont vous aviez besoin?' },
      { id: 'suggestions', text: 'Le concierge vous a-t-il proposé des suggestions pour améliorer votre expérience Live Aqua?' },
      { id: 'everything_done', text: 'Est-ce que tout ce qui a été offert a été fait?' },
      { id: 'comments', text: 'Avez-vous des commentaires supplémentaires sur le concierge?' },
    ],
    butler: [
      { id: 'attitude', text: 'Comment considérez-vous l\'attitude du majordome?' },
      { id: 'help_support', text: 'Le majordome vous a-t-il offert de l\'aide et du soutien selon vos besoins?' },
      { id: 'promptness', text: 'Le majordome a-t-il traité vos demandes rapidement?' },
      { id: 'suggestions', text: 'Le majordome a-t-il proposé des suggestions pour améliorer votre expérience Live Aqua?' },
      { id: 'unexpected_situations', text: 'Comment le majordome a-t-il réagi aux situations inattendues?' },
      { id: 'expectations', text: 'Le majordome a-t-il répondu à vos attentes?' },
      { id: 'friendly_attitude', text: 'L\'attitude du majordome était-elle aimable et amicale?' },
      { id: 'comments', text: 'Partagez vos commentaires avec nous.' },
    ],
  },
  pt: {
    facilities: [
      { id: 'vip_lounge_services', text: 'Como você avalia os serviços do LOUNGE VIP?' },
      { id: 'vip_lounge_cleaning', text: 'Como você considera a limpeza do LOUNGE VIP?' },
      { id: 'vip_lounge_maintenance', text: 'Como você considera a manutenção do LOUNGE VIP?' },
      { id: 'vip_lounge_food', text: 'Como você avalia a qualidade dos alimentos e bebidas no lounge VIP?' },
      { id: 'room_cleaning', text: 'Como você avalia a limpeza do seu quarto?' },
      { id: 'night_coverage', text: 'Você recebeu o serviço de cobertura noturna?' },
      { id: 'turndown', text: 'Como você considera o serviço de cobertura?' },
      { id: 'beach_club_services', text: 'Como você avalia os serviços do CLUBE DE PRAIA VIP?' },
      { id: 'beach_club_cleaning', text: 'Como você considera a limpeza do CLUBE DE PRAIA VIP?' },
      { id: 'beach_club_maintenance', text: 'Como você considera a manutenção do CLUBE DE PRAIA VIP?' },
      { id: 'beach_club_beverages', text: 'Como você avalia a qualidade das bebidas no CLUBE DE PRAIA VIP?' },
      { id: 'comments', text: 'Algum comentário adicional sobre as instalações?' },
    ],
    concierge: [
      { id: 'checkin_process', text: 'Como foi a atenção durante seu processo de check-in/check-out?' },
      { id: 'information_provided', text: 'O concierge forneceu as informações que você precisava?' },
      { id: 'suggestions', text: 'O concierge ofereceu sugestões para melhorar sua experiência Live Aqua?' },
      { id: 'everything_done', text: 'Foi realizado tudo o que foi oferecido?' },
      { id: 'comments', text: 'Algum comentário adicional sobre o concierge?' },
    ],
    butler: [
      { id: 'attitude', text: 'Como você considera a atitude do mordomo?' },
      { id: 'help_support', text: 'O mordomo ofereceu ajuda e apoio de acordo com suas necessidades?' },
      { id: 'promptness', text: 'O mordomo atendeu às suas solicitações prontamente?' },
      { id: 'suggestions', text: 'O mordomo ofereceu sugestões para melhorar sua experiência Live Aqua?' },
      { id: 'unexpected_situations', text: 'Como o mordomo reagiu a situações inesperadas?' },
      { id: 'expectations', text: 'O mordomo atendeu às suas expectativas?' },
      { id: 'friendly_attitude', text: 'A atitude do mordomo foi gentil e amigável?' },
      { id: 'comments', text: 'Compartilhe seus comentários conosco.' },
    ],
  },
};

export const getTranslation = (language: Language, key: string): string => {
  const translations: { [key: string]: { [key: string]: string } } = {
    survey_title: {
      en: 'We would love to hear about your experience.',
      es: 'Nos encantaría saber de tu experiencia.',
      fr: 'Nous aimerions connaître votre expérience.',
      pt: 'Gostaríamos de saber mais sobre sua experiência.',
    },
    survey_subtitle: {
      en: 'Your feedback is important to us.',
      es: 'Sus comentarios son importantes para nosotros.',
      fr: 'Vos commentaires sont importants pour nous.',
      pt: 'Seu feedback é importante para nós.',
    },
    section: {
      en: 'Section',
      es: 'Sección',
      fr: 'Section',
      pt: 'Seção',
    },
    very_good: {
      en: 'Very Good',
      es: 'Muy Bueno',
      fr: 'Très Bien',
      pt: 'Muito Bom',
    },
    good: {
      en: 'Good',
      es: 'Bueno',
      fr: 'Bien',
      pt: 'Bom',
    },
    poor: {
      en: 'Poor',
      es: 'Malo',
      fr: 'Mauvais',
      pt: 'Ruim',
    },
    very_poor: {
      en: 'Very Poor',
      es: 'Muy Malo',
      fr: 'Très Mauvais',
      pt: 'Muito Ruim',
    },
    yes: {
      en: 'Yes',
      es: 'Sí',
      fr: 'Oui',
      pt: 'Sim',
    },
    no: {
      en: 'No',
      es: 'No',
      fr: 'Non',
      pt: 'Não',
    },
    comment_placeholder: {
      en: 'Enter your comments here...',
      es: 'Ingrese sus comentarios aquí...',
      fr: 'Entrez vos commentaires ici...',
      pt: 'Digite seus comentários aqui...',
    },
    previous: {
      en: 'Previous',
      es: 'Anterior',
      fr: 'Précédent',
      pt: 'Anterior',
    },
    next: {
      en: 'Next',
      es: 'Siguiente',
      fr: 'Suivant',
      pt: 'Próximo',
    },
    submit: {
      en: 'Submit',
      es: 'Enviar',
      fr: 'Soumettre',
      pt: 'Enviar',
    },
    submitting: {
      en: 'Submitting...',
      es: 'Enviando...',
      fr: 'Envoi en cours...',
      pt: 'Enviando...',
    },
    
    // User Info Form
    user_info: {
      en: 'Your Information',
      es: 'Tu Información',
      fr: 'Vos Informations',
      pt: 'Suas Informações'
    },
    date: {
      en: 'Date',
      es: 'Fecha',
      fr: 'Date',
      pt: 'Data'
    },
    room_number: {
      en: 'Room Number',
      es: 'Número de Habitación',
      fr: 'Numéro de Chambre',
      pt: 'Número do Quarto'
    },
    name: {
      en: 'Full Name',
      es: 'Nombre Completo',
      fr: 'Nom Complet',
      pt: 'Nome Completo'
    },
    butler: {
      en: 'Butler',
      es: 'Mayordomo',
      fr: 'Majordome',
      pt: 'Mordomo'
    },
    cancel: {
      en: 'Cancel',
      es: 'Cancelar',
      fr: 'Annuler',
      pt: 'Cancelar'
    },
    confirm: {
      en: 'Confirm',
      es: 'Confirmar',
      fr: 'Confirmer',
      pt: 'Confirmar'
    },
    room_number_placeholder: {
      en: 'Enter your room number',
      es: 'Ingrese el número de habitación',
      fr: 'Entrez votre numéro de chambre',
      pt: 'Digite o número do seu quarto'
    },
    name_placeholder: {
      en: 'Enter your full name',
      es: 'Ingrese su nombre completo',
      fr: 'Entrez votre nom complet',
      pt: 'Digite seu nome completo'
    },
    butler_placeholder: {
      en: 'Enter your butler\'s name',
      es: 'Ingrese el nombre de su mayordomo',
      fr: 'Entrez le nom de votre majordome',
      pt: 'Digite o nome do seu mordomo'
    },
    submit_success: {
      en: 'Survey submitted successfully',
      es: 'Encuesta enviada con éxito',
      fr: 'Enquête soumise avec succès',
      pt: 'Pesquisa enviada com sucesso'
    }
  };

  return translations[key]?.[language] || key;
};
