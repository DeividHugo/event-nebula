const User = require('../models/user');

(async () => {
    try {
      const newUser = await User.create({
        name: 'John Doe',
      });
  
      console.log('Novo usuário criado:', newUser.toJSON());
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
})();