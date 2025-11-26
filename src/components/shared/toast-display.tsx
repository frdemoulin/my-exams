"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

export function ToastDisplay() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for toast message on mount and whenever the path changes
    const checkToast = async () => {
      try {
        const response = await fetch("/api/toast");
        if (response.ok) {
          const data = await response.json();
          if (data.message) {
            if (data.type === "success") {
              toast.success(data.message);
            } else if (data.type === "error") {
              toast.error(data.message);
            } else {
              toast(data.message);
            }
          }
        }
      } catch (error) {
        console.error("Error checking toast:", error);
      }
    };

    checkToast();
  }, [pathname]);

  return null;
}
