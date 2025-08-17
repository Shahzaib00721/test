
   
  
   export default function AvaronSection() {
 
      
      
    
  return (
    
   
  
      
    <div className="min-h-screen bg-white text-center px-4 py-12 space-y-12">
      <div className="hidden md:flex gap-6">

          
          
        </div>
       {/* About (anchor) */}
      <section  className="scroll-mt-24 w-full max-w-6xl px-4 mt-20">
       
        
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">But why should it be us<br />building your Avaron</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
      </div>

      
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4">Other</h3>
          <div className="bg-black text-white rounded-lg p-6 space-y-2">
            {Array(5).fill().map((_, i) => (
              <p key={i}>Lorem ipsum dolor sit amet</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#F9804B]">Avaron</h3>
          <div className="bg-[#F9804B] text-white rounded-lg p-6 space-y-2">
            {Array(5).fill().map((_, i) => (
              <p key={i}>Lorem ipsum dolor sit amet</p>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Let's build it, shall we?</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>

        <form className="space-y-4">
          {['Name', 'Email', 'Phone', 'Budget (USD)'].map((label) => (
            <div key={label} className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type="text"
                className="w-full rounded-md bg-gray-800 text-white p-3 focus:outline-none"
              />
            </div>
          ))}

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Project</label>
            <textarea
              rows={4}
              className="w-full rounded-md bg-gray-800 text-white p-3 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F9804B] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
          >
            Submit Your Request
          </button>
        </form>
        
      </div>
         </section>
    </div>
    
   
  );
  

}

