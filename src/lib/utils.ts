import { motivationalPhrases } from "@/components/utils/Data"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect } from "react"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


