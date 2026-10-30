import './StatusBadge.css'

export default function StatusBadge({ teks }) {
    if (!teks) return null

    return (
        <span className="badge-kategori">
            {teks}
        </span>
    )
}