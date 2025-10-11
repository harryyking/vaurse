import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Find answers to common questions about Unhooked and your recovery journey.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Getting Started */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">How do I download and install Unhooked?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Unhooked is available on both iOS and Android. Simply search for &quot;Unhooked&quot; in the App Store or
                      Google Play Store, or click the download button on our website. The app is completely free with no
                      hidden costs or in-app purchases.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-2">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Is Unhooked really free?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Yes! Unhooked is 100% free with no ads, no premium tiers, and no hidden costs. We believe recovery
                      should be accessible to everyone. The app is supported by donations from users who want to help
                      others find freedom.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-3">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Do I need to be a Christian to use Unhooked?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      While Unhooked is built on Christian principles and includes biblical content, anyone seeking
                      freedom from pornography addiction is welcome. However, the app&apos;s approach is faith-based, so
                      you&apos;ll encounter scripture, prayers, and Christian perspectives throughout your experience.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Privacy & Security */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Privacy & Security</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-4">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Is my information private and secure?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Absolutely. We use end-to-end encryption for all messages and data. Your personal information is
                      never shared with third parties. You can participate in the community anonymously, and even your
                      accountability partner only sees what you choose to share.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-5">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Can anyone see my progress or relapses?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Only your designated accountability partner(s) can see your progress if you choose to share it
                      with them. The community cannot see your personal statistics. You have full control over what
                      information is shared and with whom.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-6">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      Will Unhooked show up on my phone bill or app store history?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      The app will appear as &quot;Unhooked&quot; in your app store download history. It&apos;s a free app, so there
                      are no charges on your phone bill. If privacy is a concern, you can use app hiding features
                      available on most smartphones.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Accountability Partners */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Accountability Partners</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-7">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">How do I find an accountability partner?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      You have two options: invite someone you already know and trust by sending them an invitation
                      code, or be matched with a partner from our community based on age, location, and recovery stage.
                      We recommend having at least one accountability partner for the best results.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-8">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">What does an accountability partner see?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Your accountability partner sees what you choose to share: your clean streak, when you use the
                      panic button, and any messages you send them. They receive notifications when you&apos;re struggling so
                      they can reach out with support and prayer.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-9">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Can I have multiple accountability partners?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Yes! Many users find it helpful to have 2-3 accountability partners for different types of
                      support. You might have a close friend, a mentor, and a peer from the community all supporting you
                      in different ways.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Features & Functionality */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Features & Functionality</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-10">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">What is the panic button and how does it work?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      The panic button is an emergency feature for when you&apos;re facing strong temptation. Pressing it
                      immediately notifies your accountability partners, displays encouraging scripture and prayers, and
                      provides quick access to crisis resources. It&apos;s designed to interrupt the temptation cycle and get
                      you immediate support.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-11">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">How do daily devotionals work?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Each day, you&apos;ll receive a new devotional focused on recovery, identity in Christ, and overcoming
                      temptation. You can customize when you receive the notification and read past devotionals anytime.
                      Each devotional includes scripture, reflection questions, and a prayer.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-12">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">What happens if I relapse?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      If you relapse, you can reset your counter in the app. Your accountability partner will be
                      notified (if you&apos;ve enabled that setting), and you&apos;ll receive encouragement and resources for
                      getting back on track. Remember, relapse is often part of recovery—what matters is getting back up
                      and continuing forward.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-13">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Can I use Unhooked offline?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Many features work offline, including viewing past devotionals, tracking your progress, and
                      journaling. However, community features, accountability notifications, and syncing require an
                      internet connection.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Recovery & Support */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recovery & Support</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-14">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">How long does recovery take?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Recovery is a journey, not a destination. Everyone&apos;s timeline is different. Some see significant
                      progress in weeks, while others need months or years. What matters is consistent progress and
                      relying on God&apos;s grace. Unhooked is designed to support you for the long haul.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-15">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Is Unhooked a replacement for professional therapy?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      No. While Unhooked provides valuable support and accountability, it&apos;s not a substitute for
                      professional counseling or therapy. For severe addiction or underlying trauma, we strongly
                      recommend working with a licensed Christian counselor in addition to using the app.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-16">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">What if I&apos;m struggling and need immediate help?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Use the panic button to alert your accountability partners immediately. You can also access our
                      crisis resources page which includes hotlines, counseling services, and emergency support. If
                      you&apos;re in crisis, please reach out to a mental health professional or call a crisis hotline.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-17">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">Can women use Unhooked?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      While pornography addiction is often associated with men, many women struggle with it as well.
                      Unhooked is designed for anyone seeking freedom, regardless of gender. We have community groups
                      and resources specifically for women.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technical Issues */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Technical Issues</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-18">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">The app isn&apos;t working properly. What should I do?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      First, try closing and reopening the app. If that doesn&apos;t work, check for updates in your app
                      store. Still having issues? Contact our support team through the app settings or email us at
                      support@unhooked.app with details about the problem.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-19">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">I lost my progress data. Can it be recovered?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      If you&apos;re logged into your account, your data is backed up to the cloud and can be restored. Try
                      logging out and back in. If you weren&apos;t logged in, unfortunately the data may be lost. We
                      recommend always creating an account to protect your progress.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-20">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">How do I delete my account?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      You can delete your account from the app settings under &quot;Account Management.&quot; This will
                      permanently delete all your data, including progress, messages, and community posts. This action
                      cannot be undone.
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/crisis">Crisis Resources</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
