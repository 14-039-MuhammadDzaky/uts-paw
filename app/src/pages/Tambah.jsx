import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const awal = {
    judul: '',
    kategori: 'web',
    teknologi: '',
    tahun: new Date().getFullYear().toString(),
    tautan: ''
}

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(awal)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()

        if (!form.judul || form.judul.trim().length < 3) {
            setGalat('Judul wajib diisi minimal 3 karakter')
            return
        }

        setGalat('')
        tambah({
            judul: form.judul.trim(),
            kategori: form.kategori || "Web",
            teknologi: form.teknologi || "",
            tahun: form.tahun || new Date().getFullYear().toString(),
            tautan: form.tautan || "https://web.com"
        })
        navigate('/koleksi')
    }

    return (
        <form className='formulir' onSubmit={simpan} noValidate>
            <h1>Tambah Proyek</h1>

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} placeholder='Nama Proyek' />
            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah} >
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="desain">Desain</option>
                <option value="data">Data</option>
            </select>

            <label htmlFor="teknologi"> Teknologi</label>
            <input id="teknologi" name="teknologi" value={form.teknologi} onChange={ubah} placeholder='Contoh React,laravel dan tailwind CSS' />

            <label htmlFor="tahun">Tahun</label>
            <input id="tahun" name="tahun" type="number" value={form.tahun} onChange={ubah} placeholder="2023" />

            <label htmlFor="tautan">Tautan</label>
            <input id="tautan" name="tautan" type="url" value={form.tautan} onChange={ubah} placeholder="https;//..." />

            <button type="submit">Simpan</button>
        </form>
    )
} 