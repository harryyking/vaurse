import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, BookOpen, Headphones, ExternalLink, Heart, AlertCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CrisisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-destructive/10 via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-destructive mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Crisis Resources</h1>
          <p className="text-xl text-muted-foreground text-balance">
            You&apos;re not alone. Access immediate help, educational resources, and support for your recovery journey.
          </p>
        </div>
      </section>

      {/* Emergency Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">In Crisis? Get Immediate Help</h2>
                <p className="text-muted-foreground">
                  If you&apos;re in immediate danger or experiencing a mental health crisis, please reach out for
                  professional help right away.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <Phone className="w-6 h-6 text-destructive" />
                <div>
                  <p className="font-semibold">National Suicide Prevention Lifeline</p>
                  <p className="text-2xl font-bold text-destructive">988</p>
                  <p className="text-sm text-muted-foreground">24/7 Crisis Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <MessageCircle className="w-6 h-6 text-destructive" />
                <div>
                  <p className="font-semibold">Crisis Text Line</p>
                  <p className="text-xl font-bold text-destructive">Text HOME to 741741</p>
                  <p className="text-sm text-muted-foreground">24/7 Text Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <Phone className="w-6 h-6 text-destructive" />
                <div>
                  <p className="font-semibold">SAMHSA National Helpline</p>
                  <p className="text-xl font-bold text-destructive">1-800-662-4357</p>
                  <p className="text-sm text-muted-foreground">Substance Abuse & Mental Health Services</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Christian Counseling Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Christian Counseling & Support</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Faithful Counseling</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Online Christian counseling with licensed therapists who integrate faith and professional therapy.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://www.faithfulcounseling.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Pure Desire Ministries</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Christian support groups and resources specifically for sexual addiction recovery.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://www.puredesire.org" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Covenant Eyes</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Accountability software and resources for overcoming pornography addiction.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://www.covenanteyes.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Setting Captives Free</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Free online discipleship courses for sexual purity and addiction recovery.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://www.settingcaptivesfree.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Recommended Books</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Finally Free by Heath Lambert</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A biblical approach to fighting pornography addiction with practical steps and gospel hope.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Unwanted by Jay Stringer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Understanding the roots of unwanted sexual behavior and finding lasting freedom.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">The Drug of the New Millennium by Mark Kastleman</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Understanding the science behind pornography addiction and the path to recovery.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Every Man&apos;s Battle by Stephen Arterburn</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Winning the war on sexual temptation one victory at a time.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Surfing for God by Michael John Cusick</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Discovering the divine desire beneath sexual struggle.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-[2/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Closing the Window by Tim Chester</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Steps to living porn-free with practical advice and biblical wisdom.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Find Book <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Headphones className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Helpful Podcasts</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Regeneration Podcast</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stories of freedom from sexual brokenness through the power of the gospel.
                  </p>
                  <Button variant="outline" size="sm">
                    Listen Now <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Pure Desire Podcast</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Conversations about sexual integrity, recovery, and healing.
                  </p>
                  <Button variant="outline" size="sm">
                    Listen Now <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Consider Before Consuming</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Exploring the impact of pornography and the path to freedom.
                  </p>
                  <Button variant="outline" size="sm">
                    Listen Now <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Husband Material Podcast</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Helping men become the husbands God designed them to be.
                  </p>
                  <Button variant="outline" size="sm">
                    Listen Now <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Educational Resources</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Fight the New Drug</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Science-based education about the harmful effects of pornography on individuals, relationships, and
                society.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://fightthenewdrug.org" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Your Brain on Porn</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Understanding the neuroscience of pornography addiction and recovery.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.yourbrainonporn.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Proven Men Ministries</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Free courses, accountability tools, and resources for men seeking sexual integrity.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.provenmen.org" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Fortify Program</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Interactive recovery program teaching the science of addiction and practical recovery skills.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.joinfortify.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">You Don&apos;t Have to Fight Alone</h2>
          <p className="text-muted-foreground mb-8">
            Download Unhooked to connect with accountability partners, access daily devotionals, and join a community of
            believers on the same journey to freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Download Unhooked</Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/user-guide">Read User Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
