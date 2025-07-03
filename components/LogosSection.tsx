export default function LogosSection() {
  const logos = [
    { name: 'net\'s', url: '/api/placeholder/120/40' },
    { name: 'deco', url: '/api/placeholder/120/40' },
    { name: 'shinebit', url: '/api/placeholder/120/40' },
    { name: 'SAKRA', url: '/api/placeholder/120/40' },
    { name: 'Cyberium', url: '/api/placeholder/120/40' },
    { name: 'OMIT', url: '/api/placeholder/120/40' }
  ]
  
  return (
    <section className="relative py-12 bg-white overflow-visible">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          デザインの力を活用して事業成長を実現された企業様です。
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo.url} alt={logo.name} className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}