import React from 'react'
import gambarMurli from '../assets/welcome.jpg'

const Beranda = () => {
  return (
    <div className="container-hash">
      <h1 className='textcenter'>Pemrograman Web Lanjut</h1>
      <h2 className='textcenter'>Tugas Individu 3</h2>
      <div className="left">
      <img className="image" src={gambarMurli} />
            <p>
                Saya adalah mahasiswa S1 Teknik Informatika ITERA.
                Saya adalah mahasiswa Institut Teknologi Sumatera Jurusan Teknik Informatika.
                Saya sangat menyukai teknologi dan suka belajar hal baru.
                Mampu bekerja dalam tim, berpikir kritis, dan berkomunikasi dengan baik adalah keahlian saya.
                Saya aktif di dalam organisasi yang dapat melatih dan mengembangkan keahlian berkomunikasi dan manajemen
                saya.
            </p>
        </div>
      
    </div>
  )
}

export default Beranda
