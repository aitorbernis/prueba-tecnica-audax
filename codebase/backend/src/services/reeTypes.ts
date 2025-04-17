interface REEResponse {
  data: REEData;
  included: REEIncluded[];
}

interface REEData {
  type: string;
  id: string;
  attributes: {
    title: string;
    lastUpdate: string;
    description: string;
  };
  meta: {
    cacheControl: {
      cache: string;
      expireAt: string;
    };
  };
}

interface REEIncluded {
  type: string;
  id: string;
  attributes: REEAttributes;
}

interface REEAttributes {
  title: string;
  "last-update": string;
  description: null | string;
  magnitude: null | any;
  content: REEContent[];
}

interface REEContent {
  type: string;
  id: string;
  groupId: string;
  attributes: REEContentAttributes;
}

interface REEContentAttributes {
  title: string;
  description: string;
  color: string;
  icon: null;
  type: string;
  magnitude: null;
  composite: boolean;
  "last-update": string;
  values: REEContentAttributesValues[];
  total: number;
  "total-percentage": number;
}

interface REEContentAttributesValues {
  value: number;
  percentage: number;
  datetime: string;
}

export default REEResponse;
