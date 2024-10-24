import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Brain, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Landing = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Accuracy",
      description: "Our advanced AI algorithms analyze task complexity and patterns to provide precise time estimates."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Instant Estimates",
      description: "Get immediate time predictions for your tasks, helping you plan your schedule effectively."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Smart Learning",
      description: "Our system learns from your team's performance to provide increasingly accurate estimates."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="h-16 w-16 text-blue-600" />
                </motion.div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900">
                AI-Powered Time Estimation
              </h1>
              <p className="text-xl text-gray-600">
                Get accurate time estimates for your tasks using advanced AI technology.
                Save time and plan better with TimeWise.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/auth">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;