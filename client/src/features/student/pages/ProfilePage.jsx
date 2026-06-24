import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const user = {
  name: "Anil Kumar",
  email: "anil@example.com",
  role: "Student",
  joinedAt: "12 March 2024",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  purchasedCourses: 10,
  completedCourses: 4,
  watchHours: 86,
};

const ProfilePage = () => {
  return (
    <div className="w-full font-mono space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-(--bodhify-navy)">Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account information</p>
      </div>

      {/* Profile Card */}
      <Card className="rounded-3xl shadow-sm border border-gray-200">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-(--bodhify-light-navy)"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-(--bodhify-navy)">
                {user.name}
              </h2>

              <p className="text-gray-500 mt-2">{user.email}</p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
                <span className="px-4 py-2 rounded-full bg-gray-100 text-(--bodhify-navy) text-sm font-semibold">
                  {user.role}
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                  Joined {user.joinedAt}
                </span>
              </div>

              <Button className="mt-6 bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy) px-6 py-2 rounded-xl cursor-pointer">
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-(--bodhify-navy) font-mono text-lg">
              Purchased Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-(--bodhify-light-navy)">
              {user.purchasedCourses}
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-(--bodhify-navy) font-mono text-lg">
              Completed Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-(--bodhify-light-navy)">
              {user.completedCourses}
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-(--bodhify-navy) font-mono text-lg">
              Watch Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-(--bodhify-light-navy)">
              {user.watchHours}h
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Extra Details */}
      <Card className="rounded-3xl shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-(--bodhify-navy) font-mono">
            Account Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-gray-600">
          <div className="flex justify-between border-b pb-3">
            <span>Full Name</span>
            <span className="font-semibold text-(--bodhify-navy)">
              {user.name}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Email</span>
            <span className="font-semibold text-(--bodhify-navy)">
              {user.email}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Role</span>
            <span className="font-semibold text-(--bodhify-navy)">
              {user.role}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Member Since</span>
            <span className="font-semibold text-(--bodhify-navy)">
              {user.joinedAt}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
