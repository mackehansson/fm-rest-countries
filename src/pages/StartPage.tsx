import { Search, Filter, FlagList } from "../components";

export const StartPage = () => {
    return (
        <div className="container mx-auto px-4 pb-10">
            {/* Top */}
            <div className="desktop:flex desktop:justify-between">
                <div className="mb-10 desktop:mb-20 w-full desktop:w-[480px]">
                    <Search />
                </div>
                <div className="w-[200px] mb-10 desktop:mb-0">
                    <Filter />
                </div>
            </div>

            {/* Cards */}
            <FlagList />
        </div>
    );
};
