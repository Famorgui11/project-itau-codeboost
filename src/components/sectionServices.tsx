import Image from "next/image";

import Container from "./container";

import PhoneIcon from "@/assets/icon-phone.svg";

const SectionServices = () => {
	return (
		<section className="w-full h-[60.25rem]">
			<Container>
				<div className="left-content flex-1 max-w-[37.125rem] pt-[8.4375rem]">
					<span className="block uppercase text-primary-orange text-sm font-bold mb-9">
						serviços exclusivos
					</span>
					<h2 className="text-primary-gray font-bold text-[3.5rem] leading-[3.8125rem] mb-6">
						Gerencie suas finanças sem sair de casa
					</h2>
					<p className="text-second-gray text-lg max-w-[34.625rem] mb-[4.25rem]">
						Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o
						melhor, no corforto da sua casa.
					</p>
					<ul className="flex flex-col items-start gap-9">
						<li className="flex items-center gap-[2.125rem] pb-9 border-b-[1px] border-opacity-gray">
							<div className="w-7 h-7 flex items-center justify-center">
								<Image src={PhoneIcon} alt={"Icon phone"} />
							</div>
							<p className="flex-1 text-txt-gray">
								Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
							</p>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default SectionServices;
