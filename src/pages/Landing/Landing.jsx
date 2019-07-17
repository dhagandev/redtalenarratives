import React from 'react';
import './Landing.css'
import CardArea from './CardArea/CardArea'

const Landing = () => {
	return (
		<div className="landing-page">
			<div className="landing-area">
				<div className="landing-intro">at RedTale you can...</div>
				<CardArea />
			</div>
			<div className="intro-area">
				<img src="https://imgur.com/0W7X6Lt.png" className="portal-img" alt="user portal display"/>
				<div className="intro-text">
					TEXT HERE ABOUT HOW THE SITE IS/WHY IT WAS MADE
				</div>
			</div>
			<div className="video-area">
				<div className="learn-more-text">
					Want to learn more? Check this video out!
				</div>
				<img src="https://images.drivereasy.com/wp-content/uploads/2017/10/this-video-is-not-available-1.jpg" alt="to be replaced with youtube video"/>
				<div className="join-us">
					Click Login to join us!
				</div>
			</div>
		</div>
	)
}

export default Landing;