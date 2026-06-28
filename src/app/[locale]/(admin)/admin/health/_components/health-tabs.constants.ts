export const healthCoverageStatusBadgeVariant: Record<
  string,
  "default" | "outline" | "secondary"
> = {
  STRUCTURE_ONLY: "secondary",
  THEMES_MAPPED: "outline",
  QUESTIONS_AVAILABLE: "default",
  READY: "default",
};

export const healthTabsTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "text-sm font-medium text-center text-body border-b border-default",
    variant: {
      underline: "flex flex-wrap -mb-px",
    },
    tabitem: {
      base: "inline-block p-4 border-b border-transparent rounded-t-base focus:outline-none disabled:cursor-not-allowed disabled:text-body/50",
      variant: {
        underline: {
          base: "",
          active: {
            on: "text-fg-brand border-b border-brand rounded-t-base",
            off: "text-body hover:text-fg-brand hover:border-brand",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    variant: {
      underline: "",
    },
  },
  tabpanel: "pt-6",
};
