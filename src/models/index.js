// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Technology, Project } = initSchema(schema);

export {
  Technology,
  Project
};