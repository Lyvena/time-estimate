import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const Header = () => {
  const location = useLocation();
  const isAuthenticated = false; // TODO: Replace with actual auth state

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle() + " text-white hover:text-blue-100"}>
                  Home
                </Link>
              </NavigationMenuItem>
              {isAuthenticated && (
                <NavigationMenuItem>
                  <Link to="/dashboard" className={navigationMenuTriggerStyle() + " text-white hover:text-blue-100"}>
                    Dashboard
                  </Link>
                </NavigationMenuItem>
              )}
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle() + " text-white hover:text-blue-100"}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" className="text-white hover:text-blue-100" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};