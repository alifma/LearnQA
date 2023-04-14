# API Testing
## API?
- Application programming interface, Perantara komunikasi antar software
- Tipe API:
  - Public API: bisa dipakai publik
  - Partner API: API untuk mitra, tersedia untuk developer atau konsumen yang sudah disetujui
  - Internal API: Hanya untuk internal suatu tempat untuk menjaga kerahasiaan data
  - Composite API: Menggabungkan dua atau lebih API untuk menyusun urutan operasi yang terakait atau saling bergantung

## API Architectural Styles
- Protokol API: 
  - RPC
  - SOAP
  - REST
  - GraphQL
- REST: Representational State Transfer, gaya arsitektur berdasrkan metode request
- REST method:
  - GET: Mengambil, base request
  - POST: Mengirim
  - PUT: Update Keseluruhan
  - PATCH: Update sebagian

## HTTTP
- HTTP Response: 
  - 2xx (Success)
    - 200 (OK)
    - 201 (Created)
    - 203 (Non-Authoritative Information)
  - 3xx (Redirection)
    - 301 (Permanent Redirect)
    - 302 (Temporary Redirect)
    - 304 (Not Modified)
  - 4xx (Client Error)
    - 400 (Bad Request)
    - 401 (Unauthorized)
    - 403 (Forbidden)
    - 404 (Not Found)
    - 405 (Method Not Allowed)
    - 409 (Conflict)
  - 5xx (Server Error)
    - 500 (Internal Server Error)
    - 501 (Not Implemented)
    - 502 (Bad Gateway)
    - 503 (Service Unavailable)
    - 504 (Request Timeout)
    - 599 (Network Timeout)

## API Mandatory Field
- Request Field: 
  - URL: Alamat
  - Method: Jenis metode request
  - Header: Informasi tambahan, biasanya isinya Authorization
  - Params: Parameter request / Query params
  - Body: Objek yang dikirimkan ke API biasanya berbentuk JSON
- Response Field:
  - StatusCode: HTTP Response code
  - ResponseBody: Keseluruhan balikan
  - Message: Informasi tambahan (optional)
