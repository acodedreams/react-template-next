import request from '../request';

type Example = {
  example: string;
};

export default class ExampleApi {
  fetchExamples = async ({ example }: Example): Promise<Example[]> => {
    try {
      const { data } = await request.get(`/example-route-api/${example}`);
      return data.data;
    } catch (error) {
      return error; // change to the responseError
    }
  };
}
