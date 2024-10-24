import React from 'react';
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Mail className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? We're here to help!
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg">
                Email us at:{" "}
                <a
                  href="mailto:info@lyvena.xyz"
                  className="text-blue-600 hover:underline font-medium"
                >
                  info@lyvena.xyz
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;