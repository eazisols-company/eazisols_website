import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const SITE_VARIANTS = new Set(["brand", "outline-brand", "dark", "outline-light", "soft"]);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center leading-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#418ED6]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "whitespace-nowrap rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 text-sm font-medium",
        destructive:
          "whitespace-nowrap rounded-md bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 text-sm font-medium",
        outline:
          "whitespace-nowrap rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-sm font-medium",
        secondary:
          "whitespace-nowrap rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 text-sm font-medium",
        ghost:
          "whitespace-nowrap rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium",
        link: "whitespace-nowrap text-primary underline-offset-4 hover:underline text-sm font-medium",
        brand:
          "min-h-[48px] max-w-full whitespace-normal rounded-full bg-[#418ED6] px-7 py-3 text-sm font-extrabold text-white hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_24px_rgba(65,142,214,0.35)]",
        "outline-brand":
          "min-h-[48px] max-w-full whitespace-normal rounded-full border-2 border-[#418ED6] bg-transparent px-7 py-3 text-sm font-extrabold text-[#418ED6] hover:-translate-y-0.5 hover:bg-[#418ED6]/5",
        dark: "min-h-[48px] max-w-full whitespace-normal rounded-full bg-ink px-7 py-3 text-sm font-extrabold text-primary-foreground hover:-translate-y-0.5 hover:bg-[#418ED6] hover:shadow-[0_10px_24px_rgba(65,142,214,0.35)]",
        "outline-light":
          "min-h-[48px] w-fit max-w-full whitespace-normal rounded-full border border-primary-foreground/80 bg-transparent px-7 py-3 text-sm font-extrabold text-primary-foreground hover:bg-primary-foreground/10",
        soft: "min-h-[48px] max-w-full whitespace-normal rounded-full border border-border bg-white px-7 py-3 text-sm font-medium text-ink hover:bg-surface",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isSiteVariant = SITE_VARIANTS.has(variant ?? "");
    const resolvedSize = isSiteVariant ? undefined : size;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
