import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:shadow-md border border-primary/50",
            secondary:
                "bg-secondary text-white shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:shadow-md border border-secondary/50",
            outline:
                "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 active:scale-95",
            ghost: "bg-transparent text-primary hover:bg-primary/10 shadow-none active:scale-95",
        };

        const sizes = {
            sm: "min-h-[44px] px-6 text-sm",
            md: "min-h-[48px] px-8 text-base",
            lg: "min-h-[56px] px-10 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full disabled:opacity-50 disabled:pointer-events-none touch-manipulation",
                    variants[variant as keyof typeof variants],
                    sizes[size as keyof typeof sizes],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
