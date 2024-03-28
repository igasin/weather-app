import { useState } from 'react'
import { SearchIcon } from '../../assets'
import { IWeatherFormProps } from './WeatherForm.interface'
import styles from './WeatherForm.module.scss'

export const WeatherForm = ({ onSearch }: IWeatherFormProps) => {
	const [city, setCity] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCity(e.target.value)
	}

	const handleSearch = () => {
		if (city.trim() !== '') {
			onSearch(city)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	return (
		<div className={styles.topBar}>
			<input
				type='text'
				className={styles.cityInput}
				placeholder='Search city'
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			<div className={styles.searchIcon} onClick={handleSearch}>
				<img src={SearchIcon} alt='Search' />
			</div>
			<div />
		</div>
	)
}
