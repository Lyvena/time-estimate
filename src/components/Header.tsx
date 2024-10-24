import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-blue-100" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};