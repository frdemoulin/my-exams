"use client";

import { ReactNode, useId, useState } from "react";

import { cn } from "@/lib/utils";

type DomainDetailTab = {
  id: string;
  label: string;
  badge?: number | string;
  content: ReactNode;
};

interface DomainDetailTabsProps {
  tabs: DomainDetailTab[];
  defaultTab?: string;
}

export const DomainDetailTabs = ({
  tabs,
  defaultTab,
}: DomainDetailTabsProps) => {
  const generatedId = useId();
  const initialTabId = defaultTab && tabs.some((tab) => tab.id === defaultTab)
    ? defaultTab
    : tabs[0]?.id;
  const [activeTabId, setActiveTabId] = useState(initialTabId);

  if (!tabs.length) {
    return null;
  }

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  return (
    <div className="mt-8 space-y-4">
      <div className="overflow-x-auto">
        <div
          aria-label="Sections du domaine"
          className="border-b border-default"
          role="tablist"
        >
          <div className="-mb-px flex min-w-max flex-wrap gap-2 sm:min-w-0">
            {tabs.map((tab) => {
              const tabElementId = `${generatedId}-${tab.id}-tab`;
              const panelElementId = `${generatedId}-${tab.id}-panel`;
              const isActive = tab.id === activeTab.id;

              return (
                <button
                  key={tab.id}
                  aria-controls={panelElementId}
                  aria-selected={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "border-brand text-brand"
                      : "text-muted-foreground hover:border-brand hover:text-brand"
                  )}
                  id={tabElementId}
                  onClick={() => setActiveTabId(tab.id)}
                  role="tab"
                  type="button"
                >
                  <span>{tab.label}</span>
                  {tab.badge ? (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-semibold",
                        isActive
                          ? "bg-brand/10 text-brand"
                          : "bg-neutral-primary-medium text-muted-foreground"
                      )}
                    >
                      {tab.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        aria-labelledby={`${generatedId}-${activeTab.id}-tab`}
        className="rounded-base border border-default bg-background p-4 md:p-6"
        id={`${generatedId}-${activeTab.id}-panel`}
        role="tabpanel"
      >
        {activeTab.content}
      </div>
    </div>
  );
};
