import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Shield,
  Heart,
  AlertTriangle,
  Download,
  Users,
  HelpCircle,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support Center",
  description:
    "Get help with the Unhooked app. Find crisis resources, contact support, browse help articles, and get answers to frequently asked questions.",
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-balance mb-4">Support Center</h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            We are here to support you on your journey to freedom. Find help, resources, and answers to your questions.
          </p>
        </div>

        {/* Crisis Resources - Priority Section */}
        <Card className="p-6 mb-12 bg-red-50 border-red-200">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-red-800 mb-2">Crisis Resources</h2>
              <p className="text-red-700 mb-4">
                If you are experiencing thoughts of self-harm or suicide, please reach out for immediate help:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">National Suicide Prevention Lifeline</h3>
                  <p className="text-red-700 text-lg font-bold">988</p>
                  <p className="text-red-600 text-sm">24/7 crisis support</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Crisis Text Line</h3>
                  <p className="text-red-700 text-lg font-bold">Text HOME to 741741</p>
                  <p className="text-red-600 text-sm">24/7 text support</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Help Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Chat Support</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get immediate help from our support team during business hours.
            </p>
            <Button className="w-full">Start Chat</Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Send us a detailed message and we will respond within 24 hours.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Send Email
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Help Articles</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Browse our comprehensive knowledge base for quick answers.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Browse Articles
            </Button>
          </Card>
        </div>

        {/* Support Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">How can we help you?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <Download className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Getting Started</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Download the app, create your account, and set up your recovery plan.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• App installation guide</li>
                <li>• Account setup</li>
                <li>• First steps tutorial</li>
              </ul>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Accountability Partners</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Learn how to find, connect with, and work with accountability partners.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Finding partners</li>
                <li>• Communication tips</li>
                <li>• Setting boundaries</li>
              </ul>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold">Community Guidelines</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Understand our community standards and how to participate safely.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Community rules</li>
                <li>• Reporting issues</li>
                <li>• Safe sharing practices</li>
              </ul>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold">Privacy & Security</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Learn about our privacy protections and how to keep your data secure.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Privacy settings</li>
                <li>• Data protection</li>
                <li>• Account security</li>
              </ul>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Faith Resources</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Access devotionals, scripture verses, and spiritual guidance for recovery.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Daily devotionals</li>
                <li>• Scripture library</li>
                <li>• Prayer guides</li>
              </ul>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">Technical Issues</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Troubleshoot app problems, sync issues, and technical difficulties.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• App crashes</li>
                <li>• Sync problems</li>
                <li>• Login issues</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <Label htmlFor="category">Support Category</Label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a category</option>
                  <option value="getting-started">Getting Started</option>
                  <option value="accountability">Accountability Partners</option>
                  <option value="community">Community Support</option>
                  <option value="privacy">Privacy & Security</option>
                  <option value="faith">Faith Resources</option>
                  <option value="technical">Technical Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide as much detail as possible about your question or issue..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Other ways to reach us</h2>

            <div className="space-y-6">
              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Email Support</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">For general questions and support:</p>
                <p className="text-primary">support@unhooked.xyz</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Privacy & Security</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">For privacy-related questions:</p>
                <p className="text-primary">privacy@unhooked.xyz</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold">Community Issues</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">To report inappropriate behavior:</p>
                <p className="text-primary">community@unhooked.xyz</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM EST
                  <br />
                  Sunday: Closed
                </p>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Need immediate help?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If you are struggling with urges or need someone to talk to right away, consider these resources:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use the emergency support feature in the app</li>
                <li>• Contact your accountability partner</li>
                <li>• Reach out to a trusted friend or pastor</li>
                <li>• Call a crisis helpline if needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Is the app really free?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, Unhooked is completely free to download and use. We believe recovery support should be accessible
                to everyone, regardless of financial situation.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">Is my information private?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely. We use enterprise-grade security and never share your personal information. You can
                participate anonymously if you prefer.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">How do I find an accountability partner?</h3>
              <p className="text-sm text-muted-foreground">
                The app will suggest compatible partners based on your preferences. You can also join group discussions
                to meet potential accountability partners.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">What if I relapse?</h3>
              <p className="text-sm text-muted-foreground">
                Relapses are part of the recovery journey. The app provides tools to help you get back on track, and our
                community offers non-judgmental support.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">Can I use this with professional therapy?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! Unhooked is designed to complement professional treatment, not replace it. Many users find it
                helpful alongside counseling or therapy.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">Is this only for Christians?</h3>
              <p className="text-sm text-muted-foreground">
                While our approach is faith-based and rooted in Christian principles, anyone seeking recovery support is
                welcome to use the app.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
