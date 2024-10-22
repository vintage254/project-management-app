# synccraft-space: Get It Done

## Project Overview

synccraft-space is a full-stack web application for managing projects and tasks collaboratively. It's built with a powerful combination of Laravel 11 for the backend and React with Inertia.js for the frontend, providing a seamless and responsive user experience.

### Why synccraft-space?

In today's fast-paced work environment, efficient project and task management is crucial. TaskMaster Pro aims to address common challenges faced by teams, such as:

* **Disorganized Task Tracking:** Centralize all your tasks in one place, making it easier to track progress and deadlines.
* **Poor Communication:** Enhance team collaboration with real-time updates and notifications.
* **Lack of Insights:** Gain valuable insights into your team's productivity with a comprehensive dashboard.

### Core Principles

synccraft-space is built on the following core principles:

* **Usability:** A user-friendly interface that requires minimal training.
* **Flexibility:** Customizable to fit the unique needs of different teams and projects.
* **Security:** Robust authentication and authorization mechanisms to protect your data.
* **Scalability:** Designed to handle projects of all sizes, from small teams to large enterprises.

### Getting Started

Whether you're a developer looking to contribute or a team aiming to enhance your project management workflow, TaskMaster Pro is straightforward to set up. Follow the installation and setup instructions below to get your instance up and running.

This application was developed as the final project for ALX AFRICA. The team behind TaskMaster Pro consists of:

* **Tracy Sambu** - Frontend Engineer
* **Derrick Mungai** - Backend Engineer

The application is built with the following technologies:

* **Backend:** Laravel 11
* **Frontend:** React with Inertia.js
* **Build Tool:** Vite
* **Package Managers:** Composer (PHP), npm (JavaScript)

## Key Features

synccraft-space offers a range of features to enhance your project management workflow:

* **User Authentication:** Secure registration and login functionality.
* **Project Management:**
    * Create, read, update, and delete projects.
    * Sorting, filtering, and pagination for efficient data management.
* **Task Management:**
    * Create, read, update, and delete tasks.
    * Assign tasks to different users.
    * Filter tasks by project, status, priority, assignee, and more.
    * Sorting and pagination for improved task organization.
* **My Tasks View:** A dedicated view for users to see their assigned tasks, helping them prioritize their workload.
* **Dashboard:** Provides insights into pending, in-progress, and completed tasks.
* **Real-time Updates:** Inertia.js enables seamless, single-page application behavior, providing real-time updates without full page reloads.
* **Email Verification:** Enhanced security by requiring users to verify their email addresses.
* **Responsive Design:** The interface adapts to different screen sizes, ensuring a user-friendly experience on desktops, tablets, and mobile devices.

## Installation and Setup

**Prerequisites:**

Before you begin, ensure you have the following installed:

* PHP 8.1 or higher
* Composer
* Node.js and npm
* A database (SQLite, MySQL or PostgreSQL)

**Steps:**

1. **Clone the Repository:**
    Open your terminal and run:
    ```bash
    git clone https://github.com/vintage254/project-management-app.git
    cd project-management-app
    ```

2. **Install PHP Dependencies:**
    Run the following command to install PHP dependencies:
    ```bash
    composer install
    ```

3. **Install JavaScript Dependencies:**
    Next, install the JavaScript dependencies:
    ```bash
    npm install
    ```

4. **Configure Environment Variables:**
    Copy the example environment file and update it with your configuration:
    ```bash
    cp .env.example .env
    ```
    Open the `.env` file and fill in your database credentials and other settings.

5. **Generate Application Key:**
    Generate a new application key:
    ```bash
    php artisan key:generate
    ```

6. **Run Database Migrations and Seeders:**
    Set up your database by running migrations and seeders:
    ```bash
    php artisan migrate --seed 
    ```

7. **Start Development Servers:**
    Start the backend server:
    ```bash
    php artisan serve
    ```
    In a new terminal, start the frontend development server:
    ```bash
    npm run dev
    ```

8. **Access the Application:**
    Open your web browser and navigate to:
    ```
    http://localhost:8000
    ```
    (or the port specified by your backend server).

Follow these steps to get TaskMaster Pro up and running on your local machine. If you encounter any issues, refer to the documentation or seek help from the community.

## Contributing

Contributions to TaskMaster Pro are welcome! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated. Please follow these steps to contribute:

1. **Fork the Repository:**
    Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

2. **Clone Your Fork:**
    Clone your forked repository to your local machine:
    ```bash
    git clone [your-forked-repository-url]
    cd project-management-app
    ```

3. **Create a Branch:**
    Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature/your-feature-name
    ```

4. **Make Your Changes:**
    Implement your changes in the codebase.

5. **Commit Your Changes:**
    Commit your changes with a descriptive commit message:
    ```bash
    git add .
    git commit -m "Description of your changes"
    ```

6. **Push to Your Fork:**
    Push your changes to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```

7. **Submit a Pull Request:**
    Go to the original repository and click the "New Pull Request" button. Provide a clear description of your changes and any related issues.

## License

This project is open-sourced under the MIT license. See the `LICENSE` file for details.
 
