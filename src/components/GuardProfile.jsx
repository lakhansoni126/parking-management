import PropTypes from "prop-types";

function GuardProfile({ user, onSubmit, onChange, values }) {
    const { name, contactInfo, employeeId, floor, } = values || {};

    return (
        <>
            <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label>
                            Name*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={name}
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder={user.displayName}
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number*
                                <div>
                                    <input
                                        onChange={onChange}
                                        value={contactInfo}
                                        name="contactInfo"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>

                        <label>
                            Employee ID*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={employeeId}
                                    name="employeeId"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                            Floor*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={floor}
                                    name="floor"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>

                        <button onClick={onSubmit} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

GuardProfile.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};

export default GuardProfile;
