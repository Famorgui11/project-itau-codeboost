import IconSearch from "@/assets/icon-search.svg";
import Image from "next/image";

const Search = () => {
	return (
		<div className="flex items-center gap-4">
			<button>
				<Image src={IconSearch} alt={"Search"} />
			</button>
			<input
				type="text"
				placeholder="Buscar"
				className="bg-transparent outline-none text-white pr-5 placeholder:text-white"
			/>
		</div>
	);
};

export default Search;
