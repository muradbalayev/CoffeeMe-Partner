import Balance from '../../components/Balance';

const MapPage = () => {
  return (
    <div className="wrapper wallet pb-8">
      <header className="header gap-4">
        <h1 className="header-title">Map</h1>
        <Balance />
      </header>
      <main className='mt-10 px-4 h-full'>
        <iframe
          className='rounded-2xl outline-none mx-auto'
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.344128883124!2d49.86709271555909!3d40.40926137936527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d37a3e05111%3A0x64d06ea7d23c0508!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1695730575247!5m2!1sen!2s"
          width="95%"
          height="95%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </main>
    </div>
  );
}

export default MapPage;
