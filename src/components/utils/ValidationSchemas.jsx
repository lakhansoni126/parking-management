import * as Yup from "yup";

export const userValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    contactInfo: Yup.string()
        .length(10, "Contact info must be exactly 10 digits")
        .matches(/^\d+$/, "Contact info must be a number")
        .nullable(),
    officeNum: Yup.string().required("Office/Flat number is required"),
    vehicleNum: Yup.string().required("Vehicle number is required"),
    vehicleType: Yup.string().required("Vehicle type is required"),
    building: Yup.string().required("Building name is required"),
});
//building, name, contactInfo, employeeId, floor,
export const guardValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    building: Yup.string().required("Building is required"),
    floor: Yup.string(),
    auth: Yup.boolean().required("Auth is required").default(false),
    employeeId: Yup.string().required("Employee ID is required"),
    contactInfo: Yup.string()
        .matches(/^\d+$/, "Contact info must be a number")
        .length(10, "Contact info must be exactly 10 digits")
        .nullable(),
});
//buildingName, contactInfo, altContactInfo, address, city, state
export const buildingValidationSchema = Yup.object({
    buildingName: Yup.string().required("Building name is required"),
    contactInfo: Yup.string()
        .matches(/^\d+$/, "Contact info must be a number")
        .length(10, "Contact info must be exactly 10 digits")
        .required("Contact info is required"),
    altContactInfo: Yup.string()
        .matches(/^\d+$/, "Alternate contact info must be a number")
        .nullable(),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
});

export const officeValidationSchema = (
    buildingNames,
    offices,
    parseOfficeNumbers
) => {
    return Yup.object().shape({
        officeName: Yup.string().required("Office Name is required"),
        officeNum: Yup.string()
            .required("Office Number is required")
            .test("uniqueOfficeNum", function (value) {
                const { building } = this.parent;
                if (!value) {
                    return false;
                }
                const officeNumbers = parseOfficeNumbers(value);

                const conflictingOfficeNumber = Object.values(offices).find(
                    (office) => {
                        const officeNumsInBuilding = parseOfficeNumbers(
                            office.officeNum
                        );
                        return (
                            office.building === building &&
                            officeNumsInBuilding.some((num) =>
                                officeNumbers.includes(num)
                            )
                        );
                    }
                );

                if (conflictingOfficeNumber) {
                    return this.createError({
                        message: `Office number ${conflictingOfficeNumber.officeNum} already exists in the selected building.`,
                    });
                }

                return true;
            }),
        contactInfo: Yup.string().required("Contact Number is required"),
        altContactInfo: Yup.string(),
        building: Yup.string().required("Building is required"),
    });
};

// export const officeValidationSchema = Yup.object({
//     officeName: Yup.string().required('Office name is required'),
//     officeNum: Yup.string()
//         .required('Office Number is required')
//         .test('uniqueOfficeNum', 'This office number is already used in the selected building.', function (value) {
//             const { building } = this.parent;
//             const officeNumbers = parseOfficeNumbers(value);

//             const officeExists = buildingNames.some((buildingName) => {
//                 // Implement your logic to check if office number exists in the building
//                 // You might need to fetch and compare with database values or stored state
//                 // For demonstration, I'll use a simple array check
//                 return building === buildingName && officeNumbers.some(num => buildingNames.includes(num));
//             });

//             return !officeExists;
//         }), contactInfo: Yup.string().required('Contact number is required'),
//     altContactInfo: Yup.string(),
//     building: Yup.string().required('Building is required'),
// });
