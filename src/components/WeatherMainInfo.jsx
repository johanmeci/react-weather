export default function WeatherMainInfo({weather}) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.icon} width="128" />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}</div>
        </div>
      </div>
      <iframe 
        title="mapa"
        src={`https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_MAPS_KEY}&center=${weather?.location.lat},${weather?.location.lon}&zoom=12`}
        width="600" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}