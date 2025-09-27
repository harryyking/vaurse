import { MobileMockup } from "./mobile-mockup"
import { Card } from "@/components/ui/card"
import { Shield, Heart, Users, BookOpen } from "lucide-react"

export function AppScreenshots() {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {/* First Phone - Dashboard */}
      <MobileMockup>
        <div className="p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
            <p className="text-sm text-gray-600">Track your progress</p>
          </div>

          <Card className="p-4 mb-4 bg-accent/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Days Clean</span>
              <span className="text-2xl font-bold text-accent">47</span>
            </div>
          </Card>

          <Card className="p-4 mb-4 bg-primary/10">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Accountability</p>
                <p className="text-xs text-gray-600">Partner connected</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-green-50">
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium">Daily Prayer</p>
                <p className="text-xs text-gray-600">Completed today</p>
              </div>
            </div>
          </Card>
        </div>
      </MobileMockup>

      {/* Second Phone - Community */}
      <MobileMockup>
        <div className="p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Community</h3>
            <p className="text-sm text-gray-600">Connect with others</p>
          </div>

          <div className="space-y-4">
            <Card className="p-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">JD</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">John D.</p>
                  <p className="text-xs text-gray-600">"30 days clean! Praise God!"</p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">MS</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Mike S.</p>
                  <p className="text-xs text-gray-600">"Prayer request for strength"</p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Join Group Chat</span>
              </div>
            </Card>
          </div>
        </div>
      </MobileMockup>

      {/* Third Phone - Resources */}
      <MobileMockup>
        <div className="p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <p className="text-sm text-gray-600">Faith-based tools</p>
          </div>

          <div className="space-y-4">
            <Card className="p-4 bg-blue-50">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Daily Devotional</p>
                  <p className="text-xs text-gray-600">Overcoming temptation</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-purple-50">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium">Scripture Verses</p>
                  <p className="text-xs text-gray-600">For strength & hope</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-green-50">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Emergency Help</p>
                  <p className="text-xs text-gray-600">When you need support</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </MobileMockup>
    </div>
  )
}
