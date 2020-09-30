const sphereArr = ["https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-0-2x.png","https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-1-2x.png", "https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-2-2x.png", "https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-3-2x.png", "https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-4-2x.png", "https://d1eipm3vz40hy0.cloudfront.net/images/p-sunshine/overview/revamp-2019/sun-5-2x.png"];
let cycle;
let idx = 2;


$(".sphere img").mouseenter(() => {
	$(".container").addClass("hovered");
	$(".hovered .sphere img").attr("src", sphereArr[1]);
	cycle = setInterval(() => {
		let nextImg = sphereArr[idx];
		$(".sphere img").attr("src", nextImg);
		idx >= sphereArr.length - 1 ? idx = 1 : idx++;
	}, 200);
}).mouseleave(() => {
	$(".container").removeClass("hovered");
	$(".sphere img").attr("src", sphereArr[0])
	clearInterval(cycle);
});