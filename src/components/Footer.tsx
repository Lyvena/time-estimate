import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-600">
        <p>
          © {new Date().getFullYear()}{' '}
          <a 
            href="https://lyvena.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Lyvena.
          </a>
          {' '}All rights reserved.
        </p>
      </div>
    </footer>
  );
};