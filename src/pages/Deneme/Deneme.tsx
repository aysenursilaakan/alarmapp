import React, { useState } from "react";

const Deneme = () => {
  const [ad, setad] = useState("ismaili çok seviyorum");
  const vatandas = [
    { id: 1, ad: "Ayşenur Sıla", soyad: "Akan", yas: 22 },
    { id: 2, ad: "İsmail", soyad: "Tekin", yas: 24 },
    { id: 3, ad: "Ahmet", soyad: "Yılmaz", yas: 30 },
    { id: 4, ad: "Mehmet", soyad: "Kaya", yas: 28 },
    { id: 5, ad: "Ayşe", soyad: "Demir", yas: 26 },
    { id: 6, ad: "Fatma", soyad: "Çelik", yas: 35 },
    { id: 7, ad: "Ali", soyad: "Şahin", yas: 27 },
    { id: 8, ad: "Zeynep", soyad: "Koç", yas: 23 },
    { id: 9, ad: "Burak", soyad: "Aydın", yas: 29 },
    { id: 10, ad: "Elif", soyad: "Arslan", yas: 31 },
  ];

  return (
    <div>
      <div>
        <p>
          {vatandas[0].ad} {vatandas[0].soyad} {vatandas[0].yas}{" "}
        </p>
      </div>
    </div>
    // <div>
    //   {vatandas.map((vatandas) => (
    //     <div key={vatandas.id}>
    //       <p>
    //         {vatandas.ad} {vatandas.soyad} {vatandas.yas}{" "}
    //       </p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Deneme;
