import React from "react";

export type Snippet = { title: string; language?: string; code: string };

export type Topic = {
  key: string;
  title: string;
  category: string;
  summary: string;
  snippets?: Snippet[];
  body?: React.ReactNode;
};

export const topicsData: Topic[] = [
  // -----------------------------
  // 🧩 SETUP & ESSENTIALS
  // -----------------------------
  {
    key: "setup-laptop",
    category: "Setup & Essentials",
    title: "New Laptop Setup",
    summary:
      "Basic setup checklist for a new developer environment — Node, Git, VS Code, and essential tools.",
    snippets: [
      {
        title: "Install essentials (macOS)",
        language: "bash",
        code: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node git
brew install --cask visual-studio-code
node -v
npm -v
git --version`,
      },
      {
        title: "Configure Git identity",
        language: "bash",
        code: `git config --global user.name "Vida Ghorbannezhad"
git config --global user.email "vida@example.com"
gh auth login   # log in to GitHub CLI`,
      },
    ],
  },
  {
    key: "ssh-keys",
    category: "Setup & Essentials",
    title: "SSH Keys Setup",
    summary: "Generate and connect SSH keys to GitHub for secure access.",
    snippets: [
      {
        title: "Generate and add SSH key",
        language: "bash",
        code: `ssh-keygen -t rsa -b 4096 -C "vida@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
pbcopy < ~/.ssh/id_rsa.pub   # copy the key to clipboard`,
      },
      {
        title: "GitHub Settings",
        language: "text",
        code: `Go to GitHub → Settings → SSH and GPG keys → New SSH key → Paste and Save.`,
      },
    ],
  },

  // -----------------------------
  // 🌿 GIT & BRANCHING
  // -----------------------------
  {
    key: "create-branch",
    category: "Git & Branching",
    title: "Create and Push a Branch",
    summary:
      "Create a feature branch, commit changes, and push to GitHub for the first time.",
    snippets: [
      {
        title: "Branch flow",
        language: "bash",
        code: `git checkout -b feat/new-component
git add .
git commit -m "feat: add new component"
git push -u origin feat/new-component`,
      },
    ],
  },
  {
    key: "update-branch",
    category: "Git & Branching",
    title: "Keep Branch Up to Date (Rebase or Merge)",
    summary:
      "Sync your branch with main. Rebase keeps history clean, while merge is safer for shared work.",
    snippets: [
      {
        title: "Rebase (clean history)",
        language: "bash",
        code: `git fetch origin
git checkout feat/new-component
git rebase origin/main
git push --force-with-lease`,
      },
      {
        title: "Merge (if branch is shared)",
        language: "bash",
        code: `git fetch origin
git checkout feat/new-component
git merge origin/main
git push`,
      },
    ],
  },
  {
    key: "resolve-conflicts",
    category: "Git & Branching",
    title: "Resolve Merge or Rebase Conflicts",
    summary:
      "When Git shows conflict markers, fix the code manually, then continue the rebase or merge.",
    snippets: [
      {
        title: "Conflict resolution flow",
        language: "bash",
        code: `# In files, look for <<<<<<< HEAD ... ======= ... >>>>>>>
git add .
git rebase --continue   # or git merge --continue`,
      },
      {
        title: "Abort if needed",
        language: "bash",
        code: `git rebase --abort   # cancels ongoing rebase`,
      },
    ],
  },
  {
    key: "undo-mistake",
    category: "Git & Branching",
    title: "Undo or Fix a Mistake",
    summary: "Undo commits safely or recover deleted branches.",
    snippets: [
      {
        title: "Undo last commit",
        language: "bash",
        code: `git reset --soft HEAD~1   # keep changes
git reset --hard HEAD~1   # discard changes`,
      },
      {
        title: "Recover deleted branch",
        language: "bash",
        code: `git reflog
git checkout -b mybranch HEAD@{2}`,
      },
    ],
  },

  // -----------------------------
  // 🧠 DEVELOPMENT WORKFLOW
  // -----------------------------
  {
    key: "code-review",
    category: "Development Workflow",
    title: "Code Review Checklist",
    summary: "Follow these checks before submitting or approving a pull request.",
    body: (
      `<ul style={{ lineHeight: 1.7 }} >
        <li>✅ Code runs and passes tests</li>
        <li>✅ No console logs or commented code</li>
        <li>✅ Clear and descriptive variable names</li>
        <li>✅ Modular, reusable, and follows DRY</li>
        <li>✅ PR < 400 lines if possible</li>
      </ul>`
    ),
  },
  {
    key: "run-project",
    category: "Development Workflow",
    title: "Run Project Locally",
    summary: "Install dependencies and start your app in local development mode.",
    snippets: [
      {
        title: "Basic setup",
        language: "bash",
        code: `npm install
npm run dev
# open http://localhost:5173`,
      },
    ],
  },
  {
    key: "fix-dependencies",
    category: "Development Workflow",
    title: "Fix Dependency Issues",
    summary: "Clean node_modules and reinstall packages to resolve common errors.",
    snippets: [
      {
        title: "Clean install",
        language: "bash",
        code: `rm -rf node_modules
rm package-lock.json
npm install`,
      },
    ],
  },
  {
    key: "env-variables",
    category: "Development Workflow",
    title: "Add .env Variables (for Secrets or API Keys)",
    summary: "Use environment variables to securely store sensitive keys.",
    snippets: [
      {
        title: ".env file",
        language: "bash",
        code: `VITE_API_URL=https://api.example.com
VITE_OPENAI_KEY=sk-xxxxxx`,
      },
      {
        title: "Access in code",
        language: "js",
        code: `const apiUrl = import.meta.env.VITE_API_URL;`,
      },
    ],
  },

  // -----------------------------
  // 🚀 DEPLOYMENT
  // -----------------------------
  {
    key: "deploy-vercel",
    category: "Deployment",
    title: "Deploy to Vercel",
    summary:
      "Build and deploy your Vite + React project to Vercel for free with GitHub integration.",
    snippets: [
      {
        title: "Local build check",
        language: "bash",
        code: `npm run build
npx serve dist`,
      },
      {
        title: "Vercel settings",
        language: "text",
        code: `Framework: Vite
Build Command: npm run build
Output Directory: dist`,
      },
    ],
  },
  {
    key: "deploy-render",
    category: "Deployment",
    title: "Deploy to Render",
    summary: "Quick static hosting setup on Render.",
    snippets: [
      {
        title: "Render build",
        language: "text",
        code: `Build Command: npm install && npm run build
Publish Directory: dist`,
      },
    ],
  },
  {
    key: "vite-errors",
    category: "Deployment",
    title: "Common Vite Deployment Issues",
    summary:
      "Fix missing assets, wrong paths, or CSS import issues when deploying to Vercel/Render.",
    snippets: [
      {
        title: "Example error",
        language: "text",
        code: `error during build:
Could not resolve "./CodeBlock.css" from "src/components/CodeBlock.tsx"`,
      },
      {
        title: "Fix",
        language: "bash",
        code: `# Make sure file exists
# and the import path is correct
# ✅ Example:
import "./CodeBlock.css";`,
      },
    ],
  },

  // -----------------------------
  // 🧰 TROUBLESHOOTING
  // -----------------------------
  {
    key: "clean-build",
    category: "Troubleshooting",
    title: "Clean Build & Cache",
    summary: "Fix weird build errors by resetting cache and rebuilding from scratch.",
    snippets: [
      {
        title: "Reset everything",
        language: "bash",
        code: `rm -rf node_modules dist .vite
npm install
npm run build`,
      },
    ],
  },
  {
    key: "vscode-setup",
    category: "Troubleshooting",
    title: "VS Code Setup",
    summary:
      "Recommended extensions and settings for a smooth development experience.",
    snippets: [
      {
        title: "Recommended extensions",
        language: "text",
        code: `- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens`,
      },
      {
        title: "VS Code settings",
        language: "json",
        code: `{
  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange"
}`,
      },
    ],
  },
  {
    key: "git-commands",
    category: "Troubleshooting",
    title: "Common Git Commands Reference",
    summary: "Quick table of essential Git commands for daily use.",
    snippets: [
      {
        title: "Git quick reference",
        language: "bash",
        code: `git branch                  # view branches
git log --oneline --graph    # view commit history
git branch -m new-name       # rename branch
git branch -d old-name       # delete local branch
git push origin --delete old-name`,
      },
    ],
  },
];
