import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Clock className="h-16 w-16 text-blue-600" />
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
        </div>
      </div>
    </div>
  );
};

export default Landing;