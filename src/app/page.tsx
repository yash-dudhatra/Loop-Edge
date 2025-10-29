'use client';

export default function Home() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stock Header Section */}
        <div className="rounded-lg shadow-md p-6 mb-8 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>GOOG</h1>
                <p className="text-sm" style={{ color: 'var(--light-color)' }}>Alphabet Inc.</p>
              </div>
              <button className="px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                + Follow
              </button>
            </div>
            <div className="text-right">
              <div className="text-green-500 text-lg font-semibold">↑ 7.09% (39.61)</div>
              <div className="text-3xl font-bold" style={{ color: 'var(--text-color)' }}>$1,788.40</div>
              <p className="text-sm" style={{ color: 'var(--light-color)' }}>Alphabet Inc. Class A Common Stock</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: 'var(--sp-bg-color)', height: '300px' }}>
            <div className="w-full h-full flex items-center justify-center border-2 border-dashed rounded" style={{ borderColor: 'var(--border-line)' }}>
              <p style={{ color: 'var(--light-color)' }}>Stock Chart Will Go Here</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b" style={{ borderColor: 'var(--border-line)' }}>
            <button className="pb-2 px-4 text-red-500 border-b-2 border-red-500 font-medium">
              🔴 Fundamentals
            </button>
            <button className="pb-2 px-4 hover:text-blue-500 transition-colors" style={{ color: 'var(--light-color)' }}>
              🔵 Insiders
            </button>
            <button className="pb-2 px-4 hover:text-orange-500 transition-colors" style={{ color: 'var(--light-color)' }}>
              🟠 Alerts
            </button>
            <button className="pb-2 px-4 hover:text-green-500 transition-colors" style={{ color: 'var(--light-color)' }}>
              🟢 Technicals
            </button>
          </div>
        </div>

        {/* Q3 2020 Section */}
        <div className="rounded-lg shadow-md p-6 mb-8 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--text-color)' }}>Q3 2020</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>TOTAL BUY</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>$499.9M</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>NET PURCHASE</p>
              <p className="text-2xl font-bold text-red-500">-$1.5M</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>TOTAL SOLD</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>$2B</p>
            </div>
          </div>

          {/* Who Bought / Who Sold */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: 'var(--text-color)' }}>WHO BOUGHT</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer" style={{ backgroundColor: 'var(--sp-bg-color)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--sp-bg-color)'}>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 font-semibold">+$2.2B</span>
                      <span className="text-sm text-green-500">(↑ 116.18%)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>Warren Buffett</p>
                        <p className="text-xs" style={{ color: 'var(--light-color)' }}>Berkshire Hathaway</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        WB
                      </div>
                    </div>
                    <span className="text-green-500">🟢</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: 'var(--text-color)' }}>WHO SOLD</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer" style={{ backgroundColor: 'var(--sp-bg-color)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--sp-bg-color)'}>
                    <span className="text-red-500">🔴</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        WB
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>Warren Buffett</p>
                        <p className="text-xs" style={{ color: 'var(--light-color)' }}>Berkshire Hathaway</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-red-500">(↓ 116.18%)</span>
                      <span className="text-red-500 font-semibold">$4.1B</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Q2 2020 Section */}
        <div className="rounded-lg shadow-md p-6 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--text-color)' }}>Q2 2020</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>TOTAL BUY</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>$499.9M</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>NET PURCHASE</p>
              <p className="text-2xl font-bold text-red-500">-$1.5M</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--sp-bg-color)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--light-color)' }}>TOTAL SOLD</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>$2B</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
