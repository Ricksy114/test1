export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">

      {/* Navigation Menu */}
      <nav className="bg-gray-950 shadow-lg border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-400">⚔️ War Thunder Tanks</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tier1" className="text-gray-300 hover:text-yellow-400 transition">Tier I</a>
              <a href="#tier2" className="text-gray-300 hover:text-yellow-400 transition">Tier II</a>
              <a href="#tier3" className="text-gray-300 hover:text-yellow-400 transition">Tier III</a>
              <a href="#tier4" className="text-gray-300 hover:text-yellow-400 transition">Tier IV</a>
              <a href="#tier5" className="text-gray-300 hover:text-yellow-400 transition">Tier V</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            🛡️ War Thunder Tank Guide
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            A complete overview of ground forces from Tier I to Tier V
          </p>
          <p className="text-base text-gray-500">
            Battle Ratings 1.0 – 8.3 · Early WWII to Cold War MBTs
          </p>
        </div>

        {/* Tier I */}
        <section id="tier1" className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">🔰 Tier I — BR 1.0 to 2.3</h2>
          <p className="text-gray-400 mb-6 italic">Pre-WWII and Early WWII tanks. Light armor, small guns — but fast and fun to learn the basics.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · Light Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Pz.Kpfw. II</h3>
              <p className="text-sm text-gray-400 mb-3">Fast autocannon tank. Great for flanking and destroying open-top vehicles.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 20mm KwK 30</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 14mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 40 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Use speed to flank enemies. Your autocannon shreds lightly armored targets.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇷🇺 USSR · Light Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">T-26</h3>
              <p className="text-sm text-gray-400 mb-3">Reliable Soviet starter tank with a punchy 45mm gun for its tier.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 45mm 20K</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 15mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 30 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Excellent gun for the BR. Aim at crew compartments for quick kills.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇺🇸 USA · Light Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">M2A4</h3>
              <p className="text-sm text-gray-400 mb-3">Early American light tank. Fast and mobile with decent firepower.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 37mm M5</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 25mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 42 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Flanking is your best strategy. Stay moving to avoid return fire.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇯🇵 Japan · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Chi-Ha</h3>
              <p className="text-sm text-gray-400 mb-3">Japanese medium tank with a low-velocity gun. Effective at close range.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 57mm Type 97</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 25mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 38 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Low-velocity gun works best up close. Stay mobile and engage at short range.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Tier II */}
        <section id="tier2" className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-2">⚙️ Tier II — BR 2.3 to 3.7</h2>
          <p className="text-gray-400 mb-6 italic">Mid-WWII. Tanks grow thicker and hit harder. Knowing your ammo types becomes critical.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Pz.Kpfw. IV F1</h3>
              <p className="text-sm text-gray-400 mb-3">Short 75mm gun with good HEAT rounds for punching above its weight.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 75mm KwK 37</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 50mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 42 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Use HEAT rounds against heavily armored foes. Ideal in urban close-quarters combat.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇷🇺 USSR · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">T-34 (1940)</h3>
              <p className="text-sm text-gray-400 mb-3">Sloped armor and surprising speed make this the backbone of the Soviet line.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 76mm L-11</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 45mm sloped</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 54 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Sloped armor gives more effective protection than raw numbers suggest. Use your speed aggressively.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇺🇸 USA · Light Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">M3 Stuart</h3>
              <p className="text-sm text-gray-400 mb-3">One of the fastest tanks at its BR. Built for scouting and point capturing.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 37mm M6</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 38mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 58 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Scout, flank, and cap points. You are not built to brawl — use your superior speed.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇬🇧 UK · Infantry Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Valentine Mk I</h3>
              <p className="text-sm text-gray-400 mb-3">Excellent frontal armor for its tier. Very slow but hard to penetrate head-on.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 40mm QF 2-pdr</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 60mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 24 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">You are slow — pick a snipe spot and let enemies come to you. Your armor will hold.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Tier III */}
        <section id="tier3" className="mb-16">
          <h2 className="text-3xl font-bold text-orange-400 mb-2">🔥 Tier III — BR 3.7 to 5.3</h2>
          <p className="text-gray-400 mb-6 italic">Late WWII. Iconic machines — Tiger, Sherman, T-34/85. Positioning and crew protection are everything.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · Heavy Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Tiger H1</h3>
              <p className="text-sm text-gray-400 mb-3">The legendary Tiger. 88mm gun one-shots most targets. Feared by every nation.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 88mm KwK 36</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 100mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 38 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Angle your hull slightly to bounce shots. Your 88 can frontally penetrate almost anything.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇷🇺 USSR · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">T-34-85</h3>
              <p className="text-sm text-gray-400 mb-3">Upgraded T-34 with an 85mm gun. Versatile and deadly in the right hands.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 85mm ZiS-S-53</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 45mm sloped</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 54 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Aim for the driver port on Tigers. Can hull-down effectively with good turret angles.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇺🇸 USA · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">M4A3E8 Sherman</h3>
              <p className="text-sm text-gray-400 mb-3">The Easy Eight Sherman. Reliable, fast, and armed with a strong 76mm gun.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 76mm M1A2</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 63mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 42 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Use HVAP rounds to penetrate heavy targets. Well-rounded and easy to play at this BR.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Panther D</h3>
              <p className="text-sm text-gray-400 mb-3">Long-barrel 75mm makes this a deadly long-range sniper. Sloped frontal armor.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 75mm KwK 42</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 80mm sloped</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 44 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Keep your distance and use your superior gun range. Weak side armor — never get flanked.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Tier IV */}
        <section id="tier4" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-2">🧊 Tier IV — BR 5.3 to 7.0</h2>
          <p className="text-gray-400 mb-6 italic">End of WWII and Early Cold War. Stabilizers and APDS rounds start appearing. The game gets faster.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇷🇺 USSR · Heavy Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">IS-2</h3>
              <p className="text-sm text-gray-400 mb-3">Massive 122mm cannon. One shot from this ends the fight — but the reload is very slow.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 122mm D-25T</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 120mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 37 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Long reload means every shot must count. Never expose yourself while reloading.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇺🇸 USA · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">M26 Pershing</h3>
              <p className="text-sm text-gray-400 mb-3">Well-rounded Cold War transitioner. Solid armor and a capable 90mm gun.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 90mm M3</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 102mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 40 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Use HVAP to punch through thick armor. Very flexible — good for both offense and defense.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇬🇧 UK · Medium Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Centurion Mk.1</h3>
              <p className="text-sm text-gray-400 mb-3">The 17-pounder gun absolutely shreds. Perfect for hull-down sniping from ridgelines.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 17-pdr QF</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 76mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 35 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Find a ridge, go hull-down, and destroy anything that peeks out. The 17-pdr is brutal.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · Heavy Tank</p>
              <h3 className="text-xl font-bold text-white mb-1">Tiger II (H)</h3>
              <p className="text-sm text-gray-400 mb-3">The King Tiger. Near-impenetrable frontal armor and a deadly long 88mm gun.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 88mm KwK 43</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 185mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 38 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Defend chokepoints head-on. Your frontal armor is almost impossible to penetrate from range.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Tier V */}
        <section id="tier5" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-2">🚀 Tier V — BR 7.0 to 8.3</h2>
          <p className="text-gray-400 mb-6 italic">Cold War MBTs. Laser rangefinders, composite armor, and stabilizers. One mistake and you are done.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇷🇺 USSR · MBT</p>
              <h3 className="text-xl font-bold text-white mb-1">T-54 (1951)</h3>
              <p className="text-sm text-gray-400 mb-3">Heavily sloped armor and a powerful 100mm gun. The king of mid-Cold War battles.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 100mm D-10T2S</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 200mm sloped</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 48 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Angled properly, your hull bounces nearly everything. Pair this with aggressive pushes.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇺🇸 USA · MBT</p>
              <h3 className="text-xl font-bold text-white mb-1">M60</h3>
              <p className="text-sm text-gray-400 mb-3">American Cold War MBT with a strong 105mm gun. Vulnerable lower plate.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 105mm M68</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 120mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 48 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Hull-down is essential. Your turret is strong but your lower front plate is a weak spot.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇩🇪 Germany · MBT</p>
              <h3 className="text-xl font-bold text-white mb-1">Leopard 1</h3>
              <p className="text-sm text-gray-400 mb-3">Speed is its armor. One of the fastest MBTs in the game — built for flanking.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 105mm L7A3</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 70mm</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 65 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">Never stop moving — your thin armor cannot take a hit. First shot wins every engagement.</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">🇬🇧 UK · MBT</p>
              <h3 className="text-xl font-bold text-white mb-1">Chieftain Mk.3</h3>
              <p className="text-sm text-gray-400 mb-3">Most powerful gun at its tier. Strong turret for hull-down dominance. Slow speed.</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">🔫 <span className="font-medium">Gun:</span> 120mm L11A5</p>
                <p className="text-gray-300">🛡️ <span className="font-medium">Armor:</span> 388mm mantlet</p>
                <p className="text-gray-300">💨 <span className="font-medium">Speed:</span> 43 km/h</p>
              </div>
              <div className="mt-4 bg-gray-900 rounded p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-1">💡 Commander Tip</p>
                <p className="text-xs text-gray-400">The strongest gun at this BR. Find a ridge, go hull-down, and dominate the field.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Tier Summary Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">📊 Tier Summary</h2>
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-900 text-gray-400 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Tier</th>
                  <th className="px-6 py-4">Battle Rating</th>
                  <th className="px-6 py-4">Era</th>
                  <th className="px-6 py-4">Playstyle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-bold text-yellow-400">Tier I</td>
                  <td className="px-6 py-4 text-gray-300">1.0 – 2.3</td>
                  <td className="px-6 py-4 text-gray-300">Pre / Early WWII</td>
                  <td className="px-6 py-4 text-gray-400">Speed and flanking</td>
                </tr>
                <tr className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-bold text-green-400">Tier II</td>
                  <td className="px-6 py-4 text-gray-300">2.3 – 3.7</td>
                  <td className="px-6 py-4 text-gray-300">Mid WWII</td>
                  <td className="px-6 py-4 text-gray-400">Ammo selection matters</td>
                </tr>
                <tr className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-bold text-orange-400">Tier III</td>
                  <td className="px-6 py-4 text-gray-300">3.7 – 5.3</td>
                  <td className="px-6 py-4 text-gray-300">Late WWII</td>
                  <td className="px-6 py-4 text-gray-400">Positioning is survival</td>
                </tr>
                <tr className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-bold text-blue-400">Tier IV</td>
                  <td className="px-6 py-4 text-gray-300">5.3 – 7.0</td>
                  <td className="px-6 py-4 text-gray-300">Early Cold War</td>
                  <td className="px-6 py-4 text-gray-400">Stabilizers and APDS</td>
                </tr>
                <tr className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-bold text-purple-400">Tier V</td>
                  <td className="px-6 py-4 text-gray-300">7.0 – 8.3</td>
                  <td className="px-6 py-4 text-gray-300">Cold War MBTs</td>
                  <td className="px-6 py-4 text-gray-400">Precision and awareness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-300">⚔️ War Thunder Ground Forces Tank Guide</p>
          <p className="text-sm text-gray-500 mt-2">Built with Next.js and Tailwind CSS · Tiers I – V · BR 1.0 to 8.3</p>
        </div>
      </footer>

    </div>
  );
}
