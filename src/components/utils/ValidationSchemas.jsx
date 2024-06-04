import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    contactInfo: Yup.string().length(10, 'Contact info must be exactly 10 digits').matches(/^\d+$/, 'Contact info must be a number').nullable(),
    officeNum: Yup.string().required('Office/Flat number is required'),
    vehicleNum: Yup.string().required('Vehicle number is required'),
    vehicleType: Yup.string().required('Vehicle type is required'),
});
//building, name, contactInfo, employeeId, floor,
export const guardValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    building: Yup.string().required('Building is required'),
    floor: Yup.string(),
    auth: Yup.boolean().required('Auth is required').default(false),
    employeeId: Yup.string().required('Employee ID is required'),
    contactInfo: Yup.string()
        .matches(/^\d+$/, 'Contact info must be a number')
        .length(10, 'Contact info must be exactly 10 digits')
        .nullable(),
});
//buildingName, contactInfo, altContactInfo, address, city, state
export const buildingValidationSchema = Yup.object({
    buildingName: Yup.string().required('Building name is required'),
    contactInfo: Yup.string().matches(/^\d+$/, 'Contact info must be a number').length(10, 'Contact info must be exactly 10 digits').required('Contact info is required'),
    altContactInfo: Yup.string().matches(/^\d+$/, 'Alternate contact info must be a number').nullable(),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
});

export const officeValidationSchema = Yup.object({
    officeName: Yup.string().required('Office name is required'),
    officeNumber: Yup.string().required('Office number is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    altContactNumber: Yup.string(),
    building: Yup.string().required('Building is required'),
});