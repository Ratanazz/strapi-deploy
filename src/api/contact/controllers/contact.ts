import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async submit(ctx: Context) {
    try {
      const { name, email, phone, message } = ctx.request.body as any;

      if (!name || !email || !message) {
        return ctx.badRequest('Missing required fields');
      }

      // Save to DB — status 'published' required because draftAndPublish is enabled
      await strapi.documents('api::contact.contact').create({
        data: { name, email, phone, message },
        status: 'published',
      });

      
      await strapi.plugin('email').service('email').send({
        to: 'solorng-phat@mptc.gov.kh',
        replyTo: email,
        subject: `New Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      // Confirmation email to user
      await strapi.plugin('email').service('email').send({
        to: email,
        subject: 'យើងបានទទួលសាររបស់អ្នក',
        html: `
          <p>សួស្តី ${name},</p>
          <p>អរគុណចំពោះការទំនាក់ទំនងមកយើង។ យើងនឹងឆ្លើយតបឆាប់ៗ។</p>
          <br/>
          <p><strong>DES Team</strong></p>
        `,
      });

      return ctx.send({ success: true, message: 'Form submitted successfully' });
    } catch (err) {
      strapi.log.error('Contact form error:', err);
      return ctx.internalServerError('Something went wrong. Please try again later.');
    }
  },
}));