# Tulsi - Architecture and House Renovation Services

Tulsi is a web application that provides a range of services related to wall paneling, wall painting, false ceilings, wallpapers, and flooring. The platform offers a streamlined experience for users to explore and engage with Tulsi's professional services.

## 🚀 Features
- Wall Panel Services
- Wall Painting Solutions
- False Ceiling Installations
- Wallpaper Design and Application
- Flooring Services
- Responsive and User-friendly UI
- Smooth Navigation with Component-based Architecture

## 🛠️ Tech Stack
- **Frontend & Backend:** Next.js
- **Styling:** Tailwind CSS
- **Database:** Prisma with PostgreSQL
- **Language:** TypeScript

## 📂 Directory Structure
```
abhiraunak-tulsi/
├── README.md
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .hintrc
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── falsecelling/
│   │   └── page.tsx
│   ├── flooring/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── wallpaint/
│   │   └── page.tsx
│   ├── wallpanel/
│   │   └── page.tsx
│   └── wallpaper/
│       └── page.tsx
├── components/
│   ├── Appbar.tsx
│   ├── ContainerScroll.tsx
│   ├── Faq.tsx
│   ├── Footer.tsx
│   ├── ProductBetween.tsx
│   ├── ProductDescription.tsx
│   ├── ServiceBlock.tsx
│   ├── Slider.tsx
│   ├── Testonomial.tsx
│   ├── WorkPortfolio.tsx
│   ├── WorkService.tsx
│   ├── image.tsx
│   └── ui/
│       ├── contain all the basic UI component like button card etc
├── lib/
│   └── utils.ts
├── prisma/
│   └── schema.prisma
└── public/
└── Wallpanels/
```

## 🚧 Installation
1. **Clone the Repository:**
```sh
git clone https://github.com/yourusername/abhiraunak-tulsi.git
cd abhiraunak-tulsi
```

2. **Install Dependencies:**
```sh
npm install
```

3. **Setup Environment Variables:**
Create a `.env` file in the root directory and add the necessary environment variables.

4. **Run Development Server:**
```sh
npm run dev
```
The app will be available at `http://localhost:3000`.

## ⚙️ Build for Production
```sh
npm run build
npm start
```

### 🎨 Crafted by Abhishek

