# Spotify Widgets

Beautiful Spotify-inspired widgets with modern design, featuring now playing, top tracks, and recently played visualizations.

![Spotify Widgets Preview](https://lovable.dev/opengraph-image-p98pqg.png)

## ✨ Features

- **Now Playing Widget**: Interactive music player with album art, playback controls, and live visualizer
- **Top Tracks**: Display your most-played tracks with play counts
- **Recently Played**: Showcase your recent listening history
- **Modern Design**: Glass morphism effects, smooth animations, and Spotify's signature green accent
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices

## 🎨 Design System

The app uses a carefully crafted design system inspired by Spotify:
- **Colors**: Spotify green (#1DB954) with dark theme
- **Effects**: Glass morphism, glow effects, and smooth transitions
- **Animations**: Slide-up entrances, pulse effects, and equalizer visualizer
- **Typography**: Modern, clean font hierarchy

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🛠️ Built With

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn UI components
│   ├── NowPlaying.tsx  # Now playing widget
│   ├── TopTracks.tsx   # Top tracks widget
│   └── RecentlyPlayed.tsx # Recently played widget
├── pages/              # Page components
│   └── Index.tsx       # Main page
├── assets/             # Images and static files
├── index.css           # Global styles and design system
└── App.tsx             # App entry point
```

## 🎯 Customization

### Design System

All design tokens are defined in `src/index.css`. You can customize:
- Colors (primary, secondary, accent)
- Gradients
- Shadows and glow effects
- Animation timings

### Widgets

Each widget is a self-contained component in the `src/components/` directory. You can:
- Modify the data structure
- Add new features
- Customize animations
- Integrate with Spotify API

## 📱 Responsive Design

The widgets automatically adapt to different screen sizes:
- **Desktop**: Full layout with side-by-side widgets
- **Tablet**: Optimized grid layout
- **Mobile**: Stacked vertical layout

## 🚀 Deployment

### Using Lovable

1. Click the **Publish** button in the top right
2. Your app will be deployed to a Lovable subdomain
3. Optional: Connect a custom domain in Project > Settings > Domains

### Manual Deployment

Build the project:
```bash
npm run build
```

The `dist` folder contains the production-ready files that can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 🔗 Links

- [Project URL](https://lovable.dev/projects/9198118d-ef6e-4e73-b381-a31213e79d88)
- [Documentation](https://docs.lovable.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 💡 Future Enhancements

- Integration with Spotify Web API
- User authentication
- Playlist management
- Custom themes
- Export widgets as embeddable components

---

Made with ❤️ using [Lovable](https://lovable.dev)
