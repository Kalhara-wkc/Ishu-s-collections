import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <TopBar />
      <Header />
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center min-h-[50vh]">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">Track Order</h1>
        <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-10"></div>
        <p className="text-lg text-text-primary/70 max-w-2xl mx-auto">
          Track your recent orders here. (Coming Soon)
        </p>
      </main>
      <Footer />
    </div>
  );
}
