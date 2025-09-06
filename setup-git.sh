#!/bin/bash

# Neon Rain Shopify Theme - Git Setup Script
# This script initializes the Git repository and sets up the initial commit

echo "🚀 Setting up Neon Rain Shopify Theme for GitHub..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git repository
echo "📁 Initializing Git repository..."
git init

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Neon Rain Shopify Theme with chapter navigation

- Added cyberpunk-inspired page design
- Implemented chapter-based navigation system
- Added progressive unlocking functionality
- Created admin panel for chapter management
- Set up CI/CD pipeline with GitHub Actions
- Added comprehensive testing and linting
- Included documentation and contribution guidelines"

# Set up branch protection reminder
echo "⚠️  Remember to:"
echo "   1. Create repository on GitHub"
echo "   2. Add remote origin: git remote add origin https://github.com/yourusername/neon-rain-shopify-theme.git"
echo "   3. Push to GitHub: git push -u origin main"
echo "   4. Set up branch protection rules"
echo "   5. Configure GitHub Secrets for CI/CD"

echo "✅ Git repository initialized successfully!"
echo "📚 Check GITHUB_SETUP.md for detailed instructions."

