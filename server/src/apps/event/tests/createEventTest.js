const Event = require('../models/event');
const User = require('../../user/models/user');

(async () => {
    try {
      const newEvent = await Event.create({
        name: 'NebulaFirst',
        pathVideo: 'https://www.youtube.com/watch?v=qdb-zx5qyMo&ab_channel=FlowPodcast',
        userId: 1,
      });
  
      console.log('Novo evento criado:', newEvent.toJSON());
    } catch (error) {
      console.error('Erro ao criar evento:', error);
    }
})();