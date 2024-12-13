
import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-emerald-700 text-stone-100 py-3 px-6 rounded-md hover:bg-emerald-800 transition duration-300 flex items-center justify-center",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"