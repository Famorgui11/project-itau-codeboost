import Image from "next/image";

import Container from "./container";
import ItemMenu from "./itemMenu";
import Search from "./search";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";

const Header = () => {
	return (
		<header className="relative flex items-center w-full h-20 bg-primary-orange">
			<div className="rignt-content absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
			<Container>
				<div className="left-content flex flex-1 items-center justify-between">
					<div className="nav-menu flex items-center gap-14">
						<Image src={Logo} alt={"Itaú logo"} />
						<ul className="flex items-center gap-12">
							<li>
								<ItemMenu name={"Para você"} />
							</li>
							<li>
								<ItemMenu name={"Para empresas"} />
							</li>
							<li>
								<ItemMenu name={"Serviços"} />
							</li>
							<li>
								<ItemMenu name={"Ajuda"} />
							</li>
						</ul>
					</div>
					<Search />
				</div>
				<button className="flex items-center gap-4 h-20 bg-primary-blue pl-10 z-10">
					<Image src={IconUser} alt={"User icon"} />
					<span className="text-white font-bold">Acessar conta</span>
				</button>
			</Container>
		</header>
	);
};

export default Header;
