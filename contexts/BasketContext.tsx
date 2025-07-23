'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface BasketItem {
  id: string;
  name: string;
  amount: number;
  type: 'appointment' | 'package' | 'consultation';
  description?: string;
  doctor?: string;
  doctorId?: string;
  date?: string;
  time?: string;
  department?: string;
  quantity?: number;
  patientInfo?: {
    name: string;
    email: string;
    phone: string;
    age?: string;
    gender?: string;
  };
}

interface BasketContextType {
  basketItems: BasketItem[];
  addToBasket: (item: Omit<BasketItem, 'quantity'>) => void;
  removeFromBasket: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearBasket: () => void;
  getTotalAmount: () => number;
  getItemCount: () => number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  // Load basket from localStorage on mount
  useEffect(() => {
    const savedBasket = localStorage.getItem('shriram_basket');
    if (savedBasket) {
      try {
        setBasketItems(JSON.parse(savedBasket));
      } catch (error) {
        console.error('Error loading basket from localStorage:', error);
      }
    }
  }, []);

  // Save basket to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shriram_basket', JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (item: Omit<BasketItem, 'quantity'>) => {
    const existingItem = basketItems.find(basketItem => basketItem.id === item.id);
    
    if (existingItem) {
      setBasketItems(prev => prev.map(basketItem =>
        basketItem.id === item.id
          ? { ...basketItem, quantity: (basketItem.quantity || 1) + 1 }
          : basketItem
      ));
    } else {
      setBasketItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (itemId: string) => {
    setBasketItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromBasket(itemId);
      return;
    }
    
    setBasketItems(prev => prev.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const getTotalAmount = () => {
    return basketItems.reduce((total, item) => total + (item.amount * (item.quantity || 1)), 0);
  };

  const getItemCount = () => {
    return basketItems.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  return (
    <BasketContext.Provider value={{
      basketItems,
      addToBasket,
      removeFromBasket,
      updateQuantity,
      clearBasket,
      getTotalAmount,
      getItemCount
    }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}
