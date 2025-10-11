import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Users, BookOpen, Bell, Lock, TrendingUp, MessageCircle, Calendar, Settings } from "lucide-react"
import Link from "next/link"

export default function UserGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">User Guide</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Everything you need to know to get started with Unhooked and make the most of your recovery journey.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Getting Started</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download & Create Account</h3>
                  <p className="text-muted-foreground">
                    Download Unhooked from the App Store or Google Play. Create your account with an email address. Your
                    information is completely private and secure.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set Your Goals</h3>
                  <p className="text-muted-foreground">
                    Define your recovery goals and set up your personal dashboard. Choose how often you want to receive
                    devotionals and accountability check-ins.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find an Accountability Partner</h3>
                  <p className="text-muted-foreground">
                    Connect with a trusted accountability partner who will support you on your journey. You can invite
                    someone you know or be matched with a partner from our community.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accountability Partners</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with partners who receive notifications when you&apos;re struggling. They can send encouragement
                    and pray for you in real-time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daily Devotionals</h3>
                  <p className="text-muted-foreground text-sm">
                    Receive scripture-based devotionals each morning focused on recovery, identity in Christ, and
                    overcoming temptation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-muted-foreground text-sm">
                    Track your clean days, view your progress over time, and celebrate milestones. See visual
                    representations of your journey to freedom.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Join anonymous group discussions, share victories, and receive encouragement from others on the same
                    journey.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Bell className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Tap the panic button when temptation strikes. Instantly notify your accountability partner and
                    access emergency prayers and scripture.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Biblical Resources</h3>
                  <p className="text-muted-foreground text-sm">
                    Access curated scripture verses, prayers, and Christian resources specifically for overcoming sexual
                    addiction.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Journal & Reflection</h3>
                  <p className="text-muted-foreground text-sm">
                    Keep a private journal to track triggers, victories, and prayers. Reflect on your growth and
                    identify patterns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-pink-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Recovery Plans</h3>
                  <p className="text-muted-foreground text-sm">
                    Follow structured recovery plans with daily tasks, scripture readings, and accountability check-ins.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Privacy & Security</h2>
          </div>

          <Card className="p-8">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your privacy is our top priority. All your data is encrypted and stored securely. We never share your
                personal information with third parties.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>End-to-end encryption for all messages</li>
                <li>Anonymous community participation</li>
                <li>No tracking or selling of personal data</li>
                <li>Secure cloud backup of your progress</li>
                <li>Option to use app with minimal personal information</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tips for Success</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">✓ Be Honest with Your Accountability Partner</h3>
              <p className="text-muted-foreground text-sm">
                Transparency is key to recovery. Share your struggles openly and don&apos;t hide relapses.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">✓ Engage Daily with Devotionals</h3>
              <p className="text-muted-foreground text-sm">
                Make it a habit to read your daily devotional each morning to start your day grounded in faith.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">✓ Use the Panic Button Without Shame</h3>
              <p className="text-muted-foreground text-sm">
                When temptation strikes, immediately use the panic button. There&apos;s no shame in asking for help.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">✓ Participate in Community</h3>
              <p className="text-muted-foreground text-sm">
                Share your victories and struggles with the community. You&apos;ll find strength in knowing you&apos;re not alone.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">✓ Celebrate Small Wins</h3>
              <p className="text-muted-foreground text-sm">
                Every day of freedom is worth celebrating. Acknowledge your progress and thank God for His grace.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Customizing Your Experience</h2>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Notification Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Customize when and how you receive notifications for devotionals, accountability check-ins, and
                  community messages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accountability Preferences</h3>
                <p className="text-muted-foreground text-sm">
                  Choose how your accountability partner is notified and what information they can see about your
                  progress.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Recovery Plan Selection</h3>
                <p className="text-muted-foreground text-sm">
                  Select from various recovery plans based on your needs, from beginner to advanced programs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our FAQ or reach out to our support team for additional assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/faq">View FAQ</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/crisis">Crisis Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
