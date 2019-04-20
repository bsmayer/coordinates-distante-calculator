export default class ApiResponse<T> {
  success: boolean;
  error?: string;
  response: T;
}
