# Kanban Board Application

A collaborative Kanban board built with Next.js, featuring real-time updates and Vercel Edge Config for data storage.

## Features

- 🏗️ **Multi-column Kanban Board** - Organize tasks across different development stages
- 🔄 **Real-time Updates** - Changes sync automatically across all users via polling
- 🎯 **Drag & Drop** - Intuitive task management with @dnd-kit
- ☁️ **Vercel Edge Config** - Global data storage with low-latency access
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Drag & Drop**: @dnd-kit
- **Data Storage**: Vercel Edge Config
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Vercel Edge Config connection string
EDGE_CONFIG=your_edge_config_connection_string_here
```

## Deployment to Vercel

### 1. Set up Vercel Edge Config

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to your project (or create a new one)
3. Go to Storage → Edge Config
4. Create a new Edge Config store
5. Copy the connection string

### 2. Deploy the Application

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the `EDGE_CONFIG` environment variable in Vercel project settings
4. Deploy!

### 3. Alternative: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add EDGE_CONFIG
```

## Board Structure

The application includes 7 columns for a typical development workflow:

1. **Widgets to design** - Features ready for design
2. **Widgets ready for SAF development** - Ready for frontend development
3. **Widgets in SAF development** - Currently in frontend development
4. **Widgets ready for JavaScript development** - Ready for backend development
5. **Widgets in JavaScript development** - Currently in backend development
6. **Widgets ready for deployment** - Ready for production deployment
7. **Widgets in deployment** - Currently being deployed

## API Endpoints

- `GET /api/board` - Fetch current board state
- `POST /api/board` - Update board state

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
