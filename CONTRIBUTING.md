# Contributing to Neon Rain Shopify Theme

Thank you for your interest in contributing to the Neon Rain Shopify Theme! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+
- Shopify CLI
- Git
- A Shopify development store

### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/neon-rain-shopify-theme.git`
3. Install dependencies: `npm install`
4. Set up Shopify CLI: `shopify login`
5. Create a development theme: `shopify theme dev`

## 📝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Include detailed steps to reproduce
- Provide screenshots if applicable
- Specify browser and device information

### Suggesting Features
- Open a new issue with the "enhancement" label
- Describe the feature and its benefits
- Consider the project's scope and goals

### Code Contributions
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Commit with descriptive messages
7. Push to your fork
8. Create a pull request

## 🎨 Development Guidelines

### Code Style
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Liquid Templates
- Use semantic HTML
- Follow Shopify's Liquid best practices
- Include proper error handling
- Optimize for performance

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow the established color palette
- Ensure responsive design
- Test across different devices

### JavaScript
- Use modern ES6+ features
- Handle errors gracefully
- Optimize for performance
- Add proper event listeners

## 🧪 Testing

### Manual Testing
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile and desktop devices
- Verify all interactive elements work
- Check for accessibility issues

### Automated Testing
- Run `npm test` for unit tests
- Run `npm run lint` for code quality
- Run `npm run format` for code formatting

## 📋 Pull Request Process

1. **Fork and Clone**: Fork the repo and clone your fork
2. **Create Branch**: Create a feature branch from `main`
3. **Make Changes**: Implement your changes
4. **Test**: Ensure all tests pass
5. **Commit**: Use descriptive commit messages
6. **Push**: Push to your fork
7. **Pull Request**: Create a PR with a clear description

### PR Requirements
- Clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure all checks pass
- Request review from maintainers

## 🏗️ Project Structure

```
neon-rain-shopify-theme/
├── templates/           # Shopify page templates
├── sections/           # Reusable theme sections
├── snippets/           # Reusable code snippets
├── assets/             # CSS, JS, images
├── config/             # Theme configuration
├── locales/            # Translation files
└── tests/              # Test files
```

## 🎯 Areas for Contribution

### High Priority
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness
- Cross-browser compatibility

### Medium Priority
- New chapter features
- Admin panel enhancements
- Analytics improvements
- Documentation updates

### Low Priority
- Code refactoring
- Test coverage
- Code comments
- Style improvements

## 🐛 Bug Reports

When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, device, OS
- **Screenshots**: Visual evidence if applicable

## 💡 Feature Requests

When suggesting features:
- **Use Case**: Describe the problem it solves
- **Proposed Solution**: How it should work
- **Alternatives**: Other solutions considered
- **Additional Context**: Any other relevant information

## 📞 Support

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: Contact the maintainers directly

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Neon Rain! 🚀

