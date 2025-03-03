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
    concierge: 'Concierge',
    butler: 'Butler',
  },
  es: {
    facilities: 'Instalaciones',
    concierge: 'Conserjería',
    butler: 'Mayordomo',
  },
  fr: {
    facilities: 'Installations',
    concierge: 'Conciergerie',
    butler: 'Majordome',
  },
  pt: {
    facilities: 'Instalações',
    concierge: 'Concierge',
    butler: 'Mordomo',
  },
};

export const questions: { [key in Language]: { [key: string]: { id: string; text: string; }[] } } = {
  en: {
    facilities: [
      { id: 'cleanliness', text: 'How would you rate the cleanliness of the facilities?' },
      { id: 'maintenance', text: 'How would you rate the maintenance of the facilities?' },
      { id: 'night_coverage', text: 'Is there adequate night coverage?' },
      { id: 'comments', text: 'Any additional comments about the facilities?' },
    ],
    concierge: [
      { id: 'helpfulness', text: 'How would you rate the helpfulness of the concierge?' },
      { id: 'response_time', text: 'How would you rate the response time of the concierge?' },
      { id: 'comments', text: 'Any additional comments about the concierge?' },
    ],
    butler: [
      { id: 'professionalism', text: 'How would you rate the professionalism of the butler?' },
      { id: 'attentiveness', text: 'How would you rate the attentiveness of the butler?' },
      { id: 'comments', text: 'Any additional comments about the butler?' },
    ],
  },
  es: {
    facilities: [
      { id: 'cleanliness', text: '¿Cómo calificaría la limpieza de las instalaciones?' },
      { id: 'maintenance', text: '¿Cómo calificaría el mantenimiento de las instalaciones?' },
      { id: 'night_coverage', text: '¿Hay cobertura nocturna adecuada?' },
      { id: 'comments', text: '¿Algún comentario adicional sobre las instalaciones?' },
    ],
    concierge: [
      { id: 'helpfulness', text: '¿Cómo calificaría la utilidad del conserje?' },
      { id: 'response_time', text: '¿Cómo calificaría el tiempo de respuesta del conserje?' },
      { id: 'comments', text: '¿Algún comentario adicional sobre el conserje?' },
    ],
    butler: [
      { id: 'professionalism', text: '¿Cómo calificaría la profesionalidad del mayordomo?' },
      { id: 'attentiveness', text: '¿Cómo calificaría la atención del mayordomo?' },
      { id: 'comments', text: '¿Algún comentario adicional sobre el mayordomo?' },
    ],
  },
  fr: {
    facilities: [
      { id: 'cleanliness', text: 'Comment évaluez-vous la propreté des installations?' },
      { id: 'maintenance', text: 'Comment évaluez-vous l\'entretien des installations?' },
      { id: 'night_coverage', text: 'Y a-t-il une couverture de nuit adéquate?' },
      { id: 'comments', text: 'Avez-vous des commentaires supplémentaires sur les installations?' },
    ],
    concierge: [
      { id: 'helpfulness', text: 'Comment évaluez-vous la serviabilité du concierge?' },
      { id: 'response_time', text: 'Comment évaluez-vous le temps de réponse du concierge?' },
      { id: 'comments', text: 'Avez-vous des commentaires supplémentaires sur le concierge?' },
    ],
    butler: [
      { id: 'professionalism', text: 'Comment évaluez-vous le professionnalisme du majordome?' },
      { id: 'attentiveness', text: 'Comment évaluez-vous l\'attention du majordome?' },
      { id: 'comments', text: 'Avez-vous des commentaires supplémentaires sur le majordome?' },
    ],
  },
  pt: {
    facilities: [
      { id: 'cleanliness', text: 'Como avalia a limpeza das instalações?' },
      { id: 'maintenance', text: 'Como avalia a manutenção das instalações?' },
      { id: 'night_coverage', text: 'Existe cobertura noturna adequada?' },
      { id: 'comments', text: 'Algum comentário adicional sobre as instalações?' },
    ],
    concierge: [
      { id: 'helpfulness', text: 'Como avalia a prestatividade do concierge?' },
      { id: 'response_time', text: 'Como avalia o tempo de resposta do concierge?' },
      { id: 'comments', text: 'Algum comentário adicional sobre o concierge?' },
    ],
    butler: [
      { id: 'professionalism', text: 'Como avalia o profissionalismo do mordomo?' },
      { id: 'attentiveness', text: 'Como avalia a atenção do mordomo?' },
      { id: 'comments', text: 'Algum comentário adicional sobre o mordomo?' },
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
