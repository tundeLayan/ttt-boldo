# Profold Project Scaffold

This document details the scaffold project. We'll explore the structure, features, and the benefits they bring to to our Next.js development workflow.

## Project Overview

The Profold project scaffold is a basic Next.js application with two modules: `users` and `tasks`. It showcases how to structure our project for maintainability, scalability, and consistency. The scaffold includes:

-   A global layout with a fixed navbar, a simple footer, and a modal that's triggered from the navbar.
-   A shared module (`_module`) containing reusable components, types, hooks, and utilities.
-   The `users` module, demonstrating data fetching from an external API and display in a card-based layout.
-   The `tasks` module, showcasing task management features, including fetching task details and related tasks from an external API.

## Project Structure: Adherence to Guidelines

1.  **Modules:** Each feature is organized into a dedicated module (`users` and `tasks`), promoting separation of concerns and making the codebase easier to navigate.

2.  **Colocation:** All files related to a module (components, types, services, utils) are co-located within that module's `_module` directory. This enhances code locality and improves maintainability.

3.  **Single Responsibility Principle (SRP):** Each file serves a single, focused purpose. This makes the code easier to understand, test, and reuse. For example, we have separate files for fetching tasks (`task-service.ts`) and fetching a single task (`get-task-by-id-service.ts`).

4.  **Naming Conventions:** Files and folders follow consistent naming conventions, making it easy to identify their purpose and module association. The `_module` prefix prevents Next.js from recognizing these folders as routes, allowing us to use the same convention for shared and module-specific code.

5.  **Shared Module (`_module`):** The `_module` folder contains reusable components, types, hooks, and utilities that can be shared across different modules, promoting code reuse and reducing redundancy.

## Key Features

### User Module

-   **User Listing:** Fetches and displays a list of users from an external API (`https://get-data.glitch.me/users/`) in a visually appealing card format.
-   **UserCard Component:** A reusable component for displaying individual user details (fullname, username, email, bio, registration date).
-   **Styling:** Uses Tailwind CSS to create a clean and modern look with a warm color scheme.

### Task Module

-   **Task Listing:** Fetches and displays a list of tasks from an external API (`https://get-data.glitch.me/tasks/`) in a grid layout using the `TaskCard` component.
-   **Task Details Page (`/tasks/[taskId]`):**
    -   Fetches and displays details of a specific task by ID.
    -   Shows a list of 10 randomly selected "related tasks" (excluding the current task) using the `TaskCard` component.
-   **TaskCard Component:** A reusable component to display task information (task name, truncated description, due date, assignee).
-   **Styling:** Employs a minimalist design with warm colors and subtle shadows.

### Shared Module (`_module`)

-   **Card Component:** A generic card component that can be used to display various types of content (used for both users and tasks).
-   **Formatting Utilities:** Provides functions like `formatTimeAgo` to format timestamps for display.
-   **Type Definitions:** Includes a standard API response type (`TAPIStandardResponse`) and other types for data models.

### Navigation and Layout

-   **Fixed Navbar:** A persistent navbar at the top of the page with links to the "Users" and "Tasks" pages.
-   **About Modal:** A clickable "About" link in the navbar triggers a modal dialog with a brief description of the project.
-   **Responsive Design:** The layout is designed to adapt to different screen sizes using Tailwind CSS's responsive utilities.

## Additional Considerations

-   **Error Handling:** The scaffold project includes basic error handling in the service files. In a real-world application, you would want to implement more robust error handling and user feedback mechanisms.

-   **Data Fetching:** Consider implementing more advanced data fetching strategies, such as pagination, filtering, and sorting, to optimize performance as the datasets grow.

-   **State Management:** For larger applications, you might want to explore a state management library like Zustand, Redux Toolkit, or Recoil to manage complex application state.

## Conclusion

This scaffold project serves as a foundation for building well-structured and maintainable Next.js applications. By adhering to the established guidelines, you can create a codebase that is not only functional but also a pleasure to work with.

Remember, these are guidelines, not rigid rules. Feel free to adapt them to fit the specific needs of your project, but always keep the principles of modularity, colocation, single responsibility, and clear naming in mind.

## Appendix: Default Next JS running instruction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
