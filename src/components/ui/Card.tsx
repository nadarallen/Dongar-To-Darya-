import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "glass" | "neumophic" | "default";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-white shadow-lg border border-gray-100",
            glass: "glass-card",
            neumophic: "bg-background shadow-[8px_8px_16px_#d1cfbe,-8px_-8px_16px_#ffffff]",
        };

        return (
            <div
                ref={ref}
                className={cn("rounded-2xl p-6 transition-all duration-300", variants[variant], className)}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
