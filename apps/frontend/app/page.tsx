import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shriram/ui';
import { formatDate } from '@shriram/utils';
import { Calendar, Users, Stethoscope, Clock } from 'lucide-react';

export default function Home() {
  const currentDate = formatDate(new Date(), 'long');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Shriram Hospital
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive Healthcare Management System
          </p>
          <p className="text-gray-500">Today is {currentDate}</p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Users className="h-6 w-6 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold">Patient Management</CardTitle>
              <CardDescription>
                Comprehensive patient records and medical history
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Stethoscope className="h-6 w-6 text-green-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold">Doctor Portal</CardTitle>
              <CardDescription>
                Doctor profiles, schedules, and consultation management
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Calendar className="h-6 w-6 text-purple-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold">Appointments</CardTitle>
              <CardDescription>
                Smart scheduling and appointment booking system
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Clock className="h-6 w-6 text-orange-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-bold">Real-time Updates</CardTitle>
              <CardDescription>
                Live status updates and notifications
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to modernize healthcare?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our comprehensive hospital management system streamlines operations, 
            improves patient care, and enhances overall efficiency.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
