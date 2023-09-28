const Subscription = require('../models/subscription');

(async () => {
    try {
      const newSubscription = await Subscription.create({
        userId: 1,
        eventId: 1,
      });
  
      console.log('Nova inscrição criada:', newSubscription.toJSON());
    } catch (error) {
      console.error('Erro ao criar a inscrição:', error);
    }
})();