import React from 'react';
import './NotImplemented.css'

const NotImplemented = () => {
	return (
		<div className="not-implemented">
			<div className="text-area">
				<div className="apology">
					Sorry!
				</div>
				<div className="explanation">
					This feature is not implented yet. We are currently in v0, but have plans to implement this in the future, so check back often!
				</div>
			</div>
			<img src="https://chpic.su/_data/stickers/p/pappy_fox/pappy_fox_036.webp" alt="sad fox"/>
			
		</div>
	)
}

export default NotImplemented;