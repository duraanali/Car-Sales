export const ADD_CAR_FEATURE = "ADD_CAR_FEATURE";
// export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addCarFeature = feature => {
    console.log("FEATURE", feature);
    console.log("FEATURE WAS ADDED");
    return { type: "ADD_CAR_FEATURE", payload: feature };
};

// export const deleteFeature = unwantedFeature => {
//     console.log("FEATURE WAS REMOVED");
//     return { type: "REMOVE_FEATURE", payload: unwantedFeature };
// };