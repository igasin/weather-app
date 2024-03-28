import { useState } from 'react'
import humidity_icon from '../../assets/humidity.png'
import search_icon from '../../assets/search.png'
import wind_icon from '../../assets/wind.png'
import styles from './Weather.module.scss'

export const WeatherApp = () => {
	const OPENWEATHERMAP_API_KEY = 'd48cd88a49b1128f4207663139c352fb'

	const [city, setCity] = useState('')

	const [weatherData, setWeatherData] = useState({
		humidity: '',
		wind: '',
		temperature: '',
		location: '',
		icon: '',
	})

	const search = async () => {
		if (city === '') {
			return
		}

		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${OPENWEATHERMAP_API_KEY}`

		const response = await fetch(URL)
		const data = await response.json()

		const iconUrl =
			'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'

		setWeatherData({
			humidity: data.main.humidity,
			wind: data.wind.speed,
			temperature: data.main.temp.toFixed(1),
			location: data.name,
			icon: iconUrl,
		})
	}

	return (
		<div className={styles.container}>
			<div className={styles.topBar}>
				<input
					type='text'
					className={styles.cityInput}
					placeholder='Search city'
					onChange={e => setCity(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && search()}
				/>
				<div className={styles.searchIcon} onClick={search}>
					<img src={search_icon} alt='' />
				</div>
				<div />
			</div>
			<div className={styles.weatherImage}>
				<img src={weatherData.icon} alt='' />
			</div>
			<div className={styles.weatherTemperature}>
				{weatherData.temperature}°
			</div>
			<div className={styles.weatherLocation}>{weatherData.location}</div>
			<div className={styles.dataContainer}>
				<div className={styles.element}>
					<img src={humidity_icon} alt='' className={styles.icon} />
					<div className={styles.data}>
						<div className={styles.humidityPercent}>
							{weatherData.humidity} %
						</div>
						{/* <div className={styles.text}>Humidity</div> */}
					</div>
				</div>
				<div className={styles.element}>
					<img src={wind_icon} alt='' className={styles.icon} />
					<div className={styles.data}>
						<div className={styles.windRate}>{weatherData.wind} km/h</div>
						{/* <div className={styles.text}>Wind</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
