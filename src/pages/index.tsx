export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Chogan Webshop</h1>
            <div className="space-x-4">
              <button className="text-gray-600 hover:text-gray-900">الدخول</button>
              <button className="text-gray-600 hover:text-gray-900">Login</button>
              <button className="text-gray-600 hover:text-gray-900">Logga in</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Chogan Webshop</h2>
          <p className="text-xl mb-8">Premium beauty and wellness products</p>
          <button className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg">
            Start Shopping
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your orders delivered quickly</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Multiple payment options available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Customer support always available</p>
          </div>
        </section>
      </main>
    </div>
  );
}
