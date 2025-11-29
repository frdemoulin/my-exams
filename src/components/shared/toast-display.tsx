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
              const common = {
                style: {
                  borderRadius: "8px",
                  padding: "12px 16px",
                },
                className: "text-sm",
              } as const;

              if (data.type === "success") {
                toast.success(data.message, {
                  ...common,
                  style: {
                    ...common.style,
                    background: "#10b981", // green-500 Flowbite
                    color: "#ffffff",
                  },
                });
              } else if (data.type === "error") {
                toast.error(data.message, {
                  ...common,
                  style: {
                    ...common.style,
                    background: "#dc2626", // red-600 Flowbite
                    color: "#ffffff",
                  },
                });
              } else {
                toast(data.message, {
                  ...common,
                  style: {
                    ...common.style,
                    background: "#3b82f6", // blue-500 Flowbite
                    color: "#ffffff",
                  },
                });
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
