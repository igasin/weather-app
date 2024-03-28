import { useState } from 'react'
import { searchWeather } from '../../services/searchWeather'
import { Loader } from '../loader/Loader'
import { WeatherData } from '../weatherdata/WeatherData'
import { IWeatherDataProps } from '../weatherdata/WeatherData.interface'
import { WeatherForm } from '../weatherform/WeatherForm'
import styles from './Weather.module.scss'

export const WeatherApp = () => {
	const [weatherData, setWeatherData] = useState<IWeatherDataProps | null>(null)

	const search = async (city: string) => {
		try {
			const data = await searchWeather(city)
			setWeatherData(data)
		} catch (error) {
			console.error('Error fetching weather data:', error)
		}
	}

	return (
		<div className={styles.container}>
			<WeatherForm onSearch={search} />
			{!weatherData && <Loader />}
			{weatherData && <WeatherData {...weatherData} />}
		</div>
	)
}
