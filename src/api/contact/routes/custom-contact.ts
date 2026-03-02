export default {
  routes: [
    {
      method: 'POST',
      path: '/contacts/submit',  
      handler: 'api::contact.contact.submit',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};