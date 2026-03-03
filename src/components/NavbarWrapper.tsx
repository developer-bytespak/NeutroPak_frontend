'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from './Navbar';

function NavbarContent() {
  const pathname = usePathname();

  // Don't show navbar on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return <Navbar />;
}

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="h-16 bg-white shadow-md" />}>
      <NavbarContent />
    </Suspense>
  );
}
