import React, { useState } from "react";
import '../svg.css';
import '../index.css';
import Modal from "./modal";
import injectSheet from "react-jss";


const BasemapChart = () => {
	{



		return (
			<div style={{}}>

				<div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>
					<div className="title" style={{ width: "70vw", padding: "50px", paddingTop: "80px" }}>
						<h4>Qui ci potrebbe essere la narrativa, con corpo centrale come fosse un articolo. Esempio: However, the overall stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath.</h4>
						<h4>Some fields have seen a large increase in the representation of female graduate students. From 2003 to 2016, mathematics and statistics quickly reached and maintained sex parity.</h4>
					</div>
				</div>

				{/* POPULATION MACRO */}
				<div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>

					<div class="maphidT" style={{ border: "1px solid #6e6d6d" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="450"
							height="450"
							viewBox="371.4 141.4 510.2 510.2"

						>

							<circle class="grad" cx="623.9" cy="398.6" r="170.1" />
							<circle class="grad" cx="623.9" cy="398.6" r="141.8" />
							<circle class="grad" cx="623.9" cy="398.6" r="113.4" />
							<circle class="grad" cx="623.9" cy="398.6" r="85" />
							<circle class="grad" cx="623.9" cy="398.6" r="56.7" />

							<g className="textpop">
								<path class="tot" d="M624.2,398.6c0.2,0.4,33.8,67.4,33.8,86.1c0,18.7-8.5,40.4-17.1,57.4c-4.3,8.5-8.6,15.8-11.8,21
	c-1.6,2.6-2.9,4.7-3.9,6.1c-0.4,0.7-0.8,1.2-1,1.6c-0.3-0.4-0.6-0.9-1.1-1.6c-1-1.4-2.3-3.5-4-6.1c-3.3-5.2-7.6-12.5-12-21
	c-8.7-17-17.4-38.7-17.4-57.4C589.8,466,624,398.9,624.2,398.6z"/>
								<text transform="matrix(1 0 0 1 511.4691 548.8795)"><tspan x="0" y="0" class="num">608,002 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="tot" d="M623.9,398.1c-0.2-0.4-33.8-64.5-33.8-82.4s8.5-38.7,17.1-55c4.3-8.1,8.6-15.2,11.8-20.1
	c1.6-2.5,2.9-4.5,3.9-5.8c0.4-0.6,0.8-1.1,1-1.5c0.3,0.4,0.6,0.9,1.1,1.5c1,1.4,2.3,3.3,4,5.8c3.3,5,7.6,12,12,20.1
	c8.7,16.3,17.4,37,17.4,55C658.4,333.6,624.2,397.7,623.9,398.1z"/>
								<text transform="matrix(1 0 0 1 662.8566 244.6844)"><tspan x="0" y="0" class="num">582,969 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="tot" d="M623.9,398.5c-0.2,0.4-42.3,63.5-58.8,73s-39.7,13.1-59,14.3c-9.6,0.6-18.2,0.6-24.4,0.5
	c-3.1-0.1-5.6-0.2-7.3-0.3c-0.8,0-1.4-0.1-1.9-0.1c0.2-0.4,0.5-1,0.8-1.7c0.8-1.5,1.9-3.8,3.4-6.5c2.9-5.5,7.2-13,12.5-21.1
	c10.6-16.2,25.3-34.7,41.7-44.2C547.5,402.9,623.5,398.5,623.9,398.5z"/>
								<text transform="matrix(1 0 0 1 405.9855 420.7304)"><tspan x="0" y="0" class="num">616,551 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="tot" d="M623.9,398.5c-0.5,0-76.8-5.3-93.5-14.9c-16.7-9.6-31.7-28.1-42.5-44.3c-5.4-8.1-9.8-15.6-12.8-21
	c-1.5-2.7-2.7-4.9-3.5-6.5c-0.4-0.7-0.7-1.3-0.9-1.7c0.5,0,1.1-0.1,1.9-0.1c1.7-0.1,4.3-0.2,7.4-0.3c6.3-0.2,15-0.2,24.7,0.4
	c19.5,1.2,43.1,4.8,59.8,14.4C581.2,334.1,623.7,398.1,623.9,398.5z"/>
								<text transform="matrix(1 0 0 1 481.0138 265.2611)"><tspan x="0" y="0" class="num">625,087 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="tot" d="M623.9,398.6c0.2-0.4,39.9-62.1,55.6-71.2c15.8-9.1,38.3-12.3,56.9-13.1c9.3-0.4,17.6-0.3,23.6,0
	c3,0.1,5.4,0.3,7.1,0.4c0.8,0.1,1.4,0.1,1.8,0.1c-0.2,0.4-0.4,1-0.8,1.7c-0.7,1.5-1.8,3.7-3.2,6.4c-2.7,5.4-6.7,12.7-11.7,20.6
	c-10,15.9-23.9,33.9-39.7,43C697.9,395.6,624.4,398.6,623.9,398.6z"/>
								<text transform="matrix(1 0 0 1 769.0208 362.7304)"><tspan x="0" y="0" class="num">591,208 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="tot" d="M623.9,398.5c0.4,0,74.4,3.9,90.4,13.2s30.2,27.3,40.5,43.1c5.1,7.9,9.2,15.2,12.1,20.6
	c1.4,2.7,2.5,4.9,3.3,6.4c0.3,0.7,0.6,1.3,0.8,1.7c-0.4,0-1.1,0.1-1.9,0.2c-1.7,0.1-4.1,0.3-7.2,0.4c-6.1,0.3-14.5,0.4-24,0
	c-18.9-0.8-41.8-4-57.7-13.2C664.3,461.5,624.1,398.9,623.9,398.5z"/>
								<text transform="matrix(1 0 0 1 709.9713 525.7894)"><tspan x="0" y="0" class="num">599,505 </tspan><tspan x="0" y="14.4" class="tex">Total pop.</tspan></text>
							</g>

							<text transform="matrix(1 0 0 1 605.6528 215.8532)" class="yea">2017</text>
							<text transform="matrix(1 0 0 1 605.6528 589.8713)" class="yea">2020</text>
							<text transform="matrix(1 0 0 1 785.9625 316.1865)" class="yea">2018</text>
							<text transform="matrix(1 0 0 1 785.9625 494.8792)" class="yea">2019</text>
							<text transform="matrix(1 0 0 1 418.7351 316.1865)" class="yea">2022</text>
							<text transform="matrix(1 0 0 1 418.7351 494.8792)" class="yea">2021</text>

							<g className="textpop">
								<path class="wom" d="M548.1,441.7L548.1,441.7c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3l0,0c6.9,12,18,30.5,25.4,22.7
	c0,0,13.2-14.5,18.6-21.7s31.4-44.9,31.4-44.9l0,0c0,0-45.6,3.7-54.6,4.8c-8.9,1.1-28.1,5.3-28.1,5.3
	C530.7,410.8,541.2,429.7,548.1,441.7z"/>
								<text transform="matrix(1 0 0 1 385.9855 412.7304)"><tspan x="0" y="0" class="num">308,174 (49,9%) </tspan><tspan x="0" y="14.4" class="tex">Female pop.</tspan></text>

							</g>
							<g className="textpop">
								<path class="wom" d="M547.5,353.8L547.5,353.8c-0.1,0.1-0.1,0.2-0.2,0.3s-0.1,0.2-0.2,0.3l0,0c-6.9,12-17.4,30.9-6.8,33.4
	c0,0,19.4,4.3,28.4,5.4c9,1.1,55.1,5.1,55.1,5.1l0,0c0,0-26.5-37.9-32-45.2c-5.5-7.2-18.9-21.9-18.9-21.9
	C565.5,323.3,554.4,341.9,547.5,353.8z"/>
								<text transform="matrix(1 0 0 1 465.0138 265.2611)"><tspan x="0" y="0" class="num">312,352 (49,9%)</tspan><tspan x="0" y="14.4" class="tex">Female pop.</tspan></text>

							</g>
							<g className="textpop">
								<path class="wom" d="M623.6,484.7L623.6,484.7c0.1,0,0.2,0,0.3,0s0.2,0,0.3,0v0c13.8,0,35.5-0.3,32.3-10.6c0,0-6-18.5-9.5-26.7
	s-23.1-49.1-23.1-49.1h0c0,0-19.6,40.9-23.1,49.1c-3.5,8.2-9.5,26.7-9.5,26.7C588.1,484.4,609.8,484.7,623.6,484.7z"/>
								<text transform="matrix(1 0 0 1 455.4691 548.8795)"><tspan x="0" y="0" class="num">303,882 (49,9%) </tspan><tspan x="0" y="14.4" class="tex">Female pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="wom" d="M697.6,441.2L697.6,441.2c0.1-0.1,0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3l0,0c6.9-12,17.4-30.9,7.1-33.2
	c0,0-18.8-4-27.6-4.9c-8.8-1-53.5-4.2-53.5-4.2l0,0c0,0,25.2,37.2,30.4,44.3c5.2,7.1,18.1,21.4,18.1,21.4
	C679.6,471.8,690.7,453.2,697.6,441.2z"/>
								<text transform="matrix(1 0 0 1 709.9713 525.7894)"><tspan x="0" y="0" class="num">299,617 (49.9%) </tspan><tspan x="0" y="14.4" class="tex">Female pop.</tspan></text>

							</g>


						</svg>

						<div>
							<div className="title" style={{ width: "30vw", padding: "20px", fontWeight: "normal" }}>
								<p style={{ fontWeight: "bold" }}>TITOLO DELLA CARTA / GRAFICO, ESEMPIO MAPPA DELL'OCEANIA</p>
								<hr></hr>
								<p>Fonte dei dati e dettagli tipo ESPG della mappa, EPSG:8859, WGS 84 / Equal Earth Asia-Pacific</p>
							</div>

						</div>
					</div>

					{/* EDUCATION */}
					<div class="maphidT" style={{ border: "1px solid #6e6d6d" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="450"
							height="450"
							viewBox="-276.1 141.9 510.2 510.2"

						>

							<path class="nodata" d="M-16.9,382.9c0,0-158.1,6.2-162.2,17.3c-4.2,11.1,10.8,23.2,12.2,39.4c1,11.5-6.5,20.6-1.2,30.7
	c6,9.7,17.7,7.7,27.1,14.3c13.3,9.3,16.3,28.3,28,30.2C-101.2,516.7-16.9,382.9-16.9,382.9z"/>
							<path class="nodata" d="M-16.9,382.9c0,0,73.7-132.3,66.2-141c-7.5-8.7-25.5-2.2-40.2-8.7c-10.4-4.6-14.6-15.1-26-15.5
	c-11.4,0.4-15.5,10.9-26,15.5c-14.7,6.5-32.7,0-40.2,8.7C-90.5,250.6-16.9,382.9-16.9,382.9z"/>
							<path class="nodata" d="M-16.9,382.9c0,0,153.1-3.3,156.9-14.2c3.9-10.9-10.8-23.2-12.5-39.2c-1.2-11.4,6-20.3,0.6-30.3
	c-6-9.7-17.3-8-26.6-14.7c-13-9.4-16.3-28.3-27.7-30.4C62.6,252-16.9,382.9-16.9,382.9z"/>
							<path class="nodata" d="M-16.9,382.9c0,0,81,131.9,92.5,129.8c11.5-2,14.7-21,27.8-30.4c9.3-6.7,20.7-4.9,26.8-14.5
	c5.4-10-1.9-19.1-0.8-30.4c1.6-16.1,16.3-28.3,12.4-39.3C137.9,387.2-16.9,382.9-16.9,382.9z"/>
							<path class="nodata" d="M-16.9,382.9c0,0-85.8-134.6-97.6-132.8c-11.8,1.9-14.8,20.9-28.1,30.2c-9.5,6.6-21.3,4.6-27.3,14.2
	c-5.4,10.1,2.3,19.3,1.3,30.8c-1.3,16.2-16.3,28.3-12.1,39.4C-176.4,375.9-16.9,382.9-16.9,382.9z"/>
							<path class="nodata" d="M-16.9,382.9c0,0-73.7,138-66.2,147.1c7.5,9,25.5,2.3,40.2,9c10.4,4.8,14.6,15.7,26,16.1
	c11.4-0.4,15.5-11.3,26-16.1c14.7-6.8,32.7,0,40.2-9C56.8,521-16.9,382.9-16.9,382.9z"/>

							<text transform="matrix(1 0 0 1 -27.4082 192.0562)" class="yea">2017</text>
							<text transform="matrix(1 0 0 1 -27.4082 581.4863)" class="yea">2020</text>
							<text transform="matrix(1 0 0 1 146.7871 298.3199)" class="yea">2018</text>
							<text transform="matrix(1 0 0 1 146.7871 476.8955)" class="yea">2019</text>
							<text transform="matrix(1 0 0 1 -223.21 298.3199)" class="yea">2022</text>
							<text transform="matrix(1 0 0 1 -223.21 476.8955)" class="yea">2021</text>

							<path class="wom" d="M-9,502c3.3-2.6,6.1-6.2,10.5-8.2c10.4-4.8,23.2,0,28.5-6.4c5.3-6.4-46.9-104.4-46.9-104.4l0,0l0,103.1
	C-16.9,497.3-12.6,505.1-9,502L-9,502z"/>
							<g className="textpop">
								<path class="tot" d="M-16.9,382.9c0,0-52.3,97.9-46.9,104.3c5.3,6.4,18.1,1.6,28.5,6.4c7.4,3.4,10.3,11.2,18.4,11.4
	c8.1-0.3,11-8,18.4-11.4c10.4-4.8,23.2,0,28.5-6.4C35.4,480.9-16.9,382.9-16.9,382.9z"/>
								<text transform="matrix(1 0 0 1 24.0234 552.4072)"><tspan x="0" y="0" class="num">10.5 %</tspan><tspan x="0" y="14.4" class="tex">Female attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
								<text transform="matrix(1 0 0 1 24.0234 600.875)"><tspan x="0" y="0" class="num">10.0 %</tspan><tspan x="0" y="14.4" class="tex">Male attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
							</g>
							<path class="wom" d="M-55,408.4c1.5,0.6,3.2,0.8,4.8,1.9c3.6,2.5,4.5,7.7,7.6,8.3c3.2,0.5,25.7-35.7,25.7-35.7l0,0l-34.3,19.8
	C-54.9,404.9-56.7,407.8-55,408.4L-55,408.4z"/>
							<g className="textpop">
								<path class="tot" d="M-16.9,382.9c0,0-42.6,1.4-43.8,4.4c-1.1,3,2.9,6.3,3.3,10.7c0.3,3.1-1.7,5.6-0.3,8.3c1.6,2.6,4.8,2.1,7.3,3.9
	c3.6,2.5,4.5,7.7,7.6,8.3C-39.4,419.2-16.9,382.9-16.9,382.9z"/>
								<text transform="matrix(1 0 0 1 -265.7998 511.2071)"><tspan x="0" y="0" class="num">18.7 %</tspan><tspan x="0" y="14.4" class="tex">Female attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
								<text transform="matrix(1 0 0 1 -265.7998 559.6748)"><tspan x="0" y="0" class="num">15.1 %</tspan><tspan x="0" y="14.4" class="tex">Male attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
							</g>
							<path class="wom" d="M-18.8,354.4c-0.8,0.6-1.5,1.5-2.5,2c-2.5,1.2-5.6,0-6.8,1.5c-1.3,1.5,11.3,25,11.3,25v0v-24.7
	C-16.9,355.5-17.9,353.6-18.8,354.4L-18.8,354.4z"/>
							<g className="textpop">
								<path class="tot" d="M-16.9,382.9c0,0,12.5-23.5,11.3-25c-1.3-1.5-4.3-0.4-6.8-1.5c-1.8-0.8-2.5-2.7-4.4-2.7
	c-1.9,0.1-2.6,1.9-4.4,2.7c-2.5,1.1-5.6,0-6.8,1.5C-29.4,359.4-16.9,382.9-16.9,382.9z"/>
								<text transform="matrix(1 0 0 1 30.4639 167.4209)"><tspan x="0" y="0" class="num">6.0 %</tspan><tspan x="0" y="14.4" class="tex">Female attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
								<text transform="matrix(1 0 0 1 30.4639 215.8897)"><tspan x="0" y="0" class="num">5.3 %</tspan><tspan x="0" y="14.4" class="tex">Male attained Upper </tspan><tspan x="0" y="28.8" class="tex">secondary education</tspan></text>
							</g>
							<path class="womedu" d="M-0.5,491.4c0.7-0.5,1.3-1.3,2.2-1.7c2.2-1,4.8,0,5.9-1.3c1.1-1.3-9.7-21.6-9.7-21.6l0,0l0,21.4
	C-2.1,490.4-1.2,492-0.5,491.4L-0.5,491.4z"/>
							<path class="maledu" d="M-32.3,491.4c-0.7-0.5-1.3-1.3-2.2-1.7c-2.2-1-4.8,0-5.9-1.3c-1.1-1.3,9.7-21.6,9.7-21.6v0v21.4
	C-30.7,490.4-31.6,492-32.3,491.4L-32.3,491.4z"/>
							<path class="st2" d="M-22.2,359.8c-0.2,0.1-0.3,0.3-0.5,0.4c-0.5,0.2-1.2,0-1.5,0.3c-0.3,0.3,2.4,5.4,2.4,5.4l0,0l0-5.3
	C-21.8,360-22,359.6-22.2,359.8L-22.2,359.8z"/>
							<path class="maledu" d="M-11.1,359.8c0.2,0.1,0.3,0.3,0.5,0.4c0.5,0.2,1.2,0,1.5,0.3c0.3,0.3-2.4,5.4-2.4,5.4v0v-5.3
	C-11.5,360-11.3,359.6-11.1,359.8L-11.1,359.8z"/>
							<path class="maledu" d="M-54,398.1c0.1-0.5,0.3-0.9,0.2-1.4c-0.1-1.2-1.3-2.2-0.9-3c0.3-0.8,12.4-1.3,12.4-1.3l0,0l-9.7,5.6
	C-53.1,398.6-54.1,398.6-54,398.1L-54,398.1z"/>
							<path class="womedu" d="M-48.9,408.4c0.5,0.2,1.1,0.3,1.7,0.7c1.3,0.9,1.6,2.7,2.7,2.9c1.1,0.2,9-12.5,9-12.5l0,0l-12,6.9
	C-48.9,407.2-49.5,408.2-48.9,408.4L-48.9,408.4z"/>


							<text transform="matrix(1 0 0 1 -94.5654 556.9102)" class="st3 st4">*C</text>
							<text transform="matrix(1 0 0 1 -213.2109 403.8994)" class="st3 st4">*B</text>
							<text transform="matrix(1 0 0 1 -86.3203 222.1221)" class="st3 st4">*A</text>

						</svg>

						<div>
							<div className="title" style={{ width: "30vw", padding: "20px", fontWeight: "normal" }}>
								<p style={{ fontWeight: "bold" }}>TITOLO DELLA CARTA / GRAFICO, ESEMPIO MAPPA DELL'OCEANIA</p>
								<hr></hr>
								<p>*A tiene in considerazione solo Tuvalu perchè ci sono dati solo al 2017<br />
									*B tiene in considerazione la somma di Palau, Kiribati e Vanuati perchè ci sono dati solo al 2020<br />
									*C tiene in considerazione la somma di Marshall Islands, Nauru e Tonga perchè ci sono dati solo al 2021</p>
								<p>L'interazione sul petalo largo perche elementi troppo piccoli da triggerare</p>
							</div>

						</div>
					</div>

				</div>

			</div >

		);
	}
}

export default BasemapChart;
