import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo Section */}
              <div className="flex">
                <svg
                  viewBox="0 0 380 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-auto"
                >
                  <rect x="10" y="30" width="20" height="40" fill="#00CED1" />
                  <rect x="35" y="30" width="20" height="40" fill="#8A2BE2" />
                  <rect x="60" y="30" width="20" height="40" fill="#FF69B4" />
                  <text
                    x="95"
                    y="82"
                    fontFamily="Arial, sans-serif"
                    fontSize="40"
                    fontWeight="bold"
                    fill="#FFFFFF"
                  >
                    Syncraft Space
                  </text>
                </svg>
              </div>

              {/* Navigation Links */}
              <nav className="hidden sm:flex space-x-4">
                <Link
                  href={route("dashboard")}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Dashboard
                </Link>
                <Link
                  href={route("login")}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Log in
                </Link>
                <Link
                  href={route("register")}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Register
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="sm:hidden flex items-center">
                <button
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="sm:hidden mt-2 space-y-1">
              <Link
                href={route("dashboard")}
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-200"
              >
                Dashboard
              </Link>
              <Link
                href={route("login")}
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-200"
              >
                Log in
              </Link>
              <Link
                href={route("register")}
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        </header>

        <main className="py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
              {/* Centered Logo */}
              <div className="flex justify-center mb-6">
                <svg
                  viewBox="0 0 380 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-auto"
                >
                  <rect x="10" y="30" width="20" height="40" fill="#00CED1" />
                  <rect x="35" y="30" width="20" height="40" fill="#8A2BE2" />
                  <rect x="60" y="30" width="20" height="40" fill="#FF69B4" />
                  <text
                    x="95"
                    y="70"
                    fontFamily="Arial, sans-serif"
                    fontSize="30"
                    fontWeight="bold"
                    fill="#FFFFFF"
                  >
                    Syncraft Space
                  </text>
                </svg>
              </div>

              {/* About Section */}
            <section className="mb-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition duration-300 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Us
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Syncraft is an innovative project management app developed by Tracy Sambu and Derrick Njuguna to streamline workflow and enhance team collaboration.
                With its intuitive interface and robust features, Syncraft empowers teams to efficiently plan, track, and deliver projects. Let Syncraft be your partner in crafting success.
            </p>
            </section>

              {/* Key Features Section */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  Key Features
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Feature: Task Management */}
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Task Management
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Organize tasks effectively by creating, assigning, and prioritizing tasks for your projects. With a user-friendly interface, Syncraft enables seamless task allocation and management across teams.
                    </p>
                  </div>

                  {/* Feature: Project Tracking */}
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Project Tracking
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Keep track of ongoing projects with detailed progress updates, milestones, and timelines. Syncraft offers visual progress bars and status indicators for each project.
                    </p>
                  </div>

                  {/* Feature: Collaboration Tools */}
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Collaboration Tools
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Collaborate with your team efficiently using built-in chat features, file sharing, and real-time updates. Streamline communication across projects to ensure every team member is on the same page.
                    </p>
                  </div>

                  {/* Feature: Progress Reporting */}
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Progress Reporting
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Generate detailed reports on project progress, team performance, and task completion rates. Syncraft provides insightful analytics that help you make informed decisions and improve workflow efficiency.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Syncraft. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/privacy"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
