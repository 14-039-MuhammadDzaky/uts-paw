import useKoleksi from "../hooks/useKoleksi";
import './Statistik.css'

export default function Statistik() {
    const { items, loading } = useKoleksi()

    if (loading) return <p>Memuat data Statistik...</p>


    const daftarItems = items || []

    const perKategori = daftarItems.reduce((hitung, { kategori }) => ({
        ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1
    }), {})

    return (
        <section>
            <h1>Statistik</h1>
            <div className="tabel-gulir">
                <table className="tabel-data">
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(perKategori).map(([kategori, jumlah]) => (
                            <tr key={kategori}>
                                <td>{kategori}</td>
                                <td>{jumlah}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <td>{daftarItems.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}