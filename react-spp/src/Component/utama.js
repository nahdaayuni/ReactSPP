import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./beranda";
import DataSiswa from "./datasiswa";
import DataKelas from "./datakelas";
import DataPetugas from "./datapetugas";
import DataPembayaran from "./datapembayaran";
import DataSpp from "./dataspp";
import HistoriPembayaran from "./historipembayaran";
import Logout from "./logout";

const utama = () => (
  <Routes>
    <Route exact path="/" element={<Beranda />} />
    <Route path="/datasiswa" element={<DataSiswa />} />
    <Route path="/datakelas" element={<DataKelas />} />
    <Route path="/datapetugas" element={<DataPetugas />} />
    <Route path="/datapembayaran" element={<DataPembayaran />} />
    <Route path="/dataspp" element={<DataSpp />} />
    <Route path="/historipembayaran" element={<HistoriPembayaran />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
);

export default utama;
