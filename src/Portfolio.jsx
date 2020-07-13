import React from 'react';
import './style/Portfolio.css';
import { Card, CardColumns } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			html: true,
			css: true,
			javascript: true,
			reactjs: true,
			bootstrap: true,
			nodejs: true,
			mongodb: true
		};
	}
	setHtml = () => {
		this.setState((state) => {
			return {
				html: state.html === true ? false : true
			};
		});
	};
	setCss = () => {
		this.setState((state) => {
			return {
				css: state.css === true ? false : true
			};
		});
	};
	setJavascript = () => {
		this.setState((state) => {
			return {
				javascript: state.javascript === true ? false : true
			};
		});
	};
	setReactjs = () => {
		this.setState((state) => {
			return {
				reactjs: state.reactjs === true ? false : true
			};
		});
	};
	setBootstrap = () => {
		this.setState((state) => {
			return {
				bootstrap: state.bootstrap === true ? false : true
			};
		});
	};
	setNodejs = () => {
		this.setState((state) => {
			return {
				nodejs: state.nodejs === true ? false : true
			};
		});
	};
	setMongodb = () => {
		this.setState((state) => {
			return {
				mongodb: state.mongodb === true ? false : true
			};
		});
	};
	render() {
		if (this.props.page === 'Portfolio') {
			return (
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{(style) => (
						<div style={style} id="Portfolio">
							<div id="labels">
								<button
									className="skill-tag"
									style={
										this.state.html ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setHtml}
								>
									<b>HTML</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.css ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setCss}
								>
									<b>CSS</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.javascript ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setJavascript}
								>
									<b>JavaScript</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.reactjs ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setReactjs}
								>
									<b>React.js</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.bootstrap ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setBootstrap}
								>
									<b>Bootstrap</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.nodejs ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setNodejs}
								>
									<b>Node.js</b>
								</button>
								<button
									className="skill-tag"
									style={
										this.state.mongodb ? (
											{ backroundColor: 'white' }
										) : (
											{ backgroundColor: 'rgba(255,255,255,0.7)' }
										)
									}
									onClick={this.setMongodb}
								>
									<b>Mongodb</b>
								</button>
							</div>
							<CardColumns>
								{/* drum machine */}
								{this.state.reactjs || this.state.bootstrap ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/react-js-drummachine.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="">
													<a href="https://codepen.io/gerardcsaperas/pen/mdeGNJO">
														Drum Machine
													</a>
												</a>
											</Card.Title>
											<Card.Text>
												Fully functional drum machine. Play using Q W E A S D Z X C keys or
												clicking the buttons directly. Mobile friendly.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">React.js + Bootstrap</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* calculator */}
								{this.state.reactjs || this.state.javascript ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/react-js-calculator.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/wvKOJVo">Calculator</a>
											</Card.Title>
											<Card.Text>
												Fully functional calculator, build using React.js and vanilla
												JavaScript. Mobile friendly.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">React.js + JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* tribute page */}
								{this.state.html || this.state.css ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/tribute-page.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/mdeydEw?editors=1100">
													Tribute Page
												</a>
											</Card.Title>
											<Card.Text>
												Actually, my first ever Front End website. A tribute to Hayao Miyazaki,
												considered by many the father of modern anime.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">HTML + CSS</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* css tibbers */}
								{this.state.css ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/css-tibbers.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/JjYrzMm">Tibbers</a>
											</Card.Title>
											<Card.Text>
												Funny Tibbers illustration with animated background using SCSS only.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">SCSS</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* heat map */}
								{this.state.javascript ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/heat-map.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/MWKgzrO">Heat Map</a>
											</Card.Title>
											<Card.Text>
												Temperature Evolution 1753-2015 using D3 JavaScript's library for Data
												Analysis.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* may4thlove */}
								{this.state.css || this.state.javascript ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/may4thlove.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/ExVbGvr">
													May the 4th be with you
												</a>
											</Card.Title>
											<Card.Text>Playing a bit with CSS and JavaScript animations.</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">CSS + JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* pomodoro clock */}
								{this.state.javascript || this.state.reactjs ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/react-js-pomodoro-clock.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/JjYzwma">
													Pomodoro Clock
												</a>
											</Card.Title>
											<Card.Text>Created a timer using React.js and JavaScript</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">React.js + JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* markdown previewer */}
								{this.state.javascript || this.state.reactjs ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/react-js-markdown-prev.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/vYNadrw">
													Markdown Previewer
												</a>
											</Card.Title>
											<Card.Text>
												Instant markdown previewer using React.js and DOM event listeners.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">React.js + JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Quote Machine */}
								{this.state.javascript || this.state.reactjs ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/react-quotemachine.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/LYprgqo">
													Random Quote Generator
												</a>
											</Card.Title>
											<Card.Text>
												I took the typical random quote generator idea and spiced it up a bit,
												fetching an old League of Legends' API.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">React.js + JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Documentation Page */}
								{this.state.html || this.state.css ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/sample-doc-page.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/ExVjPYK">
													Documentation Page
												</a>
											</Card.Title>
											<Card.Text>
												Sample documentation page using plain HTML & CSS. You can take a look at
												it if you're interested in nutrition. The info is accurate, actually.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">HTML + CSS</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Scatter Plot */}
								{this.state.javascript ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/scatter-plot.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/vYNoVXr">Scatter Plot</a>
											</Card.Title>
											<Card.Text>
												Prevalence of Doping in Cyclism 1994-2015. An example of JavaScript's D3
												library for Data Analysis.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Survey Form */}
								{this.state.html || this.state.css ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/survey-form.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/QWjwNMM">Survey Form</a>
											</Card.Title>
											<Card.Text>
												Simple survey form example for a fitness business. Do you want to get
												fit? What are your goals? How can we help you?
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">HTML + CSS</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Choropleth */}
								{this.state.javascript ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/us-choropleth-education.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/KKVKKRm">
													Choropleth Map
												</a>
											</Card.Title>
											<Card.Text>
												United States Educational Attainment. Percentage of adults age 25 and
												older with a bachelor's degree or higher (2010-2014). An example of
												JavaScript's D3 library for Data Analysis.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Choropleth */}
								{this.state.javascript ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/video-game-sales.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://codepen.io/gerardcsaperas/pen/RwrwMqX">Tree Map</a>
											</Card.Title>
											<Card.Text>
												Video Game Sales. Top 100 Most Sold Video Games Grouped by Platform. An
												example of JavaScript's D3 library for Data Analysis.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">JavaScript</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Càtering Roser */}
								{this.state.mongodb ||
								this.state.nodejs ||
								this.state.reactjs ||
								this.state.javascript ||
								this.state.bootstrap ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/catering-roser.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://stormy-forest-38471.herokuapp.com/">Càtering Roser</a>
											</Card.Title>
											<Card.Text>
												Full Stack MERN website. A sold website for a take-away restaurant based
												in Barcelona. Fully functional website accepting orders and payments.
												Taking into account the day of the week, the number of orders recieved
												for a single day, etc.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">
												Mondogb + Express + Node.js + React.js + JavaScript + Bootstrap
											</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Timestamp API */}
								{this.state.nodejs ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/api-timestamp.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://glitch.com/edit/#!/dandelion-aluminum-tent">
													Timestamp Microservice
												</a>
											</Card.Title>
											<Card.Text>
												Back End project for pure practice. The main goal was to get a timestamp
												in unix and Date object format from a date string.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">Node.js + Express</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* File Metadata */}
								{this.state.nodejs ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/file-metadata.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://glitch.com/edit/#!/smart-victorious-sound">
													File Metadata Microservice
												</a>
											</Card.Title>
											<Card.Text>
												More Back End practice. I can upload a file and get its details through
												server side code.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">Node.js + Express</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Url Shortener */}
								{this.state.nodejs || this.state.mongodb ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/url-shortener.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://glitch.com/edit/#!/private-brazen-washer">
													URL Shortener
												</a>
											</Card.Title>
											<Card.Text>
												I can introduce a link and it gets uploaded in a database and related to
												a unique number (which is the short key binding for the url).
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">Node.js + Express + Mongodb + Mongoose</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Request Header Parser Microservice */}
								{this.state.nodejs ? (
									<Card>
										<Card.Img variant="top" src={require('./assets/images/header-ms.jpeg')} />
										<Card.Body>
											<Card.Title>
												<a href="https://glitch.com/edit/#!/nebula-unruly-gasosaurus">
													Request Header Parser Microservice
												</a>
											</Card.Title>
											<Card.Text>
												I can get the IP address, preferred languages and system infos from your
												device.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">Node.js + Express</small>
										</Card.Footer>
									</Card>
								) : null}
								{/* Exercise Tracker */}
								{this.state.nodejs || this.state.mongodb ? (
									<Card>
										<Card.Img
											variant="top"
											src={require('./assets/images/exercise-tracker.jpeg')}
										/>
										<Card.Body>
											<Card.Title>
												<a href="https://glitch.com/edit/#!/seed-jet-dugong">
													Exercise Tracker REST API
												</a>
											</Card.Title>
											<Card.Text>
												I can create a new user, register exercises (and their details) and
												retrieve my logs upon request.
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className="text-muted">Node.js + Express + Mongodb + Mongoose</small>
										</Card.Footer>
									</Card>
								) : null}
							</CardColumns>
						</div>
					)}
				</Spring>
			);
		} else {
			return null;
		}
	}
}

export default Portfolio;
