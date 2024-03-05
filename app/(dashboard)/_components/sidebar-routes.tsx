'use client';
import { Layout, Compass } from 'lucide-react';
const guestRoutes = [
  { icon: Layout, label: 'Dashboard', href: '/' },
  { icon: Compass, label: 'Browse', href: '/search' },
  { icon: Layout, label: 'Dashboard', href: '/' },
];
const SidebarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;