import { Link, Head, usePage } from '@inertiajs/react';

export default function Welcome(props) {
  return (
   <>
    {/* Navigation Bar */}
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
       {/* Logo */}
       <div className="flex">
        <svg
         viewBox="0 0 380 100"
         xmlns="http://www.w3.org/2000/svg"
         className="h-12 w-auto"
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
       <div className="hidden sm:flex space-x-4">
        <Link
         href="#"
         className="text-gray-300 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 px-3 py-4 rounded-md text-sm font-medium transition duration-200"
        >
         Dashboard
        </Link>
        <Link
         href="#"
         className="text-gray-300 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 py-4 rounded-md text-sm font-medium transition duration-200"
        >
         Log in
        </Link>
        <Link
         href="#"
         className="text-gray-300 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 px-3 py-4 rounded-md text-sm font-medium transition duration-200"
        >
         Register
        </Link>
       </div>
      </div>
     </div>
    </nav>
    <Head title="Welcome" />
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
     {/* Hero Section */}
     <header className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         Welcome to Syncraft
        </h1>
        <p className="text-lg md:text-2xl mb-8">
         Project Management Simplified. Collaborate, Track, and Succeed with
         Ease.
        </p>
        <Link
         href="#"
         className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition duration-300"
        >
         Get Started
        </Link>
       </div>
      </div>
     </header>

     <main className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
       <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
        {/* About Section */}
        <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16">
         <div className="max-w-7xl mx-auto text-center">
          {/* Title & Subheading */}
          <div className="mb-12">
           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
             About Syncraft
            </span>
           </h2>
           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Syncraft is an innovative project management app created by{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
             Tracy Sambu
            </span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
             Derrick Njuguna
            </span>
            . We’re on a mission to streamline workflows and make teamwork more
            efficient than ever.
           </p>
          </div>

          {/* Image or Icon */}
          <div className="flex justify-center mb-10">
           <img
            src="/images/team-collaboration.svg"
            alt="Team Collaboration"
            className="h-48 w-auto"
           />
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Point 1: Empower Teams */}
           <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
             Empower Your Teams
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
             Syncraft offers intuitive tools that help teams work better
             together. From assigning tasks to tracking progress, we provide
             everything you need to succeed.
            </p>
           </div>

           {/* Point 2: Plan and Execute */}
           <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
             Plan and Execute
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
             Whether you're managing small tasks or large projects, Syncraft
             allows you to plan, execute, and deliver efficiently, with clear
             timelines and progress updates.
            </p>
           </div>

           {/* Point 3: Streamline Collaboration */}
           <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
             Streamline Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
             Collaborate in real-time with chat features, file sharing, and team
             updates. No more scattered tools—everything you need is in one
             place.
            </p>
           </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12">
           <Link
            href={route("register")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300"
           >
            Get Started with Syncraft
           </Link>
          </div>
         </div>
        </section>

        {/* Key Features Section */}
        <section>
         <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Key Features
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-4">
            <img
             src="/icons/task.svg"
             alt="Task Management"
             className="w-12 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Task Management
           </h3>
           <p className="mt-3 text-gray-500 dark:text-gray-300">
            Organize tasks effectively by creating, assigning, and prioritizing
            tasks for your projects.
           </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-4">
            <img
             src="/icons/tracking.svg"
             alt="Project Tracking"
             className="w-12 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Project Tracking
           </h3>
           <p className="mt-3 text-gray-500 dark:text-gray-300">
            Keep track of ongoing projects with detailed progress updates,
            milestones, and timelines.
           </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-4">
            <img
             src="/icons/collaboration.svg"
             alt="Collaboration"
             className="w-12 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Collaboration Tools
           </h3>
           <p className="mt-3 text-gray-500 dark:text-gray-300">
            Collaborate with your team efficiently using built-in chat features,
            file sharing, and real-time updates.
           </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-4">
            <img
             src="/icons/report.svg"
             alt="Reporting"
             className="w-12 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Progress Reporting
           </h3>
           <p className="mt-3 text-gray-500 dark:text-gray-300">
            Generate detailed reports on project progress, team performance, and
            task completion rates.
           </p>
          </div>
         </div>
        </section>
       </div>
      </div>
     </main>

     {/* Footer Section */}
     <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
         <h4 className="text-lg font-bold">Syncraft</h4>
         <p className="text-sm">
          &copy; {new Date().getFullYear()} Syncraft. All rights reserved.
         </p>
        </div>
        <div className="space-y-4">
         <h4 className="text-lg font-bold">Resources</h4>
         <a href="#" className="text-sm hover:text-gray-400">
          Privacy Policy
         </a>
         <a href="#" className="text-sm hover:text-gray-400">
          Terms of Service
         </a>
         <a href="#" className="text-sm hover:text-gray-400">
          Contact Us
         </a>
        </div>
        <div className="space-y-4">
         <h4 className="text-lg font-bold">Company</h4>
         <a href="#" className="text-sm hover:text-gray-400">
          About Us
         </a>
         <a href="#" className="text-sm hover:text-gray-400">
          Careers
         </a>
        </div>
        <div className="space-y-4">
         <h4 className="text-lg font-bold">Follow Us</h4>
         <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
           <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" className="hover:text-gray-400">
           <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" className="hover:text-gray-400">
           <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
         </div>
        </div>
       </div>
      </div>
     </footer>
    </div>
   </>
  );
}
