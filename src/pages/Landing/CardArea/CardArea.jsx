import React from 'react';
import './CardArea.css'
import HomeCard from './HomeCard/HomeCard'

const CardArea = () => {
	return (
		<div className="card-area">
			<HomeCard 
				text="Organize your projects and chapters"
				icon="perm_medias"
			/>
			<HomeCard 
				text="Design branching narratives"
				icon="device_hub"
			/>
			<HomeCard 
				text="Create elaborate dialogue"
				icon="record_voice_over"
			/>
			<HomeCard 
				text="Construct elaborate characters"
				icon="supervisor_account"
			/>
			<HomeCard 
				text="Store your notes and inspiration"
				icon="image_search"
			/>
			<HomeCard 
				text="Export to Word and Google docs"
				icon="get_app"
			/>
		</div>
	)
}

export default CardArea;