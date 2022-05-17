export default function WeatherMainInfo({weather}) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.icon} width="128" />
        </div>
      </div>
    </div>
  );
}