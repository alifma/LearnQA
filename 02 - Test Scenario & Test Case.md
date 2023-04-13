## Testing Principle
### Prinsip Dasar Testing
- Testing itu gak mungkin komplit, jadi perlu menentukan mana yang perlu didahulukan terlebih dahulu
- Testing itu bertujuan untuk mencegah terjadinya error, errornya harus sudah direncanakan
- Testing yang gak direncanakan = 'Exploratory Testing'
- Testing itu harus independen


### Testing Life Cycle (STLC Model)
- Requirement Analysis
- Test Planning
- Test Case Development
- Environment Setup
- Test Execution
- Test Cycle Closure


### Testing Process
Entry Criteria,
Kapan sudah bisa dimulai testing
Exit Criteria
Kapan suatu testing bisa dianggap selesai? (ruang lingkupnya)


### Testing REquirement
- Requirement Analysis, kita harus liat dulu persyaratannya darimana, dari segi produk dan bisnis
PRD )Product Requirement Document)

- Membuat RTM

### Test Planning STL
Fase saat manajer senior QA merencanakan strategi pengujian bersama.
Entry: 
- Dokument Requirement (Funcional dan Non-functional) &PRD (Product Research Documentation)
- Acceptance Criteria
- Dokumen Application Architectural atau TRD (Technical Research Documentation)


Test Planning Activities
- Persiapan rencana 
- Pemilihan Test Tool
- Estimasi Test Effort
- Resource Planning

Exit
- Dokumen Test Plan / Stratgy
- Dokumen Effort Estimation




### Test Case Development Phase
Entry
- Requirements Document/PRD
- Requirement Traceability Matrix (RTM)
- Dokumen Test Automation Feasibility

Activities
- Membuat Test Cases, Automation Scripts
- Review and Test Cases dasar and Scripts
- Membuat TEst Data

Exit
- Dokumen Test Case dan Test Data


### Test Environment Setup
Entry
- RTM and Test Plan
- REquirement Documents
- Automation Analysis Report

Activity
- Memahami Arsitektur, Setup Environment, Hardware, Software
- Setup test Environment dan Test Data
- Melakukan Smoketest Pada Fitur Baru di Environment Tersebut

Exit
- Environment dengan test data untuk preconditions
- Smoke TEst Results


### Test Execution
Entry
- Testing has been completed
- TEst Results are available
- Defect/Bs Logs are available


Deliverables of Test Execution
- Completed of RTM with the execution status
- Test Cases updated with results
- Defect Reports


### Type of Testing
Software Testing
- Static Testing
  - Review, Walkthrough, Inspection
- Dynamic Testing
  - Functional Testing
    - White Box
      - Unit Testing
    - Blackbox
    - Integration Testing
    - Smoke Testing
    -  Functionality Testing
    - Regression Testing
    - System Testing
    - User Acceptance Testing
  - Non-functional Testing
    - Load Tersting
    - Performance Testing
    - Security Testing
    - Usability Testing

### Level Of Testing
- Unit Testing: Dev Team
  - DImana unit individu dari software diuji, bertujuan memvalidasi bahwa setiap unit software berfungsi seperti yang dirancang
- Integration Testing: Tester
  - Dimana unit individu digabungkan dan diuji sebagai sebuah kelompok, bertujuan untuk mengekspo kesalahan dalam interaksi antar unit berintegrasi
- System TEsting: Tester
  - Dimana sistem yang lengkap dan terintegrasi diuji, bertujuan mengevaluasi kepatuhan sistem dengan persyaratan yang ditentukan
- Aacceptance TEsting: End User / Client
  - Dimana suatu sistem diuji untuk penerimaan, bertujuan mengevaluasi kepatuhan sistem dengan persyaratan bisnis dan menilai apakah itu dapat diterima untuk pengiriman
- UAT Sign Off
- Production


### Test Scneario
- USer Requirement > USer Story > Scenario Test > Test Case(s)

