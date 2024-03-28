import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const Loader = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '260px',
				width: '370px',
			}}
		>
			<svg style={{ position: 'absolute', width: 0, height: 0 }}>
				<defs>
					<linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
						<stop offset='0%' stopColor='rgba(184, 74, 202, 1)' />
						<stop offset='100%' stopColor='rgba(142, 66, 235, 1)' />
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress
				size={150}
				sx={{
					position: 'relative',
					'svg circle': { stroke: 'url(#my_gradient)' },
				}}
			/>
		</Box>
	)
}
