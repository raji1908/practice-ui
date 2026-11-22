import { HttpInterceptorFn } from "@angular/common/http";

export const API_BASE_URL = "http://localhost:5080";

// Sends relative requests (e.g. "/auth/api/authenticate") to the .NET API.
// Absolute URLs are left alone.
export const apiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith("/")) {
    return next(req);
  }
  return next(req.clone({ url: `${API_BASE_URL}${req.url}` }));
};
