import './PesanStatus.css'

export default function PesanStatus({ jenis = 'info', pesan }) {
    if (!pesan) return null

    return (
        <div className={`pesan-status pesan-${jenis}`} role={jenis === 'error' ? 'alert' : 'status'}>
            {pesan}
        </div>
    )
}