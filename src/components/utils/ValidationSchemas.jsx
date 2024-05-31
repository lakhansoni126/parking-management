import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    contactInfo: Yup.string().matches(/^\d+$/, 'Contact info must be a number').nullable(),
    officeNum: Yup.string().required('Office/Flat number is required'),
    vehicleNum: Yup.string().required('Vehicle number is required'),
    vehicleType: Yup.string().required('Vehicle type is required'),
});

export const guardValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    employeeId: Yup.string().required('Employee ID is required'),
    contactInfo: Yup.string().matches(/^\d+$/, 'Contact info must be a number').nullable(),
});

export const buildingValidationSchema = Yup.object({
    buildingName: Yup.string().required('Building name is required'),
    contactInfo: Yup.string().matches(/^\d+$/, 'Contact info must be a number').required('Contact info is required'),
    altContactInfo: Yup.string().matches(/^\d+$/, 'Alternate contact info must be a number').nullable(),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
});
