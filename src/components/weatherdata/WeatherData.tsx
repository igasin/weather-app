import { HumidityIcon, WindIcon } from '../../assets'
import { IWeatherDataProps } from './WeatherData.interface'
import styles from './WeatherData.module.scss'

export const WeatherData = ({
	humidity,
	wind,
	temperature,
	location,
	icon,
}: IWeatherDataProps) => {
	return (
		<>
			<div className={styles.weatherImage}>
				<img src={icon} alt='' />
			</div>
			<div className={styles.weatherTemperature}>{temperature}°</div>
			<div className={styles.weatherLocation}>{location}</div>
			<div className={styles.dataContainer}>
				<div className={styles.element}>
					<img src={HumidityIcon} alt='' className={styles.icon} />
					<div className={styles.data}>
						<div className={styles.humidityPercent}>{humidity} %</div>
						{/* <div className={styles.text}>Humidity</div> */}
					</div>
				</div>
				<div className={styles.element}>
					<img src={WindIcon} alt='' className={styles.icon} />
					<div className={styles.data}>
						<div className={styles.windRate}>{wind} km/h</div>
						{/* <div className={styles.text}>Wind</div> */}
					</div>
				</div>
			</div>
		</>
	)
}
