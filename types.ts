import React from 'react';

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Sales';
  imageUrl: string;
  images?: string[];
  specs: string[];
  description?: string;
  price?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export type LeadStatus = 'New' | 'Active' | 'Closed Won' | 'Lost';

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  date: string;
  status: LeadStatus;
}