
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1C5.925 1 1 5.925 1 12c0 4.869 3.146 8.986 7.5 10.435.547.1.747-.238.747-.527 0-.26-.01-1.116-.014-2.026-3.05.663-3.692-1.47-3.692-1.47-.498-1.264-1.216-1.6-1.216-1.6-.995-.681.075-.667.075-.667 1.1.078 1.678 1.133 1.678 1.133.978 1.676 2.564 1.192 3.188.911.099-.709.382-1.192.696-1.466-2.437-.277-5.001-1.218-5.001-5.426 0-1.197.426-2.177 1.127-2.946-.113-.278-.488-1.394.106-2.91 0 0 .917-.293 3.004 1.126a10.46 10.46 0 012.738-.368c.929.004 1.864.125 2.738.368 2.087-1.42 3.002-1.126 3.002-1.126.595 1.516.22 2.632.107 2.91.703.769 1.125 1.749 1.125 2.946 0 4.218-2.568 5.145-5.01 5.418.393.339.743 1.003.743 2.022 0 1.46-.013 2.638-.013 2.996 0 .292.197.63.752.523C19.855 20.982 23 16.868 23 12c0-6.075-4.925-11-11-11z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <a
                    href="https://github.com/PantherUnica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    PantherUnica
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
