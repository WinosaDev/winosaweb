export default function SectionMap() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-black">

        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Find Us
          </h2>
          <p className="text-black/60">
            Visit our office in Lampung or schedule a meeting.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-[32px] overflow-hidden border border-black/20 shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Bandar%20Lampung&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
