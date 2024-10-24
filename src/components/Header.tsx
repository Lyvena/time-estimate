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
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="bg-blue-500/30 rounded-lg px-2">
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle() + " text-blue-100"}>
                  Home
                </Link>
              </NavigationMenuItem>
              {isAuthenticated && (
                <>
                  <NavigationMenuItem>
                    <Link to="/dashboard" className={navigationMenuTriggerStyle() + " text-blue-100"}>
                      Dashboard
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/settings" className={navigationMenuTriggerStyle() + " text-blue-100"}>
                      Settings
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle() + " text-blue-100"}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-blue-50" 
            asChild
          >
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};