| Module | Requirementid | TestScenarioID | Test Scenario Description | 
| ------ | ------------- | -------------- | ------------------------- | 
|        | [Opsional]    | TS_01 | Verifiikasi bahwa pengguna dapat masuk dengan kredensial yang valid | 
| Login  | [Opsional]    | TS_02 | Verifikasi bahwa pengguna tidak dapat masuk dengan kredensial yang valid | 
|        | [Opsional]    | TS_03 | Verifikasi bahwa validasi pemeriksaan bidang wajib pada halaman login | 


### Good Test Scenario
- Inline With System Requirement
- Give Context: Menganggap user yang melakukan estingnya
- Give Detail: Jelas testingnya
- Crystal clear, esaty to understand: menjelaskan stepnya dan excepted resultnya
- Complete: User dapat melakukan apapun sesuai dengan yang diminta
- Coherent: Antar skenario saling berhubungan
- Proofs: Melengkapi dengan buktinya: Result (Pass/fail)
- Consistent: berulang ulang harus tetap sama
- Jangan berasumsi: 
- Jangna lupa negative test
- Update: Setiap perubahan perlu dicatat dan versinya perlu diperbarui


## Test Case Design
## Test Suite, TEst Case, Test Scneario
- Test Suite: Kumpulan kasus uji (Serangkaian Test Case), sesuai flownya, urutan logis baik bagi user ataupun sistem=. "Satu set Skript"
- Test Case: Serangkaian tindakan yang dijalankan untuk memverifikasi fitur atau functional (lebih detail)


### Test Case VS Test Scenario
- test case: Fokus pada "apa yang harus diuji, dan bagaimana menguji"
- Test Scenario: "Apa yang harus diuji" daripad cara "Menguji"
- Test case: ada preconditions, tujuannya mau apa
- Test Scenario: "Cuma satu baris kalimat aja"
  
### Membuat Test Case
1. Membuat Judul Test Case

| ID TEst | Test Case                                            |  
| ------- | ---------------------------------------------------  |
| 1       | Verify Response when inputr valid email and password |
| 2       | Verify Response when input ginvalid email |

2. Membuat test data

| ID TEst | Test Case                                            |  Test Data |
| ------- | ---------------------------------------------------  | ---------- |
| 1       | Verify Response when inputr valid email and password | Username: standard_user, password: secret  |
| 2       | Verify Response when input ginvalid email            | Username: abcdefghjijkl, password: secret  |

3. Membuat Test Step

| ID TEst | Test Case                                            |  Test Data | Test Step | 
| ------- | ---------------------------------------------------  | ---------- | ------------- | 
| 1       | Verify Response when inputr valid email and password | Username: standard_user, password: secret  | 1. User memasukkan username dan password, 2. User menekan tombol login | 
| 2       | Verify Response when input ginvalid email            | Username: abcdefghjijkl, password: secret  | 1. User menekan username yang salah dan password, 2. USer menekan tombol login | 

4. Membuat Preconditions

| ID TEst | Test Case                                            |  Test Data | Preconditions | Test Step | 
| ------- | ---------------------------------------------------  | ---------- | ------------- | --------- |
| 1       | Verify Response when inputr valid email and password | Username: standard_user, password: secret  | 1. User already registered, 2. User already open login page | 1. User memasukkan username dan password, 2. User menekan tombol login | 
| 2       | Verify Response when input ginvalid email            | Username: abcdefghjijkl, password: secret  | 1. User already open login page | 1. User menekan username yang salah dan password, 2. USer menekan tombol login | 

5. Membuat expected REsults (Hasil yang diharapkan)

| ID TEst | Test Case                                            |  Test Data | Preconditions | Test Step | Excepted Results |
| ------- | ---------------------------------------------------  | ---------- | ------------- | --------- | ---------------- |
| 1       | Verify Response when inputr valid email and password | Username: standard_user, password: secret  | 1. User already registered, 2. User already open login page | 1. User memasukkan username dan password, 2. User menekan tombol login | Login berhasilm diarahkan ke homepage | 
| 2       | Verify Response when input ginvalid email            | Username: abcdefghjijkl, password: secret  | 1. User already open login page | 1. User menekan username yang salah dan password, 2. USer menekan tombol login | muncul pesan error 'Username is not registered' | 


6. Membuat kolom acutal result dan test status

