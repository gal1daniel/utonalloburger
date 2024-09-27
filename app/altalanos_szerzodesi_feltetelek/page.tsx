import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold my-12 text-center text-main-yellow">Általános Szerződési Feltételek</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">1. Általános rendelkezések</h2>
          <p>Jelen Általános Szerződési Feltételek (ÁSZF) szabályozzák az Útonálló Burger (üzemeltető: MORAL GASZTRO Kft.) és a vásárlók közötti jogviszonyt.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">2. A szolgáltatás leírása</h2>
          <p>Az Útonálló Burger ételeket kínál helyben fogyasztásra és elvitelre. Szolgáltatásaink részletes leírását megtalálja éttermünkben vagy kérdezze kollégáinkat.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">3. Árak és fizetés</h2>
          <p>Az árak magyar forintban értendők és tartalmazzák az ÁFÁ-t. Az árváltoztatás jogát fenntartjuk. A fizetési módokról éttermünkben tájékozódhat.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">4. Felelősség</h2>
          <p>Az Útonálló Burger mindent megtesz a minőségi szolgáltatás érdekében. Az esetleges panaszokat a vonatkozó jogszabályoknak megfelelően kezeljük.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">5. Kapcsolat</h2>
          <p>Kérdéseivel vagy észrevételeivel forduljon hozzánk bizalommal az alábbi elérhetőségeken:</p>
          <ul className="list-none">
            <li><strong>Telefonszám:</strong> +36 30 123 2390</li>
            <li><strong>Email:</strong> utonallo@utonalloburger.hu</li>
            <li><strong>Cím:</strong> Árpád út HSZ 523/10 Verőce 2621</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">6. Szerzői jogok</h2>
          <p>A weboldalunkon található tartalmak szerzői jogi védelem alatt állnak. Az oldalon használt képek meghatalmazás nélküli használata jogi következményekkel járhat.</p>
        </section>

        <p className="text-sm text-gray-300 mt-6">Utolsó frissítés: 2024.09.27.</p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;