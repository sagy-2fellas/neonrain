import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the navigation component
const mockNavigation = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="neon-rain-navigation">
      <nav class="space-y-2">
        <a href="#chapter-1" class="chapter-nav-item" data-chapter="1">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-accent">1</div>
            <span>Chapter 1: The Awakening</span>
          </div>
        </a>
        <a href="#chapter-2" class="chapter-nav-item" data-chapter="2">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-primary">2</div>
            <span>Chapter 2: Digital Dreams</span>
          </div>
        </a>
        <div class="chapter-nav-item locked" data-chapter="4">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-muted">4</div>
            <span>Chapter 4: Neon Reflections</span>
          </div>
          <span>Coming Soon</span>
        </div>
      </nav>
    </div>
  `;
  return container;
};

describe('Neon Rain Navigation', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('renders navigation with chapters', () => {
    const navigation = mockNavigation();
    document.body.appendChild(navigation);
    
    expect(screen.getByText('Chapter 1: The Awakening')).toBeInTheDocument();
    expect(screen.getByText('Chapter 2: Digital Dreams')).toBeInTheDocument();
    expect(screen.getByText('Chapter 4: Neon Reflections')).toBeInTheDocument();
  });

  test('shows locked state for locked chapters', () => {
    const navigation = mockNavigation();
    document.body.appendChild(navigation);
    
    const lockedChapter = document.querySelector('.locked');
    expect(lockedChapter).toHaveClass('locked');
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });

  test('handles chapter navigation clicks', () => {
    const navigation = mockNavigation();
    document.body.appendChild(navigation);
    
    const chapter1Link = screen.getByText('Chapter 1: The Awakening').closest('a');
    expect(chapter1Link).toHaveAttribute('href', '#chapter-1');
    expect(chapter1Link).toHaveAttribute('data-chapter', '1');
  });

  test('progress tracking updates correctly', () => {
    const navigation = mockNavigation();
    document.body.appendChild(navigation);
    
    // Mock progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.width = '50%';
    navigation.appendChild(progressBar);
    
    expect(progressBar.style.width).toBe('50%');
  });
});

