import React, { useState } from 'react'

const Kontak = () => {
  const [inputData, setInputData] = useState({
    email: "",
    pesan: "",
    sudahKenal: false,
  });
  const handleInputChange = (e ) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const [jumlahPesan, setJumlahPesan] = useState(0);

  const handleJumlahPesan = (e) => {
    e.preventDefault();
    setJumlahPesan(jumlahPesan + 1);
  };

  return (
    <div className="container-hash">
      <h1 className='textcenter'>Kontak Saya</h1>
        <div class="left">
            <p>
          Nama Saya : MURLIANA <br/>
          Prodi : Teknik Informatika <br/>
          No. Telp : 085789102976 <br/>
          Email : murliana.120140076@student.itera.ac.id <br/>
          Alamat : Panjang Selatan Bandar Lampung
            </p>
      </div>    
    <h3>#hubungi saya</h3>
    <div className="container-contact">

        <form >
            <input type="text" name="email" onChange={handleInputChange} value={inputData.email} placeholder="Email anda"/> <br/><br/>
            <textarea name="pesan" onChange={handleInputChange} value={inputData.pesan} placeholder="Pesan.." maxlength="500"></textarea>
            <br/>
            <button type="submit" value="Submit" onClick={handleJumlahPesan}> Kirim </button>
                    </form>
    </div>
      <p>
        Jumlah Pesan : {jumlahPesan}
      </p>
      <br />
      <p>
        Email : {inputData.email}
      </p>
      <br />
      <p>
        Pesan : {inputData.pesan}
      </p>
    </div>
  )
}

export default Kontak
