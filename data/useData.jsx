 export default users = [
    
   {
    name: 'kylesams',
       email: 'kyleadmin@gmail.com',
       password: bcrypt.hashSync('powersam360', 8),
     isAdmin: true,
     },
    {
       name: 'kyle',
      email: 'powersam360@gmail.com',
     password: bcrypt.hashSync('powersam360', 8),
      isAdmin: false,
    },

 ]
