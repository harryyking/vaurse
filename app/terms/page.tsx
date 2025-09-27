import { Navigation } from "@/components/navigation"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the Unhooked faith-based recovery app. Learn about our community guidelines, user conduct, and service terms.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By downloading, installing, or using the Unhooked mobile application ("App"), you agree to be bound by
              these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms constitute a legally binding agreement between you and Unhooked regarding your use of the App
              and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unhooked is a faith-based mobile application designed to help individuals overcome pornography addiction
              through:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Accountability partner connections</li>
              <li>Daily devotionals and scripture readings</li>
              <li>Community support forums</li>
              <li>Progress tracking and milestone celebrations</li>
              <li>Crisis intervention resources</li>
              <li>Biblical resources and prayer tools</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The App is provided as a support tool and is not intended to replace professional medical or psychological
              treatment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You must be at least 13 years old to use the App. If you are under 18, you must have parental consent to
              use the App. By using the App, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>You meet the age requirements stated above</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will use the App in compliance with all applicable laws</li>
              <li>All information you provide is accurate and truthful</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct and Community Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using the App, you agree to maintain a respectful, supportive environment. You will not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Share explicit, inappropriate, or triggering content</li>
              <li>Harass, bully, or discriminate against other users</li>
              <li>Share personal contact information publicly</li>
              <li>Attempt to solicit romantic or sexual relationships</li>
              <li>Promote non-Christian beliefs or practices that conflict with our faith-based mission</li>
              <li>Use the App for commercial purposes without permission</li>
              <li>Attempt to hack, disrupt, or compromise the App's security</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Violation of these guidelines may result in account suspension or termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information, but no system is 100%
              secure. You acknowledge the inherent risks of sharing personal information online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Accountability Partners</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The accountability partner feature connects you with other users for mutual support. You understand that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Accountability partners are volunteers, not professional counselors</li>
              <li>We do not screen or verify the identity of accountability partners</li>
              <li>You participate in accountability relationships at your own discretion</li>
              <li>You should report any inappropriate behavior immediately</li>
              <li>We reserve the right to remove users who violate community guidelines</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Medical Advice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App provides spiritual and community support but is not a substitute for professional medical,
              psychological, or psychiatric treatment. We strongly encourage users to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>Consult with qualified healthcare professionals</li>
              <li>Seek professional help for underlying mental health conditions</li>
              <li>Contact emergency services if experiencing suicidal thoughts</li>
              <li>Use the App as a supplement to, not replacement for, professional care</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If you are experiencing a mental health crisis, please contact the National Suicide Prevention Lifeline at
              988 or your local emergency services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App and all content, including but not limited to text, graphics, logos, devotionals, and software,
              are owned by Unhooked or our licensors and are protected by copyright and other intellectual property
              laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may not copy, modify, distribute, or create derivative works based on the App or its content without
              our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the fullest extent permitted by law, Unhooked and its affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability for any claims related to the App shall not exceed the amount you paid for the App in
              the 12 months preceding the claim (which is $0 for our free App).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may stop using the App at any time. We may suspend or terminate your access to the App if you violate
              these Terms or for any other reason at our discretion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use the App will cease immediately, but these Terms will continue to apply
              to your prior use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update these Terms from time to time. We will notify users of material changes through the App or
              by email. Your continued use of the App after changes become effective constitutes acceptance of the new
              Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We encourage you to review these Terms periodically to stay informed of any updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Email:</strong> legal@unhooked.app
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Support:</strong>{" "}
                <Link href="/support" className="text-primary hover:underline">
                  Visit our Support Center
                </Link>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Address:</strong> [Your Business Address]
              </p>
            </div>
          </section>

          <div className="border-t border-border pt-8 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              By using Unhooked, you acknowledge that you have read, understood, and agree to be bound by these Terms of
              Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
