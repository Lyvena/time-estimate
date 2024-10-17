import React from 'react';
import { TimeEstimateForm } from '../components/TimeEstimateForm';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">AI Time Estimate Agent</h1>
        <TimeEstimateForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;