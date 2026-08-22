import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <TopBar />
      <Header />
      <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left min-h-[50vh]">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-primary">Terms of Service</h1>
        <div className="w-24 h-[2px] bg-accent-gold mb-10"></div>
        <div className="text-lg text-text-primary/70 max-w-4xl space-y-4">
          <p>These are the terms of service for Ishu&apos;s Collections.</p>
          <p>(Content Coming Soon)</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
