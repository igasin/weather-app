import cloud_icon from '../../assets/cloud.png'
import search_icon from '../../assets/search.png'
import styles from './Weather.module.scss'

export const WeatherApp = () => {
	return (
		<div className={styles.container}>
			<div className={styles.topBar}>
				<input
					type='text'
					className={styles.cityInput}
					placeholder='Search city'
				/>
				<div className={styles.searchIcon}>
					<img src={search_icon} alt='' />
				</div>
				<div className={styles.weatherImage}>
					<img src={cloud_icon} alt='' />
				</div>
				<div className={styles.weatherTemperature}>24°</div>
				<div className={styles.weatherLocation}>London</div>
			</div>
		</div>
	)
}
