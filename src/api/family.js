import {DataStore} from "@aws-amplify/datastore";
import {Families} from "../models";

export const getFamilies = async () => {
  const models = await DataStore.query(Families);
  return models;
};

export const createFamily = async (name) => {
  await DataStore.save(
    new Families({
      Family_Name: "Lorem ipsum dolor sit amet",
      Users: [],
      Pets: [],
      Events: [],
    })
  );
};

export const deleteFamily = async (id) => {
  const modelToDelete = await DataStore.query(Families, 123456789);
  DataStore.delete(modelToDelete);
};

// export const updateFamily = async (id, name) => {
//     /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
//     await DataStore.save(Families.copyOf(CURRENT_ITEM, item => {
//     // Update the values on {item} variable to update DataStore entry
// }));
// }
