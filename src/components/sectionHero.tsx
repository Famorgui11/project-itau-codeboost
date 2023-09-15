import Image from "next/image";

import Container from "./container";

import ImgAppleStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import ArrowExplorer from "@/assets/arrow-explorer.svg";
import WomanImage from "@/assets/woman.png";

const SectionHero = () => {
	return (
		<section className="w-full h-[44rem] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
			<Container>
				<div className="left-content flex-1 max-w-[31.125rem]">
					<h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão. </h1>
					<p className="text-white text-xl max-w-[25.5rem] mb-8">
						Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.
					</p>
					<div className="buttons flex gap-4 mb-24">
						<button>
							<Image src={ImgAppleStore} alt={"Apple Store"} />
						</button>
						<button>
							<Image src={ImgGooglePlay} alt={"Google Play"} />
						</button>
					</div>
					<button className="flex items-center gap-3">
						<Image src={ArrowExplorer} alt={"Arrow explorer"} />
						<span className="text-white text-sm font-bold">Continue explorando</span>
					</button>
				</div>

				<div className="right-content -mr-10">
					<Image src={WomanImage} alt={"Itaú woman image"} />
				</div>
			</Container>
		</section>
	);
};

export default SectionHero;
