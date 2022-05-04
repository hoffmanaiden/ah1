import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Project {
  readonly id: string;
  readonly name?: string | null;
  readonly briefDescription?: string | null;
  readonly projectLink?: string | null;
  readonly repo?: string | null;
  readonly fullDescription?: string | null;
  readonly img1?: string | null;
  readonly img2?: string | null;
  readonly img3?: string | null;
  readonly img4?: string | null;
  readonly img5?: string | null;
  readonly img6?: string | null;
  readonly imgThumbnail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}