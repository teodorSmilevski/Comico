export default function Location() {
  return (
    <section className="container mx-auto text-center my-8">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
        Find Us Here
      </h3>
      <iframe
        className="w-full h-64 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24078.619157545952!2d21.3299733!3d41.02903205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1357251c004b1797%3A0x238c9445a1424717!2sIT%20and%20Communications%20Faculty!5e0!3m2!1sen!2smk!4v1731068931427!5m2!1sen!2smk"
        title="Comic Store Location"
        allowFullScreen
      ></iframe>
      <p className="mt-4">
        Our store is located in the heart of the city, ready to serve all comic
        enthusiasts.
      </p>
    </section>
  );
}
