import { Navigation } from "@/components/navigation"
import { AppScreenshots } from "@/components/app-screenshots"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Heart, Users, BookOpen, Download, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Break free from addiction with <span className="text-primary">faith-based support</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Unhooked combines proven recovery methods with Christian faith to help you overcome pornography addiction.
            Join thousands who have found freedom through accountability, community, and God&apos;s grace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Free App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.8/5 rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <span>50,000+ downloads</span>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <span>Faith-based approach</span>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Powerful tools for lasting recovery</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Experience the app that&apos;s helping thousands break free from addiction through faith, accountability, and
              community support.
            </p>
          </div>

          <AppScreenshots />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Why choose Unhooked?</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Our faith-centered approach combines proven recovery methods with the power of Christian community and
              accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Accountability Partners</h3>
              <p className="text-muted-foreground text-sm">
                Connect with trusted partners who will support and encourage your journey to freedom.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Devotionals</h3>
              <p className="text-muted-foreground text-sm">
                Strengthen your faith with daily scripture readings and prayers focused on recovery.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support Community</h3>
              <p className="text-muted-foreground text-sm">
                Join a safe, anonymous community of believers on the same journey toward freedom.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Biblical Resources</h3>
              <p className="text-muted-foreground text-sm">
                Access curated scripture verses, prayers, and resources specifically for overcoming addiction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Stories of transformation</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Real people, real freedom. See how Unhooked has helped others break free from addiction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Unhooked gave me the accountability and faith-based support I needed. 6 months clean and stronger in my
                faith than ever.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-semibold text-sm">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Michael J.</p>
                  <p className="text-xs text-muted-foreground">6 months clean</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The daily devotionals and community support helped me see that I&apos;m not alone in this struggle. God is
                faithful!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-semibold text-sm">DS</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">David S.</p>
                  <p className="text-xs text-muted-foreground">1 year clean</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Finally found an app that understands the spiritual battle. The accountability features are
                game-changing.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">RT</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Robert T.</p>
                  <p className="text-xs text-muted-foreground">3 months clean</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Ready to break free?</h2>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            Join thousands of believers who have found freedom from addiction through faith, accountability, and
            community support.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <Download className="w-5 h-5 mr-2" />
            Download Unhooked Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Available on iOS and Android • 100% Free • No ads</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">U</span>
                </div>
                <span className="font-bold text-xl">Unhooked</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Faith-based recovery from pornography addiction through accountability, community, and God&apos;s grace.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">App</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Download iOS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Download Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/support" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-foreground transition-colors">
                    Crisis Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Unhooked. All rights reserved. Made with faith and hope.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
