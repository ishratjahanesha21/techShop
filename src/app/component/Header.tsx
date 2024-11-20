"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header1 } from './Navbar/Navbar';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <>
  
    <Header1/>
   </>
  );
}
