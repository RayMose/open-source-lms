# Overview

This is the Foreign Services Academy (FSA) Kenya Learning Management System - a specialized diplomatic training platform built with React, Express.js, and PostgreSQL. The application provides comprehensive online training for Kenya's foreign service officers with three-tier diplomatic education structure, video-based learning modules, and professional certification tracking.

## Recent Changes (January 2025)
- **FSA Branding Integration**: Complete rebranding with official FSA logo, colors, and diplomatic academy theme
- **Three-Tier Training Structure**: Implemented specialized learning paths for Third Secretary Cadets, Pre-departure Officers, and Ambassadors/Consuls-General
- **Diplomatic Course Content**: Created three core training modules: Sustainable Development & Environmental Diplomacy, Peacebuilding & Conflict Resolution, and Economic & Regional Integration Diplomacy
- **Video Learning Platform**: Added advanced video player component with speed controls, progress tracking, and full-screen support for long-form diplomatic training content
- **Learning Path Selector**: Interactive component to guide users through FSA's structured training progression

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server with hot module replacement
- **React Router** for client-side routing and navigation
- **Zustand** for state management (authentication, courses, progress tracking)
- **TanStack Query** for server state management and data fetching
- **Tailwind CSS** with shadcn/ui components for consistent styling
- **Theme system** supporting light/dark modes with CSS custom properties

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **RESTful API** design with `/api` prefix for all routes
- **Middleware-based** request processing with logging and error handling
- **Memory storage interface** with abstraction layer for easy database switching
- **Session-based** request logging with performance monitoring

## Database & ORM
- **PostgreSQL** as the primary database
- **Drizzle ORM** for type-safe database operations and schema management
- **Neon Database** serverless PostgreSQL integration
- **Schema-driven** development with shared types between frontend and backend
- **Migration system** using Drizzle Kit for database version control

## Authentication & Authorization
- **Role-based access control** with user and admin roles
- **Persistent authentication** state using Zustand with localStorage
- **Protected routes** with conditional rendering based on authentication status
- **Demo credentials** system for easy testing and development

## UI Component System
- **Radix UI primitives** for accessible, unstyled components
- **shadcn/ui** component library with consistent design patterns
- **Custom component variations** using class-variance-authority
- **Responsive design** with mobile-first approach
- **Animation support** with CSS transitions and transforms

## FSA Diplomatic Training System
- **Three-tier learning paths** aligned with Kenya's foreign service career progression
- **Long-form video learning** with advanced video player supporting diplomatic lectures and case studies
- **Specialized course modules** in environmental diplomacy, peacebuilding, and economic integration
- **Professional certification tracking** for diplomatic competency advancement
- **Flexible self-paced learning** designed for officers stationed abroad or with demanding schedules

## Admin Dashboard
- **Comprehensive analytics** with charts and metrics
- **Student management** with enrollment tracking
- **Sales reporting** with revenue analytics
- **Course administration** tools
- **Real-time data visualization** using Recharts library

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless** - Serverless PostgreSQL database connection
- **drizzle-orm** and **drizzle-kit** - Type-safe ORM and migration tools
- **express** - Web application framework for Node.js
- **react** and **react-dom** - User interface library
- **vite** - Build tool and development server

## UI and Styling
- **@radix-ui/** packages - Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Utility for creating component variants
- **lucide-react** - Icon library with React components

## State Management and Data Fetching
- **zustand** - Lightweight state management
- **@tanstack/react-query** - Server state management and caching
- **react-hook-form** - Form handling and validation
- **@hookform/resolvers** - Form validation resolvers

## Development and Build Tools
- **typescript** - Type checking and development experience
- **tsx** - TypeScript execution for server development
- **esbuild** - Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay

## Data Visualization
- **recharts** - Composable charting library for React
- **embla-carousel-react** - Carousel component for image galleries

## Utility Libraries
- **date-fns** - Date utility functions
- **clsx** and **tailwind-merge** - CSS class name utilities
- **zod** and **drizzle-zod** - Runtime type validation and schema generation