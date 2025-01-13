import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <>
                <style jsx>{`
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    input:-webkit-autofill:active {
                        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
                        box-shadow: 0 0 0px 1000px transparent inset !important;
                        -webkit-text-fill-color: white !important; /* Set text color to white */
                        color: white !important; /* Fallback for non-WebKit browsers */
                        -webkit-background-clip: text;
                        background-clip: text;
                        caret-color: white; /* Set caret color to white */
                    }
                `}</style>

                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-gray-500 bg-transparent px-3 py-1 text-base text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </>
        );
    }
);
Input.displayName = "Input";

export { Input };
