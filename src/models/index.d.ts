import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechnologyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Technology {
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Technology, TechnologyMetaData>);
  static copyOf(source: Technology, mutator: (draft: MutableModel<Technology, TechnologyMetaData>) => MutableModel<Technology, TechnologyMetaData> | void): Technology;
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
  readonly Technologies?: (Technology | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}