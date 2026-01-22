# Agent Guidelines for Suave Coach Web

This document outlines guidelines and best practices for AI agents working with the Suave Coach Web codebase. The project is a Next.js application built with TypeScript, React, and Tailwind CSS, utilizing Vercel for deployment. It extends the Nextfolio template, incorporating features like MDX blog post support, SEO optimization, and interactive components.

## Project Structure and Key Areas

-   **`app/`**: Contains the main application logic, pages, components, and utility functions.
    -   **`app/blog/`**: Dynamic routes and pages for blog posts.
    -   **`app/components/`**: Reusable React components (e.g., `nav.tsx`, `footer.tsx`, `offer-card.tsx`, `mdx.tsx`).
    -   **`app/config.ts`**: Centralized configuration for site metadata, SEO, and social links.
    -   **`app/lib/posts.ts`**: Utilities for reading and parsing MDX blog posts from the `content/` directory.
    -   **`app/page.tsx`**: The main landing page, showcasing coaching services and a contact form.
    -   **`app/layout.tsx`**: Defines the root layout, including global styles, metadata, and analytics.
-   **`content/`**: Stores MDX (Markdown with JSX) files for blog posts. Each `.mdx` file should include frontmatter for metadata.
-   **`public/`**: Static assets like images (e.g., `favicon.ico`, `opengraph-image.png`, `photos/`).
-   **`styles/`**: Tailwind CSS configuration and global stylesheets.
-   **`package.json`**: Lists project dependencies and scripts (e.g., `dev`, `build`, `start`).

## Core Technologies

-   **Framework**: Next.js (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Content**: MDX
-   **Deployment**: Vercel
-   **Package Manager**: pnpm

## Agent Responsibilities and Common Tasks

Agents are expected to perform the following types of tasks:

### 1. Content Management

-   **Creating New Blog Posts**:
    -   Create a new `.mdx` file in the `content/` directory.
    -   Ensure the file includes valid frontmatter (title, publishedAt, summary, tags, image - optional).
    -   Add content using Markdown and, if necessary, JSX components.
    -   Verify that `app/lib/posts.ts` correctly processes the new post (if modifications are needed, proceed carefully).
-   **Updating Existing Content**:
    -   Modify `.mdx` files in `content/` to update blog post text, metadata, or embedded components.
    -   Update text content on pages like `app/page.tsx` or other component files.
-   **Image Management**:
    -   Add new images to the `public/photos/` directory.
    -   Ensure images are optimized for web use.
    -   Update image paths in relevant components or MDX files.

### 2. Feature Development and Enhancements

-   **Adding New Components**:
    -   Create new React components in `app/components/`.
    -   Ensure components are reusable and follow best practices for styling (Tailwind CSS) and accessibility.
    -   Integrate new components into existing pages or layouts.
-   **Modifying Existing Features**:
    -   Adjust the behavior or appearance of existing components (e.g., `Navbar`, `Footer`, `OfferCard`).
    -   Implement new functionality based on user requirements.
-   **SEO and Metadata Updates**:
    -   Modify `app/config.ts` to update `metaData` (title, description, ogImage, baseUrl, name) for SEO and Open Graph.
    -   Update `app/sitemap.ts` and `app/robots.ts` as needed.
-   **Styling Adjustments**:
    -   Apply or modify Tailwind CSS classes directly within JSX.
    -   Update `tailwind.config.js` for custom configurations.
    -   Refactor CSS to improve maintainability and performance.

### 3. Configuration and Maintenance

-   **Updating Dependencies**:
    -   Use `pnpm` to add, update, or remove dependencies in `package.json`.
    -   Ensure compatibility with Next.js and other core libraries.
-   **Performance Optimization**:
    -   Identify and address performance bottlenecks (e.g., image optimization, code splitting, reducing client-side rendering).
    -   Utilize Vercel Analytics and Speed Insights for monitoring.
-   **Error Handling**:
    -   Implement or improve error boundaries and error logging.
    -   Address issues reported in `error.tsx` or `not-found.tsx`.

## Best Practices for Agents

-   **Understand the Context**: Before making changes, thoroughly read relevant files (e.g., `README.md`, `package.json`, `app/config.ts`, and any specific component or page files).
-   **Prioritize Existing Patterns**: Adhere to the existing code style, component structure, and architectural patterns (e.g., App Router conventions, Tailwind CSS usage).
-   **Modularity**: When creating new components or utilities, aim for modularity and reusability.
-   **Testing**: While direct testing is not always feasible for agents, consider the impact of changes and strive for robust solutions.
-   **Clear Communication**: If a task requires clarification or has multiple approaches, use the "Plan" mode to discuss options before proceeding.
-   **Commit Messages**: If asked to commit, follow standard git commit message conventions, clearly describing the "what" and "why" of the changes.
