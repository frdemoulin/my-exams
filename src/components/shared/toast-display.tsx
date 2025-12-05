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
                  icon: "✅",
                  style: common.style,
                });
              } else if (data.type === "error") {
                toast.error(data.message, {
                  ...common,
                  style: common.style,
                });
              } else {
                toast(data.message, {
                  ...common,
                  style: common.style,
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
