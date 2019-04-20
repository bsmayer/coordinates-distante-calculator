using System;
using System.Threading.Tasks;

namespace CoordinatesAoi.Util {
    public class ApiResponse<T> {
        public bool Success { get; private set; }
        public T Response { get; private set; }
        public string ErrorMessage { get; private set; }

        public static ApiResponse<T> OfError(string error) {
            return new ApiResponse<T> {
                Success = false,
                Response = default(T),
                ErrorMessage = error
            };
        }

        public static ApiResponse<T> OfSuccess(T response) {
            return new ApiResponse<T> {
                Success = true,
                Response = response,
                ErrorMessage = null
            };
        }

        public static async Task<ApiResponse<T>> AsyncResulfOf(Task<T> func) {
            try {
                var result = await func;
                return OfSuccess(result);
            }
            catch (Exception ex) {
                return OfError(ex.Message);
            }
        }
    }
}