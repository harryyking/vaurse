import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Shield, Eye, Lock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Unhooked. Learn how we protect your personal information and maintain confidentiality in your recovery journey.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        {/* Privacy Commitment Section */}
        <div className="mb-12">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Privacy Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Unhooked, we understand that privacy is especially important when dealing with sensitive personal
                  struggles. We are committed to protecting your personal information and maintaining the
                  confidentiality of your recovery journey. This policy explains how we collect, use, and protect your
                  data.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">When you create an account, we may collect:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Email address (required for account creation and recovery)</li>
              <li>Display name or username (can be anonymous)</li>
              <li>Age range (to ensure appropriate content and legal compliance)</li>
              <li>General location (country/state for community matching, optional)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Recovery Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">To provide personalized support, we collect:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Progress tracking data (days clean, milestones achieved)</li>
              <li>App usage patterns (features used, time spent)</li>
              <li>Prayer requests and devotional interactions</li>
              <li>Community participation (posts, comments, reactions)</li>
              <li>Accountability partner connections and communications</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We automatically collect certain technical data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Device information (type, operating system, app version)</li>
              <li>Usage analytics (crash reports, performance data)</li>
              <li>IP address and general location data</li>
              <li>App interaction data for improving user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Community Support</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Connect you with accountability partners</li>
                  <li>• Facilitate community discussions</li>
                  <li>• Provide personalized encouragement</li>
                </ul>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Progress Tracking</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Track your recovery milestones</li>
                  <li>• Generate progress reports</li>
                  <li>• Celebrate achievements</li>
                </ul>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Provide and improve our recovery support services</li>
              <li>Personalize your experience with relevant content and features</li>
              <li>Connect you with appropriate accountability partners and community groups</li>
              <li>Send important updates about your recovery progress</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Ensure the safety and security of our community</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>

            <Card className="p-4 mb-4 bg-red-50 border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">We Never Sell Your Data</h3>
              <p className="text-red-700 text-sm">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your
                recovery journey is private and confidential.
              </p>
            </Card>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share limited information only in these specific circumstances:
            </p>

            <h3 className="text-lg font-semibold mb-3">With Your Consent</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Accountability partner connections (only information you choose to share)</li>
              <li>Community posts and interactions (using your chosen display name)</li>
              <li>Prayer requests shared with the community (anonymous by default)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We work with trusted third-party service providers who help us operate the App:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Cloud hosting services (encrypted data storage)</li>
              <li>Analytics providers (anonymized usage data only)</li>
              <li>Customer support tools (only when you contact us)</li>
              <li>Security services (to protect against fraud and abuse)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may disclose information when required by law or to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Comply with legal processes or government requests</li>
              <li>Protect the safety of our users or the public</li>
              <li>Prevent fraud, abuse, or violations of our Terms of Service</li>
              <li>Protect our legal rights and property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>

            <Card className="p-4 mb-4 bg-green-50 border-green-200">
              <div className="flex items-center space-x-3 mb-2">
                <Lock className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">Enterprise-Grade Security</h3>
              </div>
              <p className="text-green-700 text-sm">
                We use industry-standard encryption and security measures to protect your sensitive information.
              </p>
            </Card>

            <p className="text-muted-foreground leading-relaxed mb-4">Our security measures include:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure data transmission using HTTPS/TLS protocols</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited access controls for our team members</li>
              <li>Secure cloud infrastructure with backup and recovery systems</li>
              <li>Regular software updates and security patches</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-4">
              While we implement strong security measures, no system is 100% secure. We encourage you to use strong
              passwords and keep your account information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Privacy Rights</h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Access & Portability</h3>
                <p className="text-sm text-muted-foreground">
                  Request a copy of your personal data and download your information in a portable format.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Correction</h3>
                <p className="text-sm text-muted-foreground">
                  Update or correct inaccurate personal information in your account settings.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Request deletion of your account and associated personal data (subject to legal requirements).
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Opt-Out</h3>
                <p className="text-sm text-muted-foreground">
                  Control marketing communications and certain data processing activities.
                </p>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@unhooked.app" className="text-primary hover:underline">
                privacy@unhooked.app
              </a>{" "}
              or visit our{" "}
              <Link href="/support" className="text-primary hover:underline">
                Support Center
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain your personal information only as long as necessary to provide our services and comply with
              legal obligations:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Account information: Until you delete your account</li>
              <li>Progress data: Until you delete your account or request removal</li>
              <li>Community posts: May be retained anonymously for community benefit</li>
              <li>Support communications: Up to 3 years for quality assurance</li>
              <li>Technical logs: Up to 1 year for security and performance monitoring</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our App is designed for users aged 13 and older. We do not knowingly collect personal information from
              children under 13. If we discover that we have collected information from a child under 13, we will delete
              it immediately.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For users aged 13-17, we recommend parental involvement in the recovery process and encourage open
              communication with trusted adults.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Users</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are using our App from outside the United States, please note that your information may be
              transferred to and processed in the United States, where our servers are located.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We comply with applicable international privacy laws, including GDPR for European users and similar
              regulations in other jurisdictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of material changes through:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>In-app notifications</li>
              <li>Email notifications to your registered email address</li>
              <li>Updates posted on our website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Your continued use of the App after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <strong>Privacy Officer:</strong> privacy@unhooked.app
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <strong>General Support:</strong>{" "}
                    <Link href="/support" className="text-primary hover:underline">
                      Visit Support Center
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <strong>Data Protection:</strong> dpo@unhooked.app
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Address:</strong> [Your Business Address]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border pt-8 mt-12">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Your privacy matters to us.</strong> We are committed to protecting your personal information
                and supporting your recovery journey with the highest standards of confidentiality and care.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
