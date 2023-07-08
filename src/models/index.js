// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pet, Event, User, Families } = initSchema(schema);

export {
  Pet,
  Event,
  User,
  Families
};