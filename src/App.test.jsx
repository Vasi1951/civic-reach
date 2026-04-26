import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Mock the nested 3D components as they shouldn't block unit tests
vi.mock('./components/ElectionJourney', () => ({
  default: () => <div data-testid="election-journey-mock">Mocked 3D Journey</div>
}));

describe('CivicReach Application Tests', () => {
  describe('Navbar Component', () => {
    it('should render brand and navigation links securely', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/Civic/i)).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    });

    it('should have no accessibility violations in Navbar', async () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Home Page', () => {
    it('should display the core educational sections', async () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      
      expect(screen.getByRole('heading', { level: 2, name: /Registration/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /The Ballot/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /The Results/i })).toBeInTheDocument();
      await screen.findByTestId('election-journey-mock');
    });

    it('should have no accessibility violations in Home Page', async () => {
      // Mock IntersectionObserver/ResizeObserver often used by Three.js
      window.ResizeObserver = class ResizeObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
      };

      const { container } = render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      await screen.findByTestId('election-journey-mock');
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
