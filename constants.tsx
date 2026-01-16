import React from 'react';
import { EquipmentItem, NavLink as NavLinkType } from './types';
import { Truck, Wrench, HardHat, DollarSign, MapPin } from 'lucide-react';
import { 
  HashRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink, 
  useLocation,
  useParams
} from 'react-router-dom';

export const NAV_LINKS: NavLinkType[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: '1',
    name: '2019 Bobcat T740',
    category: 'Sales',
    imageUrl: 'https://i.imgur.com/gswI90j.jpeg',
    images: [
      'https://i.imgur.com/WPXgbQj.jpeg',
      'https://i.imgur.com/HG6igfw.jpeg',
      'https://i.imgur.com/EkYztJt.jpeg',
      'https://i.imgur.com/i5Wptw7.jpeg',
      'https://i.imgur.com/4UCl2zR.jpeg',
      'https://i.imgur.com/OMhMpW8.jpeg',
      'https://i.imgur.com/nixDf0i.jpeg'
    ],
    specs: ['Hours: 2,247', 'Cab: Open', 'Tracks: 90%', 'Controls: Pilot'],
    description: 'Only 2,247 hours, open cab, pilot controls, tracks are 90%. Serviced and ready to work. Financing and nationwide shipping available.',
    price: '$29,500'
  },
  {
    id: '2',
    name: '1994 Daewoo Mega 400',
    category: 'Sales',
    imageUrl: 'https://i.imgur.com/7Xlv5gX.jpeg',
    images: [
      'https://i.imgur.com/JSx0K6o.jpeg',
      'https://i.imgur.com/HDeZhpz.jpeg',
      'https://i.imgur.com/y5xXH6X.jpeg',
      'https://i.imgur.com/yKNuC0M.jpeg',
      'https://i.imgur.com/vmUOsTF.jpeg',
      'https://i.imgur.com/GUyFi8Y.jpeg'
    ],
    specs: ['Hours: 8,300', 'Tires: 80%', 'Cab: Heat & A/C'],
    description: '8,300 hours, heat and air conditioning, tires are 80%, serviced and ready to work. Financing and nationwide shipping available.',
    price: '$39,500'
  },
  {
    id: '3',
    name: '2011 Caterpillar 259B3',
    category: 'Sales',
    imageUrl: 'https://i.imgur.com/V43yLDk.jpeg',
    images: [
      'https://i.imgur.com/wpTe4e0.jpeg',
      'https://i.imgur.com/mpJM8iS.jpeg',
      'https://i.imgur.com/xaEYwba.jpeg',
      'https://i.imgur.com/RA2eQNQ.jpeg',
      'https://i.imgur.com/5IaSIyG.jpeg',
      'https://i.imgur.com/0JmziJ6.jpeg'
    ],
    specs: ['Hours: 1,229', 'Cab: Heat & A/C', 'Tracks: 80%'],
    description: 'Only 1,229 hours, cab with heat and AC, tracks are 80%. Serviced and ready to work. Financing and nationwide shipping available.',
    price: '$30,000'
  }
];

export const BENEFITS = [
  {
    title: 'Nationwide Shipping',
    description: 'We deliver equipment to any job site across the country quickly and safely.',
    icon: Truck
  },
  {
    title: 'Financing Available',
    description: 'Flexible payment plans and competitive financing options for all purchases.',
    icon: DollarSign
  },
  {
    title: 'Expert Support',
    description: 'Our team of industry veterans is here to help you choose the right tools.',
    icon: HardHat
  }
];

// Re-export standard router components for use in the app
export { HashRouter, Routes, Route, Link, NavLink, useLocation, useParams };