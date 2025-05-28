import { HttpInterceptorFn } from '@angular/common/http';

const BASE_URL = 'https://fakestoreapi.com';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const isExternalRequest = req.url.startsWith('http');
  
  // Only modify relative URLs (e.g. "/products")
  if (!isExternalRequest) {
    const updatedRequest = req.clone({
      url: `${BASE_URL}${req.url}`
    });
    return next(updatedRequest);
  }

  return next(req);
};
