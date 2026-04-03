import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anasayfa from "./Ana_Sayfa/AnaSayfa";
import Saat_Ayarlama from "./Saat_Ayarlama_Sayfası/Saat_Ayarlama";
import Sesi_Ayarla from "./Sesi_Ayarlama_Sayfası/Sesi_Ayarla";
import Ayarlar from "./Ayarlar/Ayarlar";
import Gorev_Sec from "./Gorev_Sec_Sayfası/Gorev_Sec";
import Kapatma_Secenekleri from "./Kapatma_Sayfası/Kapatma_Secenekleri";
import Kodlari_Tara from "./Kodları_Tarama_Sayfası/Kodlari_Tara";
import Sagdaki_İkonlar  from "./Sagdaki_İkonlar/Sagdaki_İkonlar";
import Deneme from "./Deneme/Deneme";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/saat-ayarlama" element={<Saat_Ayarlama />} />
        <Route path="/ses-ayarlama" element={<Sesi_Ayarla />} />
        <Route path="/ayarlar" element={<Ayarlar />} />
        <Route path="/gorev-sec" element={<Gorev_Sec />} />
        <Route path="/Kapat"element={<Kapatma_Secenekleri />}/>
        <Route path="/tara"element={<Kodlari_Tara />}/>
        <Route path="/İKON"element={<Sagdaki_İkonlar />}/>
        <Route path="/DENEME"element={<Deneme />}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;