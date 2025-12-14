# Student Interest Guide (Malaysia)

> **StudentMU** — Everything University Doesn't Teach You

A Notion-style, minimalist directory built for Gen Z students in Malaysia. Covers **Skills**, **Finance**, and **Lifestyle** topics that matter beyond the classroom.

---

## 🎯 Mission

Provide Malaysian university students with a curated, bilingual guide to:
- **Skills** that matter beyond graduation
- **Finance** (investing, side hustles, money management)
- **Lifestyle** experiences (study cafes, campus life hacks)
- **Survival Guide** essentials for navigating university

Unlike traditional educational resources, this platform focuses on **practical, real-world knowledge** students actually need but rarely get taught.

---

## 🛠️ Tech Stack (The "Rules")

This project is built with modern web technologies optimized for performance and developer experience:

| Technology | Purpose |
|------------|---------|
| **Next.js 16** (App Router) | React framework with file-based routing |
| **TypeScript** | Type-safe JavaScript for better DX |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Shadcn UI** | Accessible component library built on Radix UI |
| **React 19** | Latest React with improved rendering |
| **Lucide React** | Icon library for clean, consistent icons |

---

## 📁 Project Structure

```
mu-student/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with global providers
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles and Tailwind config
│   ├── about/
│   │   └── page.tsx              # About page
│   └── lifestyle/
│       └── study-cafes/
│           └── page.tsx          # Study cafes directory
│
├── components/                   # React components
│   ├── data/
│   │   └── cafes.ts              # Cafe data (JSON-like structure)
│   ├── layout/
│   │   ├── Navbar.tsx            # Global navigation bar
│   │   └── Footer.tsx            # Global footer
│   ├── ui/                       # Shadcn UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── tabs.tsx
│   ├── Hero.tsx                  # Homepage hero section
│   ├── Trending.tsx              # Trending topics carousel
│   ├── Directory.tsx             # Main directory pillars
│   └── LanguageToggle.tsx        # EN/CN language switcher
│
├── contexts/
│   └── LanguageContext.tsx       # Global language state management
│
├── data/
│   └── data.ts                   # Central data source (TypeScript)
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── og.png                    # Open Graph image
│
└── package.json                  # Dependencies and scripts
```

### 📦 Key Directory Roles

- **`app/`**: Next.js 16 App Router pages. Each folder represents a route.
- **`components/`**: Reusable React components organized by purpose.
- **`data/`**: Single source of truth for content (JSON-based TypeScript exports).
- **`contexts/`**: React Context providers (currently language state).
- **`lib/`**: Helper utilities and shared functions.
- **`public/`**: Static files served at the root URL.

### 🗂️ Data-Driven Architecture

All content is managed through **TypeScript data files** (`data/data.ts`, `components/data/cafes.ts`). This approach:

✅ Enables bilingual content (EN/CN) with type safety  
✅ Makes it easy to add/edit content without touching UI code  
✅ Allows AI assistants to understand and modify content quickly  
✅ Provides autocomplete and IntelliSense for content editors

---

## ✨ Key Features Implemented

### 1. **Bilingual Support (EN/CN)**
- Toggle between English and Chinese using the language switcher in the navbar
- Language state managed globally via React Context (`LanguageContext`)
- All content has both `title`/`titleCN` and `description`/`descriptionCN` variants

### 2. **Data-Driven UI**
- Content is separated from presentation
- Components map through JSON-like TypeScript data structures
- Easy to add new trending topics, directory pillars, or cafe listings

### 3. **Global Layout**
- Sticky navigation bar with language toggle
- Consistent footer across all pages
- Minimum height design ensures footer stays at bottom

### 4. **Modular Components**
- Built with Shadcn UI for consistency and accessibility
- Responsive design using Tailwind CSS
- Glassmorphism effects and modern aesthetics throughout

---

## 📄 Current Pages

| Route | Description |
|-------|-------------|
| `/` | **Home**: Hero section + Trending topics + Directory pillars |
| `/about` | **About**: Information about the platform and mission |
| `/lifestyle/study-cafes` | **Study Cafes**: Curated list of student-friendly cafes in KL/PJ/Subang with WiFi, plugs, and no-pressure environments |

### 🚧 Planned Pages

- `/skills` - Future-proofing skills and tools
- `/finance` - Money management, investing, side hustles
- `/campus` - Campus life hacks and survival tips

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ and **npm**

### Installation

1. **Clone the repository** (if applicable) or navigate to the project folder:
   ```bash
   cd mu-student
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Build production bundle |
| `npm start` | Start production server (requires `npm run build` first) |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 Design Philosophy

This project follows a **Notion-style minimalist** design approach:

- **Clean typography** using Geist Sans and Geist Mono fonts
- **Muted color palette** with subtle gradients
- **Generous whitespace** for readability
- **Card-based layouts** for content organization
- **Smooth interactions** with hover states and transitions

### Color Scheme
- Background: Light neutral tones
- Text: High contrast for accessibility
- Accents: Subtle purple and orange gradients
- Cards: Glassmorphism effects with backdrop blur

---

## 🤖 AI Assistant Notes

When working with this codebase:

1. **Content Updates**: Edit `data/data.ts` or `components/data/cafes.ts` for content changes
2. **New Pages**: Create folders in `app/` following Next.js App Router conventions
3. **New Components**: Add to `components/` with proper TypeScript types
4. **Styling**: Use Tailwind utility classes; avoid inline styles
5. **Bilingual**: Always provide both English and Chinese variants for new content
6. **Type Safety**: Define interfaces for all data structures (see `data/data.ts`)

### Common Tasks

**Adding a new trending topic:**
```typescript
// In data/data.ts, add to trendingCards array:
{
  id: 7,
  title: "Your English Title",
  titleCN: "你的中文标题",
  tag: "Skills", // or Finance, Lifestyle, etc.
  description: "English description",
  descriptionCN: "中文描述",
  link: "/your-page-route" // optional
}
```

**Creating a new page:**
```bash
# Create folder in app/
mkdir -p app/your-route
# Create page.tsx inside
touch app/your-route/page.tsx
```

---

## 📝 Contributing

This project is designed for rapid iteration. When adding features:

1. Keep data separate from UI components
2. Maintain bilingual support for all user-facing content
3. Follow existing component patterns (see `components/` folder)
4. Test responsiveness on mobile, tablet, and desktop
5. Ensure type safety (TypeScript strict mode enabled)

---

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive (iOS Safari, Android Chrome)
- Optimized for Next.js 16 server and client components

---

## 📜 License

Private project for educational purposes.

---

## 🔗 Live Site

Deployed at: [https://3kpurpleorange.xyz](https://3kpurpleorange.xyz)

---

**Built with 💜 for Malaysian students by students.**
