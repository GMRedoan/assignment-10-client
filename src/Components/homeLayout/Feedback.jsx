import React from "react";

const Feedback = () => {
  return (
    <section className="py-15 bg-base-200">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold text-neutral">
          Loved by Hundreds of <span className="text-primary">Happy Clients</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="card bg-base-100 shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            Professionalism that matches the highest executive standards.
          </h3>

          <p className="text-base text-neutral/70">
            As someone who deals with high-level clients daily, I recognize
            quality immediately. The team behind Rent Wheel delivers not just
            comfort, but confidence.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/7JpJp0H3/premium-photo-1689530775582-83b8abdb5020.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">Michael R.</p>
              <p className="text-neutral/60 text-sm">New York</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            It felt less like renting, more like being chauffeured by my own staff.
          </h3>

          <p className="text-base text-neutral/70">
            There’s a distinct difference between premium and personal, and this
            service blends both. The attention to my preferences was impressive.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/pBSDqf6n/istockphoto-2172873491-612x612.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">Nadine V.</p>
              <p className="text-neutral/60 text-sm">Monaco</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            A service that truly respects my time.
          </h3>

          <p className="text-base text-neutral/70">
            Every minute matters in my schedule — and Rent Wheel understood that.
            The car arrived early, the driver was attentive, and the
            ride felt like my own moving sanctuary.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/yny4Jhw1/istockphoto-2063799507-612x612.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">Darius K.</p>
              <p className="text-neutral/60 text-sm">Dubai</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-16 text-neutral/70">
        Real stories from satisfied travelers and VIP clients.
      </p>
    </section>
  );
};

export default Feedback;
