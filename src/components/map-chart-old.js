import React, { PureComponent } from "react";
import '../svg.css';
import injectSheet from "react-jss";


const BasemapChart = () => {
	{

		return (
			<div style={{}}>

				<div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px", border:"1px solid #6e6d6d" }}>

					<div class="maphidT">
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
								<text transform="matrix(1 0 0 1 385.9855 412.7304)"><tspan x="0" y="0" class="num">308,174 (49,9%) </tspan><tspan x="0" y="14.4" class="tex">Women pop.</tspan></text>

							</g>
							<g className="textpop">
								<path class="wom" d="M547.5,353.8L547.5,353.8c-0.1,0.1-0.1,0.2-0.2,0.3s-0.1,0.2-0.2,0.3l0,0c-6.9,12-17.4,30.9-6.8,33.4
	c0,0,19.4,4.3,28.4,5.4c9,1.1,55.1,5.1,55.1,5.1l0,0c0,0-26.5-37.9-32-45.2c-5.5-7.2-18.9-21.9-18.9-21.9
	C565.5,323.3,554.4,341.9,547.5,353.8z"/>
								<text transform="matrix(1 0 0 1 465.0138 265.2611)"><tspan x="0" y="0" class="num">312,352 (49,9%)</tspan><tspan x="0" y="14.4" class="tex">Women pop.</tspan></text>

							</g>
							<g className="textpop">
								<path class="wom" d="M623.6,484.7L623.6,484.7c0.1,0,0.2,0,0.3,0s0.2,0,0.3,0v0c13.8,0,35.5-0.3,32.3-10.6c0,0-6-18.5-9.5-26.7
	s-23.1-49.1-23.1-49.1h0c0,0-19.6,40.9-23.1,49.1c-3.5,8.2-9.5,26.7-9.5,26.7C588.1,484.4,609.8,484.7,623.6,484.7z"/>
								<text transform="matrix(1 0 0 1 455.4691 548.8795)"><tspan x="0" y="0" class="num">303,882 (49,9%) </tspan><tspan x="0" y="14.4" class="tex">Women pop.</tspan></text>
							</g>
							<g className="textpop">
								<path class="wom" d="M697.6,441.2L697.6,441.2c0.1-0.1,0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3l0,0c6.9-12,17.4-30.9,7.1-33.2
	c0,0-18.8-4-27.6-4.9c-8.8-1-53.5-4.2-53.5-4.2l0,0c0,0,25.2,37.2,30.4,44.3c5.2,7.1,18.1,21.4,18.1,21.4
	C679.6,471.8,690.7,453.2,697.6,441.2z"/>
								<text transform="matrix(1 0 0 1 709.9713 525.7894)"><tspan x="0" y="0" class="num">299,617 (49.9%) </tspan><tspan x="0" y="14.4" class="tex">Women pop.</tspan></text>

							</g>


						</svg>

						<div>
							<div className="title" style={{ width: "30vw", padding: "20px", fontWeight:"normal" }}>
								<p style={{ fontWeight: "bold" }}>TITOLO DELLA CARTA / GRAFICO, ESEMPIO MAPPA DELL'OCEANIA</p>
								<hr></hr>
								<p>Fonte dei dati e dettagli tipo ESPG della mappa, EPSG:8859, WGS 84 / Equal Earth Asia-Pacific</p>
							</div>

						</div>

					</div>

				</div>


				{/* line 1 */}
				<div className="mapchartline" style={{ maxWidth: "100%", maxHeight: "500px", display: "flex", justifyContent: "center", paddingTop: "50px" }}>

					{/* block 1 */}
					<div class="maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>VANAUTU</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"

						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg>

					</div>

					{/* block 2 */}
					<div class="maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>KIRIBATI</div>
						<div className=""><svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"
						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg></div>

					</div>

					{/* block 3 */}
					<div class="nauruchart maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>MARSHALL ISLANDS</div>
						<div className=""><svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"
						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg></div>

					</div>


					<div class="vanautuchart maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>NAURU</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"

						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg>

					</div>


				</div>





				{/* line 2 */}
				<div className="mapchartline" style={{ maxWidth: "100%", maxHeight: "500px", display: "flex", justifyContent: "center", paddingTop: "50px" }}>

					{/* block 5 */}
					<div class="vanautuchart maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>PALAU</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"

						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg>

					</div>

					{/* block 6 */}
					<div class="nauruchart maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>TONGA</div>
						<div className=""><svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"
						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg></div>

					</div>

					{/* block 7 */}
					<div class="vanautuchart maphidT">
						<div className="mapchartlinetitle" style={{ textAlign: "center", color: "#494747 !important" }}>TUVALU</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							viewBox="0 0 612 792"

						>
							<circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
							<g className="texthid">
								<path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 280.6883 123.8535)" class="year">2017</text>
							<g className="texthid">
								<path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 220.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">52%</tspan></text>
							</g>
							<g className="texthid">
								<path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z" />
							</g>
							<text id="XMLID_5_" transform="matrix(1 0 0 1 480 210)" class="year">2018</text>
							<g className="texthid">
								<path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z" />
								<text id="XMLID_5_" transform="matrix(1 0 0 1 430.722 340.0294)" class="st3 st4"><tspan x="0" y="0"></tspan>Women pop.<tspan x="0" y="-32">32%</tspan></text>
							</g>
						</svg>

					</div>
				</div>



				<div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>
					<div className="title" style={{ width: "30vw", padding: "20px" }}>
						<p style={{ fontWeight: "bold" }}>TITOLO DELLA CARTA / GRAFICO, ESEMPIO MAPPA DELL'OCEANIA</p>
						<hr></hr>
						<p>Fonte dei dati e dettagli tipo ESPG della mappa, EPSG:8859, WGS 84 / Equal Earth Asia-Pacific</p>
					</div>

					<div className="statement" style={{ width: "30vw", padding: "20px", paddingLeft: "50px" }}>
						<p>NOTE: Se servissero dei commenti potrebbero andare in questo spazio, che riempio casualmente: Gender inequalities in education increase child marriage, exposition to violence and decrease wages</p>
					</div>
				</div>

				<div className="header" style={{ display: "flex", justifyContent: "center", paddingTop: "5px" }}>
					<div className="title" style={{ width: "70vw", padding: "50px", paddingTop: "80px" }}>
						<h4>Qui ci potrebbe essere la narrativa, con corpo centrale come fosse un articolo. Esempio: However, the overall stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath.</h4>
						<h4>Some fields have seen a large increase in the representation of female graduate students. From 2003 to 2016, mathematics and statistics quickly reached and maintained sex parity.</h4>
					</div>
				</div>


			</div>

		);
	}
}

export default BasemapChart;
