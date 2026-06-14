"use client";

import * as React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
    id?: string;
    date?: Date;
    onDateChange: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

function FlowbiteChevron({
    orientation,
    className,
}: {
    orientation?: "left" | "right" | "up" | "down";
    className?: string;
}) {
    const path =
        orientation === "left"
            ? "M13 5H1m0 0 4 4M1 5l4-4"
            : orientation === "right"
              ? "M1 5h12m0 0L9 1m4 4L9 9"
              : orientation === "up"
                ? "m5 13 7-7 7 7"
                : "m19 9-7 7-7-7";

    return (
        <svg
            className={cn("h-4 w-4", className)}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            fill="none"
            viewBox="0 0 14 10"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={path}
            />
        </svg>
    );
}

export function DatePicker({
    id,
    date,
    onDateChange,
    placeholder = "jj/mm/aaaa",
    disabled = false,
    className,
}: DatePickerProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    id={id}
                    type="button"
                    disabled={disabled}
                    className={cn(
                        "relative block w-full rounded-base border border-default bg-neutral-primary-soft ps-9 pe-3 py-2.5 text-left text-sm shadow-xs transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand disabled:cursor-not-allowed disabled:opacity-50",
                        date ? "text-heading" : "text-body",
                        className
                    )}
                >
                    <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                        <CalendarIcon className="h-4 w-4 text-body" />
                    </span>
                    {date ? format(date, "dd/MM/yyyy", { locale: fr }) : placeholder}
                </button>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                className="w-[20rem] overflow-hidden rounded-xl border border-default-medium bg-neutral-secondary-medium p-0 shadow-lg"
            >
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(nextDate) => {
                        onDateChange(nextDate);
                        if (nextDate) setOpen(false);
                    }}
                    locale={fr}
                    fixedWeeks
                    navLayout="around"
                    initialFocus
                    className="w-full bg-transparent px-5 pt-5 pb-4 [--cell-size:2.5rem]"
                    classNames={{
                        root: "w-full",
                        months: "w-full",
                        month: "grid w-full grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-center gap-y-3",
                        nav: "hidden",
                        button_previous:
                            "inline-flex h-9 w-9 items-center justify-center rounded-base border-0 bg-neutral-primary-medium p-2.5 text-body shadow-none hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary",
                        button_next:
                            "inline-flex h-9 w-9 items-center justify-center rounded-base border-0 bg-neutral-primary-medium p-2.5 text-body shadow-none hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary",
                        month_caption: "col-start-2 flex h-[2.8125rem] items-center justify-center",
                        caption_label: "select-none rounded-base bg-neutral-primary-medium px-5 py-2.5 text-sm font-medium leading-none text-heading capitalize",
                        month_grid: "col-span-3 mt-2 w-full border-collapse",
                        weekdays: "mt-2",
                        weekday:
                            "h-9 px-0 text-center align-middle text-sm font-medium text-body",
                        week: "mt-1.5",
                        day: "p-0 text-center align-middle",
                        day_button:
                            "h-9 w-9 rounded-base p-0 text-[1rem] font-normal text-body hover:bg-transparent hover:text-heading",
                        today: "text-heading",
                        outside: "text-body/45",
                    }}
                    components={{
                        Chevron: ({ orientation, className: chevronClassName }) => (
                            <FlowbiteChevron
                                orientation={orientation}
                                className={cn("text-body", chevronClassName)}
                            />
                        ),
                    }}
                />
                <div className="flex gap-2 border-t border-default px-3 py-3">
                    <Button
                        type="button"
                        variant="secondary"
                        className="flex-1"
                        onClick={() => {
                            onDateChange(undefined);
                            setOpen(false);
                        }}
                    >
                        Effacer
                    </Button>
                    <Button
                        type="button"
                        className="flex-1"
                        onClick={() => {
                            onDateChange(new Date());
                            setOpen(false);
                        }}
                    >
                        Aujourd&apos;hui
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
