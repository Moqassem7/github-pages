export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          International Business Student at Saxion | Focused on Digital Growth & Strategy
        </h1>
        <p className="text-lg text-gray-700">Mohamed Qassem</p>
      </header>

      <section className="max-w-3xl mx-auto text-center">
        <img
          src="/image.png"
          alt="Mohamed Qassem"
          className="rounded-2xl shadow-lg mx-auto mb-6 w-64 h-auto"
        />
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-md text-gray-600 leading-relaxed">
          Passionate about marketing, customer experience, and business development. I focus on
          lead generation, branding, and digital strategy to connect businesses with the right
          audiences cross-borders. I’m eager to enhance my skills in SEO while optimizing customer
          journeys.
        </p>
        <p className="text-md text-gray-600 leading-relaxed mt-4">
          Currently pursuing a Bachelor’s in International Business at Saxion University.
        </p>
      </section>
    </div>
  );
}
