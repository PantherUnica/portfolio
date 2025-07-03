
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Aditya Raj',
      };

      await emailjs.send(
        'service_3plfi6z', // Service ID
        'template_ize2a7u', // Template ID
        templateParams,
        'YYSnmddQyB4MRUUB5' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on your next product challenge? Let's discuss how we can create something amazing together.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's connect</h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations. Whether you're a startup looking for product strategy 
                  or an established company seeking data-driven solutions, let's talk!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:raj08032004@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      raj08032004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a 
                      href="tel:+918160079524" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +91 81600 79524
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/aditya-raj-0bb829251" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      aditya-raj-0bb829251
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability Note */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Current Availability</h4>
                <p className="text-gray-600 text-sm">
                  Open to new opportunities and collaborations. Typically respond within 24 hours.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
