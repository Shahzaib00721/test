export default function Testimonials() {
  const testimonials = Array(5).fill({
    name: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    stars: 5,
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-tr from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">What Clients Say!</h2>
        <p className="text-gray-600 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl  p-4 w-[260px] h-[180px] flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 border-2 border-orange-500 rounded-full"></div>
                <h3 className="text-sm font-semibold">{t.name}</h3>
              </div>
              <p className="text-gray-700 text-xs leading-snug">
                {t.text}
              </p>
              <div className="text-orange-500 text-sm mt-2">
                {'★'.repeat(t.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


<main>
  
</main>