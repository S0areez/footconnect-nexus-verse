
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "FootConnect has revolutionized how I manage my health and connect with my fans. The injury prediction alerts have been incredibly accurate!",
    author: "Carlos Silva",
    role: "Professional Player, São Paulo FC",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080"
  },
  {
    content: "As a fan, I never felt so close to my favorite team. The VR experience is like being at the stadium, but with even more insights and stats!",
    author: "Ana Martins",
    role: "Premium Fan Member",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574"
  },
  {
    content: "The mental health resources have been a game-changer for me. Having discreet access to professionals has helped me perform at my best.",
    author: "Pedro Alvarez",
    role: "Midfielder, Flamengo",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from players and fans who are already experiencing the benefits of FootConnect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white p-2">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </div>
                  <div className="mt-auto flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-footconnect-dark">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
