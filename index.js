const formatDate = (timeInSeconds) => {
	const hours = Math.floor(timeInSeconds/3600);
	const min = Math.floor((timeInSeconds % 3600) / 60);
	const sec = Math.floor(timeInSeconds % 3600) % 60;
	
	if (!timeInSeconds) {
		return '0s';
	} 
	if (timeInSeconds < 60) {
		return `${sec}s`;
	}
	if (timeInSeconds >= 60 && timeInSeconds < 3600) {
		if (sec === 0) {
			return `${min}m`;
		} else {
			return `${min}m ${sec}s`;
		}
	}
	 if (timeInSeconds >= 3600) {
	 	if ( min === 0 && sec === 0) {
			return `${hours}h`;
			} if ( min === 0) {
				return `${hours}h ${sec}s`;
			} if ( sec === 0) {
				return `${hours}h ${min}m`;
			} else {
				return `${hours}h ${min}m ${sec}s`;
			}
	}
	else {
		return '0s';
	}
}

module.exports = formatDate;