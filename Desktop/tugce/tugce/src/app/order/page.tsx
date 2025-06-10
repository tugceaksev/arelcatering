import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { prisma } from '@/lib/prisma';
import { OrderStatus } from '@prisma/client';
import OrderForm from './OrderForm';
import OrderPageClient from './OrderPageClient';
import { redirect } from 'next/navigation';

export default async function OrderPage() {
  return <OrderPageClient />;
} 