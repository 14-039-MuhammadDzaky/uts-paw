import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, test } from 'vitest'
import App from './App.jsx'
import StatusBadge from './components/StatusBadge.jsx'
import PesanStatus from './components/PesanStatus.jsx'

describe('Pengujian UTS PAW Poin F1 dan F2', () => {
  it('1. Memastikan PesanStatus dirender dengan atribut role="status"', () => {
    render(
      <PesanStatus pesan="data berhasil disimpan" tipe="info" />
    );
    const statusBox = screen.getByRole('status');
    expect(statusBox).toBeInTheDocument();
  });

  it('2. Memastikan elemen header/banner utama muncul', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const headerEl = container.querySelector('header');
    expect(headerEl).toBeInTheDocument();
  });

  it('3. Memastikan menu navigasi utama dirender', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('4. Memastikan aplikasi merender elemen utama atau tautan di halaman', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('5. Memestikan footer aplikasi dirender', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

}
);
