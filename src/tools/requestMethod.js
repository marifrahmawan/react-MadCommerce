import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5Mjg0MGEwNmY4ZGNhNTIwN2I4YjIiLCJlbWFpbCI6ImFyaWZAZGV2LmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzk3MDU2NywiZXhwIjoxNjQ0MjI5NzY3fQ.JsCKo4NmRNoZ1PX0cvaOEa0N5xD_yUTFhp8EwUFqQmg';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const useRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
