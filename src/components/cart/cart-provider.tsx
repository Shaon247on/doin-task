"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { MOCK_COURSES } from "@/mocks/coursCard.mocks";
import type { Course } from "@/types/course.type";

export type CartItem = {
  course: Course;
  quantity: number;
};

type CartContextValue = {
  isOpen: boolean;
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  increaseQuantity: (courseId: string) => void;
  decreaseQuantity: (courseId: string) => void;
  removeItem: (courseId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const INITIAL_CART_ITEMS: CartItem[] = MOCK_COURSES.slice(0, 2).map(
  (course, index) => ({
    course,
    quantity: index === 0 ? 1 : 2,
  }),
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(INITIAL_CART_ITEMS);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const increaseQuantity = useCallback((courseId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.course.id === courseId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }, []);
  const decreaseQuantity = useCallback((courseId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.course.id === courseId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  }, []);
  const removeItem = useCallback((courseId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.course.id !== courseId),
    );
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.course.price * item.quantity,
      0,
    );

    return {
      isOpen,
      items,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
    };
  }, [
    closeCart,
    decreaseQuantity,
    increaseQuantity,
    isOpen,
    items,
    openCart,
    removeItem,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}