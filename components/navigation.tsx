"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-xl text-foreground">Unhooked</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/support"
              className={`transition-colors ${
                isActive("/support") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className={`transition-colors ${
                isActive("/privacy") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={`transition-colors ${
                isActive("/terms") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Terms
            </Link>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/support"
                className={`transition-colors ${
                  isActive("/support") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className={`transition-colors ${
                  isActive("/privacy") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className={`transition-colors ${
                  isActive("/terms") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
