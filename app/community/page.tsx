import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Heart, MessageCircle, AlertTriangle, CheckCircle, XCircle, Users } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Community Guidelines</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Creating a safe, supportive, and Christ-centered space for everyone on their recovery journey.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Community Mission</h2>
            <p className="text-muted-foreground text-center text-lg">
              The Unhooked community exists to provide a safe, anonymous, and judgment-free space where believers can
              support one another in overcoming pornography addiction through faith, accountability, and God&apos;s grace.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Grace & Compassion</h3>
              <p className="text-muted-foreground text-sm">
                We extend the same grace God has shown us. No judgment, only love and support for those struggling.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety & Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Your anonymity is protected. Share openly without fear of exposure or breach of confidentiality.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Honest Communication</h3>
              <p className="text-muted-foreground text-sm">
                We encourage transparency and vulnerability while maintaining respect and appropriate boundaries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidelines - Do's */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold">Please Do</h2>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Be Respectful and Kind
              </h3>
              <p className="text-muted-foreground text-sm">
                Treat all community members with respect, dignity, and compassion. Remember that everyone is fighting
                their own battle and deserves encouragement.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Share Your Story
              </h3>
              <p className="text-muted-foreground text-sm">
                Your testimony can inspire others. Share your struggles, victories, and what God is teaching you through
                your recovery journey.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Offer Biblical Encouragement
              </h3>
              <p className="text-muted-foreground text-sm">
                Share scripture, prayers, and faith-based encouragement. Point others to God&apos;s truth and His power to
                overcome addiction.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Maintain Confidentiality
              </h3>
              <p className="text-muted-foreground text-sm">
                What&apos;s shared in the community stays in the community. Never share others&apos; stories or struggles outside
                the app.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Report Concerning Behavior
              </h3>
              <p className="text-muted-foreground text-sm">
                If you see content that violates our guidelines or concerns you, please report it immediately to our
                moderation team.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Celebrate Others&apos; Victories
              </h3>
              <p className="text-muted-foreground text-sm">
                Rejoice with those who are celebrating milestones. Your encouragement can strengthen someone&apos;s resolve
                to continue their journey.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Ask for Help When Struggling
              </h3>
              <p className="text-muted-foreground text-sm">
                Don&apos;t suffer in silence. Reach out to the community when you&apos;re facing temptation or having a difficult
                day. We&apos;re here to support you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidelines - Don'ts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <XCircle className="w-8 h-8 text-destructive" />
            <h2 className="text-3xl font-bold">Please Don&apos;t</h2>
          </div>

          <div className="space-y-4">
            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Share Explicit Content or Triggers
              </h3>
              <p className="text-muted-foreground text-sm">
                Never share pornographic content, explicit descriptions, or triggering material. Keep discussions
                focused on recovery, not the addiction itself.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Judge or Condemn Others
              </h3>
              <p className="text-muted-foreground text-sm">
                Avoid judgmental language or condemnation. We&apos;re all sinners saved by grace. Offer support, not
                criticism.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Share Personal Identifying Information
              </h3>
              <p className="text-muted-foreground text-sm">
                Don&apos;t share your full name, address, phone number, or other identifying details. Protect your privacy
                and that of others.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Promote Other Services or Products
              </h3>
              <p className="text-muted-foreground text-sm">
                This community is not for advertising or promoting external services, products, or websites. Focus on
                mutual support and recovery.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Engage in Theological Debates
              </h3>
              <p className="text-muted-foreground text-sm">
                While we&apos;re a Christian community, avoid divisive theological arguments. Focus on unity in Christ and
                supporting recovery.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Pursue Romantic or Sexual Relationships
              </h3>
              <p className="text-muted-foreground text-sm">
                This is a recovery community, not a dating platform. Don&apos;t use the community to pursue romantic or
                sexual relationships.
              </p>
            </Card>

            <Card className="p-6 border-destructive/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Minimize Others&apos; Struggles
              </h3>
              <p className="text-muted-foreground text-sm">
                Never dismiss or minimize someone&apos;s struggle. What may seem small to you could be a major victory for
                someone else.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Moderation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold">Moderation & Enforcement</h2>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Our Commitment to Safety</h3>
                <p className="text-muted-foreground text-sm">
                  Our moderation team works diligently to maintain a safe and supportive environment. All reported
                  content is reviewed promptly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Consequences for Violations</h3>
                <p className="text-muted-foreground text-sm mb-3">Violations of these guidelines may result in:</p>
                <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                  <li>Warning from moderation team</li>
                  <li>Temporary suspension from community features</li>
                  <li>Permanent ban for severe or repeated violations</li>
                  <li>Reporting to authorities for illegal content</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">How to Report</h3>
                <p className="text-muted-foreground text-sm">
                  Use the report button on any post or message that violates our guidelines. You can also contact our
                  support team directly through the app settings.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-8">
            Ready to connect with others on the same journey? Download Unhooked and join thousands finding freedom
            through faith and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Download App</Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/user-guide">Read User Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
