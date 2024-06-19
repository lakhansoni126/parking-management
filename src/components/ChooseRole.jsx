import PropTypes from "prop-types";
import TopDesign from "./Design/TopDesign";
import BottomDesign from "./Design/BottomDesign";
const ChooseRole = ({ open, onSelectRole }) => {
    return (
        <>
            <TopDesign />
            <div
                className={`fixed z-10 inset-0 overflow-y-auto ${
                    open ? "" : "hidden"
                }`}
            >
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0  "></div>
                    </div>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div className="ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 inline-block align-bottom opacity-90 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden bg-transparent shadow-lg shadow-indigo-500/50 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div>
                            <h2 className="text-lg text-center font-bold mb-4">
                                Select Your Role
                            </h2>
                            <button
                                className="bg-[#393E46] hover:bg-[#FF5722] text-white py-2 px-4 rounded-lg mb-2 w-full "
                                onClick={() => onSelectRole("users")}
                            >
                                User
                            </button>
                            <button
                                className="bg-[#393E46] hover:bg-[#FF5722] text-white py-2 px-4 rounded-lg mb-2 w-full"
                                onClick={() => onSelectRole("guards")}
                            >
                                Guard
                            </button>
                            <button
                                className="bg-[#393E46] hover:bg-[#FF5722] text-white py-2 px-4 rounded-lg mb-2 w-full"
                                onClick={() => onSelectRole("buildings")}
                            >
                                Building
                            </button>
                            <button
                                className="bg-[#393E46] hover:bg-[#FF5722] text-white py-2 px-4 rounded-lg mb-2 w-full"
                                onClick={() => onSelectRole("office")}
                            >
                                Office
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BottomDesign />
        </>
    );
};
ChooseRole.propTypes = {
    open: PropTypes.object.isRequired,
    onSelectRole: PropTypes.func.isRequired,
};
export default ChooseRole;
