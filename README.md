# Inventory Management System

A full-stack inventory management system for managing products, suppliers, stock movements, purchase orders, users, and inventory reports.

## Overview

This project is a portfolio application built to simulate a real-world inventory management system.

It is designed to practice and demonstrate:

* Full-stack web development
* REST API development
* Relational database design
* Authentication and authorization
* Inventory and business logic
* Testing
* Deployment
* Software architecture and project organization

## Tech Stack

### Frontend

* Svelte
* TypeScript
* JavaScript
* HTML/CSS

### Backend

* Hono
* TypeScript
* REST API
* Zod

### Database

* PostgreSQL
* Supabase

### Development & Tools

* Git
* GitHub
* GitHub Projects
* Docker
* Vitest
* Playwright

> The technology stack may evolve as the project develops.

## Core Features

### Product Management

* Create products
* View products
* Edit products
* Archive products
* Search products
* Filter products
* Manage product categories
* Track stock levels

### Category Management

* Create categories
* Edit categories
* Archive categories
* Search and filter categories

### Supplier Management

* Create suppliers
* Edit suppliers
* Archive suppliers
* View supplier products
* View supplier history

### Inventory Management

* Stock-in
* Stock-out
* Stock adjustments
* Inventory transaction history
* Stock quantity validation
* Low-stock tracking
* Out-of-stock tracking

### Dashboard

* Total products
* Inventory value
* Low-stock products
* Out-of-stock products
* Recent inventory transactions

### Authentication & Authorization

* User login
* User logout
* User management
* Role-based access control
* Permission management

### Purchase Orders

* Create purchase orders
* Add purchase order items
* Approve purchase orders
* Receive purchase orders
* Update inventory when stock is received

### Reports

* Inventory reports
* Stock movement reports
* Low-stock reports
* Data export

### Audit Logs

* Track important system changes
* Record the user responsible for changes
* Record timestamps
* View change history

### Notifications

* Low-stock notifications
* Out-of-stock notifications
* Purchase order notifications

## System Architecture

```text
┌─────────────────────┐
│      Svelte UI      │
│    TypeScript       │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│     Hono Backend    │
│     TypeScript      │
│  Routes / Services  │
│   Validation (Zod)  │
└──────────┬──────────┘
           │
           │ SQL
           ▼
┌─────────────────────┐
│     PostgreSQL      │
│      Supabase       │
└─────────────────────┘
```

## Project Structure

```text
inventory-management/
│
├── frontend/
│   ├── src/
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── lib/
│   │   └── index.ts
│   └── ...
│
├── docs/
│   ├── requirements.md
│   ├── architecture.md
│   ├── database.md
│   └── api.md
│
├── .env.example
├── .gitignore
├── README.md
└── ...
```

## Database

The system uses a relational PostgreSQL database.

Main entities include:

```text
Users
Roles
Categories
Products
Suppliers
Inventory Transactions
Purchase Orders
Purchase Order Items
Audit Logs
```

The database design will be documented separately in:

`docs/database.md`

## Development Roadmap

The project is being developed in the following phases:

1. Project Foundation
2. Database
3. Categories
4. Products
5. Suppliers
6. Inventory
7. Dashboard
8. Authentication & RBAC
9. Purchase Orders
10. Reports
11. Audit Logs
12. Notifications
13. Testing
14. Deployment

Progress is tracked using **GitHub Projects**.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* PostgreSQL or a Supabase project

### Clone the repository

```bash
git clone <repository-url>
cd inventory-management
```

### Install dependencies

Install dependencies for the frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

### Environment Variables

Create an environment file based on `.env.example`.

Example:

```env
DATABASE_URL=
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
```

Never commit your real `.env` file or secret keys to Git.

### Run the project

Start the frontend:

```bash
cd frontend
npm run dev
```

Start the backend:

```bash
cd backend
npm run dev
```

## Testing

The project will use automated tests to verify:

* Business logic
* API behavior
* Database operations
* Authentication
* Authorization
* Critical user workflows

Testing tools include:

* Vitest
* Playwright

## Documentation

Additional documentation will be maintained in the `docs/` directory.

```text
docs/
├── requirements.md
├── architecture.md
├── database.md
└── api.md
```

## Project Status

🚧 **In Development**

The system is being developed incrementally using a feature-by-feature approach.

## Author

**Mark Anthony Villahermosa**

Built as a full-stack development portfolio project.
