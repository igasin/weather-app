import axios from 'axios'
import {
	WEATHER_API_ICON_URL,
	WEATHER_API_KEY,
	WEATHER_API_URL,
} from '../constants'

export const searchWeather = async (city: string) => {
	try {
		const response = await axios.get(
			`${WEATHER_API_URL}?q=${city}&units=Metric&appid=${WEATHER_API_KEY}`
		)

		const data = response.data
		const iconUrl = `${WEATHER_API_ICON_URL}` + data.weather[0].icon + '@4x.png'
		console.log(iconUrl)
		return {
			humidity: data.main.humidity,
			wind: data.wind.speed,
			temperature: data.main.temp.toFixed(1),
			location: data.name,
			icon: iconUrl,
		}
	} catch (error) {
		console.error('Error fetching weather data:', error)
		throw error
	}
}
