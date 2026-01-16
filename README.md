# Trupia Equipment

A professional web application for heavy equipment sales, rentals, and transportation logistics. This project is built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Home Page**: Modern hero section, featured inventory, and client testimonials.
- **Inventory System**: Browse heavy equipment with filtering and detailed specifications.
- **Service Pages**: Detailed information on Sales, Rentals, and Transportation.
- **Contact & Quotes**: Lead generation form that captures user interest.
- **Admin Dashboard**: A protected route (`/admin`) to view, manage, and delete incoming leads.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation & Local Development

1. **Clone or Download** the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 🚀 Deployment & Git Integration (Vercel)

If your Git repository is not showing up in Vercel, it usually means the local project hasn't been pushed to a remote provider (like GitHub) yet. Follow these steps:

### 1. Initialize Git (Locally)
Open your terminal in the project folder and run:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub
1. Go to [GitHub.com](https://github.com) and create a **New Repository**.
2. **Do not** initialize it with a README or .gitignore (since you have local files).
3. Copy the URL of your new repository.
4. Run these commands in your terminal (replace the URL with yours):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/trupia-equipment.git
   git branch -M main
   git push -u origin main
   ```

### 3. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New > Project**.
3. Select **Import Git Repository**.
4. If you don't see your repo, check the "Adjust GitHub App Permissions" link to ensure Vercel has access to your repositories.
5. Select your `trupia-equipment` repo and click **Import**.

---

## 🔐 Admin Access

To access the lead management dashboard:
1. Navigate to `/admin` (link located in the footer).
2. Enter the default password: `admin123`
