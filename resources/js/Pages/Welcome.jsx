import { Link, Head, usePage } from "@inertiajs/react";

export default function Welcome(props) {
 return (
  <>
   {/* Navigation Bar */}
   <nav className="bg-gradient-to-r from-black-300 via-blue-400 to-indigo-550 bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
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
        href={route("login")}
        className="text-gray-300 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 py-4 rounded-md text-sm font-medium transition duration-200"
       >
        Log in
       </Link>
       <Link
        href={route("register")}
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
           src="assets/images/teams-collaboration.jpg"
           alt="Team Collaboration"
           className="h-80 w-auto"
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
       <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
         <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Key Features
         </h2>

         {/* Feature Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Feature Category: Productivity */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-6">
            <img
             src="\assets\icons\task.png"
             alt="Productivity Tools"
             className="w-16 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Boost Productivity
           </h3>
           <p className="text-gray-500 dark:text-gray-300 text-sm">
            Manage tasks seamlessly with intuitive tools to prioritize, assign,
            and track your team's workload, ensuring nothing falls through the
            cracks.
           </p>
          </div>

          {/* Feature Category: Tracking & Reporting */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-6">
            <img
             src="\assets\icons\tracking.png"
             alt="Tracking & Reporting"
             className="w-16 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Track & Report
           </h3>
           <p className="text-gray-500 dark:text-gray-300 text-sm">
            Stay on top of your projects with real-time tracking, progress bars,
            and detailed reporting tools to monitor team performance and
            milestones.
           </p>
          </div>

          {/* Feature Category: Collaboration */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-6">
            <img
             src="\assets\icons\collaboration.png"
             alt="Collaboration Tools"
             className="w-16 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Seamless Collaboration
           </h3>
           <p className="text-gray-500 dark:text-gray-300 text-sm">
            Collaborate in real-time with built-in file sharing and synchronized
            updates that keep every team member aligned and informed.
           </p>
          </div>

          {/* Feature Category: Insights & Analytics */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
           <div className="mb-6">
            <img
             src="\assets\icons\report.png"
             alt="Insights & Analytics"
             className="w-16 mx-auto"
            />
           </div>
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Insights & Analytics
           </h3>
           <p className="text-gray-500 dark:text-gray-300 text-sm">
            Make data-driven decisions with comprehensive analytics on team
            efficiency, project timelines, and task completion rates.
           </p>
          </div>
         </div>
        </div>
       </section>
      </div>
     </div>
    </main>

    {/* Footer Section */}
    <footer className="bg-gray-800 text-white py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
       {/* Brand Section */}
       <div className="space-y-4">
        <h4 className="text-xl font-bold">Syncraft</h4>
        <p className="text-sm text-gray-400">
         Streamlining your project management and team collaboration.
        </p>
        <p className="text-sm text-gray-400">
         &copy; {new Date().getFullYear()} Syncraft. All rights reserved.
        </p>
       </div>
       <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        {/* Resources Section */}
        <div className="space-y-4">
         <h4 className="text-xl font-bold">Resources</h4>
         <div className="text-gray-400">
          Privacy Policy
          <br />
          Terms of Service
          <br />
          Contact Us
         </div>
        </div>

        {/* Company Section */}
        <div className="space-y-4">
         <h4 className="text-xl font-bold">Company</h4>
         <div className="text-gray-400">
          About Us
          <br />
          Careers
          <br />
          Blog
         </div>
        </div>
       </div>

       {/* Follow Us Section */}
       <div className="space-y-4">
        <h4 className="text-xl font-bold">Follow Us</h4>
        <div className="flex space-x-4">
         <a href="#" className="hover:text-gray-400 transition duration-200">
          <img src="\assets\icons\facebook.png" alt="Facebook" className="w-6 h-6" />
         </a>
         <a href="#" className="hover:text-gray-400 transition duration-200">
          <img src="\assets\icons\twitter.png" alt="Twitter" className="w-6 h-6" />
         </a>
         <a href="#" className="hover:text-gray-400 transition duration-200">
          <img src="\assets\icons\linkedin.png" alt="LinkedIn" className="w-6 h-6" />
         </a>
        </div>
       </div>
      </div>

      {/* Call to Action: Newsletter Signup */}
      <div className="mt-12 text-center">
       <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
       <p className="text-gray-400 text-sm mb-4">
        Subscribe to our newsletter for the latest updates and insights.
       </p>
       <form className="flex justify-center">
        <input
         type="email"
         placeholder="Enter your email"
         className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition duration-200">
         Subscribe
        </button>
       </form>
      </div>
     </div>
    </footer>
   </div>
  </>
 );
}
