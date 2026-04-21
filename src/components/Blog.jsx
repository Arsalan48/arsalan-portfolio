import './Blog.css'

const post = {
  title: 'How to Build an AI Portfolio Website — A Simple Guide for Beginners',
  date: 'April 21, 2026',
  readTime: '8 min read',
  steps: [
    {
      number: '01',
      title: 'Setting Up Your React Project with Vite',
      why: 'React lets you build websites by breaking them into small, reusable pieces called components — like Lego bricks. Vite is the tool that makes React run super fast on your computer while you are building.',
      content: `Open your terminal (the black window where you type commands) and run this:

npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm run dev

After these commands, open your browser and go to http://localhost:5173 — you should see a demo page. That's your app running live! Every time you save a file, the browser updates automatically. Pretty cool, right?`,
    },
    {
      number: '02',
      title: 'Using Claude Code as Your AI Coding Assistant',
      why: 'Writing code from scratch can feel overwhelming. Claude Code is an AI assistant that lives in your terminal and helps you write, fix, and understand code. Think of it as a really smart friend who knows how to code and is always available.',
      content: `Install Claude Code by running:

npm install -g @anthropic-ai/claude-code

Then start it inside your project folder:

claude

Now you can just describe what you want in plain English, like "create a navbar with links to About, Skills, and Contact" — and Claude Code will write the code for you. You can also ask it to explain any part of the code you don't understand.`,
    },
    {
      number: '03',
      title: 'Creating Separate Components',
      why: 'Imagine writing your entire portfolio as one giant file — it would be a mess! Components keep things organized. Each section of your website (Navbar, Hero, About, Skills, Projects, Contact) lives in its own file, making it easy to find and change things.',
      content: `Inside the src/components/ folder, create these files:

• Navbar.jsx — the top navigation bar with links
• Hero.jsx — the big introduction section at the top of the page
• About.jsx — a section about who you are
• Skills.jsx — your technical skills listed out
• Projects.jsx — your projects with descriptions
• Contact.jsx — a way for people to reach you

Each file will look something like this:

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hi! I'm a developer who loves building things.</p>
    </section>
  )
}

Then import and use them all in App.jsx. Ask Claude Code to help you style each one!`,
    },
    {
      number: '04',
      title: 'Setting Up a Node.js and Express Backend Server',
      why: 'Your React app runs in the browser — but you cannot put secret things like API keys in the browser because anyone could see them. A backend server runs on a computer (not in the browser), keeps your secrets safe, and handles communication with external services like the AI.',
      content: `Create a new folder called server/ in your project. Inside it, run:

npm init -y
npm install express cors dotenv

Then create server.js:

import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})

app.listen(5000, () => console.log('Server on port 5000'))

Run it with node server.js — your backend is now alive on http://localhost:5000.`,
    },
    {
      number: '05',
      title: 'Getting a Claude API Key from Anthropic',
      why: 'To use Claude AI in your website, you need a special password called an API key. It tells Anthropic\'s servers "hey, this request is coming from me" so they can charge the right account. Keep this key secret — never share it or put it in your React code.',
      content: `Here's how to get your key:

1. Go to console.anthropic.com and create a free account
2. Click on "API Keys" in the left sidebar
3. Click "Create Key" and give it a name like "my-portfolio"
4. Copy the key — it starts with sk-ant-...
5. In your server/ folder, create a file called .env and add:

ANTHROPIC_API_KEY=sk-ant-your-key-here

The .env file keeps your key out of your code. Make sure to add .env to your .gitignore file so you never accidentally upload it to GitHub!`,
    },
    {
      number: '06',
      title: 'Integrating the AI Chatbot into Your Website',
      why: 'A chatbot makes your portfolio interactive. Visitors can ask it questions about you — your skills, projects, experience — and get instant answers. It makes your portfolio stand out from everyone else\'s.',
      content: `In your server.js, add this chat endpoint:

import Anthropic from '@anthropic-ai/sdk'
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

app.post('/api/chat', async (req, res) => {
  const { message } = req.body
  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: 'You are an assistant for MY NAME's portfolio. Answer questions about them helpfully.',
    messages: [{ role: 'user', content: message }],
  })
  res.json({ reply: response.content[0].text })
})

Then in your React app, create a Chatbot.jsx component with a text input. When the user types a message and hits send, use fetch() to call http://localhost:5000/api/chat and display the reply. Claude Code can write all of this for you!`,
    },
    {
      number: '07',
      title: 'Deploying Frontend on Vercel and Backend on Render',
      why: 'Right now your website only works on your own computer. Deploying means putting it on the internet so anyone in the world can visit it. Vercel is perfect for React apps and Render is great for Node.js servers — both have free tiers.',
      content: `Deploying the frontend to Vercel:
1. Push your project to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click "New Project" and select your repository
4. Click Deploy — Vercel handles the rest!

Deploying the backend to Render:
1. Go to render.com and create an account
2. Click "New Web Service" and connect your GitHub repo
3. Set the root directory to server/
4. Set the start command to node server.js
5. Add your ANTHROPIC_API_KEY as an environment variable in Render's dashboard
6. Click Deploy

Once both are deployed, update your React app's fetch URL from http://localhost:5000 to your Render backend URL (like https://my-portfolio-api.onrender.com).`,
    },
    {
      number: '08',
      title: 'Adding a Custom Domain',
      why: 'A custom domain like yourname.dev looks way more professional than a long random URL. It tells employers and clients that you are serious about your work. Domains are usually cheap — around $10-15 per year.',
      content: `Here's how to connect a custom domain on Vercel:

1. Buy a domain from Namecheap or Google Domains (search for .dev domains — they're cool for developers!)
2. In your Vercel project, go to Settings → Domains
3. Type in your domain name and click Add
4. Vercel will show you DNS records to add — copy them
5. Go to your domain registrar (where you bought the domain) and add those DNS records
6. Wait a few minutes — and your portfolio is live at yourname.dev!

Pro tip: Also connect your custom domain to your Render backend if you want a clean API URL like api.yourname.dev.`,
    },
  ],
}

export default function Blog() {
  return (
    <main className="blog-page">
      <div className="blog-inner">
        <div className="blog-back-area">
          <span className="blog-tag">Tutorial</span>
        </div>

        <header className="blog-header">
          <h1 className="blog-title">{post.title}</h1>
          <div className="blog-meta">
            <span>{post.date}</span>
            <span className="blog-meta-dot" />
            <span>{post.readTime}</span>
          </div>
          <p className="blog-intro">
            Hey there! Have you ever wanted to build your own portfolio website but felt like coding was too
            hard? Good news — with the right tools, it is actually pretty fun! In this guide, I will walk
            you through every step to build a portfolio site with a real AI chatbot built in. No experience
            needed. Let's go!
          </p>
        </header>

        <div className="blog-steps">
          {post.steps.map((step) => (
            <article className="blog-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-body">
                <h2 className="step-title">{step.title}</h2>
                <div className="step-why">
                  <span className="why-label">Why this matters:</span> {step.why}
                </div>
                <pre className="step-content">{step.content}</pre>
              </div>
            </article>
          ))}
        </div>

        <footer className="blog-footer">
          <p>
            You did it! You just learned how to build a professional portfolio with an AI chatbot, deploy it
            to the internet, and give it a custom domain. That is seriously impressive. Keep building, keep
            learning, and remember — every expert was once a beginner. You've got this!
          </p>
        </footer>
      </div>
    </main>
  )
}
