"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/app/components/AuthModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;