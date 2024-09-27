import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold my-12 text-center text-main-yellow">Adatvédelmi Irányelvek</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">1. Bevezetés</h2>
          <p>Az Útonálló Burger tiszteletben tartja az Ön személyes adatait. Jelen Adatvédelmi irányelvek tájékoztatják Önt adatkezelési gyakorlatunkról.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">2. Adatgyűjtés és -felhasználás</h2>
          <p>Weboldalunk nem gyűjt személyes adatokat a látogatóktól. Nincs regisztráció, és nem használunk olyan technológiákat, amelyek személyes információkat gyűjtenének.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">3. Sütik (cookies)</h2>
          <p>Weboldalunk nem használ sütiket vagy más nyomkövető technológiákat.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">4. Harmadik felek</h2>
          <p>Weboldalunk nem tartalmaz harmadik felek által biztosított tartalmakat vagy szolgáltatásokat, amelyek adatokat gyűjthetnének.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-main-yellow">5. Kapcsolat</h2>
          <p>Adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk bizalommal az alábbi elérhetőségeken:</p>
          <ul className="list-none">
            <li><strong>Telefonszám:</strong> +36 30 123 2390</li>
            <li><strong>Email:</strong> utonallo@utonalloburger.hu</li>
            <li><strong>Cím:</strong> Árpád út HSZ 523/10 Verőce 2621</li>
          </ul>
        </section>

        <p className="text-sm text-gray-300 mt-6">Utolsó frissítés: 2024.09.27.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;