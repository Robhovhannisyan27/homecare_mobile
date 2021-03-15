export const setServices = services => {
  return {
    type: 'SET_SERVICES',
    payload: services,
  };
};

export const setService = serviceName => {
  return {
    type: 'SET_SERVICE',
    payload: serviceName,
  };
};

export const setSubServices = subServices => {
  return {
    type: 'SET_SUB_SERVICES',
    payload: subServices,
  };
};

export const setSubService = subServiceName => {
  return {
    type: 'SET_SUB_SERVICE',
    payload: subServiceName,
  };
};

export const setServiceCategories = serviceCategory => {
  return {
    type: 'SET_SERVICE_CATEGORIES',
    payload: serviceCategory,
  };
};