| ID TEst | Test Case                                            |  Test Data | Preconditions | Test Step | Excepted Results | Actual Result | Test Status | 
| ------- | ---------------------------------------------------  | ---------- | ------------- | --------- | ---------------- | ------------- | ----------- |
| 1       | Verify Response when inputr valid email and password | Username: standard_user, password: secret  | 1. User already registered, 2. User already open login page | 1. User memasukkan username dan password, 2. User menekan tombol login | Login berhasilm diarahkan ke homepage |  |  |
| 2       | Verify Response when input ginvalid email            | Username: abcdefghjijkl, password: secret  | 1. User already open login page | 1. User menekan username yang salah dan password, 2. USer menekan tombol login | muncul pesan error 'Username is not registered' |  |  |



### Test Status
- Passed: Kondisi actual result dan excepted resultnya sama
- Failed: Kondisi actual result dan excepted result berbeda
- Blocked: Kondisi dimana testcase belum bisa dieksekusi karena requirement tidak terpenuhi (misal ada fitur yang sedang maintenance), Krusial tapi diskip dulu
- Pending: Ditunda dulu

### Nice To Have
 - Bukti testing atau attachments
 - Pakai bahasa aktif (pelaku utama yang melakukan)
 - Test case jangan lebih dari 15 steps
 - Teredapat informasi input, process dan hasil pada script automation testing
 - Sederhana dan transparan
 - Mempertimbangkan end user
 - Hindari pengulangan
 - JKangan berasumsi
 - Scope harus bisa 100%
 - Harus dapat diidentifikasi/traceable
 - Self cleaning &  Repeatable
 - Telah melalui peer review


 ### Test case management Tools
 - Jira
 - TestRail
 - TcLab



### BDD (Behavioral Driven Development)
- Fokus pada fungsional aplikasi
- Jika satu fungsi berubah, maka gak perlu ditest ulang selama tidak mengubah hasil akhir
- Kelemahan: waktunya lama: gak bisa ditrack, sudut pandangnya usdsr aja
- Gherkin Syntax: 
  - Feature: Nama Fitur
  - Scenario: Nama Skenario
  - Given: Preconditions
  - When: Test Step
  - And: Test step apabila lebih dari satu step
  - Then: Excepted Results


## Bug Advocate

### Bug Advocate
- Error: Kesalahan pada sisi developer
- Defect: error yang ditemukan oleh tester di production atau live
- Bug: Error yang terjadi di fase development atau sebelum rilis ke production
- Failure: Error yang ditemukan langsung oleh user pada live
- Fault: hasil dari error


### Bug Life Cycle
- Verified: Kalau misal bisa direpro = Verified
- Reopen: JIka misal sudah diperbaiki tapi masih begitu maka REopen
- Closed: Kalau sudah fixed
- Duplicate: kalau muncul dua kali maka duplicate
- Rejected: kalau gak bisa direpro
- Deferred: Bukan jadi prioritas utama
- Not Bug: Gak mempengaruhi fungsional

### Bug Severity
- Severity: 
  - Critical : terjadi pada fungsi atau proses utama tapi gak ada solusi lain
  - High: Defect pada fungsi proses utama, tapi ada workaround untuk fungsi utama
  - Medium: Defect bukan terjadi pada proses utama
  - Low: Defect tidak bedampak tetapi mengganggu

- Priority: 
  - High: Harus diperbaiki sebelum rilis
  - Medium: Penting untuk dperbaiki, tak gak bakal menghentikan rilis
  - Low: Bug dengan visibilitas rendah, jarang ditemukan oleh pengguna

- Priority Vs Severity: 
  - Priority: Urutan pengerjaan oleh developer dan waktu
  - Severity: Impactnya besar, apakah memberikan efek serius atau tidak, sulit atau tidak
  - QA menentukan Severity, priority ditentukan oleh yang lain

### Bug Reporting
- Isolate: Fokus ke masalahnya dimana, misal register saja
- Maximize: Cobva cari disekitarnya, apakah cuma satu saja
- Generalize: coba cek ditempat lain yang serupa, 
- Externalize: bisa menyampaikan keluar  tim QA (misal ke dev)

### Bug reporting Element
- Bug ID
- Problem
- Engvironment
- Data
- Actual Result
- Step to Reproduce
- Expected Result
- Severity
- Evidence