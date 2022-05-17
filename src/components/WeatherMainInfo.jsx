import styles from "../styles/WeatherMainInfo.module.css";

export default function WeatherMainInfo({weather}) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.icon} width="128" />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>{weather?.current.condition.text}</div>
          <div className={styles.current}>{weather?.current.temp_c}</div>
        </div>
      </div>
      <iframe 
        title="mapa"
        src={`https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_MAPS_KEY}&center=${weather?.location.lat},${weather?.location.lon}&zoom=12`}
        width="100%" 
        height="450" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}