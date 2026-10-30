import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const MENU = [
    { ke: '/', label: 'Beranda' },
    { ke: '/koleksi', label: 'Koleksi' },
    { ke: '/tambah', label: 'Tambah' },
    { ke: '/statistik', label: 'Statistik' },
    { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
    return (
        <div className="kerangka">
            <header className="kepala" id="kepala-utama">
                <strong>Daftar Tugas</strong>
                <nav className="menu">
                    {MENU.map(({ ke, label }) => (
                        <NavLink key={ke} to={ke} end={ke === '/'}>
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </header>
            <main className="isi" id="isi-utama">
                <Outlet />
            </main>
            <footer className="kaki" id="kaki-utama"><strong>Ujian Tengah Semester Pengembangan Aplikasi Web</strong></footer>
        </div>
    )
}