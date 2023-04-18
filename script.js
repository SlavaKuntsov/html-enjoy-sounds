


let firstRow = [
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'dddddddChildish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: 'dddddddddd',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: '',
		a2: '',
		a3: '',
		a4: '',	
		sideB: '',
		b1: '',
		b2: '',
		b3: '',
		b4: '',
	},
]

let hipHop = document.querySelector('.covers-hip-hop')
let rock = document.querySelector('.covers-rock')
let indi = document.querySelector('.covers-indi')
let jazz = document.querySelector('.covers-jazz')

function coverOutput(where, intervalStart, inRow = 3) {

	for (let i = 0; i <= inRow; i++) {

		where.innerHTML = firstRow.map((item, index) => 
			(index >= intervalStart && index <= intervalStart + 2) ?
			`
			<div class="covers-item">
				<img src="../img/main/${item.img}" alt="">
				<p>${item.title}</p>
				<span>${item.price} BYN</span>
			</div>
			`
			: 
			''
		).join("")
	}
}

coverOutput(hipHop, 0)
coverOutput(rock, 3)
coverOutput(indi, 6)
coverOutput(jazz, 9)


// =======================================

let items = document.querySelectorAll('.covers-item')
let block = document.querySelector('.item-info')
let back = document.querySelector('.back')

let output = document.querySelector('.cover-info')

function image(item, coverIndex, index) {
	if(coverIndex === index) {
		return (
			`
				<div class="image">
					<img src='../img/main/${item.img}' alt="image"/>
					<div class="text">
						<p>Genre: ${item.genre}<p>
						<p>Published in 2015<p>
						<p>Publication: Interscope<p>
						<p>Category: Album<p>
					</div>
				</div>
				<div class="other-text">
					<div class="top">
						<h2>${item.title}</h2>
						<h3>${item.price} BYN</h3>
						<a href="../pages/form.html" class="order">
							Place an Order
						</a>
					</div>
					<div class="bottom">
						<h4>Side A</h4>
						<p>A1. ${item.a1}</p>
						<p>A2. ${item.a2}</p>
						<p>A3. ${item.a3}</p>
						<p>A4. ${item.a4}</p>
						<h4>Side B</h4>
						<p>B1. ${item.b1}</p>
						<p>B2. ${item.b2}</p>
						<p>B3. ${item.b3}</p>
						<p>B4. ${item.b4}</p>
					</div>

				</div>
			`
		) 
	}
	else{return ''}
}

if(items) {

	items.forEach((cover, coverIndex) => {

		block.style.display = 'none'
		
		cover.addEventListener('click', function () {
			let bool = false
			console.log(1)
			bool = !bool
				if (bool) {
					block.style.display = 'block'
	
					output.innerHTML = firstRow.map((item, index) => 
						`
							${image(item, coverIndex, index)}
						`
					).join("")
				}
		})
	})
	back.addEventListener('click', function () {
		block.style.display = 'none'
	})
}