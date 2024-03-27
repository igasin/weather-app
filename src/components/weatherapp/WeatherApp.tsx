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
			</div>
		</div>
	)
}
